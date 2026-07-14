import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Leaf,
  ShieldCheck,
  Palette,
  Heart,
  Sparkles,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const values = [
  {
    icon: Heart,
    title: 'Our Story',
    description:
      'ROSHH CAKES was born from a simple passion — the joy of baking. What started as a home kitchen experiment quickly became Ranchi\'s go-to destination for premium, handcrafted cakes. Every cake we create is a labor of love, designed to make your celebrations truly unforgettable.',
  },
  {
    icon: ShieldCheck,
    title: 'Commitment to Quality',
    description:
      'We never compromise on quality. From the finest Belgian cocoa to farm-fresh vanilla and seasonal fruits, every ingredient is handpicked to ensure your cake is nothing short of perfection.',
  },
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    description:
      'No preservatives, no shortcuts. We source the freshest dairy, fruits, and premium-grade ingredients daily, so every bite delivers an authentic, homemade taste.',
  },
  {
    icon: Sparkles,
    title: 'Hygienic Baking Process',
    description:
      'Our FSSAI-certified kitchen follows the strictest hygiene protocols. From sanitized equipment to temperature-controlled storage, we ensure that your cake is safe, fresh, and delicious.',
  },
  {
    icon: Palette,
    title: 'Custom Cake Expertise',
    description:
      'Got a unique idea? We specialize in bringing your dream cakes to life! Whether it\'s a sculpted character, a photo cake, or a multi-tiered wedding masterpiece — our skilled decorators can craft it all.',
  },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us — ROSHH CAKES</title>
        <meta
          name="description"
          content="Learn about ROSHH CAKES — our story, commitment to quality, fresh ingredients, and custom cake expertise."
        />
      </Helmet>

      {/* Hero banner */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <img
          src="/heroCake/ChatGPT Image Jul 9, 2026, 05_19_26 PM.png"
          alt="About ROSHH CAKES"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-6xl font-bold text-white mb-3"
          >
            About <span className="text-accent">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-white/70 text-lg"
          >
            The heart & soul behind every cake
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Journey"
            subtitle="From a home kitchen to Ranchi's most loved bakery — here's what drives us."
          />

          <div className="space-y-16">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Icon card */}
                <div className="shrink-0 w-24 h-24 rounded-2xl bg-secondary flex items-center justify-center shadow-md">
                  <item.icon className="w-10 h-10 text-accent" />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="font-heading text-2xl font-bold text-text mb-3">{item.title}</h3>
                  <p className="text-text-light leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-accent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { stat: '1000+', label: 'Cakes Delivered' },
              { stat: '500+', label: 'Happy Customers' },
              { stat: '50+', label: 'Cake Varieties' },
              { stat: '5 ★', label: 'Average Rating' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="font-heading text-3xl md:text-4xl font-bold mb-1">{item.stat}</div>
                <div className="text-white/70 text-sm">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ HAPPY CUSTOMERS ══════════════ */}
      <section className="py-20 bg-secondary/20 border-t border-secondary/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Happy Customers"
            subtitle="The smiles and sweet moments we've had the pleasure of sharing."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              {
                src: '/happyCustomer/customer collage.png',
                alt: 'ROSHH CAKES Happy Customers Collage 1',
                title: 'Celebrations Filled with Joy',
                description: 'Moments of laughter and sweet memories shared by our lovely customers across Ranchi.'
              },
              {
                src: '/happyCustomer/collage 2.png',
                alt: 'ROSHH CAKES Happy Customers Collage 2',
                title: 'Baked with Love & Smiles',
                description: 'Celebrating milestones, birthdays, anniversaries, and everything in between with our signature custom creations.'
              }
            ].map((collage, i) => (
              <motion.div
                key={collage.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-white rounded-3xl overflow-hidden shadow-md shadow-accent/5 hover:shadow-xl hover:shadow-accent/10 transition-all duration-500 group"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={collage.src}
                    alt={collage.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-text mb-2 group-hover:text-accent transition-colors duration-300">
                    {collage.title}
                  </h3>
                  <p className="text-text-light text-sm leading-relaxed">
                    {collage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Band */}
      <section className="py-20 bg-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              '/anniversaryCake/ChatGPT Image Jul 9, 2026, 05_19_19 PM.png',
              '/birthdayCake/ChatGPT Image Jul 9, 2026, 05_18_50 PM.png',
              '/BentoCakes/ChatGPT Image Jul 9, 2026, 05_19_04 PM.png',
            ].map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden shadow-md aspect-square"
              >
                <img
                  src={src}
                  alt={`ROSHH CAKES collection ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
