import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Radio, Users, Clock } from "lucide-react";

interface Channel {
  id: string;
  name: string;
  description: string;
  viewers: number;
  isLive: boolean;
  thumbnail: string;
  category: string;
}

const mockChannels: Channel[] = [
  {
    id: "1",
    name: "Channel 13",
    description: "Live Cricket Match Coverage",
    viewers: 15420,
    isLive: true,
    thumbnail: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=225&fit=crop",
    category: "Cricket"
  },
  {
    id: "2", 
    name: "Sports Central",
    description: "Cricket Highlights & Analysis",
    viewers: 8900,
    isLive: true,
    thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=225&fit=crop",
    category: "Sports"
  },
  {
    id: "3",
    name: "Match Replay",
    description: "Best Cricket Moments",
    viewers: 0,
    isLive: false,
    thumbnail: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=225&fit=crop",
    category: "Highlights"
  }
];

const ChannelGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockChannels.map((channel) => (
        <Card key={channel.id} className="group cursor-pointer hover:glow-effect transition-all duration-300 bg-card border-primary/10">
          <CardContent className="p-0">
            <div className="relative">
              <img 
                src={channel.thumbnail} 
                alt={channel.name}
                className="w-full aspect-video object-cover rounded-t-lg"
              />
              
              {/* Live indicator */}
              {channel.isLive && (
                <div className="absolute top-2 left-2">
                  <div className="flex items-center gap-1 bg-red-600/90 backdrop-blur-sm px-2 py-1 rounded text-white text-xs">
                    <div className="w-1.5 h-1.5 bg-white rounded-full live-indicator"></div>
                    LIVE
                  </div>
                </div>
              )}

              {/* Viewer count */}
              {channel.isLive && (
                <div className="absolute top-2 right-2">
                  <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-white text-xs">
                    <Users className="w-3 h-3" />
                    {channel.viewers.toLocaleString()}
                  </div>
                </div>
              )}

              {/* Offline indicator */}
              {!channel.isLive && (
                <div className="absolute top-2 right-2">
                  <div className="flex items-center gap-1 bg-gray-600/90 backdrop-blur-sm px-2 py-1 rounded text-white text-xs">
                    <Clock className="w-3 h-3" />
                    OFFLINE
                  </div>
                </div>
              )}
            </div>

            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {channel.name}
                </h3>
                <Badge variant="outline" className="text-xs">
                  {channel.category}
                </Badge>
              </div>
              
              <p className="text-muted-foreground text-sm mb-3">
                {channel.description}
              </p>

              <div className="flex items-center text-xs text-muted-foreground">
                <Radio className="w-3 h-3 mr-1" />
                {channel.isLive ? "Broadcasting now" : "Stream offline"}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ChannelGrid;