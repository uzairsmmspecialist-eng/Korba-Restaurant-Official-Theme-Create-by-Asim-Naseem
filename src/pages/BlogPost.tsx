import React from 'react';
import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, User, Calendar, ArrowRight, ShoppingBag, Star } from 'lucide-react';
import { blogPosts } from '../data/blog';
import { MENU_DATA } from '../data/menu';
import { useCart } from '../context/CartContext';

export const BlogPost = () => {
  const { slug } = useParams();
  const { addToCart } = useCart();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-40 pb-24 px-6 text-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-brand hover:underline">Return to Blog</Link>
      </div>
    );
  }

  // Get 3 random recommended articles (excluding current)
  const recommendedPosts = blogPosts
    .filter(p => p.id !== post.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  // Get 3 random menu items for product recommendations
  const recommendedProducts = MENU_DATA
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 bg-zinc-50 min-h-screen"
    >
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/blog" className="inline-flex items-center gap-2 text-zinc-500 hover:text-brand transition-colors mb-8 group">
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Journal
        </Link>
        
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-zinc-100 mb-16">
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

      {/* Recommendations Section */}
      <div className="bg-white py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Product Recommendations */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand mb-4">Craving Something?</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Recommended Dishes</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {recommendedProducts.map((item, i) => (
                <div key={i} className="bg-zinc-50 rounded-[2rem] overflow-hidden border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-900 shadow-sm">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-zinc-900">{item.name}</h3>
                      <div className="flex items-center gap-1">
                        <Star size={14} className="text-brand-yellow fill-brand-yellow" />
                        <span className="text-xs font-bold text-zinc-500">{item.rating}</span>
                      </div>
                    </div>
                    <p className="text-zinc-500 text-sm mb-6 line-clamp-2 flex-grow">{item.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-zinc-200">
                      <p className="text-xl font-bold text-brand">Rs. {item.price}</p>
                      <button 
                        onClick={() => addToCart(item)}
                        className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center hover:bg-brand transition-colors"
                      >
                        <ShoppingBag size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Article Recommendations */}
          <div>
            <div className="text-center mb-12">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand mb-4">Keep Reading</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">More from our Journal</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recommendedPosts.map((recPost, i) => (
                <Link to={`/blog/${recPost.slug}`} key={i} className="group block">
                  <div className="aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 relative">
                    <img 
                      src={recPost.image} 
                      alt={recPost.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <span className="text-brand font-bold text-xs uppercase tracking-widest mb-3 block">{recPost.category}</span>
                  <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-brand transition-colors line-clamp-2">
                    {recPost.title}
                  </h3>
                  <p className="text-zinc-500 text-sm mb-4 line-clamp-2">{recPost.excerpt}</p>
                  <span className="text-brand font-bold text-sm flex items-center gap-2">
                    Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};
