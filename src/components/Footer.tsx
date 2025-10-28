import { Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-10 md:py-12 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Logo & Description */}
          <div className="space-y-3 md:space-y-4">
            <img 
              src={logo} 
              alt="Você + Magra" 
              className="w-28 md:w-32 h-auto brightness-0 invert"
            />
            <p className="text-primary-foreground/80 text-xs md:text-sm leading-relaxed">
              Programa de emagrecimento que une nutrição personalizada e acolhimento.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Links Úteis</h3>
            <ul className="space-y-2 text-xs md:text-sm">
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
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Contato</h3>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <a 
                  href="https://www.instagram.com/nutricionista_anapaulamelo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex flex-wrap items-center gap-1"
                >
                  <span>Instagram:</span>
                  <span className="break-all">@nutricionista_anapaulamelo</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/5535991331880" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-2"
                >
                  <span>WhatsApp: (35) 9133-1880</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <p className="text-xs md:text-sm text-primary-foreground/70 text-center md:text-left">
            © 2025 Ana Paula | Programa Você + Magra
          </p>
          <div className="flex items-center gap-2 text-xs md:text-sm text-primary-foreground/70">
            <span>Feito com</span>
            <Heart className="w-3 h-3 md:w-4 md:h-4 text-accent" fill="currentColor" />
            <span>para transformar vidas</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
