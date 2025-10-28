import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ProgramFeatures from "@/components/ProgramFeatures";
import Testimonials from "@/components/Testimonials";
import AboutNutritionist from "@/components/AboutNutritionist";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSection />
      <ProgramFeatures />
      <Testimonials />
      <AboutNutritionist />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
