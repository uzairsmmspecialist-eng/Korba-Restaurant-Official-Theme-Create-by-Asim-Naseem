<?php get_header(); ?>

<main class="pt-32 pb-24 px-6 max-w-4xl mx-auto min-h-screen">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <header class="mb-12">
                <?php the_title( '<h1 class="text-4xl sm:text-6xl font-bold tracking-tighter mb-6">', '</h1>' ); ?>
                <?php if ( has_post_thumbnail() ) : ?>
                    <div class="rounded-[2.5rem] overflow-hidden mb-12 border border-white/10">
                        <?php the_post_thumbnail( 'large', array( 'class' => 'w-full h-auto' ) ); ?>
                    </div>
                <?php endif; ?>
            </header>

            <div class="prose prose-invert max-w-none text-zinc-400 leading-relaxed text-lg">
                <?php the_content(); ?>
            </div>
        </article>
    <?php endwhile; endif; ?>
</main>

<?php get_footer(); ?>
