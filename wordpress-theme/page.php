<?php get_header(); ?>

<main class="pt-32 pb-24 bg-zinc-950 min-h-screen">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <article class="max-w-4xl mx-auto px-6">
            <header class="mb-12 text-center">
                <h1 class="text-4xl sm:text-6xl font-bold tracking-tighter leading-tight text-white mb-8">
                    <?php the_title(); ?>
                </h1>
            </header>

            <div class="prose prose-invert prose-lg max-w-none text-zinc-400 leading-relaxed">
                <?php the_content(); ?>
            </div>
        </article>
    <?php endwhile; endif; ?>
</main>

<?php get_footer(); ?>
