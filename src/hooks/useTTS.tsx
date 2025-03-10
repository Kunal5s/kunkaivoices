
import { useState } from "react";
import { ALL_VOICES } from "@/lib/constants";

type TTSOptions = {
  text: string;
  voiceId: string;
  model?: string;
};

export const useTTS = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // This would typically use the Eleven Labs API
  // For now, we'll simulate the API call with a delay
  const generateSpeech = async ({ text, voiceId, model = "eleven-multilingual-v2" }: TTSOptions) => {
    if (!text || !voiceId) {
      setError("Text and voice are required");
      return null;
    }

    try {
      setIsLoading(true);
      setError(null);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real implementation, we would call the Eleven Labs API here
      // and get back an audio blob that we would convert to a URL
      
      // For now, we'll use the Web Speech API as a fallback
      const utterance = new SpeechSynthesisUtterance(text);
      const voices = window.speechSynthesis.getVoices();
      
      // Try to match a similar voice from available voices
      const voice = ALL_VOICES.find(v => v.voiceId === voiceId);
      
      if (voice) {
        // This is just for the demo - in real app we'd use the Eleven Labs API
        if (voice.gender === "female") {
          utterance.voice = voices.find(v => v.name.includes("Female")) || voices[0];
        } else {
          utterance.voice = voices.find(v => v.name.includes("Male")) || voices[0];
        }
      }
      
      // Play the speech
      setIsPlaying(true);
      
      // Return a promise that resolves when the speech is done
      await new Promise<void>((resolve) => {
        utterance.onend = () => {
          setIsPlaying(false);
          resolve();
        };
        window.speechSynthesis.speak(utterance);
      });
      
      // In a real implementation, we would return the audio URL
      // For now, we'll just set a dummy URL
      setAudioUrl("https://example.com/audio.mp3");
      
      return "https://example.com/audio.mp3";
    } catch (err) {
      console.error("Error generating speech:", err);
      setError("Failed to generate speech");
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const stopSpeech = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  return {
    generateSpeech,
    stopSpeech,
    isLoading,
    isPlaying,
    audioUrl,
    error,
  };
};
