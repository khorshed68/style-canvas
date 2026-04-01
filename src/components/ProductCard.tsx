import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, ShoppingBag } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatBDT } from "@/lib/utils";

const ProductCard = ({ product, index = 0 }: { product: Product; index?: number }) => {
  const { addItem, wishlist, toggleWishlist } = useCart();
  const isWished = wishlist.includes(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="group"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden rounded-lg bg-secondary aspect-[3/4]">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            width={800}
            height={1024}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
            <button
              onClick={(e) => { e.preventDefault(); addItem(product, product.sizes[1] || product.sizes[0]); }}
              className="flex-1 bg-primary text-primary-foreground py-2.5 rounded-md text-xs font-display tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <ShoppingBag size={14} /> Add to Cart
            </button>
          </div>
          <button
            onClick={(e) => { e.preventDefault(); toggleWishlist(product.id); }}
            className="absolute top-3 right-3 p-2 rounded-full glass-card hover:bg-accent/20 transition-colors"
          >
            <Heart size={16} className={isWished ? "fill-accent text-accent" : ""} />
          </button>
          {product.trending && (
            <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-[10px] font-display tracking-wider uppercase px-2.5 py-1 rounded-full">
              Trending
            </span>
          )}
        </div>
      </Link>
      <div className="mt-3">
        <h3 className="font-display text-sm font-medium tracking-wide">{product.name}</h3>
        <p className="text-muted-foreground text-sm mt-0.5">{formatBDT(product.price)}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
