
import { useState } from "react";
import { ALL_VOICES } from "@/lib/constants";

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

export const useTTS = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  const generateSpeech = async ({
    text,
    voiceId,
    model = "eleven_multilingual_v2",
    stability = 0.5,
    similarity_boost = 0.75,
    style = 0,
    use_speaker_boost = true,
    emotion = "neutral"
  }: TTSOptions) => {
    if (!text || !voiceId) {
      setError("Text and voice are required");
      return null;
    }

    try {
      setIsLoading(true);
      setError(null);
      
      // ElevenLabs API call
      const url = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`;
      
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "xi-api-key": API_KEY,
        },
        body: JSON.stringify({
          text,
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
      const audioBlob = await response.blob();
      const audioObjectUrl = URL.createObjectURL(audioBlob);
      
      // Create an audio element to play the sound
      if (audioElement) {
        audioElement.pause();
        URL.revokeObjectURL(audioUrl || "");
      }
      
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
