import { motion } from "framer-motion";
import {
  MessageSquare,
  Newspaper,
  Users,
  ShieldAlert,
  Rocket,
  Megaphone,
  Zap,
  MessagesSquare,
  Mic,
  Calendar,
  Briefcase,
  Scale,
  Share2,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "Strategic Messaging",
    description:
      "Craft core narratives tailored to audiences, market, and purpose with the expertise of a blockchain PR agency or a web3 PR agency.",
  },
  {
    icon: Newspaper,
    title: "Media Relations",
    description:
      "Pitch to reporters, editors, and podcasts in Web3 and mainstream by collaborating with a leading blockchain PR agency or a specialized web3 PR agency.",
  },
  {
    icon: Users,
    title: "Thought Leadership",
    description:
      "Secure speaking slots, interviews, and authored bylines for founders through a blockchain PR agency that understands the nuances of the industry. Partner with a web3 PR agency to enhance your visibility and credibility in the rapidly evolving blockchain space.",
  },
  {
    icon: ShieldAlert,
    title: "Crisis Management",
    description:
      "Manage reputational risk during hacks, regulatory scrutiny, or disputes with the help of a blockchain PR agency or a web3 PR agency.",
  },
  {
    icon: Rocket,
    title: "Token Launch Support",
    description:
      "Effective blockchain PR around token events involves crafting a compelling narrative, ensuring compliance-friendly messaging, and amplifying reach. Engaging a blockchain PR agency or a web3 PR agency can enhance these efforts, helping to drive attention and credibility in the evolving digital landscape.",
  },
  {
    icon: Megaphone,
    title: "Product & Protocol Announcements",
    description:
      "Coordinate launches with media coverage and community-facing narratives through a blockchain PR agency that understands the unique needs of the industry. Leverage web3 PR strategies to enhance visibility and engagement.",
  },
  {
    icon: Zap,
    title: "Influencer Engagement",
    description:
      "Connect with Web3-native creators and credible on-chain thought leaders through a leading blockchain PR agency that specializes in web3 PR.",
  },
  {
    icon: MessagesSquare,
    title: "Community Comms Strategy",
    description:
      "Align your blockchain PR messaging with channels like Discord, Telegram, and DAO, ensuring your web3 PR agency effectively communicates your brand's vision.",
  },
  {
    icon: Mic,
    title: "Media Training",
    description:
      "Prepare executives for interviews, panels, podcasts, and Twitter Spaces, ensuring they are equipped with the latest insights from our blockchain PR agency and strategies relevant to the web3 PR landscape.",
  },
  {
    icon: Calendar,
    title: "Event & Conference PR",
    description:
      "Support presence at ETHGlobal, Consensus, TOKEN2049, and side events through a leading blockchain PR agency, specializing in web3 PR to enhance visibility.",
  },
  {
    icon: Briefcase,
    title: "Investor & Ecosystem Briefing",
    description:
      "Craft pitch-aligned blockchain PR for VCs, partners, and ecosystem nodes through a premier blockchain PR agency specializing in web3 PR strategies.",
  },
  {
    icon: Scale,
    title: "Regulatory Narrative Positioning",
    description:
      "Shape messaging to preempt and respond to legal scrutiny, leveraging a blockchain PR agency or a web3 PR agency to ensure effective communication.",
  },
  {
    icon: Share2,
    title: "Content Syndication",
    description:
      "Distribute blogs and releases through wire services, Substack, Mirror, or partners to enhance your blockchain PR efforts. Collaborating with a blockchain PR agency or a web3 PR agency can also amplify your reach.",
  },
  {
    icon: BarChart3,
    title: "Metrics & Impact Reporting",
    description:
      "Track press hits, sentiment, reach, and PR campaign ROI with a focus on blockchain PR strategies, leveraging insights from a top blockchain PR agency or a specialized web3 PR agency.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            What We <span className="gradient-text">Do</span>
          </motion.h2>
        </div>

        {/* Services Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl overflow-hidden border border-border bg-card h-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 h-full">

                {/* LEFT PANEL */}
                <div className="bg-primary text-primary-foreground p-6 md:p-8 flex flex-col justify-center items-center text-center gap-3 md:gap-4">
                  <service.icon className="w-10 h-10 md:w-12 md:h-12 opacity-90 flex-shrink-0" />
                  <h3 className="font-display text-base md:text-lg font-semibold leading-tight">
                    {service.title}
                  </h3>
                </div>

                {/* RIGHT PANEL */}
                <div className="bg-muted/60 p-6 md:p-8 flex items-center">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
