import { motion } from "framer-motion";
import aboutImg from "@/assets/about-lifestyle.jpg";

const About = () => (
  <main className="pt-24 pb-16">
    <div className="section-padding">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
        <p className="text-accent font-display text-sm tracking-[0.3em] uppercase mb-4">Our Story</p>
        <h1 className="font-display text-4xl lg:text-6xl font-bold tracking-tight leading-tight mb-8">
          More than fashion.<br />It's <span className="text-gradient">identity</span>.
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-12 rounded-2xl overflow-hidden aspect-[16/7]"
      >
        <img src={aboutImg} alt="KP Zone lifestyle" loading="lazy" width={1280} height={800} className="w-full h-full object-cover" />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 mt-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-2xl font-bold mb-4">Vision</h2>
          <p className="text-muted-foreground font-body leading-relaxed">
            To become the most expressive streetwear brand for Gen Z — where every piece tells a story, and every outfit is a statement of who you are.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <h2 className="font-display text-2xl font-bold mb-4">Mission</h2>
          <p className="text-muted-foreground font-body leading-relaxed">
            We craft premium, sustainably-made streetwear that empowers young people to wear their identity with confidence. No compromises on quality, no limits on self-expression.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 glass-card rounded-2xl p-8 lg:p-12"
      >
        <h2 className="font-display text-2xl font-bold mb-4">The Beginning</h2>
        <p className="text-muted-foreground font-body leading-relaxed max-w-2xl">
          KP Zone started as a sketch on a notebook — a dream to create clothing that doesn't just cover the body but expresses the soul. Founded by creatives who grew up on skate parks and city streets, we understand that fashion is the first language of identity. Every stitch, every colorway, every silhouette is designed to make you feel like the most authentic version of yourself.
        </p>
      </motion.div>
    </div>
  </main>
);

export default About;
