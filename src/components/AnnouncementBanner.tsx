import { Users } from "lucide-react";

const AnnouncementBanner = () => {
  return (
    <div className="bg-accent text-accent-foreground py-3 md:py-4 px-4 md:px-6">
      <div className="container mx-auto flex items-center justify-center gap-2 animate-fade-in-up">
        <Users className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
        <p className="text-sm md:text-base font-medium text-center">
          100 mulheres de Monte Santo e região entraram para o programa
        </p>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
