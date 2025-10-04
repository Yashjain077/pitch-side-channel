import Header from "@/components/Header";
import VideoPlayer from "@/components/VideoPlayer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Watch Cricket Live
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Live cricket streaming on Crick On Time
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <VideoPlayer />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
