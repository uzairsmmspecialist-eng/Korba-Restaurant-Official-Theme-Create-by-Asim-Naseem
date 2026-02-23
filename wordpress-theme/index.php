<?php get_header(); ?>

<main>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center pt-20 overflow-hidden bg-zinc-950">
        <div class="absolute inset-0 z-0">
            <div class="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand rounded-full blur-[130px] opacity-20"></div>
            <div class="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-yellow rounded-full blur-[130px] opacity-10"></div>
        </div>

        <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">
            <div class="animate-fade-in">
                <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-widest mb-8 border border-brand/20 backdrop-blur-sm">
                    <i data-lucide="star" class="w-4 h-4 fill-current"></i> Noshahra's Finest Dining
                </div>
                <h1 class="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] mb-8 text-white">
                    Authentic <br />
                    <span class="text-brand-yellow italic font-serif">Kachay Beef</span> <br />
                    Pulao
                </h1>
                <p class="text-sm sm:text-xl text-zinc-400 max-w-[280px] sm:max-w-lg mb-8 leading-relaxed font-medium">
                    Experience the legendary taste of our slow-cooked beef pulao and charcoal-grilled seekh kababs. A royal feast awaits you.
                </p>
                
                <div class="flex gap-4 mb-10">
                    <a href="<?php echo esc_url(home_url('/menu')); ?>" class="bg-brand-yellow hover:bg-white text-zinc-900 font-bold px-8 py-4 rounded-full text-sm sm:text-base flex items-center gap-2 transition-all shadow-xl shadow-brand-yellow/20">
                        Your Order <i data-lucide="chevron-right" class="w-5 h-5"></i>
                    </a>
                    <a href="<?php echo esc_url(home_url('/reservations')); ?>" class="bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold px-8 py-4 rounded-full text-sm sm:text-base flex items-center gap-2 transition-all">
                        Book Table
                    </a>
                </div>

                <div class="flex items-center gap-3">
                    <div class="flex -space-x-3">
                        <?php for($i=1; $i<=5; $i++): ?>
                            <img class="h-10 w-10 rounded-full ring-2 ring-zinc-950 object-cover" src="https://picsum.photos/seed/user<?php echo $i; ?>/100/100" alt="">
                        <?php endfor; ?>
                    </div>
                    <div class="flex flex-col">
                        <div class="flex text-brand-yellow mb-0.5">
                            <?php for($i=1; $i<=5; $i++): ?>
                                <i data-lucide="star" class="w-3 h-3 fill-current"></i>
                            <?php endfor; ?>
                        </div>
                        <p class="text-white/60 text-[10px] font-bold uppercase tracking-widest">Trusted by 40k customers</p>
                    </div>
                </div>
            </div>

            <div class="relative hidden lg:block">
                <div class="grid grid-cols-2 gap-6">
                    <div class="space-y-6 pt-12">
                        <div class="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                            <img src="https://picsum.photos/seed/pulao/800/1000" class="w-full h-full object-cover" />
                        </div>
                        <div class="aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                            <img src="https://picsum.photos/seed/kabab/800/800" class="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div class="space-y-6">
                        <div class="aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                            <img src="https://picsum.photos/seed/tikka/800/800" class="w-full h-full object-cover" />
                        </div>
                        <div class="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                            <img src="https://picsum.photos/seed/bread/800/1000" class="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Featured Menu Section -->
    <section class="py-32 bg-white">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-20">
                <span class="text-brand font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Specialties</span>
                <h2 class="text-4xl sm:text-6xl font-black tracking-tighter text-zinc-900">Legendary Taste</h2>
            </div>

            <div class="grid md:grid-cols-3 gap-10">
                <?php
                $args = array(
                    'post_type' => 'menu_item',
                    'posts_per_page' => 3,
                );
                $query = new WP_Query($args);
                if ($query->have_posts()) : while ($query->have_posts()) : $query->the_post();
                    $price = get_post_meta(get_the_ID(), 'price', true);
                ?>
                    <div class="group bg-zinc-50 rounded-[3rem] p-8 border border-zinc-100 hover:shadow-2xl transition-all duration-500">
                        <div class="aspect-square rounded-[2rem] overflow-hidden mb-8">
                            <?php if (has_post_thumbnail()) : ?>
                                <?php the_post_thumbnail('large', array('class' => 'w-full h-full object-cover transition-transform duration-700 group-hover:scale-110')); ?>
                            <?php else : ?>
                                <img src="https://picsum.photos/seed/<?php echo get_the_ID(); ?>/800/800" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <?php endif; ?>
                        </div>
                        <h3 class="text-2xl font-bold text-zinc-900 mb-4"><?php the_title(); ?></h3>
                        <p class="text-zinc-500 mb-8"><?php echo wp_trim_words(get_the_excerpt(), 15); ?></p>
                        <div class="flex items-center justify-between">
                            <span class="text-2xl font-black text-zinc-900">Rs. <?php echo esc_html($price); ?></span>
                            <a href="<?php the_permalink(); ?>" class="w-12 h-12 bg-zinc-900 text-white rounded-full flex items-center justify-center group-hover:bg-brand transition-colors">
                                <i data-lucide="arrow-right" class="w-5 h-5"></i>
                            </a>
                        </div>
                    </div>
                <?php endwhile; wp_reset_postdata(); endif; ?>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
