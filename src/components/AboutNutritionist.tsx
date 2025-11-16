import { Award, BookOpen, Users } from "lucide-react";
import anaPaula from "@/assets/ana-paula.png";

const AboutNutritionist = () => {
  return (
    <section className="py-12 md:py-24 px-4 md:px-6" style={{ background: 'var(--gradient-section)' }}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 md:mb-16 px-2">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Quem está por trás do{" "}
            <span className="text-primary">método</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 md:order-1">
            <div className="relative z-10">
              <img 
                src={anaPaula} 
                alt="Ana Paula - Nutricionista" 
                className="rounded-2xl md:rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-full h-full bg-accent/10 rounded-2xl md:rounded-3xl -z-10"></div>
          </div>
          
          {/* Content */}
          <div className="space-y-5 md:space-y-6 order-1 md:order-2">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                Ana Paula
              </h3>
              <p className="text-base md:text-lg text-primary font-medium">
                Nutricionista Especialista em Emagrecimento
              </p>
            </div>
            
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground text-sm md:text-base">Graduada pela PUCCAMP</p>
                  <p className="text-muted-foreground text-sm md:text-base">Formação em Nutrição, 2000</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground text-sm md:text-base">24 anos de experiência</p>
                  <p className="text-muted-foreground text-sm md:text-base">Especialista em Emagrecimento e Reeducação Alimentar</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground text-sm md:text-base">Criadora de métodos reconhecidos</p>
                  <p className="text-muted-foreground text-sm md:text-base">Slim, SOS Emagrecimento e Você + Magra</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-5 md:p-6 rounded-2xl border-l-4 border-accent">
              <p className="text-base md:text-lg text-foreground/80 italic leading-relaxed">
                "Ao longo da minha trajetória, já ajudei milhares de mulheres a emagrecerem — e agora quero ajudar você."
              </p>
            </div>
            
            <p className="text-muted-foreground text-sm md:text-base">
              Proprietária da <span className="font-semibold text-primary">Nutriclínica Ltda</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNutritionist;
