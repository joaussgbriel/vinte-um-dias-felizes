import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Hoje eu como com leveza e não com culpa.",
    author: "Aline"
  },
  {
    text: "Você me fez enxergar o quanto a minha mente me sabotava.",
    author: "Maria Luiza"
  },
  {
    text: "Sou a prova de que seus métodos funcionam — e o melhor: eu mantive os resultados.",
    author: "Jéssica"
  },
  {
    text: "Tu fez parte de uma mudança física e mental que eu adiava há anos.",
    author: "Diogo"
  }
];

const Testimonials = () => {
  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4 px-2">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            O que muda não é só o corpo —{" "}
            <span className="text-primary">é a relação com a comida.</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            As mulheres que passam pelo <span className="font-semibold text-accent">Você + Magra</span> percebem que o verdadeiro peso que carregavam não era o da balança… era o da culpa.
          </p>
          <p className="text-xl md:text-2xl font-display font-semibold text-primary mt-4 md:mt-6">
            Aqui, cada refeição vira um ato de amor próprio.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-muted/50 p-6 md:p-8 rounded-2xl relative overflow-hidden group hover:bg-primary/5 transition-all duration-300"
            >
              <Quote className="absolute top-3 right-3 md:top-4 md:right-4 w-10 h-10 md:w-12 md:h-12 text-accent/20 group-hover:text-accent/30 transition-colors" />
              <div className="relative z-10 space-y-3 md:space-y-4">
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-primary text-sm md:text-base">
                  — {testimonial.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
