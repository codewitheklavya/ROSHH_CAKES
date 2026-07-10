import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { X } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { galleryImages, rawImagesList } from '../data/cakes';

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedImage =
    galleryImages.find((img) => img.id === selected) ||
    rawImagesList.find((img) => img.id === selected);

  return (
    <>
      <Helmet>
        <title>Gallery — ROSHH CAKES</title>
        <meta name="description" content="Browse our gallery of beautifully crafted premium cakes." />
      </Helmet>

      {/* Hero banner */}
      <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <img
          src="/BentoCakes/ChatGPT Image Jul 9, 2026, 05_19_11 PM.png"
          alt="Gallery"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-6xl font-bold text-white mb-3"
          >
            Our <span className="text-accent">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-white/70 text-lg"
          >
            A visual feast of our finest creations
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Creations"
            subtitle="Each cake is a work of art — see for yourself."
          />

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => setSelected(img.id)}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors duration-500 flex items-center justify-center">
                    <span className="text-white font-heading font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 px-4 py-2 rounded-full">
                      View
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Raw Images Gallery */}
      <section className="py-20 bg-secondary/35 border-t border-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Raw Images Gallery"
            subtitle="Real photos from our kitchen and customer deliveries."
          />

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {rawImagesList.map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => setSelected(img.id)}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors duration-500 flex items-center justify-center">
                    <span className="text-white font-heading font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 px-4 py-2 rounded-full">
                      View
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              className="relative max-w-4xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain rounded-2xl"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center text-text hover:bg-accent hover:text-white transition-colors duration-300 shadow-lg"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
              <p className="text-center text-white/70 text-sm mt-3">{selectedImage.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
