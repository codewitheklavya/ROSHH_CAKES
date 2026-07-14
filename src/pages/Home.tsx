import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {
  ShieldCheck,
  Leaf,
  Award,
  Clock,
  Star,
  ChevronRight,
  Sparkles,
  Heart,
  ChevronLeft,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import SectionHeading from '../components/SectionHeading';
import CakeCard from '../components/CakeCard';
import { cakes, categories, testimonials } from '../data/cakes';

const heroSlides = [
  {
    image: "/store/Hero section.png",
    tag: '✨ Premium Bakery in Ranchi',
    title: 'ROSHH',
    titleAccent: 'CAKES',
    subtitle: 'Where every slice tells a story. Handcrafted premium cakes for birthdays, weddings, anniversaries & every sweet moment in between.',
  },
  {
    image: "/heroCake/ChatGPT Image Jul 14, 2026, 05_00_06 PM.png",
    tag: '🎂 Birthday Specials',
    title: 'Celebrate',
    titleAccent: 'Every Moment',
    subtitle: 'Make every birthday unforgettable with our custom-designed, freshly baked birthday cakes crafted with love.',
  },
  {
    image: "/store/hero.png",
    tag: '💍 Anniversary Collection',
    title: 'Cakes That',
    titleAccent: 'Tell Stories',
    subtitle: 'Celebrate your love journey with elegant, multi-tiered anniversary masterpieces tailored to your unique story.',
  },
  {
    image: "/heroCake/ChatGPT Image Jul 14, 2026, 04_45_25 PM.png",
    tag: '🎁 Custom Cakes',
    title: 'Cake has',
    titleAccent: 'Big Heart',
    subtitle: 'Adorable, perfectly portioned bento cakes — the perfect gift for any sweet occasion, big or small.',
  },
];

const featuredCakes = cakes.filter((c) => c.isFeatured);

const whyChooseUs = [
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    description: 'We use only premium, farm-fresh ingredients in every cake we bake.',
  },
  {
    icon: ShieldCheck,
    title: 'Hygienically Prepared',
    description: 'Our kitchen follows strict hygiene protocols for your safety.',
  },
  {
    icon: Sparkles,
    title: 'Custom Designs',
    description: 'Every cake is a masterpiece, tailored to your unique vision.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'Your celebration deserves punctuality — we deliver on time, every time.',
  },
];

const trustBadges = [
  { icon: Award, label: 'FSSAI Licensed', sublabel: 'Lic. No: 21125007000278' },
  { icon: Leaf, label: 'Fresh Ingredients', sublabel: '100% Premium Quality' },
  { icon: ShieldCheck, label: 'Hygienically Prepared', sublabel: 'Clean Kitchen' },
  { icon: Heart, label: 'Quality Guaranteed', sublabel: 'Made with Love' },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const goNext = useCallback(() => {
    goToSlide((currentSlide + 1) % heroSlides.length);
  }, [currentSlide, goToSlide]);

  const goPrev = useCallback(() => {
    goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
  }, [currentSlide, goToSlide]);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [goNext]);

  return (
    <>
      <Helmet>
        <title>ROSHH CAKES — Premium Custom Cakes in Ranchi</title>
        <meta
          name="description"
          content="Order premium custom cakes for birthdays, weddings, and anniversaries from ROSHH CAKES in Ranchi. Freshly baked with love."
        />
      </Helmet>

      {/* ══════════════ HERO CAROUSEL ══════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background slides with crossfade */}
        {heroSlides.map((slide, index) => (
          <AnimatePresence key={slide.image} mode="sync">
            {index === currentSlide && (
              <motion.div
                key={`bg-${index}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.9, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-transparent" />
              </motion.div>
            )}
          </AnimatePresence>
        ))}

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentSlide}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium mb-6">
                  {heroSlides[currentSlide].tag}
                </span>

                <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                  {heroSlides[currentSlide].title}{' '}
                  <span className="text-accent">{heroSlides[currentSlide].titleAccent}</span>
                </h1>

                <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-lg">
                  {heroSlides[currentSlide].subtitle}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/order"
                    className="group px-8 py-4 bg-accent text-white rounded-full text-lg font-semibold hover:bg-accent-dark hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300 flex items-center gap-2"
                  >
                    Order Now
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/cakes"
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300"
                  >
                    Explore Cakes
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slide navigation arrows */}
        <button
          onClick={goPrev}
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={goNext}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slide dot indicators */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`transition-all duration-400 rounded-full ${i === currentSlide
                ? 'w-8 h-2.5 bg-accent'
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/60'
                }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5"
        >
          <span className="w-1.5 h-3 bg-white/60 rounded-full" />
        </motion.div>
      </section>

      {/* ══════════════ FEATURED CAKES (Swiper) ══════════════ */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Featured Cakes"
            subtitle="Our most-loved creations, hand-picked for you."
          />

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {featuredCakes.map((cake, i) => (
              <SwiperSlide key={cake.id}>
                <CakeCard cake={cake} index={i} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="text-center mt-8">
            <Link
              to="/cakes"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-accent text-accent rounded-full font-semibold hover:bg-accent hover:text-white transition-all duration-300"
            >
              View All Cakes
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════ CATEGORIES ══════════════ */}
      <section className="py-20 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Cake Categories"
            subtitle="From birthdays to weddings, we have the perfect cake for every occasion."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to="/cakes"
                  className="group relative block h-64 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500"
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-heading text-xl font-bold text-white mb-1">
                      {cat.name}
                    </h3>
                    <p className="text-white/70 text-sm">{cat.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ WHY CHOOSE US ══════════════ */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Choose Us"
            subtitle="Every detail matters when it comes to your celebration."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:text-white text-accent transition-all duration-500">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-lg font-bold text-text mb-2">{item.title}</h3>
                <p className="text-text-light text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ TRUST SECTION ══════════════ */}
      <section className="py-14 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center text-white"
              >
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-3">
                  <badge.icon className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-sm">{badge.label}</h4>
                <p className="text-white/70 text-xs mt-1">{badge.sublabel}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ TESTIMONIALS (Swiper) ══════════════ */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Our Customers Say"
            subtitle="Don't just take our word for it — hear from our happy customers."
          />

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="bg-white rounded-2xl p-6 shadow-sm h-full flex flex-col">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-text-light text-sm leading-relaxed italic flex-1 mb-4">
                    "{t.text}"
                  </p>
                  <div className="pt-4 border-t border-secondary">
                    <p className="font-heading font-bold text-text text-sm">{t.name}</p>
                    <p className="text-accent text-xs">{t.cakeOrdered}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ══════════════ CTA BANNER ══════════════ */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-text mb-4">
              Order Your Dream Cake Today
            </h2>
            <p className="text-text-light text-lg mb-8 max-w-2xl mx-auto">
              Whether it's a birthday bash, a dream wedding, or a simple celebration — let ROSHH CAKES make it unforgettable.
            </p>
            <Link
              to="/order"
              className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-white rounded-full text-lg font-semibold hover:bg-accent-dark hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300"
            >
              Start Your Order
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
