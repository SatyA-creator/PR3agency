import { motion } from "framer-motion";

const clients = [
  { name: "IBM", logo: "https://img1.wsimg.com/isteam/ip/f1002561-3d42-40f9-9ebe-f6606a14bfce/IBM_logo_PNG2.png/:/rs=h:100,cg:true,m/fx-gs" },
  { name: "Honda", logo: "https://img1.wsimg.com/isteam/ip/f1002561-3d42-40f9-9ebe-f6606a14bfce/Honda_logo_PNG1.png/:/rs=h:100,cg:true,m/fx-gs" },
  { name: "Enabl3 AI", logo: "https://img1.wsimg.com/isteam/ip/f1002561-3d42-40f9-9ebe-f6606a14bfce/Screenshot%202025-12-12%20at%2014.17.31.png/:/rs=h:100,cg:true,m/fx-gs" },
  { name: "Geeq", logo: "https://img1.wsimg.com/isteam/ip/f1002561-3d42-40f9-9ebe-f6606a14bfce/Screenshot%202025-12-12%20at%2014.21.42.png/:/rs=h:100,cg:true,m/fx-gs" },
  { name: "Denario", logo: "https://img1.wsimg.com/isteam/ip/f1002561-3d42-40f9-9ebe-f6606a14bfce/Screenshot%202025-12-12%20at%2014.13.24.png/:/rs=h:100,cg:true,m/fx-gs" },
  { name: "FlipNpik", logo: "https://img1.wsimg.com/isteam/ip/f1002561-3d42-40f9-9ebe-f6606a14bfce/Screenshot%202025-12-12%20at%2014.14.27.png/:/rs=h:100,cg:true,m/fx-gs" },
  { name: "MindWaveDAO", logo: "https://img1.wsimg.com/isteam/ip/f1002561-3d42-40f9-9ebe-f6606a14bfce/Screenshot%202025-12-05%20at%2019.37.48.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true/fx-gs" },
  { name: "DogLibre", logo: "https://img1.wsimg.com/isteam/ip/f1002561-3d42-40f9-9ebe-f6606a14bfce/Screenshot%202025-12-05%20at%2019.28.17.png/:/rs=h:100,cg:true,m/fx-gs" },
  { name: "Crypterium", logo: "https://img1.wsimg.com/isteam/ip/f1002561-3d42-40f9-9ebe-f6606a14bfce/crypterium-crpt-seeklogo.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true/fx-gs" },
  { name: "Minima", logo: "https://img1.wsimg.com/isteam/ip/f1002561-3d42-40f9-9ebe-f6606a14bfce/256px-Minima_Logo.png/:/rs=h:100,cg:true,m/fx-gs" },
  { name: "Swissborg", logo: "https://img1.wsimg.com/isteam/ip/f1002561-3d42-40f9-9ebe-f6606a14bfce/Swissborg-logo.png/:/rs=h:100,cg:true,m/fx-gs" },
  { name: "Quranium", logo: "https://img1.wsimg.com/isteam/ip/f1002561-3d42-40f9-9ebe-f6606a14bfce/Quranium%20-%20Logo_Purple.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true/fx-gs" },
  { name: "Polygon", logo: "https://img1.wsimg.com/isteam/ip/f1002561-3d42-40f9-9ebe-f6606a14bfce/512px-Polygon_blockchain_logo.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true/fx-gs" },
];

export function ClientsMarquee() {
  return (
    <section id="clients" className="py-16 border-y border-border/50 bg-card/30">
      <div className="container mx-auto px-6 mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm uppercase tracking-widest"
        >
          10 Years in Web3, Built on 20 Years Leading PR for Global Big Tech
        </motion.p>
      </div>

      <div className="marquee">
        <div className="marquee-content">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 h-12 w-32 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
