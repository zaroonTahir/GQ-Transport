import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import gq4 from '../../assets/gq4.png';

const EMAILJS_SERVICE_ID = 'service_ug9zuxp';
const EMAILJS_TEMPLATE_ID = 'template_odd5zds';
const EMAILJS_PUBLIC_KEY = 'piZBptOvyRKG3Yce4';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Our Location',
    details: ['Shop no.01 Choudhary Plaza', 'Rahim Yar Khan, Punjab, Pakistan'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+92 339 2227727'],
    gradient: 'from-green-500 to-teal-500',
  },
  {
    icon: Mail,
    title: 'Leadership',
    details: ['CEO: Choudhary Adan'],
    gradient: 'from-purple-500 to-pink-500',
  },
];

/* ── Floating label input ── */
function FloatingInput({ type = 'text', name, label, value, onChange, required }) {
  const [focused, setFocused] = useState(false);
  const active = focused || value;

  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        className="w-full px-4 pt-6 pb-2 bg-gray-800/50 border border-white/10 rounded-xl text-sm text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 peer"
        placeholder={label}
      />
      <label
        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
          active ? 'top-2 text-xs text-blue-400' : 'top-4 text-sm text-gray-500'
        }`}
      >
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      {/* Focus glow */}
      {focused && (
        <div className="absolute inset-0 rounded-xl border border-blue-500/30 pointer-events-none" />
      )}
    </div>
  );
}

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields');
      setIsLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 5000);
    } catch (err) {
      setError('Failed to send message. Please try again or call us at +92 339 2227727');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-20 md:py-28 bg-[#030712] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-sm font-medium text-green-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
            <span className="text-white">Contact </span>
            <span className="animated-gradient-text">Us</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to move your cargo? Reach out to Pakistan's most trusted transport partner
          </p>
        </motion.div>

        {/* Fleet image banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mb-14 rounded-2xl overflow-hidden border border-white/10 shadow-2xl group"
        >
          <motion.img
            src={gq4}
            alt="GQ Transport Fleet"
            className="w-full h-48 sm:h-64 md:h-80 object-cover"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent" />

          {/* Floating stats */}
          <div className="absolute top-4 left-4 right-4 grid grid-cols-3 gap-3">
            {[
              { val: '10+', label: 'Modern Trucks', gradient: 'from-blue-500 to-cyan-500' },
              { val: '24/7', label: 'Available', gradient: 'from-green-500 to-teal-500' },
              { val: '100%', label: 'Insured', gradient: 'from-purple-500 to-pink-500' },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900/90 backdrop-blur-md border border-white/20 rounded-xl p-3 md:p-4"
              >
                <div className={`text-xl md:text-2xl font-black bg-gradient-to-r ${s.gradient} bg-clip-text text-transparent`}>
                  {s.val}
                </div>
                <div className="text-xs text-gray-300 mt-0.5">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-2xl font-black text-white mb-8">Get in Touch</h3>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="group relative bg-gray-900/60 backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-2xl p-5 overflow-hidden transition-all duration-300"
                >
                  {/* Left accent */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${info.gradient} rounded-l-2xl`} />

                  <div className="flex items-start gap-4 ml-3">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{info.title}</h4>
                      {info.details.map((d, j) => (
                        <p key={j} className="text-sm text-gray-400">{d}</p>
                      ))}
                    </div>
                  </div>

                  {/* Hover gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300`} />
                </motion.div>
              ))}
            </div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="p-5 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 rounded-2xl"
            >
              <p className="text-sm text-gray-300 leading-relaxed">
                <span className="font-bold text-white">Operating Hours:</span> We're available 24/7 to serve you.
                Call us anytime for urgent shipments or emergencies.
              </p>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="relative bg-gray-900/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl overflow-hidden">
              {/* Shimmer */}
              <div className="absolute inset-0 rounded-2xl shimmer pointer-events-none" />

              <h3 className="text-2xl font-black text-white mb-1">Send a Message</h3>
              <p className="text-sm text-gray-400 mb-7">We'll get back to you within 24 hours</p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-4"
                  >
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-green-400 mb-2">Message Sent!</h4>
                  <p className="text-gray-400 text-center text-sm">Thank you! We'll get back to you soon.</p>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-xl"
                    >
                      <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <p className="text-xs text-red-400">{error}</p>
                    </motion.div>
                  )}

                  <FloatingInput
                    name="name"
                    label="Your Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FloatingInput
                      type="email"
                      name="email"
                      label="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <FloatingInput
                      type="tel"
                      name="phone"
                      label="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Textarea */}
                  <div className="relative">
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={(e) => e.target.parentElement.classList.add('focused')}
                      onBlur={(e) => e.target.parentElement.classList.remove('focused')}
                      placeholder=" "
                      className="w-full px-4 pt-6 pb-2 bg-gray-800/50 border border-white/10 rounded-xl text-sm text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 resize-none peer"
                      required
                    />
                    <label className="absolute left-4 top-4 text-sm text-gray-500 transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-400 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-blue-400">
                      Tell us about your transport needs <span className="text-red-400">*</span>
                    </label>
                  </div>

                  {/* Submit */}
                  <motion.button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    whileHover={{ scale: isLoading ? 1 : 1.02 }}
                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                    className="w-full relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {/* Shimmer on button */}
                    <div className="absolute inset-0 shimmer" />
                    <span className="relative flex items-center justify-center gap-2">
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                          <motion.span
                            animate={{ x: [0, 4, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                          >
                            →
                          </motion.span>
                        </>
                      )}
                    </span>
                  </motion.button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
