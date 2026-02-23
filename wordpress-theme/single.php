<?php get_header(); ?>

<main class="pt-32 pb-24 bg-zinc-950 min-h-screen">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <article class="max-w-4xl mx-auto px-6">
            <header class="mb-12">
                <div class="flex items-center gap-4 mb-8">
                    <span class="px-4 py-1.5 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-widest border border-brand/20">
                        <?php the_category(', '); ?>
                    </span>
                    <span class="text-zinc-500 text-xs font-bold uppercase tracking-widest">
                        <?php the_time('M j, Y'); ?>
                    </span>
                </div>
                <h1 class="text-4xl sm:text-6xl font-bold tracking-tighter leading-tight text-white mb-8">
                    <?php the_title(); ?>
                </h1>
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 rounded-full bg-zinc-800 overflow-hidden border border-white/10">
                        <?php echo get_avatar(get_the_author_meta('ID'), 48); ?>
                    </div>
                    <div>
                        <p class="text-white font-bold"><?php the_author(); ?></p>
                        <p class="text-zinc-500 text-xs uppercase tracking-widest font-bold">Author</p>
                    </div>
                </div>
            </header>

            <?php if (has_post_thumbnail()) : ?>
                <div class="rounded-[3rem] overflow-hidden mb-16 border border-white/10 shadow-2xl">
                    <?php the_post_thumbnail('full', array('class' => 'w-full h-auto')); ?>
                </div>
            <?php endif; ?>

            <div class="prose prose-invert prose-lg max-w-none text-zinc-400 leading-relaxed">
                <?php the_content(); ?>
            </div>

            <footer class="mt-24 pt-12 border-t border-white/10">
                <div class="flex items-center justify-between">
                    <div class="flex gap-4">
                        <?php the_tags('<span class="text-zinc-500 text-xs font-bold uppercase tracking-widest">Tags:</span> ', ', '); ?>
                    </div>
                    <div class="flex gap-4">
                        <!-- Social share icons would go here -->
                    </div>
                </div>
            </footer>
        </article>
    <?php endwhile; endif; ?>
</main>

<?php get_footer(); ?>
