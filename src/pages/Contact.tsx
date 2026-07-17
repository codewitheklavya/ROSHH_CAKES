import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Phone, MapPin, Clock, ExternalLink, Mail } from 'lucide-react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 90603 69578',
    href: 'tel:+919060369578',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: FaWhatsapp,
    title: 'WhatsApp',
    value: 'Chat with us',
    href: 'https://wa.me/919060369578',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: FaInstagram,
    title: 'Instagram',
    value: '@roshh_cakes',
    href: 'https://instagram.com/roshh_cakes',
    color: 'bg-pink-50 text-pink-600',
  },
  {
    icon: Mail,
    title: 'Gmail',
    value: 'roshhcakes@gmail.com',
    href: 'mailto:roshhcakes@gmail.com',
    color: 'bg-red-50 text-red-500',
  },
];

const openingHours = [
  { day: 'Monday – Friday', time: '9:00 AM – 9:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 9:00 PM' },
  { day: 'Sunday', time: '10:00 AM – 8:00 PM' },
];

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us — ROSHH CAKES</title>
        <meta name="description" content="Get in touch with ROSHH CAKES. Call, WhatsApp, or visit us in Namkum, Ranchi." />
      </Helmet>

      {/* Hero banner */}
      <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <img
          src="/store/Untitled design.png"
          alt="Contact ROSHH CAKES"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-6xl font-bold text-white mb-3"
          >
            Contact <span className="text-accent">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-white/70 text-lg"
          >
            We'd love to hear from you
          </motion.p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Get In Touch"
            subtitle="Reach out to us through any of these channels."
          />

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
              >
                <div
                  className={`w-14 h-14 mx-auto mb-4 rounded-2xl ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-text mb-1">{item.title}</h3>
                <p className="text-text-light text-sm flex items-center justify-center gap-1">
                  {item.value}
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </p>
              </motion.a>
            ))}
          </div>

          {/* Address & Hours + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Address & Hours */}
            <div className="space-y-8">
              {/* Address */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-text text-lg mb-2">Our Location</h3>
                    <p className="text-text-light leading-relaxed">
                      Roshh Cakes, Kochatoli Chowk,<br />
                      Namkum, Ranchi, Jharkhand
                    </p>
                    <a
                      href="https://maps.google.com/?q=Roshh+Cakes+Kochatoli+Chowk+Namkum+Ranchi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-accent font-medium text-sm hover:underline"
                    >
                      Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Opening hours */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-text text-lg mb-3">Opening Hours</h3>
                    <ul className="space-y-2">
                      {openingHours.map((h) => (
                        <li key={h.day} className="flex justify-between text-sm">
                          <span className="text-text-light">{h.day}</span>
                          <span className="font-medium text-text">{h.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-md h-80 lg:h-full min-h-[320px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.1!2d85.35!3d23.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDIxJzAwLjAiTiA4NcKwMjEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ROSHH CAKES location on Google Maps"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
