
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, X, Play, Pause } from "lucide-react";
import { ALL_VOICES } from "@/lib/constants";
import { useTTS } from "@/hooks/useTTS";
import { useToast } from "@/hooks/use-toast";
import VoiceSelector from "./VoiceSelector";
import { cn } from "@/lib/utils";

interface DialogLine {
  id: string;
  character: string;
  text: string;
  voiceId: string;
}

const MultiCharacterConversation = () => {
  const [dialog, setDialog] = useState<DialogLine[]>([
    { 
      id: "1", 
      character: "Character 1", 
      text: "Hello, how are you today?", 
      voiceId: ALL_VOICES[0].id 
    },
    { 
      id: "2", 
      character: "Character 2", 
      text: "I'm doing well, thank you for asking!", 
      voiceId: ALL_VOICES[10].id 
    },
  ]);
  
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState<number | null>(null);
  const [isPlayingAll, setIsPlayingAll] = useState(false);
  const { generateSpeech, stopSpeech, isLoading, isPlaying } = useTTS();
  const { toast } = useToast();

  const addDialogLine = () => {
    const newId = String(dialog.length + 1);
    const newVoiceId = ALL_VOICES[Math.min(dialog.length % ALL_VOICES.length, ALL_VOICES.length - 1)].id;
    
    setDialog([
      ...dialog,
      {
        id: newId,
        character: `Character ${dialog.length + 1}`,
        text: "",
        voiceId: newVoiceId,
      },
    ]);
  };

  const removeDialogLine = (id: string) => {
    setDialog(dialog.filter((line) => line.id !== id));
  };

  const updateDialogLine = (id: string, field: keyof DialogLine, value: string) => {
    setDialog(
      dialog.map((line) =>
        line.id === id ? { ...line, [field]: value } : line
      )
    );
  };

  const playLine = async (index: number) => {
    if (index >= dialog.length) {
      setCurrentPlayingIndex(null);
      setIsPlayingAll(false);
      return;
    }

    const line = dialog[index];
    if (!line.text.trim()) {
      // Skip empty lines
      if (isPlayingAll) {
        playLine(index + 1);
      }
      return;
    }

    setCurrentPlayingIndex(index);
    
    const voice = ALL_VOICES.find((v) => v.id === line.voiceId);
    if (!voice) {
      toast({
        title: "Voice not found",
        description: `Could not find voice for ${line.character}.`,
        variant: "destructive",
      });
      return;
    }

    try {
      await generateSpeech({
        text: line.text,
        voiceId: voice.voiceId,
      });
      
      // Create a listener to detect when the audio finishes playing
      const checkPlayingInterval = setInterval(() => {
        if (!isPlaying) {
          clearInterval(checkPlayingInterval);
          
          // If we're playing all lines, move to the next one
          if (isPlayingAll) {
            setTimeout(() => {
              playLine(index + 1);
            }, 500); // Add a small pause between lines
          } else {
            setCurrentPlayingIndex(null);
          }
        }
      }, 100);
    } catch (err) {
      console.error("Error playing line:", err);
      toast({
        title: "Error",
        description: "Failed to play dialog line. Please try again.",
        variant: "destructive",
      });
      setCurrentPlayingIndex(null);
      setIsPlayingAll(false);
    }
  };

  const playAllLines = () => {
    setIsPlayingAll(true);
    playLine(0);
  };

  const stopPlaying = () => {
    stopSpeech();
    setCurrentPlayingIndex(null);
    setIsPlayingAll(false);
  };

  return (
    <div className="glass-morphism rounded-xl p-6 md:p-8 animate-smooth-appear">
      <div className="flex flex-col space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Multi-Character Conversation</h3>
          <p className="text-white/70 text-sm">
            Create dynamic conversations between multiple AI voices.
          </p>
        </div>

        <div className="space-y-4">
          {dialog.map((line, index) => (
            <div 
              key={line.id} 
              className={cn(
                "glass-morphism rounded-lg p-4 transition-all duration-300",
                currentPlayingIndex === index && "border-pink border-2"
              )}
            >
              <div className="flex items-center justify-between mb-3">
                <input
                  type="text"
                  value={line.character}
                  onChange={(e) => updateDialogLine(line.id, "character", e.target.value)}
                  className="bg-background/30 border-none focus:ring-pink/20 text-white font-medium rounded px-2 py-1 w-1/3"
                  placeholder="Character Name"
                />
                
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white/70 hover:text-pink hover:bg-pink/10"
                    onClick={() => playLine(index)}
                    disabled={isLoading || (currentPlayingIndex !== null && currentPlayingIndex !== index)}
                  >
                    <Play className="h-4 w-4" />
                  </Button>
                  
                  {dialog.length > 2 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white/70 hover:text-destructive hover:bg-destructive/10"
                      onClick={() => removeDialogLine(line.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <textarea
                    value={line.text}
                    onChange={(e) => updateDialogLine(line.id, "text", e.target.value)}
                    className="w-full h-20 bg-background/20 border-white/10 focus:border-pink/30 rounded p-2 resize-none"
                    placeholder="Enter the character's dialog..."
                  />
                </div>
                <div>
                  <VoiceSelector
                    selectedVoice={line.voiceId}
                    onSelect={(voiceId) => updateDialogLine(line.id, "voiceId", voiceId)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            className="border-white/10 hover:border-white/20"
            onClick={addDialogLine}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Character
          </Button>

          <div className="space-x-3">
            {isPlayingAll ? (
              <Button
                className="bg-pink hover:bg-pink-dark transition-colors pink-glow"
                onClick={stopPlaying}
              >
                <Pause className="mr-2 h-4 w-4" />
                Stop Playback
              </Button>
            ) : (
              <Button
                className="bg-pink hover:bg-pink-dark transition-colors pink-glow"
                onClick={playAllLines}
                disabled={isLoading || dialog.some(line => !line.text.trim())}
              >
                <Play className="mr-2 h-4 w-4" />
                Play Conversation
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiCharacterConversation;
