import { Link } from 'react-router-dom';
import { Cake, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text text-white/90">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <Cake className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading text-xl font-bold text-white tracking-wide">
                ROSHH <span className="text-accent">CAKES</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Premium custom cakes baked with love, using the freshest ingredients. Making every celebration sweeter since day one.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/919060369578"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/roshh_cakes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/cakes', label: 'Our Cakes' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/contact', label: 'Contact' },
                { to: '/order', label: 'Order Now' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/60 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <Phone className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <a href="tel:+919060369578" className="text-white/60 hover:text-accent text-sm transition-colors">
                  +91 90603 69578
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <Mail className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <a href="mailto:roshhcakes@gmail.com" className="text-white/60 hover:text-accent text-sm transition-colors">
                  roshhcakes@gmail.com
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <a
                  href="https://maps.google.com/?q=Roshh+Cakes+Kochatoli+Chowk+Namkum+Ranchi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-accent text-sm transition-colors"
                >
                  Roshh Cakes, Kochatoli Chowk, Namkum, Ranchi
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <Clock className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">Mon – Sun: 9:00 AM – 9:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Trust & FSSAI */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-5">Trust & Quality</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center shrink-0">
                  <span className="text-gold font-bold text-xs">FSSAI</span>
                </div>
                <div>
                  <p className="text-xs text-white/40">FSSAI Licensed</p>
                  <p className="text-sm text-white/80 font-medium">21125007000278</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-white/60">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Fresh Ingredients
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Hygienically Prepared
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Quality Guaranteed
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © {currentYear} ROSHH CAKES. All rights reserved. Made with ❤️ in Ranchi.
          </p>
          <p className="text-white/40 text-xs">
            FSSAI License No: 12345678901234
          </p>
        </div>
      </div>
    </footer>
  );
}
