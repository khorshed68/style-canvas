import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const featuredProducts = products.filter((p) => p.featured);
const trendingProducts = products.filter((p) => p.trending);
const heroPortrait = "public/hero-portrait.jpg";

const Index = () => (
  <main>
    {/* Hero */}
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroPortrait}
        alt="KP Zone hero portrait"
        className="absolute inset-0 w-full h-full object-cover object-[center_18%]"
        width={1920}
        height={1024}
        onError={(e) => {
          e.currentTarget.src = heroBanner;
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
      <div className="absolute right-3 sm:right-6 lg:right-10 bottom-4 sm:bottom-8 lg:bottom-10 z-10 text-right px-2 sm:px-0">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4"
        >
          New Collection 2026
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none"
        >
          WEAR YOUR<br />
          <span className="text-gradient">IDENTITY</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8"
        >
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded-full font-display text-sm tracking-widest uppercase hover-lift"
          >
            Shop Now <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Featured */}
    <section className="section-padding py-20">
      <div className="flex items-center justify-between mb-10">
        <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">Featured</h2>
        <Link to="/shop" className="text-sm text-muted-foreground hover:text-accent transition-colors font-display tracking-wider uppercase flex items-center gap-1">
          View All <ArrowRight size={14} />
        </Link>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {featuredProducts.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>
    </section>

    {/* Brand Story Preview */}
    <section className="section-padding py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-display text-sm tracking-[0.3em] uppercase mb-4">Our Story</p>
          <h2 className="font-display text-3xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
            Born from the streets.<br />Built for the <span className="text-gradient">bold</span>.
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-6">
            KP Zone isn't just a brand — it's a movement. We design for the generation that refuses to blend in, creating pieces that speak louder than words.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full font-display text-sm tracking-widest uppercase hover:border-accent hover:text-accent transition-colors">
            Read More <ArrowRight size={14} />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          {trendingProducts.slice(0, 4).map((p) => (
            <Link key={p.id} to={`/product/${p.id}`} className="aspect-square rounded-lg overflow-hidden">
              <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </Link>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Newsletter */}
    <section className="section-padding py-20">
      <div className="glass-card rounded-2xl p-8 lg:p-16 text-center">
        <h2 className="font-display text-2xl lg:text-4xl font-bold tracking-tight mb-4">
          Join the <span className="text-gradient">Movement</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm">Get early access to drops, exclusive offers, and style inspiration straight to your inbox.</p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 bg-secondary border border-border rounded-full px-5 py-3 text-sm font-body focus:outline-none focus:border-accent"
          />
          <button className="bg-accent text-accent-foreground px-6 py-3 rounded-full font-display text-sm tracking-wider uppercase hover-lift">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  </main>
);

export default Index;
