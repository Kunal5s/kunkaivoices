
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Check, ChevronsUpDown, Mic } from "lucide-react";
import { cn } from "@/lib/utils";
import { MALE_VOICES, FEMALE_VOICES } from "@/lib/constants";

interface VoiceSelectorProps {
  selectedVoice: string;
  onSelect: (voiceId: string) => void;
  className?: string;
}

const VoiceSelector = ({ selectedVoice, onSelect, className }: VoiceSelectorProps) => {
  const [open, setOpen] = useState(false);
  const allVoices = [...MALE_VOICES, ...FEMALE_VOICES];
  const selectedVoiceObj = allVoices.find((voice) => voice.id === selectedVoice);

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
                <span className="ml-2 text-xs text-white/60">({selectedVoiceObj.type})</span>
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
        <PopoverContent className="w-full p-0 bg-background/95 backdrop-blur-lg border-white/10">
          <Command className="bg-transparent">
            <CommandInput placeholder="Search voice..." className="border-b-white/10" />
            <CommandEmpty>No voice found.</CommandEmpty>
            <CommandGroup heading="Female Voices" className="border-b border-white/10">
              {FEMALE_VOICES.map((voice) => (
                <CommandItem
                  key={voice.id}
                  value={voice.id}
                  onSelect={() => {
                    onSelect(voice.id);
                    setOpen(false);
                  }}
                  className="flex items-center justify-between"
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{voice.name}</span>
                    <span className="text-xs text-white/60">{voice.type}</span>
                  </div>
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      selectedVoice === voice.id ? "opacity-100 text-pink" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandGroup heading="Male Voices">
              {MALE_VOICES.map((voice) => (
                <CommandItem
                  key={voice.id}
                  value={voice.id}
                  onSelect={() => {
                    onSelect(voice.id);
                    setOpen(false);
                  }}
                  className="flex items-center justify-between"
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{voice.name}</span>
                    <span className="text-xs text-white/60">{voice.type}</span>
                  </div>
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      selectedVoice === voice.id ? "opacity-100 text-pink" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default VoiceSelector;
