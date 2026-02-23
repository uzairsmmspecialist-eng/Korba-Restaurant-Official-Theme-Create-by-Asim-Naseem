<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class( 'bg-zinc-950 text-white selection:bg-brand selection:text-zinc-900' ); ?>>
    <?php wp_body_open(); ?>

    <header class="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md py-4 sm:py-6 border-b border-white/5">
        <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="flex items-center gap-2 group">
                <div class="w-10 h-10 bg-brand rounded-xl flex items-center justify-center shadow-lg group-hover:bg-brand-yellow transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="M11 20 7 12l-5 2.5"/><path d="M15 12 11 20l5 2.5"/><path d="m8 21 2-15 4 15"/><path d="M22 14s-4 0-4-4 4-4 4-4"/><path d="M18 10h4"/></svg>
                </div>
                <span class="text-2xl font-black tracking-tighter text-white">
                    KORBA<span class="text-brand">.</span>
                </span>
            </a>
            
            <nav class="hidden md:flex items-center gap-8">
                <?php
                wp_nav_menu( array(
                    'theme_location' => 'primary',
                    'container'      => false,
                    'menu_class'     => 'flex gap-8 text-[10px] font-bold uppercase tracking-widest text-white/80',
                    'fallback_cb'    => false,
                ) );
                ?>
            </nav>

            <div class="flex items-center gap-4">
                <a href="<?php echo esc_url( home_url( '/menu' ) ); ?>" class="bg-brand hover:bg-brand-dark text-white px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all">
                    Order Now
                </a>
            </div>
        </div>
    </header>
