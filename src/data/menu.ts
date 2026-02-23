export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Beef Specials' | 'Fries & Sides' | 'Main Dishes' | 'BBQ & Grilled' | 'Street Food' | 'Breads' | 'Desserts' | 'Drinks';
  image: string;
  rating: number;
  reviews: number;
}

export const MENU_DATA: MenuItem[] = [
  // Beef Specials
  {
    id: 'bs1',
    name: 'Royal Beef Karahi',
    description: 'Premium beef cuts cooked with fresh tomatoes and green chilies.',
    price: 1800,
    category: 'Beef Specials',
    image: 'https://picsum.photos/seed/beef-curry/800/600',
    rating: 4.9,
    reviews: 128
  },
  {
    id: 'bs2',
    name: 'Beef Chapli Platter',
    description: 'Four large beef chapli kebabs served with raita and salad.',
    price: 1200,
    category: 'Beef Specials',
    image: 'https://picsum.photos/seed/kabab-platter/800/600',
    rating: 4.8,
    reviews: 95
  },

  // Main Dishes
  {
    id: 'm1',
    name: 'Special Biryani',
    description: 'Aromatic basmati rice cooked with tender meat and traditional spices.',
    price: 450,
    category: 'Main Dishes',
    image: 'https://picsum.photos/seed/spicy-biryani/800/600',
    rating: 4.8,
    reviews: 124
  },
  {
    id: 'm2',
    name: 'Chicken Karahi',
    description: 'Traditional wok-cooked chicken with ginger, garlic, and fresh tomatoes.',
    price: 1200,
    category: 'Main Dishes',
    image: 'https://picsum.photos/seed/chicken-karahi/800/600',
    rating: 4.9,
    reviews: 89
  },
  {
    id: 'm3',
    name: 'Mutton Karahi',
    description: 'Succulent mutton pieces cooked in a traditional karahi with rich spices.',
    price: 2500,
    category: 'Main Dishes',
    image: 'https://picsum.photos/seed/mutton-stew/800/600',
    rating: 4.7,
    reviews: 56
  },
  {
    id: 'm4',
    name: 'Beef Nihari',
    description: 'Slow-cooked beef shank in a thick, spicy gravy. A breakfast classic.',
    price: 600,
    category: 'Main Dishes',
    image: 'https://picsum.photos/seed/beef-nihari/800/600',
    rating: 4.9,
    reviews: 210
  },
  {
    id: 'm5',
    name: 'Special Haleem',
    description: 'A slow-cooked blend of lentils, wheat, and meat, garnished with ginger and lemon.',
    price: 450,
    category: 'Main Dishes',
    image: 'https://picsum.photos/seed/haleem-bowl/800/600',
    rating: 4.6,
    reviews: 78
  },
  {
    id: 'm6',
    name: 'Kachay Beef Pulao',
    description: 'Our signature slow-cooked beef pulao with aromatic spices.',
    price: 500,
    category: 'Main Dishes',
    image: 'https://picsum.photos/seed/pulao-rice/800/600',
    rating: 5.0,
    reviews: 342
  },
  {
    id: 'm7',
    name: 'Chicken Qorma',
    description: 'Rich and creamy chicken curry cooked with yogurt and fried onions.',
    price: 800,
    category: 'Main Dishes',
    image: 'https://picsum.photos/seed/chicken-qorma/800/600',
    rating: 4.5,
    reviews: 45
  },

  // BBQ & Grilled
  {
    id: 'b1',
    name: 'Seekh Kabab',
    description: 'Minced meat skewers seasoned with herbs and grilled over charcoal.',
    price: 250,
    category: 'BBQ & Grilled',
    image: 'https://picsum.photos/seed/seekh-kabab/800/600',
    rating: 4.8,
    reviews: 156
  },
  {
    id: 'b2',
    name: 'Chicken Tikka',
    description: 'Spicy marinated chicken pieces grilled to perfection.',
    price: 600,
    category: 'BBQ & Grilled',
    image: 'https://picsum.photos/seed/chicken-tikka/800/600',
    rating: 4.7,
    reviews: 92
  },
  {
    id: 'b3',
    name: 'Malai Boti',
    description: 'Creamy and mild chicken pieces grilled over charcoal.',
    price: 750,
    category: 'BBQ & Grilled',
    image: 'https://picsum.photos/seed/malai-boti/800/600',
    rating: 4.9,
    reviews: 112
  },
  {
    id: 'b4',
    name: 'Chapli Kebab',
    description: 'Traditional Pashtun-style minced meat patty with pomegranate seeds.',
    price: 350,
    category: 'BBQ & Grilled',
    image: 'https://picsum.photos/seed/chapli-kabab/800/600',
    rating: 4.8,
    reviews: 84
  },

  // Street Food
  {
    id: 's1',
    name: 'Samosa',
    description: 'Crispy pastry filled with spiced potatoes or minced meat.',
    price: 60,
    category: 'Street Food',
    image: 'https://picsum.photos/seed/samosa-snack/800/600',
    rating: 4.4,
    reviews: 230
  },
  {
    id: 's2',
    name: 'Pakora Plate',
    description: 'Assorted vegetable fritters fried in gram flour batter.',
    price: 200,
    category: 'Street Food',
    image: 'https://picsum.photos/seed/pakora-fritters/800/600',
    rating: 4.3,
    reviews: 145
  },
  {
    id: 's3',
    name: 'Dahi Chaat',
    description: 'A mix of chickpeas, potatoes, and yogurt with tangy chutneys.',
    price: 250,
    category: 'Street Food',
    image: 'https://picsum.photos/seed/dahi-chaat/800/600',
    rating: 4.6,
    reviews: 167
  },
  {
    id: 's4',
    name: 'Gol Gappa',
    description: 'Crispy hollow puris filled with spicy water and chickpeas.',
    price: 180,
    category: 'Street Food',
    image: 'https://picsum.photos/seed/gol-gappa/800/600',
    rating: 4.7,
    reviews: 198
  },
  {
    id: 's5',
    name: 'Bun Kebab',
    description: 'Traditional street-style burger with a spicy lentil or meat patty.',
    price: 250,
    category: 'Street Food',
    image: 'https://picsum.photos/seed/bun-kebab/800/600',
    rating: 4.5,
    reviews: 134
  },

  // Fries & Sides
  {
    id: 'fs1',
    name: 'Masala Fries',
    description: 'Crispy golden fries tossed in our secret spice blend.',
    price: 350,
    category: 'Fries & Sides',
    image: 'https://picsum.photos/seed/masala-fries/800/600',
    rating: 4.7,
    reviews: 215
  },
  {
    id: 'fs2',
    name: 'Cheese Loaded Fries',
    description: 'Fries smothered in melted cheddar and topped with jalapeños.',
    price: 550,
    category: 'Fries & Sides',
    image: 'https://picsum.photos/seed/cheese-fries/800/600',
    rating: 4.9,
    reviews: 187
  },

  // Breads
  {
    id: 'br1',
    name: 'Tandoori Roti',
    description: 'Freshly baked whole wheat bread from the tandoor.',
    price: 30,
    category: 'Breads',
    image: 'https://picsum.photos/seed/tandoori-roti/800/600',
    rating: 4.2,
    reviews: 450
  },
  {
    id: 'br2',
    name: 'Khamiri Naan',
    description: 'Soft and fluffy leavened bread baked in a clay oven.',
    price: 40,
    category: 'Breads',
    image: 'https://picsum.photos/seed/fresh-naan/800/600',
    rating: 4.5,
    reviews: 380
  },
  {
    id: 'br3',
    name: 'Garlic Naan',
    description: 'Naan topped with fresh garlic and butter.',
    price: 150,
    category: 'Breads',
    image: 'https://picsum.photos/seed/garlic-naan/800/600',
    rating: 4.8,
    reviews: 210
  },

  // Desserts
  {
    id: 'd1',
    name: 'Matka Kheer',
    description: 'Traditional rice pudding served in a clay pot.',
    price: 250,
    category: 'Desserts',
    image: 'https://picsum.photos/seed/matka-kheer/800/600',
    rating: 4.7,
    reviews: 145
  },
  {
    id: 'd2',
    name: 'Gulab Jamun',
    description: 'Soft milk-solid balls soaked in rose-scented syrup.',
    price: 60,
    category: 'Desserts',
    image: 'https://picsum.photos/seed/gulab-jamun/800/600',
    rating: 4.9,
    reviews: 320
  },
  {
    id: 'd3',
    name: 'Special Jalebi',
    description: 'Crispy, syrup-filled swirls of deep-fried batter.',
    price: 800,
    category: 'Desserts',
    image: 'https://picsum.photos/seed/crispy-jalebi/800/600',
    rating: 4.6,
    reviews: 189
  },
  {
    id: 'd4',
    name: 'Ras Malai',
    description: 'Soft cheese patties in a creamy, cardamom-flavored milk.',
    price: 180,
    category: 'Desserts',
    image: 'https://picsum.photos/seed/ras-malai/800/600',
    rating: 4.8,
    reviews: 156
  },

  // Drinks
  {
    id: 'dr1',
    name: 'Sweet Lassi',
    description: 'Traditional yogurt-based drink, served chilled.',
    price: 250,
    category: 'Drinks',
    image: 'https://picsum.photos/seed/sweet-lassi/800/600',
    rating: 4.7,
    reviews: 210
  },
  {
    id: 'dr2',
    name: 'Rooh Afza',
    description: 'Refreshing rose-flavored summer drink.',
    price: 150,
    category: 'Drinks',
    image: 'https://picsum.photos/seed/rooh-afza/800/600',
    rating: 4.4,
    reviews: 98
  },
  {
    id: 'dr3',
    name: 'Karak Chai',
    description: 'Strong, milky tea brewed with traditional spices.',
    price: 120,
    category: 'Drinks',
    image: 'https://picsum.photos/seed/karak-chai/800/600',
    rating: 4.9,
    reviews: 450
  }
];
