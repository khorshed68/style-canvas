import tshirtBlack from "@/assets/products/tshirt-black.jpg";
import hoodieWhite from "@/assets/products/hoodie-white.jpg";
import cargoBeige from "@/assets/products/cargo-beige.jpg";
import bomberBlack from "@/assets/products/bomber-black.jpg";
import hoodieGreen from "@/assets/products/hoodie-green.jpg";
import joggersGrey from "@/assets/products/joggers-grey.jpg";
import tshirtWhiteGraphic from "@/assets/products/tshirt-white-graphic.jpg";
import panjabiRoyalBlue from "@/assets/products/panjabi-royal-blue.svg";
import panjabiIvoryEmbroidered from "@/assets/products/panjabi-ivory-embroidered.svg";
import panjabiBlackMinimal from "@/assets/products/panjabi-black-minimal.svg";
import panjabiSageCotton from "@/assets/products/panjabi-sage-cotton.svg";
import sareeKatanCrimson from "@/assets/products/saree-katan-crimson.svg";
import sareeJamdaniMistWhite from "@/assets/products/saree-jamdani-mist-white.svg";
import sareeMuslinForestGreen from "@/assets/products/saree-muslin-forest-green.svg";
import sareeLinenSandBeige from "@/assets/products/saree-linen-sand-beige.svg";
import sareeGeorgetteMidnightBlack from "@/assets/products/saree-georgette-midnight-black.svg";
import sareeCottonAshGrey from "@/assets/products/saree-cotton-ash-grey.svg";

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
  {
    id: "8",
    name: "Midnight Slip Dress",
    price: 75,
    category: "Dresses",
    sizes: ["XS", "S", "M", "L", "XL"],
    image: bomberBlack,
    description: "Satin-touch slip dress with clean lines and a fluid drape. Built for evening street-glam looks.",
    trending: true,
    featured: true,
  },
  {
    id: "9",
    name: "Ivory Knit Midi Dress",
    price: 89,
    category: "Dresses",
    sizes: ["XS", "S", "M", "L"],
    image: hoodieWhite,
    description: "Soft knit midi dress with stretch comfort and a body-skimming silhouette for all-day wear.",
    featured: true,
  },
  {
    id: "10",
    name: "Sage Utility Shirt Dress",
    price: 95,
    category: "Dresses",
    sizes: ["S", "M", "L", "XL"],
    image: hoodieGreen,
    description: "Utility-inspired shirt dress with structured seams, chest pockets, and a modern oversized fit.",
    trending: true,
  },
  {
    id: "11",
    name: "Sand Belted Maxi Dress",
    price: 120,
    category: "Dresses",
    sizes: ["S", "M", "L", "XL"],
    image: cargoBeige,
    description: "Flowing maxi dress with an adjustable belt and side slit. Minimal look with elevated movement.",
    featured: true,
  },
  {
    id: "12",
    name: "Ash Ribbed Bodycon Dress",
    price: 65,
    category: "Dresses",
    sizes: ["XS", "S", "M", "L"],
    image: joggersGrey,
    description: "Ribbed bodycon dress with breathable stretch fabric. Easy layering piece for every season.",
  },
  {
    id: "13",
    name: "Graphic T-Shirt Dress",
    price: 55,
    category: "Dresses",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: tshirtWhiteGraphic,
    description: "Relaxed oversized t-shirt dress with statement front graphic and street-ready comfort.",
    trending: true,
  },
  {
    id: "14",
    name: "Classic Black Tee Dress",
    price: 45,
    category: "Dresses",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: tshirtBlack,
    description: "Minimal cotton tee dress with a clean cut and soft handfeel. Everyday essential for quick styling.",
  },
  {
    id: "15",
    name: "Forest Wrap Midi Dress",
    price: 89,
    category: "Dresses",
    sizes: ["XS", "S", "M", "L", "XL"],
    image: hoodieGreen,
    description: "Wrap-front midi dress with tie waist and soft drape. Balanced between casual and polished.",
    trending: true,
  },
  {
    id: "16",
    name: "Royal Blue Panjabi",
    price: 120,
    category: "Panjabi",
    sizes: ["M", "L", "XL", "XXL"],
    image: panjabiRoyalBlue,
    description: "Classic festive panjabi with clean collar finish and soft breathable fabric for all-day comfort.",
    trending: true,
    featured: true,
  },
  {
    id: "17",
    name: "Ivory Embroidered Panjabi",
    price: 135,
    category: "Panjabi",
    sizes: ["M", "L", "XL", "XXL"],
    image: panjabiIvoryEmbroidered,
    description: "Elegant embroidered panjabi with refined detailing around placket and collar for special occasions.",
    featured: true,
  },
  {
    id: "18",
    name: "Black Minimal Panjabi",
    price: 110,
    category: "Panjabi",
    sizes: ["M", "L", "XL"],
    image: panjabiBlackMinimal,
    description: "Modern minimal panjabi in deep black with a sleek cut suitable for events and evening wear.",
    trending: true,
  },
  {
    id: "19",
    name: "Sage Cotton Panjabi",
    price: 95,
    category: "Panjabi",
    sizes: ["M", "L", "XL", "XXL"],
    image: panjabiSageCotton,
    description: "Lightweight cotton panjabi in a calm sage tone, tailored for comfort and relaxed styling.",
  },
  {
    id: "20",
    name: "Katan Silk Saree — Crimson",
    price: 150,
    category: "Sarees",
    sizes: ["Free Size"],
    image: sareeKatanCrimson,
    description: "Rich katan silk saree with bold drape and festive shine, ideal for wedding and celebration looks.",
    trending: true,
    featured: true,
  },
  {
    id: "21",
    name: "Jamdani Saree — Mist White",
    price: 140,
    category: "Sarees",
    sizes: ["Free Size"],
    image: sareeJamdaniMistWhite,
    description: "Handloom-inspired jamdani style with airy texture and intricate motif work for timeless elegance.",
    featured: true,
  },
  {
    id: "22",
    name: "Muslin Saree — Forest Green",
    price: 130,
    category: "Sarees",
    sizes: ["Free Size"],
    image: sareeMuslinForestGreen,
    description: "Soft muslin saree with flowing drape and subtle border design for graceful day-to-evening wear.",
  },
  {
    id: "23",
    name: "Linen Saree — Sand Beige",
    price: 125,
    category: "Sarees",
    sizes: ["Free Size"],
    image: sareeLinenSandBeige,
    description: "Breathable linen saree with minimal woven stripes and a contemporary neutral palette.",
    trending: true,
  },
  {
    id: "24",
    name: "Georgette Saree — Midnight Black",
    price: 145,
    category: "Sarees",
    sizes: ["Free Size"],
    image: sareeGeorgetteMidnightBlack,
    description: "Light georgette saree with fluid movement and a polished black finish for statement styling.",
    trending: true,
  },
  {
    id: "25",
    name: "Cotton Saree — Ash Grey",
    price: 99,
    category: "Sarees",
    sizes: ["Free Size"],
    image: sareeCottonAshGrey,
    description: "Everyday cotton saree with soft texture and easy drape, designed for long comfortable wear.",
  },
];

export const categories = ["All", "T-Shirts", "Hoodies", "Pants", "Jackets", "Dresses", "Panjabi", "Sarees"];
