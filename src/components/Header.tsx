import { Button } from "@/components/ui/button";
import { Radio, ExternalLink } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 cricket-gradient rounded-lg flex items-center justify-center">
            <Radio className="w-4 h-4 text-white" />
          </div>
          <h1 className="text-xl font-bold text-foreground">Crick On Time</h1>
        </div>

        {/* Telegram Link */}
        <Button 
          asChild
          className="cricket-gradient text-white"
        >
          <a 
            href="https://t.me/+P36m06pmsCc0YmFl" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            Join Telegram
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;