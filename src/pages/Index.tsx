import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ClientsMarquee } from "@/components/sections/ClientsMarquee";
import { About } from "@/components/sections/About";
import { MediaFeatures } from "@/components/sections/MediaFeatures";
import { Services } from "@/components/sections/Services";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { Insights } from "@/components/sections/Insights";

import { Contact } from "@/components/sections/Contact";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <ClientsMarquee />
        <About />
        <MediaFeatures />
        <Services />
        <CaseStudy />
        <Insights />
        
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
