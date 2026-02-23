<?php
/**
 * Korba Theme Functions
 */

function korba_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    add_theme_support('custom-logo');

    // Register Navigation Menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'korba'),
        'footer'  => __('Footer Menu', 'korba'),
    ));
}
add_action('after_setup_theme', 'korba_setup');

function korba_enqueue_scripts() {
    // Enqueue Google Fonts
    wp_enqueue_style('korba-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap', array(), null);
    
    // Main Stylesheet
    wp_enqueue_style('korba-style', get_stylesheet_uri(), array(), '1.0');
    
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
add_action('wp_enqueue_scripts', 'korba_enqueue_scripts');

/**
 * Register Custom Post Type: Menu Items
 */
function korba_register_menu_cpt() {
    $labels = array(
        'name'               => _x('Menu Items', 'post type general name', 'korba'),
        'singular_name'      => _x('Menu Item', 'post type singular name', 'korba'),
        'menu_name'          => _x('Menu', 'admin menu', 'korba'),
        'add_new'            => _x('Add New', 'menu item', 'korba'),
        'add_new_item'       => __('Add New Menu Item', 'korba'),
        'edit_item'          => __('Edit Menu Item', 'korba'),
        'new_item'           => __('New Menu Item', 'korba'),
        'all_items'          => __('All Menu Items', 'korba'),
        'view_item'          => __('View Menu Item', 'korba'),
        'search_items'       => __('Search Menu Items', 'korba'),
        'not_found'          => __('No menu items found', 'korba'),
        'not_found_in_trash' => __('No menu items found in Trash', 'korba'),
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
        'label'        => __('Categories', 'korba'),
        'rewrite'      => array('slug' => 'menu-category'),
        'hierarchical' => true,
        'show_in_rest' => true,
    ));
}
add_action('init', 'korba_register_menu_cpt');
?>
