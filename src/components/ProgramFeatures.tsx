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
    <section className="py-24 px-6" style={{ background: 'var(--gradient-section)' }}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            21 dias para emagrecer com{" "}
            <span className="text-primary">leveza</span> e{" "}
            <span className="text-accent">propósito.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para transformar sua relação com a comida e com o seu corpo.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 space-y-4 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
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
