
import { useState, useEffect } from "react";
import { ALL_VOICES } from "@/lib/constants";
import { useToast } from "@/hooks/use-toast";

type TTSOptions = {
  text: string;
  voiceId: string;
  model?: string;
  stability?: number;
  similarity_boost?: number;
  style?: number;
  use_speaker_boost?: boolean;
  emotion?: string;
};

// This is a valid ElevenLabs API key for demonstration. In a production app,
// you would use environment variables or a secure backend to store this.
const API_KEY = "sk_14b108838a73c4b1568fb6a108886dacdac839f5e9a7b062";

// Maximum text length that can be processed at once
const MAX_CHUNK_LENGTH = 5000;

export const useTTS = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);
  const { toast } = useToast();

  // Cleanup function to prevent memory leaks
  useEffect(() => {
    return () => {
      if (audioElement) {
        audioElement.pause();
        if (audioUrl) {
          URL.revokeObjectURL(audioUrl);
        }
      }
    };
  }, [audioElement, audioUrl]);

  // Split long text into manageable chunks
  const splitTextIntoChunks = (text: string): string[] => {
    if (text.length <= MAX_CHUNK_LENGTH) {
      return [text];
    }

    const chunks: string[] = [];
    let currentIndex = 0;

    while (currentIndex < text.length) {
      // Find a good breaking point (end of sentence or paragraph)
      let endIndex = currentIndex + MAX_CHUNK_LENGTH;
      if (endIndex >= text.length) {
        endIndex = text.length;
      } else {
        // Try to find sentence end
        const possibleBreak = text.lastIndexOf('. ', endIndex);
        if (possibleBreak > currentIndex && possibleBreak > endIndex - 300) {
          endIndex = possibleBreak + 1; // Include the period
        } else {
          // Try paragraph break
          const paraBreak = text.lastIndexOf('\n', endIndex);
          if (paraBreak > currentIndex && paraBreak > endIndex - 300) {
            endIndex = paraBreak + 1;
          }
        }
      }

      chunks.push(text.substring(currentIndex, endIndex).trim());
      currentIndex = endIndex;
    }

    return chunks;
  };

  const generateSpeechForChunk = async (
    chunk: string,
    options: TTSOptions
  ): Promise<Blob> => {
    const {
      voiceId,
      model = "eleven_multilingual_v2",
      stability = 0.5,
      similarity_boost = 0.75,
      style = 0,
      use_speaker_boost = true,
      emotion = "neutral"
    } = options;

    // ElevenLabs API call
    const url = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`;
    
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "xi-api-key": API_KEY,
      },
      body: JSON.stringify({
        text: chunk,
        model_id: model,
        voice_settings: {
          stability,
          similarity_boost,
          style,
          use_speaker_boost,
        },
        // Include additional parameters if using a model that supports emotions
        ...(model.includes("multilingual") && { emotion }),
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.detail || `Error: ${response.status}`);
    }

    // Get the audio blob from the response
    return await response.blob();
  };

  const generateSpeech = async (options: TTSOptions) => {
    const { text, voiceId } = options;
    
    if (!text || !voiceId) {
      setError("Text and voice are required");
      toast({
        title: "Error",
        description: "Text and voice are required",
        variant: "destructive",
      });
      return null;
    }

    try {
      setIsLoading(true);
      setError(null);
      
      // For large texts, we process in chunks
      const textChunks = splitTextIntoChunks(text);
      let resultBlob: Blob;
      
      if (textChunks.length === 1) {
        // Single chunk case
        resultBlob = await generateSpeechForChunk(textChunks[0], options);
      } else {
        // Multi-chunk case
        toast({
          title: "Processing large text",
          description: `Your text will be processed in ${textChunks.length} parts`,
          variant: "default",
        });
        
        const audioBlobs: Blob[] = [];
        let completedChunks = 0;
        
        // Process each chunk
        for (const chunk of textChunks) {
          const blob = await generateSpeechForChunk(chunk, options);
          audioBlobs.push(blob);
          completedChunks++;
          
          // Update progress
          if (completedChunks < textChunks.length) {
            toast({
              title: "Processing",
              description: `Processed ${completedChunks} of ${textChunks.length} parts`,
              variant: "default",
            });
          }
        }
        
        // Combine all blobs
        resultBlob = new Blob(audioBlobs, { type: "audio/mpeg" });
        
        toast({
          title: "Processing complete",
          description: "All text has been converted to speech",
          variant: "default",
        });
      }
      
      // Clean up previous audio
      if (audioElement) {
        audioElement.pause();
        if (audioUrl) {
          URL.revokeObjectURL(audioUrl);
        }
      }
      
      // Create new audio
      const audioObjectUrl = URL.createObjectURL(resultBlob);
      const audio = new Audio(audioObjectUrl);
      
      setAudioElement(audio);
      setAudioUrl(audioObjectUrl);
      
      // Play the audio and handle events
      audio.onplay = () => setIsPlaying(true);
      audio.onended = () => setIsPlaying(false);
      audio.onpause = () => setIsPlaying(false);
      
      audio.play();
      setIsPlaying(true);
      
      return audioObjectUrl;
    } catch (err) {
      console.error("Error generating speech:", err);
      setError(err instanceof Error ? err.message : "Failed to generate speech");
      toast({
        title: "Error",
        description: err instanceof Error ? err.message : "Failed to generate speech",
        variant: "destructive",
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const stopSpeech = () => {
    if (audioElement && isPlaying) {
      audioElement.pause();
      setIsPlaying(false);
    }
  };

  const resumeSpeech = () => {
    if (audioElement && !isPlaying && audioUrl) {
      audioElement.play();
      setIsPlaying(true);
    }
  };

  return {
    generateSpeech,
    stopSpeech,
    resumeSpeech,
    isLoading,
    isPlaying,
    audioUrl,
    error,
  };
};
