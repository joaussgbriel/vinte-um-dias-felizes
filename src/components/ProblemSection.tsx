import { Heart } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-card">
      <div className="container mx-auto max-w-4xl text-center space-y-6 md:space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
          <Heart className="w-5 h-5 text-accent" fill="currentColor" />
          <span className="text-accent font-medium">A Virada</span>
        </div>
        
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight px-2">
          O problema nunca foi você — foi o método.
        </h2>
        
        <div className="space-y-4 md:space-y-6 text-base md:text-lg text-foreground/80 leading-relaxed px-2">
          <p>
            Você já percebeu como quase todas as dietas começam com entusiasmo… e terminam com culpa?
          </p>
          <p className="text-lg md:text-xl font-medium text-foreground">
            Culpa por sair da dieta. <br />
            Culpa por comer o que ama. <br />
            Culpa por "fracassar de novo".
          </p>
          <p>
            Mas e se o problema nunca tivesse sido você — e sim, o método?
          </p>
          <p className="text-lg md:text-xl font-semibold text-primary">
            O <span className="text-accent">Você + Magra</span> nasceu quando a Nutri Ana Paula percebeu que o verdadeiro emagrecimento não vem do medo da comida, e sim da reconciliação com ela.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
