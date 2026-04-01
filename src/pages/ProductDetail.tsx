import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, Heart, ArrowLeft } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";
import { formatBDT } from "@/lib/utils";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem, wishlist, toggleWishlist } = useCart();
  const [selectedSize, setSelectedSize] = useState("");

  if (!product) return (
    <main className="pt-24 section-padding text-center py-40">
      <p className="text-muted-foreground">Product not found.</p>
      <Link to="/shop" className="text-accent mt-4 inline-block">Back to Shop</Link>
    </main>
  );

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const isWished = wishlist.includes(product.id);

  return (
    <main className="pt-24 pb-16">
      <div className="section-padding">
        <Link to="/shop" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm font-display tracking-wider uppercase mb-8">
          <ArrowLeft size={14} /> Back to Shop
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="aspect-[3/4] rounded-lg overflow-hidden bg-secondary"
          >
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" width={800} height={1024} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <p className="text-accent font-display text-xs tracking-[0.3em] uppercase mb-2">{product.category}</p>
            <h1 className="font-display text-3xl lg:text-4xl font-bold tracking-tight mb-2">{product.name}</h1>
            <p className="text-2xl font-display font-semibold mb-6">{formatBDT(product.price)}</p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">{product.description}</p>

            <div className="mb-8">
              <p className="font-display text-sm tracking-wider uppercase mb-3">Size</p>
              <div className="flex gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`w-12 h-12 rounded-md border text-sm font-display transition-colors ${selectedSize === s ? "bg-accent text-accent-foreground border-accent" : "border-border hover:border-foreground"}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => addItem(product, selectedSize || product.sizes[0])}
                className="flex-1 bg-accent text-accent-foreground py-4 rounded-md font-display text-sm tracking-widest uppercase flex items-center justify-center gap-2 hover-lift"
              >
                <ShoppingBag size={16} /> Add to Cart
              </button>
              <button
                onClick={() => toggleWishlist(product.id)}
                className="w-14 h-14 border border-border rounded-md flex items-center justify-center hover:border-accent transition-colors"
              >
                <Heart size={18} className={isWished ? "fill-accent text-accent" : ""} />
              </button>
            </div>
          </motion.div>
        </div>

        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="font-display text-2xl font-bold tracking-tight mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductDetail;
