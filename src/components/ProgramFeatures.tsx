import { Utensils, Users, Scale, Smartphone } from "lucide-react";

const features = [
  {
    icon: Utensils,
    title: "Plano alimentar personalizado e flexível",
    description: "Cardápio pensado para você, com comidas de verdade que cabem na sua rotina."
  },
  {
    icon: Users,
    title: "Grupo exclusivo de mulheres",
    description: "Comunidade de apoio no WhatsApp, com troca de experiências e incentivo diário."
  },
  {
    icon: Scale,
    title: "Pesagem e acompanhamento semanal",
    description: "Acompanhamento próximo dos seus resultados e ajustes quando necessário."
  },
  {
    icon: Smartphone,
    title: "Nutri na palma da sua mão",
    description: "Suporte direto com a Ana Paula para tirar dúvidas e te guiar no processo."
  }
];

const ProgramFeatures = () => {
  return (
    <section className="py-12 md:py-24 px-4 md:px-6" style={{ background: 'var(--gradient-section)' }}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4 px-2">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            21 dias para emagrecer com{" "}
            <span className="text-primary">leveza</span> e{" "}
            <span className="text-accent">propósito.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para transformar sua relação com a comida e com o seu corpo.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 space-y-3 md:space-y-4 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramFeatures;
