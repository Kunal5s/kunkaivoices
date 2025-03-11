
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Check, ChevronsUpDown, Mic } from "lucide-react";
import { cn } from "@/lib/utils";
import { MALE_VOICES, FEMALE_VOICES } from "@/lib/constants";
import { ScrollArea } from "@/components/ui/scroll-area";

interface VoiceSelectorProps {
  selectedVoice: string;
  onSelect: (voiceId: string) => void;
  className?: string;
}

const VoiceSelector = ({ selectedVoice, onSelect, className }: VoiceSelectorProps) => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const allVoices = [...MALE_VOICES, ...FEMALE_VOICES];
  const selectedVoiceObj = allVoices.find((voice) => voice.id === selectedVoice);

  const filteredMaleVoices = searchQuery.trim() === ""
    ? MALE_VOICES
    : MALE_VOICES.filter(voice =>
        voice.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const filteredFemaleVoices = searchQuery.trim() === ""
    ? FEMALE_VOICES
    : FEMALE_VOICES.filter(voice =>
        voice.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <div className={className}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between bg-background/50 border-white/10 hover:border-white/20 transition-colors"
          >
            {selectedVoiceObj ? (
              <div className="flex items-center">
                <span className="text-sm font-medium">{selectedVoiceObj.name}</span>
                <span className="ml-2 text-xs text-white/60">({selectedVoiceObj.gender})</span>
              </div>
            ) : (
              <div className="flex items-center">
                <Mic className="mr-2 h-4 w-4" />
                <span>Select voice</span>
              </div>
            )}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0 bg-background/95 backdrop-blur-lg border-white/10 max-h-[400px]">
          <div className="p-2">
            <input
              className="w-full p-2 bg-background/50 border border-white/10 rounded text-sm focus:outline-none focus:border-pink/30"
              placeholder="Search voice..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <ScrollArea className="max-h-[300px]">
            {filteredFemaleVoices.length === 0 && filteredMaleVoices.length === 0 ? (
              <div className="py-6 text-center text-sm text-white/50">
                No voice found.
              </div>
            ) : (
              <>
                {filteredFemaleVoices.length > 0 && (
                  <div>
                    <div className="px-3 py-2 font-medium text-sm text-white/70 border-b border-white/10">
                      Female Voices
                    </div>
                    {filteredFemaleVoices.map((voice) => (
                      <div
                        key={voice.id}
                        className={cn(
                          "flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-pink/10",
                          selectedVoice === voice.id && "bg-pink/5"
                        )}
                        onClick={() => {
                          onSelect(voice.id);
                          setOpen(false);
                        }}
                      >
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">{voice.name}</span>
                          <span className="text-xs text-white/60">{voice.type}</span>
                        </div>
                        {selectedVoice === voice.id && (
                          <Check className="h-4 w-4 text-pink" />
                        )}
                      </div>
                    ))}
                  </div>
                )}
                
                {filteredMaleVoices.length > 0 && (
                  <div>
                    <div className="px-3 py-2 font-medium text-sm text-white/70 border-b border-white/10">
                      Male Voices
                    </div>
                    {filteredMaleVoices.map((voice) => (
                      <div
                        key={voice.id}
                        className={cn(
                          "flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-pink/10",
                          selectedVoice === voice.id && "bg-pink/5"
                        )}
                        onClick={() => {
                          onSelect(voice.id);
                          setOpen(false);
                        }}
                      >
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">{voice.name}</span>
                          <span className="text-xs text-white/60">{voice.type}</span>
                        </div>
                        {selectedVoice === voice.id && (
                          <Check className="h-4 w-4 text-pink" />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </ScrollArea>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default VoiceSelector;
