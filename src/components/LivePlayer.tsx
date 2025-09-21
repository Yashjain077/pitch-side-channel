import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Pause, Volume2, Maximize, Settings, Radio } from "lucide-react";

interface LivePlayerProps {
  streamUrl?: string;
  title?: string;
  isLive?: boolean;
}

const LivePlayer = ({ 
  streamUrl = "https://cricketstan.github.io/Channel-13/", 
  title = "Channel 13 - Live Cricket",
  isLive = true 
}: LivePlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);

  return (
    <div className="relative w-full">
      <Card className="overflow-hidden bg-card border-primary/20 glow-effect">
        <div className="relative aspect-video bg-black">
          {/* Embed the stream */}
          <iframe
            src={streamUrl}
            className="w-full h-full"
            allowFullScreen
            allow="autoplay; encrypted-media; picture-in-picture"
            title={title}
          />
          
          {/* Live indicator overlay */}
          {isLive && (
            <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
              <div className="flex items-center gap-2 bg-red-600/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-white rounded-full live-indicator"></div>
                <span className="text-white text-sm font-medium">LIVE</span>
              </div>
            </div>
          )}

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <div className="flex items-center justify-between text-white">
              <div>
                <h2 className="text-xl font-bold mb-1">{title}</h2>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Radio className="w-4 h-4" />
                  <span>Broadcasting Live</span>
                </div>
              </div>
              <Badge variant="secondary" className="bg-accent text-accent-foreground">
                Cricket
              </Badge>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LivePlayer;