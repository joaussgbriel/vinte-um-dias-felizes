import { ArrowRight, Heart, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import logo from "@/assets/logo.png";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const togglePlayPause = () => {
    if (iframeRef.current) {
      const command = isPlaying ? 'pauseVideo' : 'playVideo';
      iframeRef.current.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func: command, args: [] }),
        '*'
      );
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center py-12 md:py-20 px-4 md:px-6 overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      {/* Decorative elements */}
      <div className="absolute top-20 right-5 md:right-10 opacity-10">
        <Heart className="w-20 md:w-32 h-20 md:h-32 text-accent" fill="currentColor" />
      </div>
      <div className="absolute bottom-20 left-5 md:left-10 opacity-10">
        <Heart className="w-16 md:w-24 h-16 md:h-24 text-accent" fill="currentColor" />
      </div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-center items-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8 animate-fade-in-up text-center max-w-4xl w-full">
            <img 
              src={logo} 
              alt="Você + Magra" 
              className="w-36 md:w-48 h-auto mx-auto"
            />
            
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight px-2">
              Você não precisa mais escolher entre{" "}
              <span className="text-primary">emagrecer</span> e ser{" "}
              <span className="text-accent">feliz.</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 leading-relaxed px-2">
              Em 21 dias, descubra como é possível perder peso sem culpa, sem restrição e com prazer em comer de novo.
            </p>
            
            {/* YouTube Video Embed */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl mx-auto group">
              <iframe
                ref={iframeRef}
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/R170ns5l4Uk?autoplay=1&mute=0&controls=0&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&playsinline=1&loop=1&playlist=R170ns5l4Uk&disablekb=1&fs=0&cc_load_policy=0&enablejsapi=1"
                title="Você + Magra"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ border: 'none' }}
              />
              {/* Overlay para cobrir controles residuais */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-transparent pointer-events-auto z-10" />
              
              {/* Botão Play/Pause personalizado */}
              <button
                onClick={togglePlayPause}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-background/90 hover:bg-background text-foreground rounded-full p-4 md:p-6 shadow-lg transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
                aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" />
                ) : (
                  <Play className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" />
                )}
              </button>
            </div>
            
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base md:text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group w-full sm:w-auto"
            >
              Quero Começar Agora
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
