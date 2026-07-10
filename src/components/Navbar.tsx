import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Camera } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/cakes', label: 'Cakes' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/raw-images', label: 'Raw Images' },
  { path: '/contact', label: 'Contact' },
  { path: '/order', label: 'Order' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass shadow-lg shadow-accent/5 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setIsOpen(false)}>
          {/* PDF logo with styled text fallback */}
          <div className="relative w-10 h-10 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
            <object
              data="/logo/ROSHH CAKES logo2.pdf"
              type="application/pdf"
              className="w-full h-full"
              aria-label="ROSHH CAKES Logo"
            >
              {/* Fallback: styled cake icon */}
              <div className="w-full h-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/>
                  <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2 1 2 1"/>
                  <path d="M2 21h20"/>
                  <path d="M7 8v3"/>
                  <path d="M12 8v3"/>
                  <path d="M17 8v3"/>
                  <path d="M7 4h.01"/>
                  <path d="M12 4h.01"/>
                  <path d="M17 4h.01"/>
                </svg>
              </div>
            </object>
          </div>
          <span className="font-heading text-xl md:text-2xl font-bold text-text tracking-wide">
            ROSHH <span className="text-accent">CAKES</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.filter(l => l.path !== '/order').map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-accent bg-secondary'
                      : 'text-text hover:text-accent hover:bg-secondary/50'
                  } ${link.path === '/raw-images' ? 'border border-accent/30 hover:border-accent/60' : ''}`
                }
              >
                {link.path === '/raw-images' && <Camera className="w-3.5 h-3.5" />}
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="ml-2">
            <Link
              to="/order"
              className="px-5 py-2.5 bg-accent text-white rounded-full text-sm font-semibold hover:bg-accent-dark transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
            >
              Order Now
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-50 w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-40 md:hidden flex flex-col items-center justify-center"
          >
            <ul className="flex flex-col items-center gap-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `text-2xl font-heading font-semibold transition-colors duration-200 flex items-center gap-2 ${
                        isActive ? 'text-accent' : 'text-text hover:text-accent'
                      }`
                    }
                  >
                    {link.path === '/raw-images' && <Camera className="w-5 h-5" />}
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.07 }}
              >
                <Link
                  to="/order"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 inline-block px-8 py-3 bg-accent text-white rounded-full text-lg font-semibold hover:bg-accent-dark transition-all duration-300"
                >
                  Order Now
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
