export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: 'Beef Specials' | 'Fries & Sides' | 'Main Dishes' | 'BBQ & Grilled' | 'Street Food' | 'Breads' | 'Desserts' | 'Drinks';
  image: string;
  rating: number;
  reviews: number;
}

export const MENU_DATA: MenuItem[] = [
  // Beef Specials
  {
    id: 'bs1',
    name: 'Royal Beef Curry',
    description: 'Premium beef cuts slow-cooked with fresh tomatoes, ginger, and aromatic spices.',
    price: 1600,
    originalPrice: 1800,
    category: 'Beef Specials',
    image: 'https://images.unsplash.com/photo-1512132411229-c30391241dd8?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    reviews: 128
  },
  {
    id: 'bs2',
    name: 'Beef Chapli Kabab',
    description: 'Traditional Pashtun-style minced beef patty with pomegranate seeds and herbs.',
    price: 350,
    originalPrice: 500,
    category: 'Beef Specials',
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    reviews: 95
  },

  // Main Dishes
  {
    id: 'm1',
    name: 'Special Biryani',
    description: 'Aromatic basmati rice cooked with tender meat and traditional spices.',
    price: 450,
    originalPrice: 650,
    category: 'Main Dishes',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    reviews: 124
  },
  {
    id: 'm2',
    name: 'Chicken Karahi',
    description: 'Traditional wok-cooked chicken with ginger, garlic, and fresh tomatoes.',
    price: 1000,
    originalPrice: 1200,
    category: 'Main Dishes',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    reviews: 89
  },
  {
    id: 'm3',
    name: 'Mutton Karahi',
    description: 'Succulent mutton pieces cooked in a traditional karahi with rich spices.',
    price: 2300,
    originalPrice: 2500,
    category: 'Main Dishes',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
    reviews: 56
  },
  {
    id: 'm4',
    name: 'Beef Nihari',
    description: 'Slow-cooked beef shank in a thick, spicy gravy. A breakfast classic.',
    price: 450,
    originalPrice: 600,
    category: 'Main Dishes',
    image: 'https://images.unsplash.com/photo-1512132411229-c30391241dd8?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    reviews: 210
  },
  {
    id: 'm5',
    name: 'Special Haleem',
    description: 'A slow-cooked blend of lentils, wheat, and meat, garnished with ginger and lemon.',
    price: 300,
    originalPrice: 450,
    category: 'Main Dishes',
    image: 'https://images.unsplash.com/photo-1512132411229-c30391241dd8?auto=format&fit=crop&q=80&w=800',
    rating: 4.6,
    reviews: 78
  },
  {
    id: 'm6',
    name: 'Kachay Beef Pulao',
    description: 'Our signature slow-cooked beef pulao with aromatic spices.',
    price: 500,
    originalPrice: 700,
    category: 'Main Dishes',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7bb7445?auto=format&fit=crop&q=80&w=800',
    rating: 5.0,
    reviews: 342
  },
  {
    id: 'm7',
    name: 'Chicken Qorma',
    description: 'Rich and creamy chicken curry cooked with yogurt and fried onions.',
    price: 650,
    originalPrice: 800,
    category: 'Main Dishes',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=800',
    rating: 4.5,
    reviews: 45
  },

  // BBQ & Grilled
  {
    id: 'b1',
    name: 'Seekh Kabab',
    description: 'Minced meat skewers seasoned with herbs and grilled over charcoal.',
    price: 250,
    originalPrice: 400,
    category: 'BBQ & Grilled',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    reviews: 156
  },
  {
    id: 'b2',
    name: 'Chicken Tikka',
    description: 'Spicy marinated chicken pieces grilled to perfection.',
    price: 450,
    originalPrice: 600,
    category: 'BBQ & Grilled',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
    reviews: 92
  },
  {
    id: 'b3',
    name: 'Malai Boti',
    description: 'Creamy and mild chicken pieces grilled over charcoal.',
    price: 600,
    originalPrice: 750,
    category: 'BBQ & Grilled',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    reviews: 112
  },

  // Street Food
  {
    id: 's1',
    name: 'Fatafat',
    description: 'A quick and spicy street snack with a blend of tangy chutneys and crispy bites.',
    price: 150,
    originalPrice: 300,
    category: 'Street Food',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800',
    rating: 4.4,
    reviews: 230
  },
  {
    id: 's2',
    name: 'Samosa',
    description: 'Crispy pastry filled with spiced potatoes or minced meat.',
    price: 40,
    originalPrice: 60,
    category: 'Street Food',
    image: 'https://images.unsplash.com/photo-1601050633647-8f8f5f39d1fb?auto=format&fit=crop&q=80&w=800',
    rating: 4.4,
    reviews: 230
  },
  {
    id: 's3',
    name: 'Pakora Plate',
    description: 'Assorted vegetable fritters fried in gram flour batter.',
    price: 150,
    originalPrice: 200,
    category: 'Street Food',
    image: 'https://images.unsplash.com/photo-1601050633647-8f8f5f39d1fb?auto=format&fit=crop&q=80&w=800',
    rating: 4.3,
    reviews: 145
  },
  {
    id: 's4',
    name: 'Dahi Chaat',
    description: 'A mix of chickpeas, potatoes, and yogurt with tangy chutneys.',
    price: 200,
    originalPrice: 250,
    category: 'Street Food',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    rating: 4.6,
    reviews: 167
  },
  {
    id: 's5',
    name: 'Gol Gappa',
    description: 'Crispy hollow puris filled with spicy water and chickpeas.',
    price: 120,
    originalPrice: 180,
    category: 'Street Food',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
    reviews: 198
  },

  // Fries & Sides
  {
    id: 'fs1',
    name: 'Masala Fries',
    description: 'Crispy golden fries tossed in our secret spice blend.',
    price: 200,
    originalPrice: 350,
    category: 'Fries & Sides',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
    reviews: 215
  },
  {
    id: 'fs2',
    name: 'Cheese Loaded Fries',
    description: 'Fries smothered in melted cheddar and topped with jalapeños.',
    price: 400,
    originalPrice: 550,
    category: 'Fries & Sides',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    reviews: 187
  },

  // Breads
  {
    id: 'br1',
    name: 'Tandoori Roti',
    description: 'Freshly baked whole wheat bread from the tandoor.',
    price: 20,
    originalPrice: 30,
    category: 'Breads',
    image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&q=80&w=800',
    rating: 4.2,
    reviews: 450
  },
  {
    id: 'br2',
    name: 'Khamiri Naan',
    description: 'Soft and fluffy leavened bread baked in a clay oven.',
    price: 30,
    originalPrice: 40,
    category: 'Breads',
    image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&q=80&w=800',
    rating: 4.5,
    reviews: 380
  },
  {
    id: 'br3',
    name: 'Garlic Naan',
    description: 'Naan topped with fresh garlic and butter.',
    price: 100,
    originalPrice: 150,
    category: 'Breads',
    image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    reviews: 210
  },

  // Desserts
  {
    id: 'd1',
    name: 'Matka Kheer',
    description: 'Traditional rice pudding served in a clay pot.',
    price: 200,
    originalPrice: 250,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1589113124855-6a032e624483?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
    reviews: 145
  },
  {
    id: 'd2',
    name: 'Gulab Jamun',
    description: 'Soft milk-solid balls soaked in rose-scented syrup.',
    price: 40,
    originalPrice: 60,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1589113124855-6a032e624483?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    reviews: 320
  },
  {
    id: 'd3',
    name: 'Special Jalebi',
    description: 'Crispy, syrup-filled swirls of deep-fried batter.',
    price: 600,
    originalPrice: 800,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1589113124855-6a032e624483?auto=format&fit=crop&q=80&w=800',
    rating: 4.6,
    reviews: 189
  },

  // Drinks
  {
    id: 'dr1',
    name: 'Sweet Lassi',
    description: 'Traditional yogurt-based drink, served chilled.',
    price: 200,
    originalPrice: 250,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
    reviews: 210
  },
  {
    id: 'dr2',
    name: 'Rooh Afza',
    description: 'Refreshing rose-flavored summer drink.',
    price: 100,
    originalPrice: 150,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    rating: 4.4,
    reviews: 98
  },
  {
    id: 'dr3',
    name: 'Karak Chai',
    description: 'Strong, milky tea brewed with traditional spices.',
    price: 80,
    originalPrice: 120,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    reviews: 450
  }
];

