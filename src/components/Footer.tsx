import { Link } from "react-router-dom";
import { Instagram, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border mt-20">
    <div className="section-padding py-12 lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <h3 className="font-display text-2xl font-bold tracking-wider mb-2">
            KP <span className="text-gradient">ZONE</span>
          </h3>
          <p className="text-muted-foreground font-body text-sm max-w-sm">
            Wear Your Identity. Premium streetwear for the bold, the expressive, and the unapologetically you.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors"><Twitter size={20} /></a>
          </div>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold tracking-widest uppercase mb-4">Shop</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/shop" className="hover:text-foreground transition-colors">All Products</Link>
            <Link to="/shop" className="hover:text-foreground transition-colors">New Arrivals</Link>
            <Link to="/shop" className="hover:text-foreground transition-colors">Best Sellers</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold tracking-widest uppercase mb-4">Company</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/about" className="hover:text-foreground transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border mt-10 pt-6 text-center text-xs text-muted-foreground">
        © 2026 KP Zone. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
