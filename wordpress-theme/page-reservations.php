<?php
/**
 * Template Name: Reservations Page
 */
get_header(); ?>

<main class="pt-24 pb-0 bg-zinc-950 min-h-screen">
    <section class="max-w-7xl mx-auto px-6 py-24">
        <div class="grid lg:grid-cols-2 gap-20 items-center">
            <div>
                <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-widest mb-8 border border-brand/20 backdrop-blur-sm">
                    Reservations
                </span>
                <h1 class="text-5xl sm:text-7xl font-bold tracking-tighter leading-tight mb-8 text-white">
                    Book Your <br />
                    <span class="text-brand-yellow italic font-serif">Royal Table</span>
                </h1>
                <p class="text-zinc-400 text-lg leading-relaxed mb-12 max-w-lg">
                    Join us for an unforgettable culinary journey. Whether it's a family gathering or a romantic dinner, we ensure every moment is special.
                </p>
                
                <div class="space-y-8">
                    <div class="flex items-center gap-6">
                        <div class="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-brand border border-white/10">
                            <i data-lucide="phone" class="w-6 h-6"></i>
                        </div>
                        <div>
                            <p class="text-xs text-zinc-500 uppercase tracking-widest font-bold mb-1">Call Us</p>
                            <p class="text-xl font-bold text-white">+92 300 1234567</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-6">
                        <div class="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-brand border border-white/10">
                            <i data-lucide="map-pin" class="w-6 h-6"></i>
                        </div>
                        <div>
                            <p class="text-xs text-zinc-500 uppercase tracking-widest font-bold mb-1">Location</p>
                            <p class="text-xl font-bold text-white">Noshahra Cantt, Pakistan</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-[3rem] p-8 sm:p-12 shadow-2xl">
                <form class="space-y-6">
                    <div class="grid sm:grid-cols-2 gap-6">
                        <div class="space-y-2">
                            <label class="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-2">Full Name</label>
                            <input type="text" class="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-brand transition-all" placeholder="John Doe">
                        </div>
                        <div class="space-y-2">
                            <label class="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-2">Email Address</label>
                            <input type="email" class="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-brand transition-all" placeholder="john@example.com">
                        </div>
                    </div>
                    <div class="grid sm:grid-cols-2 gap-6">
                        <div class="space-y-2">
                            <label class="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-2">Date</label>
                            <input type="date" class="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-brand transition-all">
                        </div>
                        <div class="space-y-2">
                            <label class="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-2">Guests</label>
                            <select class="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-brand transition-all">
                                <option>2 Persons</option>
                                <option>4 Persons</option>
                                <option>6 Persons</option>
                                <option>8+ Persons</option>
                            </select>
                        </div>
                    </div>
                    <div class="space-y-2">
                        <label class="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-2">Special Requests</label>
                        <textarea class="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-brand transition-all h-32" placeholder="Any allergies or special occasions?"></textarea>
                    </div>
                    <button type="submit" class="w-full bg-brand hover:bg-brand-dark text-white font-bold py-5 rounded-2xl text-lg transition-all shadow-xl shadow-brand/20">
                        Confirm Reservation
                    </button>
                </form>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
