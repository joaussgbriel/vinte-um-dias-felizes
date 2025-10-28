import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-card">
      <div className="container mx-auto max-w-4xl text-center space-y-6 md:space-y-8">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight px-2">
          21 dias para recomeçar com{" "}
          <span className="text-primary">leveza.</span>
        </h2>
        
        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto px-2">
          Por 21 dias, você vai cuidar do corpo com leveza, comer com prazer e olhar no espelho com orgulho.
        </p>
        
        <p className="text-xl md:text-2xl font-semibold text-accent px-2">
          Não é milagre — é método.
        </p>
        
        <p className="text-base md:text-lg text-muted-foreground px-2">
          E o primeiro passo é simples.
        </p>
        
        <div className="pt-6 md:pt-8 space-y-5 md:space-y-6">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-base md:text-xl px-8 md:px-12 py-6 md:py-7 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-soft group w-full sm:w-auto"
          >
            Quero começar meu processo agora
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            <span>Pagamento 100% seguro</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
