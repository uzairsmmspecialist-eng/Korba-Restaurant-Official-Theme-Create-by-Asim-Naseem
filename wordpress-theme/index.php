<?php get_header(); ?>

<main>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div class="absolute inset-0 z-0">
            <div class="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand rounded-full blur-[130px] opacity-20"></div>
            <div class="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-yellow rounded-full blur-[130px] opacity-10"></div>
        </div>

        <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">
            <div>
                <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-widest mb-8 border border-brand/20 backdrop-blur-sm">
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
                    <a href="#" class="bg-brand-yellow text-zinc-900 font-bold px-4 py-2.5 rounded-full text-xs sm:text-base flex items-center gap-2">
                        Your Order
                    </a>
                </div>

                <div class="flex items-center gap-3 mb-10">
                    <div class="flex -space-x-2">
                        <?php for($i=1; $i<=5; $i++): ?>
                            <img class="h-8 w-8 rounded-full ring-2 ring-zinc-900 object-cover" src="https://picsum.photos/seed/user<?php echo $i; ?>/100/100" alt="">
                        <?php endfor; ?>
                    </div>
                    <div class="flex flex-col">
                        <div class="flex text-brand-yellow mb-0.5">
                            <?php for($i=1; $i<=5; $i++): ?>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" class="text-brand-yellow"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                            <?php endfor; ?>
                        </div>
                        <p class="text-white/60 text-[8px] font-bold uppercase tracking-widest">Trusted by 40k customers</p>
                    </div>
                </div>
            </div>

            <div class="hidden lg:grid grid-cols-2 gap-6">
                <!-- Image grid would go here -->
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
