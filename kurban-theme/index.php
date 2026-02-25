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

    <!-- Bento Grid Section -->
    <section class="py-32 bg-zinc-50">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid md:grid-cols-4 gap-6">
                <div class="md:col-span-2 bg-zinc-900 rounded-[3rem] p-12 text-white relative overflow-hidden group">
                    <div class="relative z-10">
                        <span class="text-brand-yellow font-bold uppercase tracking-widest text-xs mb-4 block">Our Heritage</span>
                        <h3 class="text-4xl font-bold mb-6">Born from Passion, <br/>Refined by Tradition</h3>
                        <p class="text-zinc-400 max-w-md mb-8">Founded in 2018, Kurban Restaurant was built on a simple premise: that dining should be an immersive experience.</p>
                        <a href="<?php echo esc_url(home_url('/about')); ?>" class="inline-flex items-center gap-2 text-brand-yellow font-bold uppercase tracking-widest text-sm">Learn More <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
                    </div>
                    <div class="absolute top-0 right-0 w-64 h-64 bg-brand rounded-full blur-[100px] opacity-20 -mr-32 -mt-32"></div>
                </div>
                <div class="bg-brand rounded-[3rem] p-12 text-white flex flex-col justify-between">
                    <i data-lucide="clock" class="w-12 h-12 mb-8"></i>
                    <div>
                        <h4 class="text-2xl font-bold mb-2">Open Daily</h4>
                        <p class="text-white/80">12:00 PM - 12:00 AM</p>
                    </div>
                </div>
                <div class="bg-brand-yellow rounded-[3rem] p-12 text-zinc-900 flex flex-col justify-between">
                    <i data-lucide="map-pin" class="w-12 h-12 mb-8"></i>
                    <div>
                        <h4 class="text-2xl font-bold mb-2">Location</h4>
                        <p class="text-zinc-900/80">Noshahra Cantt, KPK</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Expert Chefs Section -->
    <section class="py-32 bg-white">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex flex-col md:flex-row items-center justify-between mb-20 gap-8">
                <div>
                    <span class="text-brand font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Culinary Masters</span>
                    <h2 class="text-4xl sm:text-6xl font-black tracking-tighter text-zinc-900">Meet Our Chefs</h2>
                </div>
                <a href="<?php echo esc_url(home_url('/team')); ?>" class="bg-zinc-900 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-brand transition-all">View Full Team</a>
            </div>

            <div class="grid md:grid-cols-3 gap-10">
                <?php
                $chefs = array(
                    array('name' => 'Chef Ahmed Khan', 'role' => 'Executive Chef', 'img' => 'https://picsum.photos/seed/chef1/800/1000'),
                    array('name' => 'Chef Farman Shah', 'role' => 'Head of Pastry', 'img' => 'https://picsum.photos/seed/chef2/800/1000'),
                    array('name' => 'Chef Zeeshan Ali', 'role' => 'Grill Master', 'img' => 'https://picsum.photos/seed/chef3/800/1000')
                );
                foreach($chefs as $chef):
                ?>
                    <div class="group bg-white rounded-[3rem] overflow-hidden border border-zinc-100 shadow-xl">
                        <div class="aspect-[4/5] overflow-hidden relative">
                            <img src="<?php echo $chef['img']; ?>" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div class="absolute bottom-8 left-8 text-white">
                                <p class="text-brand-yellow font-bold text-xs uppercase tracking-widest mb-2"><?php echo $chef['role']; ?></p>
                                <h3 class="text-2xl font-bold"><?php echo $chef['name']; ?></h3>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Testimonials Marquee -->
    <section class="py-32 bg-zinc-950 overflow-hidden">
        <div class="max-w-7xl mx-auto px-6 mb-20 text-center">
            <span class="text-brand font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Guest Stories</span>
            <h2 class="text-4xl sm:text-6xl font-black tracking-tighter text-white">What People Say</h2>
        </div>
        
        <div class="flex gap-8 animate-marquee whitespace-nowrap">
            <?php
            $testimonials = array(
                "The Beef Pulao at Kurban is quite simply the best I have ever had.",
                "Seekh Kababs are so juicy and flavorful. My kids love it!",
                "The Chicken Tikka is perfectly spiced and grilled. A true masterpiece.",
                "A must-visit place. The ambiance and food are both top-notch.",
                "Authentic flavors with a modern touch. Truly impressive culinary work."
            );
            foreach(array_merge($testimonials, $testimonials) as $text):
            ?>
                <div class="bg-white/5 border border-white/10 p-10 rounded-[3rem] w-[400px] shrink-0">
                    <div class="flex text-brand-yellow mb-6">
                        <?php for($i=0; $i<5; $i++): ?><i data-lucide="star" class="w-4 h-4 fill-current"></i><?php endfor; ?>
                    </div>
                    <p class="text-white/80 text-lg italic leading-relaxed whitespace-normal">"<?php echo $text; ?>"</p>
                </div>
            <?php endforeach; ?>
        </div>
    </section>

    <!-- Text Layer & Food Strip -->
    <section class="py-20 bg-brand text-white overflow-hidden relative">
        <div class="max-w-7xl mx-auto px-6 text-center mb-16">
            <h2 class="text-4xl sm:text-6xl font-black tracking-tighter mb-6 uppercase italic-serif">
                Taste the Tradition, <br /> Feel the <span class="text-brand-yellow">Innovation.</span>
            </h2>
        </div>
        
        <div class="bg-white/10 backdrop-blur-md py-8 border-y border-white/20">
            <div class="flex gap-12 animate-marquee whitespace-nowrap items-center">
                <?php
                $items = array('Kachay Beef Pulao', 'Chicken Tikka', 'Seekh Kabab', 'Beef Nihari', 'Karak Chai', 'Gulab Jamun');
                foreach(array_merge($items, $items) as $item):
                ?>
                    <div class="flex items-center gap-6">
                        <div class="w-2 h-2 bg-brand-yellow rounded-full"></div>
                        <span class="text-2xl font-bold uppercase tracking-widest"><?php echo $item; ?></span>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
