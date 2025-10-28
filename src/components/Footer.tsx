import { Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <img 
              src={logo} 
              alt="Você + Magra" 
              className="w-32 h-auto brightness-0 invert"
            />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Programa de emagrecimento que une nutrição personalizada e acolhimento.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Tire suas dúvidas e comece sua transformação hoje mesmo.
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/70">
            © 2025 Ana Paula | Programa Você + Magra
          </p>
          <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-accent" fill="currentColor" />
            <span>para transformar vidas</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
