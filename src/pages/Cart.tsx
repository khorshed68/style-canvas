import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const { items, updateQuantity, removeItem, totalPrice, clearCart } = useCart();

  if (items.length === 0) return (
    <main className="pt-24 pb-16 section-padding text-center py-40">
      <ShoppingBag size={48} className="mx-auto text-muted-foreground mb-4" />
      <h1 className="font-display text-2xl font-bold mb-2">Your cart is empty</h1>
      <p className="text-muted-foreground mb-6">Looks like you haven't added anything yet.</p>
      <Link to="/shop" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full font-display text-sm tracking-widest uppercase hover-lift">
        Shop Now
      </Link>
    </main>
  );

  return (
    <main className="pt-24 pb-16">
      <div className="section-padding">
        <Link to="/shop" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm font-display tracking-wider uppercase mb-8">
          <ArrowLeft size={14} /> Continue Shopping
        </Link>
        <h1 className="font-display text-3xl lg:text-4xl font-bold tracking-tight mb-8">Cart ({items.length})</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <motion.div
                key={`${item.product.id}-${item.size}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex gap-4 p-4 glass-card rounded-lg"
              >
                <Link to={`/product/${item.product.id}`} className="w-20 h-24 rounded-md overflow-hidden bg-secondary shrink-0">
                  <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                </Link>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-sm font-medium truncate">{item.product.name}</h3>
                  <p className="text-muted-foreground text-xs mt-0.5">Size: {item.size}</p>
                  <p className="font-display font-semibold text-sm mt-1">${item.product.price}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <button onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)} className="w-7 h-7 border border-border rounded flex items-center justify-center hover:border-foreground transition-colors">
                      <Minus size={12} />
                    </button>
                    <span className="text-sm font-display w-5 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)} className="w-7 h-7 border border-border rounded flex items-center justify-center hover:border-foreground transition-colors">
                      <Plus size={12} />
                    </button>
                    <button onClick={() => removeItem(item.product.id, item.size)} className="ml-auto text-muted-foreground hover:text-destructive transition-colors">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="glass-card rounded-xl p-6 h-fit lg:sticky lg:top-24">
            <h2 className="font-display text-lg font-bold mb-4">Order Summary</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>${totalPrice}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>Free</span></div>
            </div>
            <div className="border-t border-border my-4" />
            <div className="flex justify-between font-display font-bold text-lg">
              <span>Total</span><span>${totalPrice}</span>
            </div>
            <button className="w-full mt-6 bg-accent text-accent-foreground py-3.5 rounded-md font-display text-sm tracking-widest uppercase hover-lift">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
