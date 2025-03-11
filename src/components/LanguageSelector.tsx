
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Check, ChevronsUpDown, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { LANGUAGES } from "@/lib/constants";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LanguageSelectorProps {
  selectedLanguage: string;
  onSelect: (languageId: string) => void;
  className?: string;
}

const LanguageSelector = ({ selectedLanguage, onSelect, className }: LanguageSelectorProps) => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const selectedLanguageObj = LANGUAGES.find((lang) => lang.id === selectedLanguage);

  const filteredLanguages = searchQuery.trim() === "" 
    ? LANGUAGES
    : LANGUAGES.filter(lang => 
        lang.name.toLowerCase().includes(searchQuery.toLowerCase())
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
        <PopoverContent className="w-full p-0 bg-background/95 backdrop-blur-lg border-white/10 max-h-[400px]">
          <div className="p-2">
            <input
              className="w-full p-2 bg-background/50 border border-white/10 rounded text-sm focus:outline-none focus:border-pink/30"
              placeholder="Search language..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <ScrollArea className="max-h-[300px]">
            {filteredLanguages.length === 0 ? (
              <div className="py-6 text-center text-sm text-white/50">
                No language found.
              </div>
            ) : (
              <div className="py-1">
                {filteredLanguages.map((language) => (
                  <div
                    key={language.id}
                    className={cn(
                      "flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-pink/10",
                      selectedLanguage === language.id && "bg-pink/5"
                    )}
                    onClick={() => {
                      onSelect(language.id);
                      setOpen(false);
                    }}
                  >
                    <div className="flex items-center">
                      <span className="mr-2">{language.flag}</span>
                      <span>{language.name}</span>
                    </div>
                    {selectedLanguage === language.id && (
                      <Check className="h-4 w-4 text-pink" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default LanguageSelector;
