import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import SectionHeading from '../components/SectionHeading';
import CakeCard from '../components/CakeCard';
import { cakes } from '../data/cakes';
import type { CakeCategory } from '../types';

type Filter = 'all' | CakeCategory;

const filters: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All Cakes' },
  { key: 'birthday', label: 'Birthday' },
  { key: 'anniversary', label: 'Anniversary' },
  { key: 'bento', label: 'Bento' },
  { key: 'wedding', label: 'Wedding' },
  { key: 'custom', label: 'Custom' },
  { key: 'jar', label: 'Jar Cakes' },
  { key: 'donut', label: 'Donuts' },
];

export default function Cakes() {
  const [active, setActive] = useState<Filter>('all');

  const filtered = active === 'all' ? cakes : cakes.filter((c) => c.category === active);

  return (
    <>
      <Helmet>
        <title>Our Cakes — ROSHH CAKES</title>
        <meta
          name="description"
          content="Browse our collection of premium cakes and treats — birthday, anniversary, bento, wedding, jar cakes, donuts, and custom designs."
        />
      </Helmet>

      {/* Hero banner */}
      <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <img
          src="/birthdayCake/ChatGPT Image Jul 9, 2026, 05_18_50 PM.png"
          alt="Our Cakes"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-6xl font-bold text-white mb-3"
          >
            Our <span className="text-accent">Cakes</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-white/70 text-lg"
          >
            Handcrafted with passion, baked with love
          </motion.p>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Browse Our Collection"
            subtitle="Find the perfect cake for your celebration."
          />

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === f.key
                    ? 'bg-accent text-white shadow-lg shadow-accent/20'
                    : 'bg-white text-text-light hover:bg-secondary hover:text-accent border border-secondary'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((cake, i) => (
                <CakeCard key={cake.id} cake={cake} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <p className="text-center text-text-light py-16 text-lg">
              No cakes found in this category. Try a different filter!
            </p>
          )}
        </div>
      </section>
    </>
  );
}
