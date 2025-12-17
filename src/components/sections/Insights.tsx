import { motion } from "framer-motion";
import {
  Megaphone,
  Target,
  TrendingUp,
  Zap,
  CheckCircle2,
  Newspaper,
  DollarSign,
  BarChart3,
  Clock,
  Shield,
  MessageSquare,
  Award,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const playbook = [
  {
    number: "1",
    title: "Cut Through the Noise—Web3 Doesn't Wait",
    content: `Let's be honest: Web3 is relentless. Protocols fork weekly, DAOs vote on absurd memes, and someone just launched another frog-themed token that hit a $200M market cap overnight. So yeah, getting attention? Not easy.

That's where PR3 comes in.

We're not your Web2 PR holdover. We're Web3-native, but with decades of battle-tested experience. We speak Degen and Boardroom. We know the alpha, the influencers, the regulators, and the timing it takes to win attention when it counts.`,
  },
  {
    number: "2",
    title: "What PR Actually Is (And Isn't)",
    content: `Public Relations isn't advertising. It's not growth hacking. And it's definitely not dropping your founder into a Twitter thread and hoping for the best.`,
    features: [
      "Being quoted in CoinDesk and TechCrunch",
      "Getting your founder on The Defiant, Unchained, or Bankless",
      "Securing newsletter and podcast features that real people trust",
      "Showing VCs you're legit (before they even open the pitch deck)",
    ],
    conclusion:
      "It's third-party validation. Earned credibility. And in a world flooded with noise, that's your moat.",
  },
  {
    number: "3",
    title: "PR vs Marketing vs Advertising — Know the Stack",
    comparison: [
      {
        icon: MessageSquare,
        type: "Marketing",
        description: "You selling your story",
      },
      { icon: DollarSign, type: "Advertising", description: "You paying to place your story" },
      {
        icon: Award,
        type: "PR",
        description: "Someone else validating your story as worth telling",
      },
    ],
    conclusion:
      "When done right, PR makes you the main character in the crypto narrative. When done poorly, it's a press release no one reads.",
  },
  {
    number: "4",
    title: "Our Framework: How PR3 Actually Delivers",
    content: `We've built launch PR for L1s, DeFi protocols, NFT marketplaces, and Bitcoin treasuries. Our system is refined, proven, and fast.`,
    phases: [
      {
        phase: "Strategic Setup",
        items: [
          "Messaging matrix: what, who, why now",
          "Media targets: crypto-native and mainstream",
          "News hooks: funding, launch, protocol upgrade, DAO vote, etc.",
        ],
      },
      {
        phase: "Narrative Activation",
        items: [
          "Media outreach with founder narrative + traction",
          "Paid placement strategy if applicable",
          "Opportunistic newsjacking of trending headlines",
        ],
      },
      {
        phase: "Optimization & Iteration",
        items: [
          "Double down on winning angles",
          "Course correct in real-time",
          "Consistency beats novelty in media",
        ],
      },
      {
        phase: "Reporting & Next Steps",
        items: [
          "Coverage report with views, reach, sentiment",
          "Ongoing pipeline of placements or transition to in-house",
        ],
      },
    ],
  },
];

const comparisonTable = [
  {
    metric: "Cost",
    earned: "Free to place, fee to pitch",
    paid: "Fixed rate per outlet",
  },
  {
    metric: "Control",
    earned: "Low (editor decides)",
    paid: "High (you approve copy)",
  },
  {
    metric: "Speed",
    earned: "Slower (2–10+ weeks)",
    paid: "Faster (2–7 days)",
  },
  {
    metric: "Credibility",
    earned: "Very high",
    paid: "Medium",
  },
  {
    metric: "Use Case",
    earned: "Launches, founder credibility",
    paid: "SEO, campaign timing, reach",
  },
];

const differentiators = [
  {
    icon: Target,
    title: "Web3-native PR pros with Web2 pedigree",
  },
  {
    icon: Newspaper,
    title: "Global journalist access across crypto and finance",
  },
  {
    icon: TrendingUp,
    title: "Integrated GTM strategy tied to token launches, validator networks, and governance goals",
  },
  {
    icon: Zap,
    title: "No BS. No spam. Just targeted outreach that lands",
  },
];

const proofPoints = [
  "200+ earned media placements for a top-20 token in 6 months",
  "$90M raise coverage landed across Forbes, Fortune, and CoinTelegraph",
  "Founder profiles on Bankless, Unchained, CoinDesk, and Bloomberg",
];

export function Insights() {
  return (
    <section id="insights" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-bg opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-glow-secondary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-primary text-sm font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full bg-primary/10"
          >
            Insights
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold mt-6 mb-6"
          >
            Web3 PR Playbook: <span className="gradient-text">How to Actually Get Noticed</span> in Crypto
          </motion.h2>
        </div>

        {/* Section 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Card className="gradient-border p-8 md:p-12 bg-card">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <div>
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                  Cut Through the Noise—Web3 Doesn't Wait
                </h3>
              </div>
            </div>
            <div className="text-muted-foreground leading-relaxed space-y-4 pl-0 md:pl-16">
              <p>
                Let's be honest: Web3 is relentless. Protocols fork weekly, DAOs vote on absurd memes,
                and someone just launched another frog-themed token that hit a $200M market cap overnight.
                So yeah, getting attention? Not easy.
              </p>
              <p className="font-semibold text-foreground">That's where PR3 comes in.</p>
              <p>
                We're not your Web2 PR holdover. We're Web3-native, but with decades of battle-tested
                experience. We speak Degen and Boardroom. We know the alpha, the influencers, the
                regulators, and the timing it takes to win attention when it counts.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Card className="gradient-border p-8 md:p-12 bg-card">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <div>
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                  What PR Actually Is (And Isn't)
                </h3>
              </div>
            </div>
            <div className="pl-16">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Public Relations isn't advertising. It's not growth hacking. And it's definitely not
                dropping your founder into a Twitter thread and hoping for the best.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 font-semibold">
                PR is about shaping perception. It's about:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Being quoted in CoinDesk and TechCrunch",
                  "Getting your founder on The Defiant, Unchained, or Bankless",
                  "Securing newsletter and podcast features that real people trust",
                  "Showing VCs you're legit (before they even open the pitch deck)",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="text-foreground leading-relaxed font-semibold">
                It's third-party validation. Earned credibility. And in a world flooded with noise,
                that's your moat.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Section 3 - Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Card className="gradient-border p-8 md:p-12 bg-card">
            <div className="flex items-start gap-4 mb-8">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <div>
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                  PR vs Marketing vs Advertising — Know the Stack
                </h3>
              </div>
            </div>
            <div className="pl-0 md:pl-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {[
                  { icon: MessageSquare, type: "Marketing", desc: "You selling your story" },
                  { icon: DollarSign, type: "Advertising", desc: "You paying to place your story" },
                  { icon: Award, type: "PR", desc: "Someone else validating your story as worth telling" },
                ].map((item, index) => (
                  <motion.div
                    key={item.type}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-muted/50 border border-border text-center"
                  >
                    <item.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h4 className="font-display font-bold text-lg mb-2">{item.type}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
              <p className="text-foreground leading-relaxed font-semibold">
                When done right, PR makes you the main character in the crypto narrative. When done
                poorly, it's a press release no one reads.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Section 4 - Framework */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Card className="gradient-border p-8 md:p-12 bg-card">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <div>
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                  Our Framework: How PR3 Actually Delivers
                </h3>
              </div>
            </div>
            <div className="pl-16">
              <p className="text-muted-foreground leading-relaxed mb-8">
                We've built launch PR for L1s, DeFi protocols, NFT marketplaces, and Bitcoin treasuries.
                Our system is refined, proven, and fast.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    phase: "Phase 1: Strategic Setup",
                    items: [
                      "Messaging matrix: what, who, why now",
                      "Media targets: crypto-native and mainstream",
                      "News hooks: funding, launch, protocol upgrade, DAO vote, etc.",
                    ],
                  },
                  {
                    phase: "Phase 2: Narrative Activation",
                    items: [
                      "Media outreach with founder narrative + traction",
                      "Paid placement strategy if applicable",
                      "Opportunistic newsjacking of trending headlines",
                    ],
                  },
                  {
                    phase: "Phase 3: Optimization & Iteration",
                    items: [
                      "Double down on winning angles",
                      "Course correct in real-time",
                      "Consistency beats novelty in media",
                    ],
                  },
                  {
                    phase: "Phase 4: Reporting & Next Steps",
                    items: [
                      "Coverage report with views, reach, sentiment",
                      "Ongoing pipeline of placements or transition to in-house",
                    ],
                  },
                ].map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-muted/30 border border-border"
                  >
                    <h4 className="font-display font-bold text-lg mb-4 text-primary">
                      {phase.phase}
                    </h4>
                    <ul className="space-y-2">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 5 - Earned vs Paid Media Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Card className="gradient-border p-8 md:p-12 bg-card">
            <div className="flex items-start gap-4 mb-8">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">5</span>
              </div>
              <div>
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                  Earned vs Paid Media: Use Both Strategically
                </h3>
              </div>
            </div>
            <div className="pl-0 md:pl-16 overflow-x-auto -mx-6 md:mx-0 px-6 md:px-0">
              <div className="min-w-[500px] md:min-w-0">
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-2">
                  <div className="font-bold text-xs sm:text-sm"></div>
                  <div className="font-bold text-center text-primary text-xs sm:text-sm">Earned Media</div>
                  <div className="font-bold text-center text-primary text-xs sm:text-sm">Paid Media</div>
                </div>
                {comparisonTable.map((row, index) => (
                  <motion.div
                    key={row.metric}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="grid grid-cols-3 gap-2 sm:gap-4 py-3 sm:py-4 border-t border-border"
                  >
                    <div className="font-semibold text-foreground text-xs sm:text-sm">{row.metric}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground text-center">{row.earned}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground text-center">{row.paid}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 6 - What Makes PR3 Different */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Card className="gradient-border p-8 md:p-12 bg-card">
            <div className="flex items-start gap-4 mb-8">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">6</span>
              </div>
              <div>
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                  What Makes PR3 Different
                </h3>
              </div>
            </div>
            <div className="pl-0 md:pl-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {differentiators.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-6 rounded-xl bg-muted/30 border border-border"
                  >
                    <item.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">{item.title}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 7 - Proof of Work */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Card className="gradient-border p-8 md:p-12 bg-card">
            <div className="flex items-start gap-4 mb-8">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">7</span>
              </div>
              <div>
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                  Proof of Work: Our Track Record
                </h3>
              </div>
            </div>
            <div className="pl-16">
              <ul className="space-y-4">
                {proofPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <BarChart3 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Card>
        </motion.div>

        {/* Section 8 - CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="gradient-border p-8 md:p-12 bg-gradient-to-br from-primary/10 to-transparent text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                Want Attention That Drives <span className="gradient-text">Credibility, Capital, and Community</span>?
              </h3>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
                We help protocols, DAOs, token projects, and infrastructure plays go from invisible to
                indispensable. Whether you're pre-launch or scaling post-token, PR3 plugs you into the
                conversation.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground btn-shine"
              >
                <a href="#contact">
                  Let's Talk
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
