import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Radio, Menu, Search, Bell } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 cricket-gradient rounded-lg flex items-center justify-center">
              <Radio className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">CricketStream</h1>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full live-indicator"></div>
                <span className="text-xs text-muted-foreground">Live Broadcasting</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Live Channels
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Highlights
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Schedule
          </Button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Search className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Bell className="w-4 h-4" />
          </Button>
          <Button variant="default" className="cricket-gradient text-white hidden sm:flex">
            Watch Premium
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;