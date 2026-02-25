<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class('bg-zinc-950 text-white selection:bg-brand selection:text-zinc-900'); ?>>
    <header class="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md py-6 transition-all duration-300 border-b border-white/5">
        <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center gap-2 group">
                <div class="w-10 h-10 bg-brand rounded-xl flex items-center justify-center shadow-lg group-hover:bg-brand-yellow transition-colors">
                    <i data-lucide="utensils" class="text-white w-6 h-6"></i>
                </div>
                <span class="text-2xl font-black tracking-tighter text-white">
                    KURBAN<span class="text-brand">.</span>
                </span>
            </a>
            
            <nav class="hidden md:flex items-center gap-8">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'container'      => false,
                    'menu_class'     => 'flex gap-8 text-sm font-bold uppercase tracking-widest text-white/80',
                    'fallback_cb'    => false,
                    'items_wrap'     => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                ));
                ?>
            </nav>

            <div class="flex items-center gap-4">
                <a href="<?php echo esc_url(home_url('/menu')); ?>" class="hidden sm:flex items-center gap-2 text-white/80 hover:text-brand-yellow transition-colors font-bold text-sm uppercase tracking-widest">
                    <i data-lucide="shopping-bag" class="w-5 h-5"></i>
                </a>
                <a href="<?php echo esc_url(home_url('/reservations')); ?>" class="bg-brand hover:bg-brand-dark text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-lg shadow-brand/20">
                    Book Table
                </a>
            </div>
        </div>
    </header>
