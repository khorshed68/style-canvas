import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 - $100", min: 50, max: 100 },
  { label: "Over $100", min: 100, max: Infinity },
];

const Shop = () => {
  const [category, setCategory] = useState("All");
  const [priceIdx, setPriceIdx] = useState(0);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const catMatch = category === "All" || p.category === category;
      const priceMatch = p.price >= priceRanges[priceIdx].min && p.price < priceRanges[priceIdx].max;
      return catMatch && priceMatch;
    });
  }, [category, priceIdx]);

  return (
    <main className="pt-24 pb-16">
      <div className="section-padding">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl lg:text-5xl font-bold tracking-tight mb-8"
        >
          Shop
        </motion.h1>

        <div className="flex flex-wrap gap-3 mb-6">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-2 rounded-full text-xs font-display tracking-wider uppercase border transition-colors ${category === c ? "bg-accent text-accent-foreground border-accent" : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"}`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 mb-10">
          {priceRanges.map((r, i) => (
            <button
              key={r.label}
              onClick={() => setPriceIdx(i)}
              className={`px-4 py-2 rounded-full text-xs font-display tracking-wider uppercase border transition-colors ${priceIdx === i ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"}`}
            >
              {r.label}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-muted-foreground text-center py-20">No products match your filters.</p>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Shop;
