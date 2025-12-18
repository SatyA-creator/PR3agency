import { motion } from "framer-motion";
import { Twitter, Linkedin, MessageCircle } from "lucide-react";

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/pr3agency", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/clairecblockchain/", label: "LinkedIn" },
  { icon: MessageCircle, href: "https://wa.me/4407943774236", label: "WhatsApp" },
];

const footerLinks = [
  { label: "Home", href: "#home" },
   { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Case Study", href: "#case-study" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="#home" className="inline-block">
              <span className="font-display text-2xl font-bold">
                PR<span className="text-primary">3</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm mt-2">
              The Comms Layer for Web3
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-2"
          >
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center md:justify-end gap-3"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-all group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 pt-8 border-t border-border text-center"
        >
          <p className="text-sm text-muted-foreground">
            Copyright © {new Date().getFullYear()} PR3 - All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}