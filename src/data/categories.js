import cakeToolsImg from "../assets/category_cake_tools.png";
import bakingAccImg from "../assets/category_baking_accessories.png";
import giftsImg from "../assets/category_gifts.png";
import toysImg from "../assets/category_toys.png";
import chocolatesImg from "../assets/category_chocolates.png";
import craftItemsImg from "../assets/category_craft_items.png";

// High quality retail shopping basket image for Other Products category
const otherProductsImg = "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=500&auto=format&fit=crop&q=80";

export const categories = [
  {
    id: "cake-tools",
    name: "Cake Tools",
    count: "120+ Products",
    image: cakeToolsImg,
    description: "Cake turntables, nozzles, cake boards, cutters & molds."
  },
  {
    id: "baking-accessories",
    name: "Baking Accessories",
    count: "85+ Products",
    image: bakingAccImg,
    description: "Muffin trays, spatulas, whisk, measuring spoons & cups."
  },
  {
    id: "gifts",
    name: "Gifts",
    count: "95+ Products",
    image: giftsImg,
    description: "Gift boxes, gift wraps, custom surprise packages & hampers."
  },
  {
    id: "toys",
    name: "Toys",
    count: "60+ Products",
    image: toysImg,
    description: "Plush teddy bears, kids learning toys, dolls & play sets."
  },
  {
    id: "chocolates-sweets",
    name: "Chocolates & Sweets",
    count: "70+ Products",
    image: chocolatesImg,
    description: "Imported chocolates, sweets boxes, party treats & candies."
  },
  {
    id: "craft-items",
    name: "Craft Items",
    count: "50+ Products",
    image: craftItemsImg,
    description: "DIY craft tools, ribbon rolls, glitter, paint & stationeries."
  },
  {
    id: "other-products",
    name: "Other Products",
    count: "110+ Products",
    image: otherProductsImg,
    description: "Party items, kitchen utility, cosmetic organizers & more."
  }
];
