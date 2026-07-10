import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Leaf, ShieldCheck } from 'lucide-react';
import type { Cake } from '../types';

interface CakeCardProps {
  cake: Cake;
  index?: number;
}

export default function CakeCard({ cake, index = 0 }: CakeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-md shadow-accent/5 hover:shadow-xl hover:shadow-accent/10 transition-all duration-500 flex flex-col"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={cake.image}
          alt={cake.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {cake.isEggless && (
            <span className="px-2.5 py-1 bg-green-500 text-white text-xs font-semibold rounded-full flex items-center gap-1 shadow-lg">
              <Leaf className="w-3 h-3" /> Eggless
            </span>
          )}
          {!cake.isEggless && (
            <span className="px-2.5 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full flex items-center gap-1 shadow-lg">
              <ShieldCheck className="w-3 h-3" /> Egg
            </span>
          )}
        </div>

        {cake.isFeatured && (
          <span className="absolute top-3 right-3 px-2.5 py-1 bg-gold text-white text-xs font-bold rounded-full shadow-lg">
            ★ Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-heading text-lg font-bold text-text mb-1.5 group-hover:text-accent transition-colors duration-300">
          {cake.name}
        </h3>
        <p className="text-text-light text-sm leading-relaxed mb-3 flex-1">
          {cake.description}
        </p>

        {/* Weights */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {cake.weights.map((w) => (
            <span
              key={w}
              className="px-2.5 py-1 bg-secondary text-accent text-xs font-medium rounded-full"
            >
              {w}
            </span>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-center mt-auto pt-3 border-t border-secondary">
          <Link
            to="/order"
            className="w-full text-center px-4 py-2 bg-accent text-white text-sm font-semibold rounded-full hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 transition-all duration-300"
          >
            Order Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
