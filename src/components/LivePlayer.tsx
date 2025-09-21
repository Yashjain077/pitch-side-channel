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
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            title={title}
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            style={{
              WebkitAllowsInlineMediaPlayback: 'true',
              WebkitPlaysinline: 'true'
            } as React.CSSProperties}
          />
        </div>
      </Card>
    </div>
  );
};

export default LivePlayer;