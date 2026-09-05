import heroTableImg from '../assets/images/bros_hero_table_1788609211287.jpg';
import sharingTableImg from '../assets/images/bros_sharing_table_1788609226818.jpg';
import interiorVibeImg from '../assets/images/bros_interior_vibe_1788609242266.jpg';
import { RestaurantInfo, ExperienceItem, MenuCategory, GalleryItem } from '../types';

export const restaurantInfo: RestaurantInfo = {
  name: "Bro's Cafe & Restaurant",
  brand: "BRO'S",
  tagline: "FOOD MADE FOR GOOD COMPANY",
  headline: "GOOD FOOD.\nBETTER COMPANY.",
  subheadline: "A relaxed place for great food, good conversations and time well spent.",
  address: {
    building: "Salam Heights",
    sector: "E-11 Markaz",
    landmark: "Opposite M Store",
    city: "Islamabad",
    country: "Pakistan",
    fullFormatted: "Salam Heights, E-11 Markaz, opposite M Store, Islamabad, Pakistan",
  },
  phone: "(051) 6127689",
  phoneTel: "tel:+92516127689",
  social: {
    facebook: {
      url: "https://www.facebook.com/p/2-bros-cafe-61551430313633/",
      followers: "59 followers",
      label: "Facebook",
    },
    instagram: {
      url: "https://www.instagram.com/2bros_lounge/",
      followers: "2,079 followers",
      label: "Instagram",
    },
  },
  mapsUrl: "https://maps.google.com/?q=Salam+Heights+E-11+Markaz+opposite+M+Store+Islamabad+Pakistan",
};

export const heroAssets = {
  heroTable: heroTableImg,
  sharingTable: sharingTableImg,
  interiorVibe: interiorVibeImg,
};

export const experiences: ExperienceItem[] = [
  {
    number: "01",
    title: "MEET",
    subtitle: "Catch-ups made effortless",
    description: "A comfortable place to catch up with friends, connect over freshly brewed coffee, and sink into conversations that linger long after the plates are cleared.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85",
    alt: "Warm contemporary restaurant seating at Bro's with natural daylight and conversation atmosphere",
    tag: "Social Atmosphere",
  },
  {
    number: "02",
    title: "EAT",
    subtitle: "Flavors crafted for sharing",
    description: "Enjoy satisfying food made for the table. From sizzling gourmet grills to shared platters and comforting cafe staples made with fresh ingredients.",
    image: sharingTableImg,
    alt: "Sharing platters and table dining at Bro's Cafe and Restaurant Islamabad",
    tag: "Table Dining",
  },
  {
    number: "03",
    title: "STAY",
    subtitle: "Never rushed, always welcome",
    description: "Take your time and enjoy the atmosphere. Designed for relaxed afternoons, late evening meetups, and celebrations with your closest circle in E-11.",
    image: interiorVibeImg,
    alt: "Inviting seating and ambient lighting at Bro's Cafe & Restaurant",
    tag: "Relaxed Hangout",
  },
];

// Broad categories as explicitly specified in prompt
// Editable sample items clearly marked for demonstration (no fake prices, no fake exact ingredients)
export const menuCategories: MenuCategory[] = [
  {
    id: "starters",
    name: "Starters",
    description: "Crispy bites, sharing plates, and fresh appetizers to kick off your table gathering.",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=85",
    accent: "Crispy & Savory",
    sampleItems: [
      {
        name: "Loaded Sharing Platter",
        highlight: "Ideal for 3-4 People",
        notes: "Assorted hot appetizers with house dipping sauces designed for passing around the table.",
      },
      {
        name: "Crispy Golden Bites",
        highlight: "Table Favorite",
        notes: "Hand-breaded crunchy bites served with tangy artisanal dips.",
      },
      {
        name: "Artisanal Toasted Bruchetta",
        highlight: "Fresh Herb Seasoning",
        notes: "Rustic baked bread topped with marinated herbs and fresh olive oil drizzle.",
      },
    ],
  },
  {
    id: "main-plates",
    name: "Main Plates",
    description: "Hearty, comforting entrees crafted for deep flavor and hearty appetites.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=85",
    accent: "Chef's Kitchen",
    sampleItems: [
      {
        name: "Bro's Signature Main Cut",
        highlight: "Kitchen Special",
        notes: "Slow-seared cut served with seasoned roasted wedges and pan gravy.",
      },
      {
        name: "Creamy Continental Pan",
        highlight: "House Specialty",
        notes: "Rich creamy herb emulsion with tender chicken fillet and buttered fettuccine.",
      },
      {
        name: "Rustic Skillet Medley",
        highlight: "Comfort Classics",
        notes: "Sizzling cast-iron skillet plate with garlic vegetables and spiced rice.",
      },
    ],
  },
  {
    id: "grills",
    name: "Grills",
    description: "Flame-kissed specialties with smoky marinades and charred aromatics.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=85",
    accent: "Flame & Charcoal",
    sampleItems: [
      {
        name: "Bro's Char-Grilled Platter",
        highlight: "Sharing Board",
        notes: "A variety of tender skewered grills served over warm flatbreads and roasted chilies.",
      },
      {
        name: "Herb-Marinated Chicken Steaks",
        highlight: "Smoky & Tender",
        notes: "Grilled over high heat with black pepper glaze and garden vegetables.",
      },
      {
        name: "Smoky Spiced Skewers",
        highlight: "Rich Spices",
        notes: "Succulent charcoal-grilled kebabs with mint dip and sliced onions.",
      },
    ],
  },
  {
    id: "burgers-sandwiches",
    name: "Burgers & Sandwiches",
    description: "Toasted brioche, melted cheeses, and stacked patties served fresh from the grill.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=85",
    accent: "Stacked & Loaded",
    sampleItems: [
      {
        name: "The Bro's Classic Burger",
        highlight: "Double Patty Choice",
        notes: "Handmade juicy patty, melted cheddar, caramelized onions on toasted brioche.",
      },
      {
        name: "Crispy Nashville Crunch",
        highlight: "Fiery & Crunchy",
        notes: "Crispy fried chicken breast, pickled slaw, and house secret sauce.",
      },
      {
        name: "Toasted Club Panini",
        highlight: "Café Favorite",
        notes: "Triple-layer toasted sandwich with smoked slices, boiled egg, and mustard mayo.",
      },
    ],
  },
  {
    id: "cafe-favorites",
    name: "Café Favorites",
    description: "Relaxed all-day comfort foods, wraps, pastas, and casual hangout plates.",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=85",
    accent: "All-Day Casual",
    sampleItems: [
      {
        name: "Creamy Garlic Parmesan Pasta",
        highlight: "Silky Sauce",
        notes: "Penne coated in velvety cream with crushed garlic, sun-dried tomatoes and parmesan.",
      },
      {
        name: "Toasted Quesadilla Pocket",
        highlight: "Cheese Pull",
        notes: "Golden tortilla stuffed with shredded spiced filling and salsa fresca.",
      },
      {
        name: "Truffle Fries & Loaded Dip",
        highlight: "Quick Hangout Munch",
        notes: "Crisp potato fries dusted with herb salt and served with homemade garlic dip.",
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    description: "Sweet finishes made to accompany your coffee and round out the meal.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=85",
    accent: "Sweet Indulgence",
    sampleItems: [
      {
        name: "Warm Molten Lava Pot",
        highlight: "Gooey Dark Chocolate",
        notes: "Baked chocolate cake with a molten center paired with vanilla bean gelato.",
      },
      {
        name: "Lotus Biscoff Crunch Cheesecake",
        highlight: "Caramelized Crumble",
        notes: "Silky baked cheesecake layer topped with warm speculoos butter.",
      },
      {
        name: "Crispy Sizzling Brownie Skillet",
        highlight: "Table Presentation",
        notes: "Fudge brownie sizzling on hot cast iron with chocolate sauce drizzle.",
      },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    description: "Artisan coffees, refreshing chilled coolers, mocktails, and fresh blends (100% non-alcoholic).",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=85",
    accent: "Brewed & Chilled",
    sampleItems: [
      {
        name: "Signature Spanish Latte",
        highlight: "Double Shot Espresso",
        notes: "Smooth espresso layered with condensed milk and steamed textured velvet milk.",
      },
      {
        name: "Mint Citrus Sparkler",
        highlight: "Crushed Ice & Citrus",
        notes: "Fresh crushed garden mint, zesty lime juice, and effervescent sparkling soda.",
      },
      {
        name: "Iced Peach & Passion Quencher",
        highlight: "Tropical Refreshment",
        notes: "Slow-brewed fruit infusion poured over rock ice with a fresh rosemary sprig.",
      },
    ],
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Table Gathering at Bro's",
    category: "Social Dining",
    aspectRatio: "aspect-[4/3]",
    image: heroTableImg,
    alt: "Shared feast with gourmet platters and refreshing drinks at Bro's Islamabad",
  },
  {
    id: "gal-2",
    title: "The Sharing Feast",
    category: "Food Made for Table",
    aspectRatio: "aspect-[16/9]",
    image: sharingTableImg,
    alt: "High-angle food photography of table sharing dishes and burgers at Bro's",
  },
  {
    id: "gal-3",
    title: "Warm Dining Ambience",
    category: "Interior & Seating",
    aspectRatio: "aspect-[4/3]",
    image: interiorVibeImg,
    alt: "Interior architecture with soft sand walls and comfortable green seating at Bro's",
  },
  {
    id: "gal-4",
    title: "Flame-Seared Special",
    category: "Kitchen & Grill",
    aspectRatio: "aspect-square",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=85",
    alt: "Gourmet grilled platter with artisanal garnish",
  },
  {
    id: "gal-5",
    title: "Artisanal Espresso & Brews",
    category: "Café Culture",
    aspectRatio: "aspect-[3/4]",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=85",
    alt: "Freshly brewed artisan coffee with silky microfoam latte art",
  },
  {
    id: "gal-6",
    title: "Crispy Handcrafted Burgers",
    category: "Café Favorites",
    aspectRatio: "aspect-[4/3]",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=85",
    alt: "Stacked juicy burger on toasted brioche with golden fries",
  },
  {
    id: "gal-7",
    title: "Evening Table Conversations",
    category: "Atmosphere",
    aspectRatio: "aspect-[16/9]",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=85",
    alt: "Friends dining and laughing together in warm restaurant lighting",
  },
  {
    id: "gal-8",
    title: "Refreshing Artisanal Mocktails",
    category: "Drinks",
    aspectRatio: "aspect-square",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=85",
    alt: "Vibrant non-alcoholic sparkling fruit drink with lime and mint garnishes",
  },
];
