import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { FaWhatsapp } from 'react-icons/fa';
import { Send } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import type { OrderFormData } from '../types';

const weights = ['250g', '500g', '1kg', '2kg', '3kg', '5kg'];

const cakeOptions = [
  'Vanilla Cake',
  'Pineapple Cake',
  'Butterscotch Cake',
  'Strawberry Cake',
  'Mix Fruit Cake',
  'Fresh Fruit Cake',
  'Black Forest Cake',
  'White Forest Cake',
  'Chocolate Cake',
  'Oreo Cake',
  'Rashmalai Cake',
  'Red Velvet Cake',
  'KitKat Cake',
  'Chocolate Tiffle Cake',
  'Nutella Cake',
  'Lotus Biscoff Cake',
  'Ferrero Rocher Cake',
  'Anniversary Custom Cake',
  'Birthday Custom Cake',
  'Retirement Custom Cake',
  'Custom Cake',
];

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-secondary bg-white text-text placeholder:text-text-light/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-300 text-sm';

const labelClass = 'block text-sm font-medium text-text mb-1.5';

export default function Order() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<OrderFormData>();

  // eslint-disable-next-line react-hooks/incompatible-library
  const selectedCake = watch('cakeSelection');

  const onSubmit = (data: OrderFormData) => {
    let cakeName = data.cakeSelection;
    if (cakeName === 'Custom Cake' && data.customCakeText) {
      cakeName = `Custom Cake (${data.customCakeText})`;
    }

    const message = `Hello ROSHH CAKES,%0A%0AI would like to order:%0A%0A• *Cake:* ${encodeURIComponent(cakeName)}%0A• *Weight:* ${encodeURIComponent(data.cakeWeight)}%0A• *Quantity:* ${encodeURIComponent(String(data.quantity))}%0A• *Delivery Date:* ${encodeURIComponent(data.deliveryDate)}%0A• *Message on Cake:* ${encodeURIComponent(data.messageOnCake || 'None')}%0A• *Additional Notes:* ${encodeURIComponent(data.additionalNotes || 'None')}%0A%0A*What is the price of this cake?*%0A%0A*Customer Details:*%0A• Name: ${encodeURIComponent(data.customerName)}%0A• Phone: ${encodeURIComponent(data.phone)}%0A%0APlease let me know the total price and availability. Thank you!`;

    const url = `https://wa.me/919060369578?text=${message}`;

    toast.success('Redirecting to WhatsApp...', { icon: '🎂' });

    setTimeout(() => {
      window.open(url, '_blank');
    }, 500);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      <Helmet>
        <title>Order a Cake — ROSHH CAKES</title>
        <meta name="description" content="Place your cake order with ROSHH CAKES via WhatsApp. Custom cakes for every occasion." />
      </Helmet>

      {/* Hero banner */}
      <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <img
          src="/heroCake/ChatGPT Image Jul 9, 2026, 05_19_26 PM.png"
          alt="Order a Cake"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-6xl font-bold text-white mb-3"
          >
            Place Your <span className="text-accent">Order</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-white/70 text-lg"
          >
            Fill in the details and we'll connect on WhatsApp
          </motion.p>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-20 bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Order Form"
            subtitle="Fill in your details below and click 'Order on WhatsApp' to send your order directly."
          />

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg shadow-accent/5 space-y-6"
          >
            {/* Customer Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="customerName" className={labelClass}>
                  Full Name <span className="text-accent">*</span>
                </label>
                <input
                  id="customerName"
                  type="text"
                  placeholder="Your full name"
                  className={inputClass}
                  {...register('customerName', { required: 'Name is required' })}
                />
                {errors.customerName && (
                  <p className="text-accent text-xs mt-1">{errors.customerName.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone Number <span className="text-accent">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Your phone number"
                  className={inputClass}
                  {...register('phone', {
                    required: 'Phone number is required',
                    pattern: { value: /^[6-9]\d{9}$/, message: 'Enter a valid 10-digit phone number' },
                  })}
                />
                {errors.phone && (
                  <p className="text-accent text-xs mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>

            {/* Cake Selection & Weight */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="cakeSelection" className={labelClass}>
                  Select Cake <span className="text-accent">*</span>
                </label>
                <select
                  id="cakeSelection"
                  className={inputClass}
                  {...register('cakeSelection', { required: 'Please select a cake' })}
                >
                  <option value="">Choose a cake</option>
                  {cakeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.cakeSelection && (
                  <p className="text-accent text-xs mt-1">{errors.cakeSelection.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="cakeWeight" className={labelClass}>
                  Cake Weight <span className="text-accent">*</span>
                </label>
                <select
                  id="cakeWeight"
                  className={inputClass}
                  {...register('cakeWeight', { required: 'Please select a weight' })}
                >
                  <option value="">Choose weight</option>
                  {weights.map((w) => (
                    <option key={w} value={w}>
                      {w}
                    </option>
                  ))}
                </select>
                {errors.cakeWeight && (
                  <p className="text-accent text-xs mt-1">{errors.cakeWeight.message}</p>
                )}
              </div>
            </div>

            {/* Custom Cake Text Input (Animated) */}
            <AnimatePresence>
              {selectedCake === 'Custom Cake' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <label htmlFor="customCakeText" className={labelClass}>
                    Custom Cake Details (Flavor / Design / Description) <span className="text-accent">*</span>
                  </label>
                  <input
                    id="customCakeText"
                    type="text"
                    placeholder="Describe your custom cake (e.g. Pineapple with white frosting)"
                    className={inputClass}
                    {...register('customCakeText', { required: 'Please describe your custom cake' })}
                  />
                  {errors.customCakeText && (
                    <p className="text-accent text-xs mt-1">{errors.customCakeText.message}</p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Quantity & Delivery Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="quantity" className={labelClass}>
                  Quantity <span className="text-accent">*</span>
                </label>
                <input
                  id="quantity"
                  type="number"
                  min={1}
                  defaultValue={1}
                  className={inputClass}
                  {...register('quantity', {
                    required: 'Quantity is required',
                    min: { value: 1, message: 'Minimum quantity is 1' },
                    valueAsNumber: true,
                  })}
                />
                {errors.quantity && (
                  <p className="text-accent text-xs mt-1">{errors.quantity.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="deliveryDate" className={labelClass}>
                  Delivery Date <span className="text-accent">*</span>
                </label>
                <input
                  id="deliveryDate"
                  type="date"
                  min={today}
                  className={inputClass}
                  {...register('deliveryDate', { required: 'Delivery date is required' })}
                />
                {errors.deliveryDate && (
                  <p className="text-accent text-xs mt-1">{errors.deliveryDate.message}</p>
                )}
              </div>
            </div>

            {/* Message on Cake */}
            <div>
              <label htmlFor="messageOnCake" className={labelClass}>
                Message to Write on Cake
              </label>
              <input
                id="messageOnCake"
                type="text"
                placeholder="e.g. Happy Birthday Priya!"
                className={inputClass}
                {...register('messageOnCake')}
              />
            </div>

            {/* Additional Notes */}
            <div>
              <label htmlFor="additionalNotes" className={labelClass}>
                Additional Notes
              </label>
              <textarea
                id="additionalNotes"
                rows={3}
                placeholder="Any special requests, allergies, or preferences..."
                className={`${inputClass} resize-none`}
                {...register('additionalNotes')}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-green-500 text-white rounded-xl text-lg font-semibold hover:bg-green-600 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 group"
            >
              <FaWhatsapp className="w-6 h-6" />
              Order on WhatsApp
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-center text-text-light text-xs">
              By clicking "Order on WhatsApp", you'll be redirected to WhatsApp with your order details pre-filled.
            </p>
          </motion.form>
        </div>
      </section>
    </>
  );
}
