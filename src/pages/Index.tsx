import Header from "@/components/Header";
import LivePlayer from "@/components/LivePlayer";
import ChannelGrid from "@/components/ChannelGrid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Radio } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-red-500 rounded-full live-indicator"></div>
              <span className="text-sm font-medium text-primary">Live Now</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Watch Cricket Live
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience every ball, every wicket, every moment with our premium cricket streaming platform
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <LivePlayer />
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 cricket-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Radio className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Live Channels</h3>
                <p className="text-3xl font-bold text-primary mb-1">13</p>
                <p className="text-muted-foreground text-sm">Broadcasting now</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 accent-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Active Viewers</h3>
                <p className="text-3xl font-bold text-accent mb-1">24.5K</p>
                <p className="text-muted-foreground text-sm">Watching live</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Quality</h3>
                <p className="text-3xl font-bold text-green-500 mb-1">4K</p>
                <p className="text-muted-foreground text-sm">Ultra HD streaming</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Available Channels */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Available Channels</h2>
              <p className="text-muted-foreground">Discover live cricket streams and highlights</p>
            </div>
            <Badge variant="outline" className="text-accent border-accent">
              All Free
            </Badge>
          </div>
          
          <ChannelGrid />
        </section>
      </main>
    </div>
  );
};

export default Index;
