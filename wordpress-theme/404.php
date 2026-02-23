<?php get_header(); ?>

<main class="min-h-screen flex items-center justify-center bg-zinc-950 px-6">
    <div class="text-center">
        <div class="inline-flex items-center justify-center w-24 h-24 bg-brand/10 rounded-full text-brand mb-8 border border-brand/20">
            <i data-lucide="alert-triangle" class="w-12 h-12"></i>
        </div>
        <h1 class="text-7xl sm:text-9xl font-black tracking-tighter text-white mb-6">404</h1>
        <h2 class="text-2xl sm:text-3xl font-bold text-zinc-300 mb-8">Oops! Page not found.</h2>
        <p class="text-zinc-500 max-w-md mx-auto mb-12 text-lg">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <a href="<?php echo esc_url(home_url('/')); ?>" class="bg-brand hover:bg-brand-dark text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all shadow-xl shadow-brand/20 inline-flex items-center gap-2">
            <i data-lucide="home" class="w-5 h-5"></i> Back to Home
        </a>
    </div>
</main>

<?php get_footer(); ?>
