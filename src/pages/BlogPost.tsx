import React from 'react';
import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, User, Calendar, Tag } from 'lucide-react';

export const blogPosts = [
  {
    id: 1,
    slug: 'art-of-slow-cooking-beef-pulao',
    title: "The Art of Slow-Cooking Beef Pulao",
    excerpt: "Discover the secrets behind our signature Kachay Beef Pulao and why patience is the key ingredient.",
    content: `
      <p>Beef Pulao is more than just a dish; it's a testament to the culinary heritage of Pakistan. At Korba Restaurant, our Kachay Beef Pulao is a labor of love, requiring hours of meticulous preparation and slow cooking.</p>
      
      <h2>The Foundation: Quality Ingredients</h2>
      <p>The secret begins with the meat. We select only the finest cuts of beef, ensuring the perfect balance of meat and bone. The bones are crucial, as they release a rich, gelatinous broth that forms the soul of the pulao.</p>
      
      <h2>The Yakhni (Broth)</h2>
      <p>The yakhni is simmered for hours with a proprietary blend of whole spices—cinnamon, cardamom, cloves, and bay leaves. This slow extraction process ensures that every drop of broth is infused with deep, complex flavors.</p>
      
      <h2>The Rice</h2>
      <p>We use premium aged Basmati rice, known for its long grains and aromatic profile. The rice is carefully washed and soaked before being cooked in the rich yakhni, absorbing all the flavors and taking on a beautiful golden hue.</p>
      
      <h2>The Dum (Steaming)</h2>
      <p>The final and most crucial step is the 'dum'. The pot is sealed tight, allowing the rice and meat to steam together gently. This process ensures that the flavors meld perfectly, resulting in a pulao that is fragrant, tender, and incredibly satisfying.</p>
      
      <p>Next time you visit Korba Restaurant, take a moment to savor the depth of flavor in our Beef Pulao. It's a taste of tradition, slow-cooked to perfection.</p>
    `,
    author: "Chef Ahmed Khan",
    date: "Feb 15, 2026",
    image: "https://picsum.photos/seed/pulao-blog/1200/600",
    category: "Culinary Secrets"
  },
  {
    id: 2,
    slug: 'traditional-spices-noshahra-cantt',
    title: "Traditional Spices of Noshahra Cantt",
    excerpt: "A deep dive into the unique spice blends that give our dishes their authentic Pakistani flavor.",
    content: `
      <p>The vibrant flavors of Pakistani cuisine are born from a masterful understanding of spices. In Noshahra Cantt, the spice blends are distinct, carrying the history and culture of the region.</p>
      
      <h2>The Holy Trinity of Spices</h2>
      <p>At the core of almost every savory dish are three essential spices: cumin, coriander, and turmeric. These form the base, providing earthy, warm, and slightly bitter notes that balance the richness of the meats and ghee.</p>
      
      <h2>Garam Masala: The Warm Blend</h2>
      <p>Our house-made Garam Masala is a closely guarded secret. It's a complex blend of roasted and ground spices, including black cardamom, cloves, cinnamon, and black peppercorns. We add it towards the end of cooking to preserve its volatile aromatic compounds.</p>
      
      <h2>The Role of Heat</h2>
      <p>Heat in our dishes comes primarily from red chili powder and fresh green chilies. However, it's never about overwhelming heat; it's about a balanced warmth that enhances, rather than masks, the other flavors.</p>
      
      <h2>Sourcing the Best</h2>
      <p>We believe that the quality of the spice dictates the quality of the dish. That's why we source our spices whole and grind them fresh in our kitchen. This ensures maximum potency and flavor in every bite.</p>
    `,
    author: "Chef Zeeshan Ali",
    date: "Feb 08, 2026",
    image: "https://picsum.photos/seed/spices-blog/1200/600",
    category: "Ingredients"
  },
  {
    id: 3,
    slug: 'perfect-karak-chai-brewing-guide',
    title: "The Perfect Karak Chai: A Brewing Guide",
    excerpt: "Learn how to make the perfect cup of strong, milky tea that warms the soul.",
    content: `
      <p>Karak Chai is the lifeblood of Pakistan. It's more than a beverage; it's a ritual, a moment of pause, and a catalyst for conversation. Here is how we brew the perfect cup at Korba Restaurant.</p>
      
      <h2>The Tea Leaves</h2>
      <p>The foundation of Karak Chai is strong, robust black tea. We use a blend of CTC (Crush, Tear, Curl) teas, which infuse quickly and provide a deep, dark color and a strong, malty flavor that can stand up to milk and sugar.</p>
      
      <h2>The Boiling Process</h2>
      <p>Unlike delicate green teas, Karak Chai requires a vigorous boil. We start by boiling water with crushed cardamom pods. Once the water is fragrant, we add the tea leaves and let them boil until the liquid is dark and strong.</p>
      
      <h2>The Milk</h2>
      <p>The addition of milk is crucial. We use full-fat milk for a creamy texture. The tea and milk are boiled together, a process known as 'kadhna', which caramelizes the sugars in the milk and gives the chai its signature rich flavor and slightly thick consistency.</p>
      
      <h2>The Pour</h2>
      <p>The final step is the pour. We aerate the tea by pouring it back and forth between two vessels from a height. This cools the tea slightly and creates a delightful frothy top.</p>
    `,
    author: "Chef Maria Zain",
    date: "Jan 28, 2026",
    image: "https://picsum.photos/seed/chai-blog/1200/600",
    category: "Beverages"
  },
  {
    id: 4,
    slug: 'sustainable-sourcing-pakistan',
    title: "Sustainable Sourcing in Pakistan",
    excerpt: "How we partner with local farmers to bring the freshest ingredients to your table.",
    content: `
      <p>At Korba Restaurant, we believe that great food starts with great ingredients. That's why we are deeply committed to sustainable sourcing and supporting local agriculture in Pakistan.</p>
      
      <h2>Farm to Table</h2>
      <p>We work directly with a network of local farmers in the regions surrounding Noshahra Cantt. By cutting out the middlemen, we ensure that farmers receive fair compensation for their hard work, and we receive the freshest produce possible.</p>
      
      <h2>Seasonal Menus</h2>
      <p>Our menu is heavily influenced by the seasons. We embrace the natural growing cycles, which means our dishes feature ingredients at their absolute peak of flavor and nutritional value. This approach also reduces the environmental impact of transporting out-of-season produce.</p>
      
      <h2>Ethical Meat Sourcing</h2>
      <p>We are uncompromising when it comes to the quality and ethical sourcing of our meats. We partner with local farms that practice humane animal husbandry and avoid the use of unnecessary antibiotics and hormones.</p>
      
      <h2>Reducing Waste</h2>
      <p>Sustainability extends beyond sourcing; it's also about how we manage our kitchen. We employ a nose-to-tail philosophy with our meats and utilize vegetable trimmings for our rich broths, minimizing food waste at every step.</p>
    `,
    author: "Sarah Green",
    date: "Jan 15, 2026",
    image: "https://picsum.photos/seed/farm-blog/1200/600",
    category: "Sustainability"
  },
  {
    id: 5,
    slug: 'history-of-chapli-kebab',
    title: "The History of Chapli Kebab",
    excerpt: "Exploring the origins of this legendary Pashtun dish and its journey to our kitchen.",
    content: `
      <p>The Chapli Kebab is a masterpiece of Pashtun cuisine, a flat, spiced meat patty that is crispy on the outside and incredibly juicy on the inside. Its history is as rich as its flavor.</p>
      
      <h2>Origins in Peshawar</h2>
      <p>The word 'Chapli' is derived from the Pashto word 'Chaprikh', which means flat. Originating in Peshawar, this kebab was traditionally made with beef and a generous amount of animal fat, which contributed to its unique texture and flavor.</p>
      
      <h2>The Spice Profile</h2>
      <p>What sets the Chapli Kebab apart is its complex spice profile. It features a robust blend of coriander seeds, cumin, dried pomegranate seeds (anardana), and green chilies. The anardana provides a subtle tartness that cuts through the richness of the meat.</p>
      
      <h2>The Cooking Technique</h2>
      <p>Traditionally, Chapli Kebabs are shallow-fried in a large, flat iron skillet (tawa) using animal fat. The high heat sears the outside, creating a crispy crust that locks in the juices.</p>
      
      <h2>Our Interpretation</h2>
      <p>At Korba Restaurant, we honor the traditional recipe while refining the technique. We use premium minced beef, carefully balance the spices, and pan-fry them to order, ensuring that every Chapli Kebab we serve is a perfect tribute to its culinary heritage.</p>
    `,
    author: "Chef Ahmed Khan",
    date: "Jan 02, 2026",
    image: "https://picsum.photos/seed/chapli-blog/1200/600",
    category: "Food History"
  }
];

export const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-40 pb-24 px-6 text-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-brand hover:underline">Return to Blog</Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6 bg-zinc-50 min-h-screen"
    >
      <div className="max-w-4xl mx-auto">
        <Link to="/blog" className="inline-flex items-center gap-2 text-zinc-500 hover:text-brand transition-colors mb-8 group">
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Journal
        </Link>
        
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-zinc-100">
          <div className="h-[400px] relative">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <span className="inline-block px-4 py-1.5 bg-brand text-white text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-8 md:p-16">
            <div 
              className="prose prose-zinc prose-lg max-w-none prose-headings:font-bold prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-brand hover:prose-a:text-brand-dark"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
