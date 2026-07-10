import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, light }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-3 ${
          light ? 'text-white' : 'text-text'
        }`}
      >
        {title}
      </h2>
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="h-[2px] w-8 bg-accent rounded-full" />
        <span className="h-2 w-2 rounded-full bg-accent" />
        <span className="h-[2px] w-8 bg-accent rounded-full" />
      </div>
      {subtitle && (
        <p className={`max-w-2xl mx-auto text-base md:text-lg ${light ? 'text-white/80' : 'text-text-light'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
