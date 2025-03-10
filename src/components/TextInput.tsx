
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
  className?: string;
}

const TextInput = ({
  value,
  onChange,
  placeholder = "Enter your text here...",
  maxLength = 10000,
  className,
}: TextInputProps) => {
  const [charCount, setCharCount] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    if (text.length <= maxLength) {
      onChange(text);
      setCharCount(text.length);
    }
  };

  return (
    <div className={className}>
      <Textarea
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="min-h-[200px] resize-y bg-background/70 backdrop-blur-sm border-white/10 focus:border-pink/30 focus:ring-pink/20 placeholder:text-white/40"
      />
      <div className="flex justify-end mt-2">
        <span className="text-xs text-white/60">
          {charCount} / {maxLength} characters
        </span>
      </div>
    </div>
  );
};

export default TextInput;
