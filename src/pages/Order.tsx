import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { FaWhatsapp } from 'react-icons/fa';
import { Send } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import type { OrderFormData } from '../types';
import { cakes } from '../data/cakes';

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
  'Rasmalai Cake',
  'Red Velvet Cake',
  'KitKat Cake',
  'Chocolate Truffle Cake',
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
  const [searchParams] = useSearchParams();
  const cakeId = searchParams.get('cakeId');

  // Find the pre-selected cake from the data if cakeId is in the URL
  const preSelectedCake = cakeId ? cakes.find((c) => c.id === cakeId) ?? null : null;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<OrderFormData>();

  // When a cake is pre-selected via URL, silently set the cakeSelection value
  useEffect(() => {
    if (preSelectedCake) {
      setValue('cakeSelection', preSelectedCake.name, { shouldValidate: false });
    }
  }, [preSelectedCake, setValue]);

  // eslint-disable-next-line react-hooks/incompatible-library
  const selectedCake = watch('cakeSelection');

  const onSubmit = (data: OrderFormData) => {
    let cakeName = data.cakeSelection;
    if (cakeName === 'Custom Cake' && data.customCakeText) {
      cakeName = `Custom Cake (${data.customCakeText})`;
    }

    const selectedCakeObj = preSelectedCake || cakes.find((c) => c.name === data.cakeSelection || c.id === data.cakeSelection);
    const imageUrl = selectedCakeObj
      ? `${window.location.origin}${selectedCakeObj.image}`
      : '';

    const messageLines = [
      '🍰 *NEW CAKE ORDER - RossCake*',
      '',
      `*Cake:* ${cakeName}`,
      `*Weight:* ${data.cakeWeight}`,
      `*Quantity:* ${data.quantity}`,
      `*Delivery Date:* ${data.deliveryDate}`,
      `*Message on Cake:* ${data.messageOnCake || 'None'}`,
      `*Additional Notes:* ${data.additionalNotes || 'None'}`,
      '',
      '*Customer Details:*',
      `• Name: ${data.customerName}`,
      `• Phone: ${data.phone}`,
    ];

    if (imageUrl) {
      messageLines.push('', '*Cake Image:*', imageUrl);
    }

    messageLines.push('', 'Please let me know the total price and availability. Thank you!');

    const fullMessage = messageLines.join('\n');
    const url = `https://wa.me/919060369578?text=${encodeURIComponent(fullMessage)}`;

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
          src="/heroCake/hero-premium.png"
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

          {/* Selected cake banner — shown only when pre-selected via URL */}
          {preSelectedCake && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 flex items-center gap-4 bg-secondary/60 border border-accent/20 rounded-2xl px-5 py-4"
            >
              <img
                src={preSelectedCake.image}
                alt={preSelectedCake.name}
                className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
              />
              <div>
                <p className="text-xs font-medium text-text-light uppercase tracking-wider mb-0.5">Ordering</p>
                <p className="font-heading font-bold text-text text-lg leading-tight">{preSelectedCake.name}</p>
              </div>
            </motion.div>
          )}

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
              {/* Cake selector: hidden when pre-selected via URL, visible for direct /order visits */}
              {!preSelectedCake && (
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
              )}

              <div className={preSelectedCake ? 'sm:col-span-2' : ''}>
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

            {/* Custom Cake Text Input (Animated) — only relevant when dropdown is visible */}
            <AnimatePresence>
              {!preSelectedCake && selectedCake === 'Custom Cake' && (
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
