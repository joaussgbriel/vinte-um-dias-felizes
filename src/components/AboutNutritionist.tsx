import { Award, BookOpen, Users } from "lucide-react";
import anaPaula from "@/assets/ana-paula.png";

const AboutNutritionist = () => {
  return (
    <section className="py-24 px-6" style={{ background: 'var(--gradient-section)' }}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Quem está por trás do{" "}
            <span className="text-primary">método</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={anaPaula} 
                alt="Ana Paula - Nutricionista" 
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-accent/10 rounded-3xl -z-10"></div>
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-3xl font-bold text-foreground mb-2">
                Ana Paula
              </h3>
              <p className="text-lg text-primary font-medium">
                Nutricionista Especialista em Emagrecimento
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Graduada pela PUCCAMP</p>
                  <p className="text-muted-foreground">Formação em Nutrição, 2000</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">24 anos de experiência</p>
                  <p className="text-muted-foreground">Especialista em Emagrecimento e Reeducação Alimentar</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Criadora de métodos reconhecidos</p>
                  <p className="text-muted-foreground">Slim, SOS Emagrecimento e Você + Magra</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-2xl border-l-4 border-accent">
              <p className="text-lg text-foreground/80 italic leading-relaxed">
                "Ao longo da minha trajetória, já ajudei centenas de mulheres a emagrecerem — e agora quero ajudar você."
              </p>
            </div>
            
            <p className="text-muted-foreground">
              Proprietária da <span className="font-semibold text-primary">Nutriclínica Ltda</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNutritionist;
