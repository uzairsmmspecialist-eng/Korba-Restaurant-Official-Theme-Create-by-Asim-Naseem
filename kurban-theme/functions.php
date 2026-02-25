<?php
/**
 * Kurban Theme Functions
 */

function kurban_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    add_theme_support('custom-logo');

    // Register Navigation Menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'kurban'),
        'footer'  => __('Footer Menu', 'kurban'),
    ));
}
add_action('after_setup_theme', 'kurban_setup');

function kurban_enqueue_scripts() {
    // Enqueue Google Fonts
    wp_enqueue_style('kurban-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap', array(), null);
    
    // Main Stylesheet
    wp_enqueue_style('kurban-style', get_stylesheet_uri(), array(), '1.0');
    
    // Tailwind CDN (for rapid development/demo)
    wp_enqueue_script('tailwind-cdn', 'https://cdn.tailwindcss.com', array(), null, false);
    
    // Lucide Icons
    wp_enqueue_script('lucide-icons', 'https://unpkg.com/lucide@latest', array(), null, true);
    
    // Custom Tailwind Config
    wp_add_inline_script('tailwind-cdn', "
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: '#DC2626',
                        'brand-yellow': '#FACC15',
                        'brand-dark': '#B91C1C',
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        serif: ['Playfair Display', 'serif'],
                    },
                }
            }
        }
    ");

    // Initialize Lucide
    wp_add_inline_script('lucide-icons', "lucide.createIcons();");
}
add_action('wp_enqueue_scripts', 'kurban_enqueue_scripts');

/**
 * Register Custom Post Type: Menu Items
 */
function kurban_register_menu_cpt() {
    $labels = array(
        'name'               => _x('Menu Items', 'post type general name', 'kurban'),
        'singular_name'      => _x('Menu Item', 'post type singular name', 'kurban'),
        'menu_name'          => _x('Menu', 'admin menu', 'kurban'),
        'add_new'            => _x('Add New', 'menu item', 'kurban'),
        'add_new_item'       => __('Add New Menu Item', 'kurban'),
        'edit_item'          => __('Edit Menu Item', 'kurban'),
        'new_item'           => __('New Menu Item', 'kurban'),
        'all_items'          => __('All Menu Items', 'kurban'),
        'view_item'          => __('View Menu Item', 'kurban'),
        'search_items'       => __('Search Menu Items', 'kurban'),
        'not_found'          => __('No menu items found', 'kurban'),
        'not_found_in_trash' => __('No menu items found in Trash', 'kurban'),
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'has_archive'        => true,
        'menu_icon'          => 'dashicons-food',
        'supports'           => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'rewrite'            => array('slug' => 'menu-item'),
        'show_in_rest'       => true,
    );

    register_post_type('menu_item', $args);

    // Register Taxonomy: Menu Categories
    register_taxonomy('menu_category', 'menu_item', array(
        'label'        => __('Categories', 'kurban'),
        'rewrite'      => array('slug' => 'menu-category'),
        'hierarchical' => true,
        'show_in_rest' => true,
    ));
}
add_action('init', 'kurban_register_menu_cpt');
?>
