import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Hero = () => {
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
          <div className="space-y-6 md:space-y-8 animate-fade-in-up text-center max-w-4xl">
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
            
            <div className="space-y-3 md:space-y-4 px-2">
              <p className="text-base md:text-lg text-muted-foreground">
                O programa <span className="font-semibold text-primary">Você + Magra</span> já ajudou centenas de mulheres a emagrecerem até{" "}
                <span className="font-semibold text-accent">5kg em 21 dias</span>, com cardápio personalizado, grupo de apoio e acompanhamento diário direto com a nutri.
              </p>
              <p className="text-base md:text-lg text-muted-foreground">
                Tudo online — e feito pra caber na sua rotina e no seu prato.
              </p>
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
