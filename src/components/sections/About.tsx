import { motion } from "framer-motion";
import { Award, Target, Zap, Linkedin } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Award-Winning Leader",
    description: "Over 10 years of experience in blockchain PR, Web3, AI, fintech, and cybersecurity.",
  },
  {
    icon: Target,
    title: "Board-Level Expertise",
    description: "PR should define the 'why,' safeguard reputation, and anchor every growth tactic in trust.",
  },
  {
    icon: Zap,
    title: "Full-Stack Strategy",
    description: "From positioning and GTM strategies to community building and investor engagement.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative section-muted">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-glow-secondary/5 rounded-full blur-[150px]" />
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-primary text-sm font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full bg-primary/10"
            >
              About PR3
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold mt-6 mb-6"
            >
              Connecting Your Brand with{" "}
              <span className="gradient-text">Your Audience</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-muted-foreground leading-relaxed"
            >
              <p>
                At PR3, our mission is to assist Web3 brands in earning real-world trust 
                through communication tailored specifically for this innovative space, 
                grounded in timeless PR craft.
              </p>
              <p>
                We understand that decentralized, fast-moving markets require a sharper, 
                more customized approach, yet the fundamentals of effective PR still prevail: 
                clear strategy, credible narratives, and compelling storytelling.
              </p>
              <p className="font-semibold text-foreground">
                This is PR for the builders, the believers, and the next wave.
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 space-y-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  className="flex gap-4 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300"
                  >
                    <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Founder Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="gradient-border p-8 bg-card"
          >
            <div className="text-center mb-6">
             <motion.div
  initial={{ scale: 0.8, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-primary to-glow-secondary mx-auto mb-4 flex items-center justify-center shadow-lg overflow-hidden"
>
  <img
    src="/clarie.jpg"
    alt="Claire"
    className="w-full h-full object-cover rounded-full"
  />
</motion.div>

              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="font-display text-2xl font-bold"
              >
                Claire
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-primary text-sm font-medium"
              >
                Founder, PR3
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="space-y-4 text-muted-foreground text-sm leading-relaxed"
            >
                <p>
                Claire founded PR3 after a decade in Web3, collaborating with some of the most prominent brands in the blockchain space. Prior to that, she operated her own PR agency for 16 years, spearheading campaigns for global giants including Honda, IBM, and Adobe.
              </p>
              <p>
              As an award-winning marketing and communications leader, Claire brings over 10 years of experience in blockchain PR, Web3, AI, fintech, and cybersecurity. Since entering the blockchain realm in 2016, she has successfully executed full-stack Web3 marketing strategies, including positioning, go-to-market (GTM) strategies, growth campaigns, ecosystem partnerships, community building, and investor engagement.
              </p>
              <p>
                Claire firmly believes that PR should sit at the board level: it defines the 'why,' safeguards reputation, and anchors every growth tactic in trust—ultimately addressing the question, 'Would I recommend this?' 
              </p>
            
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-6 pt-6 border-t border-border"
            >
              <a
                href="https://www.linkedin.com/in/clairecblockchain/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm group"
              >
                Connect on LinkedIn
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}