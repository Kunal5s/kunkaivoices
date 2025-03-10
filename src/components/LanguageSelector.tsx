
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Check, ChevronsUpDown, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { LANGUAGES } from "@/lib/constants";

interface LanguageSelectorProps {
  selectedLanguage: string;
  onSelect: (languageId: string) => void;
  className?: string;
}

const LanguageSelector = ({ selectedLanguage, onSelect, className }: LanguageSelectorProps) => {
  const [open, setOpen] = useState(false);
  const selectedLanguageObj = LANGUAGES.find((lang) => lang.id === selectedLanguage);

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
            {selectedLanguageObj ? (
              <div className="flex items-center">
                <span className="mr-2">{selectedLanguageObj.flag}</span>
                <span>{selectedLanguageObj.name}</span>
              </div>
            ) : (
              <div className="flex items-center">
                <Globe className="mr-2 h-4 w-4" />
                <span>Select language</span>
              </div>
            )}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0 bg-background/95 backdrop-blur-lg border-white/10">
          <Command className="bg-transparent">
            <CommandInput placeholder="Search language..." className="border-b-white/10" />
            <CommandEmpty>No language found.</CommandEmpty>
            <CommandGroup className="max-h-[200px] overflow-y-auto scrollbar-none">
              {LANGUAGES.map((language) => (
                <CommandItem
                  key={language.id}
                  value={language.id}
                  onSelect={() => {
                    onSelect(language.id);
                    setOpen(false);
                  }}
                  className="flex items-center"
                >
                  <span className="mr-2">{language.flag}</span>
                  <span>{language.name}</span>
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      selectedLanguage === language.id ? "opacity-100 text-pink" : "opacity-0"
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

export default LanguageSelector;
