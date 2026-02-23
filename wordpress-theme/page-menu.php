<?php
/**
 * Template Name: Menu Page
 */
get_header(); ?>

<main class="pt-24 pb-0 bg-zinc-50 min-h-screen">
    <!-- Banner Section -->
    <section class="px-4 sm:px-6 pt-12 pb-16 sm:pb-20">
        <div class="max-w-7xl mx-auto relative h-[300px] sm:h-[400px] rounded-[2rem] sm:rounded-[3rem] overflow-hidden group">
            <img 
                src="https://picsum.photos/seed/menubanner/1920/1080" 
                alt="Menu Banner" 
                class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex flex-col justify-center p-8 sm:p-12 md:p-24">
                <div>
                    <span class="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-brand/20 backdrop-blur-md border border-brand/30 rounded-full text-brand-yellow text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6">
                        <i data-lucide="sparkles" class="w-4 h-4"></i> New Seasonal Specials
                    </span>
                    <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight mb-4 sm:mb-6 leading-tight">
                        A Symphony of <br class="hidden sm:block" /> <span class="text-brand-yellow">Traditional Flavors</span>
                    </h1>
                    <p class="text-zinc-300 max-w-xl text-sm sm:text-lg leading-relaxed">
                        Explore our curated selection of Pakistani masterpieces, crafted with precision and served with passion in the heart of Noshahra Cantt.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <!-- Search & Filter Bar (Static for now, would need JS for full functionality) -->
        <div class="flex flex-col md:flex-row gap-4 sm:gap-6 items-center justify-between mb-8 sm:mb-12 bg-white p-4 rounded-3xl border border-zinc-200 shadow-sm sticky top-20 sm:top-24 z-30">
            <div class="relative w-full md:w-96">
                <i data-lucide="search" class="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5"></i>
                <input 
                    type="text" 
                    placeholder="Search for your favorite dish..."
                    class="w-full bg-zinc-50 border border-zinc-100 rounded-2xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand transition-all"
                />
            </div>
            
            <div class="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar scroll-smooth">
                <?php
                $categories = get_terms(array(
                    'taxonomy' => 'menu_category',
                    'hide_empty' => false,
                ));
                echo '<button class="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all bg-zinc-900 text-white shadow-lg">All</button>';
                foreach($categories as $cat) {
                    echo '<button class="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all bg-zinc-100 text-zinc-500 hover:bg-zinc-200">' . esc_html($cat->name) . '</button>';
                }
                ?>
            </div>
        </div>

        <!-- Menu Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            <?php
            $args = array(
                'post_type' => 'menu_item',
                'posts_per_page' => -1,
            );
            $query = new WP_Query($args);
            if ($query->have_posts()) : while ($query->have_posts()) : $query->the_post();
                $price = get_post_meta(get_the_ID(), 'price', true);
                $rating = get_post_meta(get_the_ID(), 'rating', true) ?: '4.9';
                $reviews = get_post_meta(get_the_ID(), 'reviews', true) ?: '120';
                $category = get_the_terms(get_the_ID(), 'menu_category');
                $cat_name = $category ? $category[0]->name : 'Uncategorized';
            ?>
                <div class="group bg-white rounded-[2.5rem] overflow-hidden border border-zinc-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">
                    <!-- Image Section -->
                    <div class="relative aspect-[4/3] overflow-hidden">
                        <?php if (has_post_thumbnail()) : ?>
                            <?php the_post_thumbnail('large', array('class' => 'w-full h-full object-cover transition-transform duration-700 group-hover:scale-110')); ?>
                        <?php else : ?>
                            <img src="https://picsum.photos/seed/<?php echo get_the_ID(); ?>/800/600" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <?php endif; ?>
                        <div class="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-900 shadow-sm">
                            <?php echo esc_html($cat_name); ?>
                        </div>
                    </div>

                    <!-- Content Section -->
                    <div class="p-8 flex flex-col flex-grow">
                        <div class="flex items-center justify-between mb-4">
                            <span class="text-xs font-bold uppercase tracking-widest text-brand"><?php echo esc_html($cat_name); ?></span>
                            <div class="flex gap-0.5 text-brand-yellow">
                                <i data-lucide="star" class="w-3 h-3 fill-current"></i>
                                <i data-lucide="star" class="w-3 h-3 fill-current"></i>
                                <i data-lucide="star" class="w-3 h-3 fill-current"></i>
                                <i data-lucide="star" class="w-3 h-3 fill-current"></i>
                                <i data-lucide="star" class="w-3 h-3 fill-current"></i>
                            </div>
                        </div>
                        
                        <h3 class="text-2xl font-bold text-zinc-900 group-hover:text-brand transition-colors mb-2">
                            <?php the_title(); ?>
                        </h3>
                        
                        <div class="flex items-center gap-3 mb-4">
                            <span class="text-xs font-bold text-zinc-400"><?php echo esc_html($rating); ?> (<?php echo esc_html($reviews); ?> reviews)</span>
                        </div>

                        <div class="text-zinc-500 text-sm leading-relaxed mb-8 flex-grow">
                            <?php the_excerpt(); ?>
                        </div>

                        <div class="flex items-center justify-between mb-8 pt-6 border-t border-zinc-100">
                            <div>
                                <p class="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Price</p>
                                <p class="text-2xl font-bold text-zinc-900">Rs. <?php echo esc_html($price); ?></p>
                            </div>
                        </div>

                        <button class="bg-brand hover:bg-brand-dark text-white font-bold py-4 rounded-2xl w-full flex items-center justify-center gap-2 transition-all">
                            Add to Cart <i data-lucide="shopping-bag" class="w-5 h-5"></i>
                        </button>
                    </div>
                </div>
            <?php endwhile; wp_reset_postdata(); endif; ?>
        </div>
    </div>
</main>

<?php get_footer(); ?>
