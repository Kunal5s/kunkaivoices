
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LANGUAGES, MODELS, ALL_VOICES } from "@/lib/constants";
import LanguageSelector from "./LanguageSelector";
import VoiceSelector from "./VoiceSelector";
import TextInput from "./TextInput";
import AudioPlayer from "./AudioPlayer";
import { useTTS } from "@/hooks/useTTS";
import { Wand2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const VoiceGenerator = () => {
  const [text, setText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0].id);
  const [selectedVoice, setSelectedVoice] = useState(ALL_VOICES[0].id);
  const [selectedModel, setSelectedModel] = useState(MODELS[0].id);
  const { generateSpeech, stopSpeech, isLoading, isPlaying, audioUrl, error } = useTTS();
  const { toast } = useToast();

  const handleGenerateSpeech = async () => {
    if (!text.trim()) {
      toast({
        title: "Text is required",
        description: "Please enter some text to generate speech.",
        variant: "destructive",
      });
      return;
    }

    const voice = ALL_VOICES.find((v) => v.id === selectedVoice);
    if (!voice) {
      toast({
        title: "Voice not found",
        description: "Please select a valid voice.",
        variant: "destructive",
      });
      return;
    }

    try {
      await generateSpeech({
        text,
        voiceId: voice.voiceId,
        model: selectedModel,
      });
    } catch (err) {
      console.error("Error generating speech:", err);
      toast({
        title: "Error",
        description: "Failed to generate speech. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handlePlayAudio = () => {
    // The actual play functionality is handled in the useTTS hook
    handleGenerateSpeech();
  };

  const handlePauseAudio = () => {
    stopSpeech();
  };

  return (
    <div className="glass-morphism rounded-xl p-6 md:p-8 animate-smooth-appear">
      <div className="flex flex-col space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Text to Speech Generator</h3>
          <p className="text-white/70 text-sm">
            Convert your text into natural-sounding speech in seconds.
          </p>
        </div>

        <Tabs defaultValue="text" className="w-full">
          <TabsList className="glass-morphism w-full bg-background/30">
            <TabsTrigger
              value="text"
              className="data-[state=active]:bg-pink/10 data-[state=active]:text-pink data-[state=active]:shadow-none"
            >
              Text
            </TabsTrigger>
            <TabsTrigger
              value="document"
              className="data-[state=active]:bg-pink/10 data-[state=active]:text-pink data-[state=active]:shadow-none"
            >
              Document
            </TabsTrigger>
            <TabsTrigger
              value="url"
              className="data-[state=active]:bg-pink/10 data-[state=active]:text-pink data-[state=active]:shadow-none"
            >
              URL
            </TabsTrigger>
          </TabsList>

          <TabsContent value="text" className="mt-4">
            <TextInput
              value={text}
              onChange={setText}
              placeholder="Enter your text here (up to 10,000 characters)..."
            />
          </TabsContent>

          <TabsContent value="document" className="mt-4">
            <div className="glass-morphism rounded-lg p-10 flex flex-col items-center justify-center text-center">
              <p className="text-white/70 mb-4">
                Upload a document to convert to speech
              </p>
              <Button
                variant="outline"
                className="border-white/10 hover:border-white/20"
              >
                Upload Document
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="url" className="mt-4">
            <div className="glass-morphism rounded-lg p-10 flex flex-col items-center justify-center text-center">
              <p className="text-white/70 mb-4">
                Enter a URL to extract and convert text
              </p>
              <div className="w-full max-w-md">
                <input
                  type="url"
                  placeholder="https://example.com"
                  className="w-full p-2 rounded bg-background/70 backdrop-blur-sm border border-white/10 focus:border-pink/30 focus:ring-pink/20 focus:outline-none"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LanguageSelector
            selectedLanguage={selectedLanguage}
            onSelect={setSelectedLanguage}
          />
          <VoiceSelector
            selectedVoice={selectedVoice}
            onSelect={setSelectedVoice}
          />
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium mb-1">AI Model</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {MODELS.map((model) => (
              <Button
                key={model.id}
                variant={selectedModel === model.id ? "default" : "outline"}
                className={
                  selectedModel === model.id
                    ? "bg-pink hover:bg-pink-dark transition-colors h-auto py-2"
                    : "border-white/10 hover:border-white/20 bg-background/50 h-auto py-2"
                }
                onClick={() => setSelectedModel(model.id)}
              >
                <div className="flex flex-col items-start text-left">
                  <span className="text-sm font-medium">{model.name}</span>
                  <span className="text-xs opacity-70 mt-0.5">
                    {model.tag}
                  </span>
                </div>
              </Button>
            ))}
          </div>
        </div>

        <AudioPlayer
          isLoading={isLoading}
          isPlaying={isPlaying}
          onPlay={handlePlayAudio}
          onPause={handlePauseAudio}
          audioUrl={audioUrl}
        />

        <Button
          onClick={handleGenerateSpeech}
          disabled={isLoading || !text.trim()}
          className="bg-pink hover:bg-pink-dark transition-colors pink-glow"
          size="lg"
        >
          <Wand2 className="mr-2 h-4 w-4" />
          {isLoading ? "Generating..." : "Generate Speech"}
        </Button>
      </div>
    </div>
  );
};

export default VoiceGenerator;
