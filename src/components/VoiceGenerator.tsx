
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { LANGUAGES, MODELS, ALL_VOICES, EMOTIONS } from "@/lib/constants";
import LanguageSelector from "./LanguageSelector";
import VoiceSelector from "./VoiceSelector";
import TextInput from "./TextInput";
import AudioPlayer from "./AudioPlayer";
import { useTTS } from "@/hooks/useTTS";
import { Wand2, Sliders, VolumeX, Volume2, FileUp, Link2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "./ui/input";

const VoiceGenerator = () => {
  const [text, setText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0].id);
  const [selectedVoice, setSelectedVoice] = useState(ALL_VOICES[0].id);
  const [selectedModel, setSelectedModel] = useState(MODELS[0].id);
  const [documentUrl, setDocumentUrl] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  
  // Voice customization parameters
  const [stability, setStability] = useState(0.5);
  const [similarityBoost, setSimilarityBoost] = useState(0.75);
  const [style, setStyle] = useState(0);
  const [useSpeakerBoost, setUseSpeakerBoost] = useState(true);
  const [emotion, setEmotion] = useState("neutral");

  const { generateSpeech, stopSpeech, resumeSpeech, isLoading, isPlaying, audioUrl, error } = useTTS();
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
        stability,
        similarity_boost: similarityBoost,
        style,
        use_speaker_boost: useSpeakerBoost,
        emotion,
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
    if (audioUrl && !isPlaying) {
      resumeSpeech();
    } else {
      handleGenerateSpeech();
    }
  };

  const handlePauseAudio = () => {
    stopSpeech();
  };

  const handleDocumentUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, you would process the document here
      toast({
        title: "Document uploaded",
        description: `Processing ${file.name}...`,
        variant: "default",
      });
      // For now, just show a message that this feature is in development
      setTimeout(() => {
        setText(`Sample text extracted from ${file.name}. This feature is under development.`);
      }, 1000);
    }
  };

  const handleExtractFromUrl = () => {
    if (!websiteUrl) {
      toast({
        title: "URL is required",
        description: "Please enter a valid URL to extract text.",
        variant: "destructive",
      });
      return;
    }

    // In a real app, you would fetch and extract text from the URL here
    toast({
      title: "Processing URL",
      description: `Extracting text from ${websiteUrl}...`,
      variant: "default",
    });

    // For now, just show a message that this feature is in development
    setTimeout(() => {
      setText(`Sample text extracted from ${websiteUrl}. This feature is under development.`);
    }, 1000);
  };

  return (
    <div className="glass-morphism rounded-xl p-6 md:p-8 animate-smooth-appear">
      <div className="flex flex-col space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">AI Voice Generator</h3>
          <p className="text-white/70 text-sm">
            Convert your text into natural-sounding speech with advanced AI customization.
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
              <label htmlFor="document-upload">
                <Button
                  variant="outline"
                  className="border-white/10 hover:border-white/20 flex gap-2"
                  type="button"
                >
                  <FileUp className="h-4 w-4" />
                  Upload Document
                </Button>
              </label>
              <input 
                id="document-upload" 
                type="file" 
                accept=".doc,.docx,.pdf,.txt" 
                className="hidden"
                onChange={handleDocumentUpload}
              />
            </div>
          </TabsContent>

          <TabsContent value="url" className="mt-4">
            <div className="glass-morphism rounded-lg p-10 flex flex-col items-center justify-center text-center">
              <p className="text-white/70 mb-4">
                Enter a URL to extract and convert text
              </p>
              <div className="w-full max-w-md space-y-4">
                <div className="flex gap-2">
                  <Input
                    type="url"
                    placeholder="https://example.com"
                    className="w-full p-2 rounded bg-background/70 backdrop-blur-sm border border-white/10 focus:border-pink/30 focus:ring-pink/20 focus:outline-none"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                  />
                  <Button 
                    variant="outline" 
                    className="border-white/10 hover:border-white/20 flex-shrink-0"
                    onClick={handleExtractFromUrl}
                  >
                    <Link2 className="h-4 w-4 mr-2" />
                    Extract
                  </Button>
                </div>
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

        <Accordion type="single" collapsible className="glass-morphism rounded-lg">
          <AccordionItem value="advanced-settings" className="border-white/10">
            <AccordionTrigger className="px-4 py-3 text-white hover:no-underline">
              <div className="flex items-center">
                <Sliders className="w-4 h-4 mr-2" />
                <span>Advanced Voice Settings</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium">Voice Stability</label>
                    <span className="text-xs text-white/70">{Math.round(stability * 100)}%</span>
                  </div>
                  <Slider
                    value={[stability * 100]}
                    min={0}
                    max={100}
                    step={1}
                    onValueChange={(value) => setStability(value[0] / 100)}
                    className="py-1"
                  />
                  <p className="text-xs text-white/60">
                    Lower values create more variable output. Higher values make voice more stable.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium">Similarity Boost</label>
                    <span className="text-xs text-white/70">{Math.round(similarityBoost * 100)}%</span>
                  </div>
                  <Slider
                    value={[similarityBoost * 100]}
                    min={0}
                    max={100}
                    step={1}
                    onValueChange={(value) => setSimilarityBoost(value[0] / 100)}
                    className="py-1"
                  />
                  <p className="text-xs text-white/60">
                    Higher values make the voice more similar to the original voice sample.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium">Style</label>
                    <span className="text-xs text-white/70">{Math.round(style * 100)}%</span>
                  </div>
                  <Slider
                    value={[style * 100]}
                    min={0}
                    max={100}
                    step={1}
                    onValueChange={(value) => setStyle(value[0] / 100)}
                    className="py-1"
                  />
                  <p className="text-xs text-white/60">
                    Higher values enhance prosody and increase expressiveness.
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Voice Emotion</label>
                  <Select value={emotion} onValueChange={setEmotion}>
                    <SelectTrigger className="w-full bg-background/50 border-white/10">
                      <SelectValue placeholder="Select emotion" />
                    </SelectTrigger>
                    <SelectContent className="bg-background/95 backdrop-blur-lg border-white/10">
                      {EMOTIONS.map((emotion) => (
                        <SelectItem key={emotion.id} value={emotion.id} className="focus:bg-pink/10 focus:text-pink">
                          {emotion.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-white/60">
                    Select the emotional tone for your AI voice.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

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
