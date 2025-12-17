import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowRight, Users, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

// const stats = [
//   { icon: Users, value: 200000, suffix: "+", label: "Community Members" },
//   { icon: Globe, value: 30, suffix: "+", label: "Countries Reached" },
//   { icon: Award, value: 500, suffix: "+", label: "Watch Hours" },
// ];

const highlights = [
  {
    title: "The 'Be Uncrackable' Brand Platform",
    description: "Led the development of Quranium’s central brand platform, “Be Uncrackable,” to encapsulate its mission of delivering unbreakable security in the quantum era. This slogan became the company's north star – a promise that its blockchain and products would remain resilient against even the most formidable threats. In practice, “Be Uncrackable” unified all messaging: from product taglines to investor pitches, it signaled that Quranium stood for uncompromising security and durability. This clear, bold ethos helped differentiate Quranium in the competitive Web3 PR landscape and built trust among developers, partners, and users. It wasn’t just a tagline; it was a mindset we instilled across the company, ensuring that everything Quranium did – technically and culturally – lived up to the uncrackable standard. As a blockchain PR agency, we understood the importance of this brand message in promoting our blockchain solutions effectively.",
    image: "https://img1.wsimg.com/isteam/ip/f1002561-3d42-40f9-9ebe-f6606a14bfce/quraniumPreview.91b40c74.png/:/cr=t:5.63%25,l:0%25,w:100%25,h:88.73%25/rs=w:1240,h:620,cg:true",
  },
  {
    title: "Quantum Minds Podcast",
    description: "Thought Leadership Broadcast: I launched The Quantum Minds Podcast, a series of conversations with global leaders in blockchain, AI, and cybersecurity. In this podcast, we moderated deep discussions on building secure, future-proof technology, positioning Quranium at the center of the quantum-security dialogue. The podcast gained significant traction – achieving over 500+ watch hours across 35+ countries – and established me and Quranium as credible voices in the blockchain PR landscape. Through these episodes, we not only spread our uncrackable ethos to a broad audience but also built relationships with thought leaders, enhancing our standing as a leading blockchain PR agency, while amplifying Quranium’s visibility worldwide in the web3 PR sphere..",
    image: "https://img1.wsimg.com/isteam/ip/f1002561-3d42-40f9-9ebe-f6606a14bfce/Screenshot%202025-12-12%20at%2016.57.38.png/:/cr=t:25.22%25,l:0%25,w:100%25,h:49.57%25/rs=w:600,h:300,cg:true",
  },
  {
    title: "Pioneering DeQUIP",
    description: "To further cement our leadership in the blockchain space, we spearheaded the creation of a new industry category: DeQUIP (Decentralized Quantum-Uncrackable Infrastructure Protocol). We recognized that decentralization alone wasn’t enough for true resilience, so Quranium needed a category-defining solution that is both decentralized and quantum-secure. By coining and championing “DeQUIP,” we positioned Quranium not just as a blockchain project but as the leader of a broader movement setting the standard for next-generation security. In collaboration with our blockchain PR agency, we formed the DeQUIP Alliance to invite other innovators to join this category, signaling a collaborative push toward quantum-secure digital infrastructure. This initiative aligns with the goals of web3 PR, promoting a secure future for all digital interactions.",
    image: "https://img1.wsimg.com/isteam/ip/f1002561-3d42-40f9-9ebe-f6606a14bfce/Screenshot%202025-12-12%20at%2016.56.43.png/:/cr=t:2.11%25,l:0%25,w:100%25,h:95.77%25/rs=w:1240,h:620,cg:true",
  },
  {
    title: "ROI",
    description: "Driving the “Be Uncrackable” narrative alongside our signature initiatives yielded transformative results for Quranium. Our thought leadership and brand credibility skyrocketed, leading to features in major industry media like CoinTelegraph, WIRED, and CNBC, which validated our prominence in the blockchain space. Through consistent messaging via podcasts, webinars, and events, we established Quranium as the go-to voice on quantum security in blockchain, showcasing the effectiveness of our blockchain PR strategy. This reputation translated into tangible accolades, including being named DMCC’s Best Web3 Startup of 2024, thanks in part to our work with a leading web3 PR agency. The community grew from a niche group into a broad movement, surpassing 200,000 global community members.",
    image: "/roi.jpg",
  },
   {
    title: "DeQUIP Grant Program",
    description: "Ecosystem Growth: To catalyze innovation in our newly defined category, I introduced the DeQUIP Grant Program – a funding and incubation initiative for quantum-secure Web3 projects. Quranium committed $5M in grants to support 15 teams building on our ecosystem. We designed this program to last 16 weeks per cohort, providing mentorship, resources, and access to Quranium's technology. The rationale was to ensure that important new dApps and tools could launch and remain uncrackable for the long term. By running the DeQUIP grants, we helped expand our ecosystem with solutions (from DeFi to identity) that align with our security standards, thereby strengthening the overall DeQUIP alliance. This initiative not only enhanced our ecosystem but also attracted attention in the developer community, showcasing our blockchain PR efforts. As a leading web3 PR agency, we are committed to supporting projects that align with our vision.",
    image: "/dequip.jpg",
  },
  {
    title: "Integrated Execution ",
    description: "We executed the Be Uncrackable strategy across marketing, PR, social, product, and partnerships to ensure Quranium showed up everywhere with one consistent, high-impact message. Our blockchain PR agency crafted campaigns and web content that highlighted its post-quantum security edge and educated the market on the urgency of the quantum threat. In PR, we secured coverage and speaking opportunities that reinforced the narrative, leveraging our expertise as a web3 PR agency. We coordinated social and community efforts—from technical blogs to Twitter threads—and launched initiatives like Quantum Security Awareness Day and interactive community campaigns to drive engagement. On the product side, we partnered closely with the team to ensure launches like QSafe Wallet reflected the uncrackable promise in branding and value proposition.",
    image: "/integrated.jpg",
  },{
    title: "The Uncrackable Conversation",
    description: "To foster community dialogue, we created The Uncrackable Conversation, a monthly live webinar and panel series. In each session, we brought together experts (from cryptographers to Web3 founders) to discuss how Quranium can build an uncrackable digital world. This initiative translated our brand mantra into a community forum for knowledge-sharing, showcasing our commitment to blockchain PR. It quickly grew Quranium's audience – the sessions reached over 150,000 viewers globally – and drove home Quranium’s role as a facilitator of crucial industry conversations within the Web3 PR landscape. Hosting these conversations in real-time also humanized the Quranium brand; we were able to directly engage with the community, answer questions, and further reinforce Quranium’s thought leadership in quantum security, effectively positioning us as a leading blockchain PR agency.",
    image: "/unbreakable.jpg",
  },
  {
    title: "Global 'Be Uncrackable' Roadshow",
    description: "The Global “Be Uncrackable” Roadshow: We orchestrated a comprehensive global roadshow in 2024-2025 to raise awareness about the quantum threat and Quranium’s solutions. Branded as the “Be Uncrackable Roadshow,” this initiative spanned 30+ countries and over 300 events. The team hit major blockchain conferences (like Davos, TOKEN2049, ETHGlobal) as well as local meetups, government briefings, and university talks, showcasing our blockchain PR efforts. We spoke about Quranium’s technology and the DeQUIP standard through our web3 PR agency. This massive outreach campaign educated diverse audiences and rallied a global community around Quranium's mission. Through the roadshow, we forged connections with developers, enterprise executives, and even policymakers, dramatically expanding Quranium's network and enhancing our presence in the web3 PR landscape.",
    image: "https://img1.wsimg.com/isteam/ip/f1002561-3d42-40f9-9ebe-f6606a14bfce/Screenshot%202025-12-12%20at%2017.02.22.png/:/cr=t:6.11%25,l:0%25,w:100%25,h:87.79%25/rs=w:600,h:300,cg:true",
  },
];

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export function CaseStudy() {
  return (
    <section id="case-study" className="py-24 md:py-32 relative section-light">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg opacity-50" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-glow-secondary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-primary text-sm font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full bg-primary/10"
          >
            Case Study
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold mt-6 mb-6"
          >
            Quranium: <span className="gradient-text">Be Uncrackable</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            How we helped a quantum-secure blockchain platform build category leadership through integrated communications
          </motion.p>
        </div>

        {/* Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="gradient-border p-8 text-center bg-card"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, type: "spring", stiffness: 200 }}
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              </motion.div>
              <div className="font-display text-4xl font-bold gradient-text mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div> */}

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group gradient-border card-hover overflow-hidden bg-card"
            >
            <div className="aspect-video w-full overflow-hidden bg-muted/20">
  <motion.img
    src={highlight.image}
    alt={highlight.title}
    className="w-full h-full object-cover"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.5 }}
    loading="lazy"
  />
</div>


              <div className="p-4 sm:p-6">
                <h3 className="font-display font-semibold text-lg sm:text-xl mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {highlight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 gradient-border p-8 md:p-12 text-center bg-card"
        >
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-3xl font-bold mb-4"
          >
            The Results
          </motion.h3>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
            Features in major industry media like CoinTelegraph, WIRED, and CNBC. 
            Named DMCC's Best Web3 Startup of 2024. Community grew from a niche group 
            into a broad movement, surpassing 200,000 global community members.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground btn-shine">
            <a href="#contact">
              Get Similar Results
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}