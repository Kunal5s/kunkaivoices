
import { LucideIcon } from "lucide-react";
import { Mic, MessageSquareText, Copy, Bot, Waveform, Album } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
}

const iconComponents: Record<string, LucideIcon> = {
  mic: Mic,
  "message-square-text": MessageSquareText,
  copy: Copy,
  bot: Bot,
  waveform: Waveform,
  album: Album,
};

const ServiceCard = ({ title, description, icon, className }: ServiceCardProps) => {
  const IconComponent = iconComponents[icon];

  return (
    <div 
      className={cn(
        "glass-morphism rounded-xl p-6 transition-all duration-300 hover:border-pink/30 hover:pink-glow group",
        className
      )}
    >
      <div className="w-12 h-12 rounded-lg bg-pink/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-pink/20">
        {IconComponent && <IconComponent className="w-6 h-6 text-pink" />}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
      <p className="text-white/70 text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
