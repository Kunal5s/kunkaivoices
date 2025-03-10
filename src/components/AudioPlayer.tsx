
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface AudioPlayerProps {
  isLoading?: boolean;
  isPlaying?: boolean;
  onPlay?: () => void;
  onPause?: () => void;
  audioUrl?: string | null;
  className?: string;
}

const AudioPlayer = ({
  isLoading = false,
  isPlaying = false,
  onPlay,
  onPause,
  audioUrl,
  className,
}: AudioPlayerProps) => {
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const togglePlayPause = () => {
    if (isPlaying) {
      onPause?.();
    } else {
      onPlay?.();
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSliderChange = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className={cn("glass-morphism rounded-xl p-4", className)}>
      {audioUrl && (
        <audio
          ref={audioRef}
          src={audioUrl}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          className="hidden"
        />
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Button
            size="icon"
            variant="outline"
            className="h-8 w-8 rounded-full border-white/10 bg-background/50 hover:bg-background/80"
            onClick={() => {
              if (audioRef.current) {
                audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 10);
              }
            }}
          >
            <SkipBack className="h-4 w-4" />
          </Button>

          <Button
            size="icon"
            className="h-10 w-10 rounded-full mx-2 bg-pink hover:bg-pink-dark transition-colors pink-glow"
            onClick={togglePlayPause}
            disabled={isLoading || !audioUrl}
          >
            {isLoading ? (
              <div className="audio-wave">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            ) : isPlaying ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5 ml-0.5" />
            )}
          </Button>

          <Button
            size="icon"
            variant="outline"
            className="h-8 w-8 rounded-full border-white/10 bg-background/50 hover:bg-background/80"
            onClick={() => {
              if (audioRef.current) {
                audioRef.current.currentTime = Math.min(
                  audioRef.current.duration,
                  audioRef.current.currentTime + 10
                );
              }
            }}
          >
            <SkipForward className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center">
          <Button
            size="icon"
            variant="ghost"
            className="h-8 w-8 rounded-full"
            onClick={toggleMute}
          >
            {isMuted ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </Button>

          <div className="w-20 ml-2">
            <Slider
              value={[volume]}
              min={0}
              max={1}
              step={0.01}
              onValueChange={handleVolumeChange}
              className="cursor-pointer"
            />
          </div>
        </div>

        {audioUrl && (
          <Button
            size="icon"
            variant="outline"
            className="h-8 w-8 rounded-full border-white/10 bg-background/50 hover:bg-background/80"
            onClick={() => {
              if (audioUrl) {
                const a = document.createElement("a");
                a.href = audioUrl;
                a.download = "audio.mp3";
                a.click();
              }
            }}
          >
            <Download className="h-4 w-4" />
          </Button>
        )}
      </div>

      <div className="mt-4 space-y-2">
        <Slider
          value={[currentTime]}
          min={0}
          max={duration || 100}
          step={0.01}
          onValueChange={handleSliderChange}
          disabled={!audioUrl}
          className="cursor-pointer"
        />

        <div className="flex justify-between text-xs text-white/60">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
