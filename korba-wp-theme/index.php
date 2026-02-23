<?php get_header(); ?>

<main>
    <?php if ( is_front_page() ) : ?>
        <!-- Hero Section -->
        <section class="relative min-h-screen flex items-center pt-20 overflow-hidden">
            <div class="absolute inset-0 z-0">
                <div class="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand rounded-full blur-[130px] opacity-20"></div>
                <div class="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-yellow rounded-full blur-[130px] opacity-10"></div>
            </div>

            <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">
                <div class="animate-fade-in">
                    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 text-brand text-[10px] font-bold uppercase tracking-widest mb-8 border border-brand/20 backdrop-blur-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                        Noshahra's Finest Dining
                    </div>
                    <h1 class="text-4xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] mb-8 text-white">
                        Authentic <br />
                        <span class="text-brand-yellow italic font-serif">Kachay Beef</span> <br />
                        Pulao
                    </h1>
                    <p class="text-sm sm:text-xl text-zinc-400 max-w-[280px] sm:max-w-lg mb-6 sm:mb-8 leading-relaxed font-medium">
                        Experience the legendary taste of our slow-cooked beef pulao and charcoal-grilled seekh kababs. A royal feast awaits you.
                    </p>
                    
                    <div class="flex mb-6 sm:mb-8">
                        <a href="<?php echo esc_url( home_url( '/menu' ) ); ?>" class="btn-hero bg-brand-yellow text-zinc-900 font-bold px-6 py-3 rounded-full text-xs sm:text-base flex items-center gap-2 shadow-xl shadow-brand-yellow/20">
                            Your Order
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                        </a>
                    </div>

                    <div class="flex items-center gap-3 mb-10">
                        <div class="flex -space-x-2">
                            <?php for($i=1; $i<=5; $i++): ?>
                                <img class="h-8 w-8 rounded-full ring-2 ring-zinc-900 object-cover" src="https://picsum.photos/seed/user<?php echo $i; ?>/100/100" alt="Customer">
                            <?php endfor; ?>
                        </div>
                        <div class="flex flex-col">
                            <div class="flex text-brand-yellow mb-0.5">
                                <?php for($i=1; $i<=5; $i++): ?>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                                <?php endfor; ?>
                            </div>
                            <p class="text-white/60 text-[8px] font-bold uppercase tracking-widest">Trusted by 40k customers</p>
                        </div>
                    </div>
                </div>

                <div class="hidden lg:grid grid-cols-2 gap-6 relative">
                    <div class="space-y-6 pt-12 animate-float">
                        <div class="aspect-[4/5] rounded-[2rem] overflow-hidden border-4 border-brand-yellow/30 shadow-2xl">
                            <img src="https://picsum.photos/seed/pulao/800/1000" class="w-full h-full object-cover" alt="Beef Pulao">
                        </div>
                        <div class="aspect-square rounded-[2rem] overflow-hidden border-4 border-brand/30 shadow-2xl">
                            <img src="https://picsum.photos/seed/kabab/800/800" class="w-full h-full object-cover" alt="Seekh Kabab">
                        </div>
                    </div>
                    <div class="space-y-6 animate-float-delayed">
                        <div class="aspect-square rounded-[2rem] overflow-hidden border-4 border-brand/30 shadow-2xl">
                            <img src="https://picsum.photos/seed/tikka/800/800" class="w-full h-full object-cover" alt="Chicken Tikka">
                        </div>
                        <div class="aspect-[4/5] rounded-[2rem] overflow-hidden border-4 border-brand-yellow/30 shadow-2xl">
                            <img src="https://picsum.photos/seed/karahi/800/1000" class="w-full h-full object-cover" alt="Special Karahi">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <?php endif; ?>

    <!-- Main Content Loop -->
    <section class="py-24 px-6 max-w-7xl mx-auto">
        <?php if ( have_posts() ) : ?>
            <div class="grid gap-12">
                <?php while ( have_posts() ) : the_post(); ?>
                    <?php if ( ! is_front_page() ) : ?>
                        <article id="post-<?php the_ID(); ?>" <?php post_class('bg-zinc-900/50 rounded-[2.5rem] p-8 sm:p-12 border border-white/5'); ?>>
                            <header class="mb-8">
                                <?php the_title( '<h2 class="text-3xl sm:text-5xl font-bold mb-4">', '</h2>' ); ?>
                                <div class="text-zinc-500 text-xs uppercase tracking-widest font-bold">
                                    <?php echo get_the_date(); ?> • <?php the_author(); ?>
                                </div>
                            </header>
                            <div class="prose prose-invert max-w-none text-zinc-400 leading-relaxed">
                                <?php the_content(); ?>
                            </div>
                        </article>
                    <?php endif; ?>
                <?php endwhile; ?>
            </div>
        <?php else : ?>
            <p class="text-center text-zinc-500">No content found.</p>
        <?php endif; ?>
    </section>
</main>

<?php get_footer(); ?>
