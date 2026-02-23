<?php
function korba_enqueue_styles() {
    // Enqueue Google Fonts
    wp_enqueue_style('korba-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap', array(), null);
    
    // Enqueue Tailwind CSS via CDN (For development/demo)
    wp_enqueue_script('tailwind-cdn', 'https://cdn.tailwindcss.com', array(), null, false);
    
    // Custom Tailwind Config
    wp_add_inline_script('tailwind-cdn', "
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: '#E31837',
                        'brand-yellow': '#FFC72C',
                        'brand-dark': '#C41230',
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        serif: ['Playfair Display', 'serif'],
                    },
                }
            }
        }
    ");
}
add_action('wp_enqueue_scripts', 'korba_enqueue_styles');

function korba_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'korba'),
    ));
}
add_action('after_setup_theme', 'korba_setup');
?>
