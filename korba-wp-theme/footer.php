    <footer class="bg-zinc-900 pt-24 pb-12 px-6 border-t border-white/5">
        <div class="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div>
                <div class="flex items-center gap-2 mb-8">
                    <div class="w-10 h-10 bg-brand rounded-xl flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="M11 20 7 12l-5 2.5"/><path d="M15 12 11 20l5 2.5"/><path d="m8 21 2-15 4 15"/><path d="M22 14s-4 0-4-4 4-4 4-4"/><path d="M18 10h4"/></svg>
                    </div>
                    <span class="text-2xl font-black tracking-tighter text-white">KORBA<span class="text-brand">.</span></span>
                </div>
                <p class="text-zinc-400 leading-relaxed mb-8 text-sm">
                    Crafting the finest culinary experiences in Noshahra Cantt. From slow-cooked pulao to charcoal-grilled kababs.
                </p>
            </div>
            
            <div class="lg:col-span-2">
                <!-- Footer Menu -->
                <?php
                wp_nav_menu( array(
                    'theme_location' => 'footer',
                    'container'      => false,
                    'menu_class'     => 'grid grid-cols-2 gap-4 text-sm text-zinc-400',
                ) );
                ?>
            </div>
        </div>
        
        <div class="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p class="text-zinc-500 text-xs">© <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. All rights reserved.</p>
            <div class="flex gap-6 text-xs text-zinc-500">
                <a href="#" class="hover:text-white">Privacy Policy</a>
                <a href="#" class="hover:text-white">Terms of Service</a>
            </div>
        </div>
    </footer>
    <?php wp_footer(); ?>
</body>
</html>
