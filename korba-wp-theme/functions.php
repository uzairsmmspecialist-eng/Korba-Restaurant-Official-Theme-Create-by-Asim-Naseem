<?php
/**
 * Korba functions and definitions
 */

if ( ! function_exists( 'korba_setup' ) ) :
    function korba_setup() {
        add_theme_support( 'title-tag' );
        add_theme_support( 'post-thumbnails' );
        add_theme_support( 'customize-selective-refresh-widgets' );
        add_theme_support( 'html5', array(
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
        ) );

        register_nav_menus( array(
            'primary' => esc_html__( 'Primary Menu', 'korba' ),
            'footer'  => esc_html__( 'Footer Menu', 'korba' ),
        ) );
    }
endif;
add_action( 'after_setup_theme', 'korba_setup' );

/**
 * Enqueue scripts and styles.
 */
function korba_scripts() {
    // Google Fonts
    wp_enqueue_style( 'korba-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap', array(), null );
    
    // Main Stylesheet
    wp_enqueue_style( 'korba-style', get_stylesheet_uri(), array(), '1.1' );

    // Tailwind CSS via CDN for rapid development
    wp_enqueue_script( 'tailwind-cdn', 'https://cdn.tailwindcss.com', array(), null, false );
    
    // Custom Tailwind Config
    wp_add_inline_script( 'tailwind-cdn', "
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
    " );
}
add_action( 'wp_enqueue_scripts', 'korba_scripts' );

/**
 * Custom animations and global CSS
 */
function korba_inline_css() {
    ?>
    <style>
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-marquee {
            animation: marquee 30s linear infinite;
        }
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }
        .animate-float {
            animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
            animation: float 7s ease-in-out infinite;
            animation-delay: 2s;
        }
        .btn-hero {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .btn-hero:hover {
            transform: scale(1.05);
        }
    </style>
    <?php
}
add_action( 'wp_head', 'korba_inline_css' );
