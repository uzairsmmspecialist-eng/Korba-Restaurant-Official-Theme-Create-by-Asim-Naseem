<?php get_header(); ?>

<main class="min-h-screen flex items-center justify-center pt-20 px-6 text-center">
    <div class="max-w-2xl">
        <div class="w-24 h-24 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-brand/20">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-brand"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        </div>
        <h1 class="text-5xl sm:text-7xl font-bold tracking-tighter mb-6">404</h1>
        <p class="text-xl text-zinc-400 mb-12 leading-relaxed">
            Oops! The page you're looking for has wandered off the menu. Let's get you back to the feast.
        </p>
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="bg-brand hover:bg-brand-dark text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all inline-block">
            Return Home
        </a>
    </div>
</main>

<?php get_footer(); ?>
