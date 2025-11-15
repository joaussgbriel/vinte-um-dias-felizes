import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import logo from "@/assets/logo.png";
import videoThumbnail from "@/assets/video-thumbnail.jpg";

// Tipos para a API do YouTube
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [showThumbnail, setShowThumbnail] = useState(true);
  const playerRef = useRef<any>(null);
  const iframeWrapRef = useRef<HTMLDivElement>(null);
  const videoId = 'R170ns5l4Uk';

  // Carrega a API do YouTube
  useEffect(() => {
    const loadYouTubeAPI = () => {
      if (window.YT && window.YT.Player) return;
      
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    };

    loadYouTubeAPI();
  }, []);

  // Cria o player quando o usuário clicar
  const createPlayerAndPlay = () => {
    if (loaded || !iframeWrapRef.current) return;
    
    const initPlayer = () => {
      setLoaded(true);
      
      playerRef.current = new window.YT.Player(iframeWrapRef.current, {
        width: '100%',
        height: '100%',
        videoId: videoId,
        playerVars: {
          controls: 0,
          modestbranding: 1,
          rel: 0,
          fs: 0,
          iv_load_policy: 3,
          playsinline: 1,
          disablekb: 1,
          cc_load_policy: 0,
          showinfo: 0
        },
        events: {
          onReady: (event: any) => {
            setShowThumbnail(false);
            event.target.playVideo();
            setIsPlaying(true);
          },
          onStateChange: (event: any) => {
            const state = event.data;
            if (state === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
            } else if (state === window.YT.PlayerState.PAUSED || state === window.YT.PlayerState.ENDED) {
              setIsPlaying(false);
            }
          }
        }
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }
  };

  const togglePlayPause = () => {
    if (!loaded) {
      createPlayerAndPlay();
      return;
    }
    
    if (!playerRef.current) return;
    
    const state = playerRef.current.getPlayerState();
    if (state === window.YT.PlayerState.PLAYING) {
      playerRef.current.pauseVideo();
      setIsPlaying(false);
    } else {
      playerRef.current.playVideo();
      setIsPlaying(true);
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
            
            {/* VSL Player - YouTube sem controles nativos */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl mx-auto group bg-black">
              {/* Thumbnail - mostrado até o usuário clicar */}
              {showThumbnail && (
                <img
                  src={videoThumbnail}
                  alt="Thumbnail do vídeo - Aperte o Play"
                  className="absolute inset-0 w-full h-full object-cover z-10 cursor-pointer"
                  onClick={togglePlayPause}
                />
              )}
              
              {/* Container onde o iframe do YouTube será injetado */}
              <div 
                ref={iframeWrapRef}
                className="absolute inset-0 z-20"
                style={{ pointerEvents: loaded ? 'none' : 'none' }}
              />
              
              {/* Botão Play/Pause personalizado */}
              <button
                onClick={togglePlayPause}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-background/60 backdrop-blur-sm hover:bg-background/80 text-foreground rounded-full p-6 md:p-10 shadow-lg transition-all duration-300 hover:scale-110"
                aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
                style={{ 
                  width: '84px', 
                  height: '84px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {isPlaying ? (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <rect x="6" y="5" width="4" height="14" fill="white" />
                    <rect x="14" y="5" width="4" height="14" fill="white" />
                  </svg>
                ) : (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M8 5v14l11-7L8 5z" fill="white" />
                  </svg>
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
