import tshirtBlack from "@/assets/products/tshirt-black.jpg";
import hoodieWhite from "@/assets/products/hoodie-white.jpg";
import cargoBeige from "@/assets/products/cargo-beige.jpg";
import bomberBlack from "@/assets/products/bomber-black.jpg";
import hoodieGreen from "@/assets/products/hoodie-green.jpg";
import joggersGrey from "@/assets/products/joggers-grey.jpg";
import tshirtWhiteGraphic from "@/assets/products/tshirt-white-graphic.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  sizes: string[];
  image: string;
  description: string;
  trending?: boolean;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Essential Oversized Tee",
    price: 45,
    category: "T-Shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: tshirtBlack,
    description: "Premium heavyweight cotton oversized tee. Dropped shoulders, relaxed fit. The foundation of every streetwear wardrobe.",
    trending: true,
    featured: true,
  },
  {
    id: "2",
    name: "Cloud Hoodie — Ivory",
    price: 89,
    category: "Hoodies",
    sizes: ["S", "M", "L", "XL"],
    image: hoodieWhite,
    description: "Ultra-soft fleece hoodie with kangaroo pocket. Oversized silhouette for ultimate comfort and street-ready style.",
    trending: true,
    featured: true,
  },
  {
    id: "3",
    name: "Tactical Cargo — Sand",
    price: 75,
    category: "Pants",
    sizes: ["S", "M", "L", "XL"],
    image: cargoBeige,
    description: "Utility-inspired cargo pants with elastic cuffs. Multiple pockets, adjustable drawstrings. Built for movement.",
    featured: true,
  },
  {
    id: "4",
    name: "Stealth Bomber Jacket",
    price: 120,
    category: "Jackets",
    sizes: ["S", "M", "L", "XL"],
    image: bomberBlack,
    description: "Classic MA-1 bomber silhouette in matte black. Ribbed cuffs, zip pockets. A timeless layer for any season.",
    trending: true,
    featured: true,
  },
  {
    id: "5",
    name: "Forest Hoodie — Pine",
    price: 89,
    category: "Hoodies",
    sizes: ["S", "M", "L", "XL"],
    image: hoodieGreen,
    description: "Deep forest green hoodie in premium fleece. Same legendary fit as the Cloud Hoodie in an earthy colorway.",
    trending: true,
  },
  {
    id: "6",
    name: "Lounge Joggers — Ash",
    price: 65,
    category: "Pants",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: joggersGrey,
    description: "Soft-touch joggers with tapered legs. Elastic waistband and cuffs. From couch to street in seconds.",
  },
  {
    id: "7",
    name: "Graphic Tee — Mandala",
    price: 55,
    category: "T-Shirts",
    sizes: ["S", "M", "L", "XL"],
    image: tshirtWhiteGraphic,
    description: "Statement graphic tee with exclusive KP Zone mandala print. Premium cotton, relaxed fit.",
    trending: true,
  },
];

export const categories = ["All", "T-Shirts", "Hoodies", "Pants", "Jackets"];
