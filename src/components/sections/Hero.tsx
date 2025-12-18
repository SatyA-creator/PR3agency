import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg" />

      {/* Gradient Blobs */}
      <div className="absolute top-20 -left-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 -right-40 w-[400px] h-[400px] bg-glow-secondary/10 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="relative min-h-[70vh] flex items-center">
          
          {/* ================= LEFT CONTENT ================= */}
          <div className="max-w-xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">
                Web3 Communications Experts
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            >
              Specialist PR Agency{" "}
              <span className="gradient-text">For Web3</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4"
            >
              Bridging Web2 Expertise with{" "}
              <span className="text-foreground font-semibold">
                Web3 Momentum
              </span>
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground mb-10 leading-relaxed"
            >
              PR3 is a next-gen communications agency designed for the
              decentralized economy. We blend proven Web2 PR strategies with
              deep Web3 expertise across DAOs, DeFi, NFTs, and Layer-1
              ecosystems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base font-semibold group w-full sm:w-auto"
              >
                <a href="#contact">
                  Free Consultation
                  <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base font-semibold w-full sm:w-auto"
              >
                <a href="#services">Our Services</a>
              </Button>
            </motion.div>
          </div>

          {/* ================= RIGHT CORNER IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 140 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute right-0 bottom-0 w-[400px] md:w-[520px] lg:w-[680px] pointer-events-none hidden md:block opacity-40 md:opacity-100"
          >
            <img
              src="/artwork.png"
              alt="PR3 Hero Visual"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
