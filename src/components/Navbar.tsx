import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Camera } from 'lucide-react';
import logo from '../assets/logo.svg';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "glass shadow-lg shadow-accent/5 h-16"
        : "bg-white/95 backdrop-blur-md h-20"
        }`}
    >
      <nav className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3 group h-full"
        >
          {/* Logo */}
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden flex-shrink-0 transition-all duration-300 group-hover:scale-105">
            <img
              src={logo}
              alt="ROSHH CAKES Logo"
              className="w-full h-full object-contain scale-[1.8]"
            />
          </div>

          {/* Brand */}
          <div className="leading-none">
            <h1 className="font-heading text-2xl font-bold tracking-wide">
              <span className="text-text">ROSHH </span>
              <span className="text-accent">CAKES</span>
            </h1>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-2">
          {navLinks.filter(l => l.path !== '/order').map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${isActive
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
              className="px-6 py-2.5 bg-accent text-white rounded-full text-sm font-semibold hover:bg-accent-dark transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
            >
              Order Now
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-50 w-11 h-11 rounded-full bg-secondary flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all duration-300"
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
                      `text-2xl font-heading font-semibold transition-colors duration-200 flex items-center gap-2 ${isActive ? 'text-accent' : 'text-text hover:text-accent'
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
