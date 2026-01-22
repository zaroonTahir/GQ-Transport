import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import gq4 from '../../assets/gq4.png'; // Import the fleet image

// Simple Input Component
const Input = ({ type, name, placeholder, value, onChange }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="w-full px-4 py-3 sm:px-5 sm:py-4 bg-gray-800/50 border border-white/10 rounded-xl text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
    required
  />
);

// Simple Button Component
const Button = ({ onClick, children, className, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={className}
  >
    {children}
  </button>
);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // EmailJS Configuration - REPLACE THESE WITH YOUR ACTUAL VALUES
  const EMAILJS_SERVICE_ID = 'service_ug9zuxp'; // Replace with your EmailJS service ID
  const EMAILJS_TEMPLATE_ID = 'template_odd5zds'; // Replace with your EmailJS template ID
  const EMAILJS_PUBLIC_KEY = 'piZBptOvyRKG3Yce4'; // Replace with your EmailJS public key

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields');
      setIsLoading(false);
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
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

      console.log('Email sent successfully:', result.text);
      setIsSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setError('Failed to send message. Please try again or contact us directly at +92 339 2227727');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: ['Shop no.01 Choudhary Plaza', 'Rahim Yar Khan, Punjab, Pakistan'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+92 339 2227727'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'Leadership',
      details: ['CEO: Choudhary Adan'],
      color: 'from-purple-500 to-purple-600'
    },
  ];

  return (
    <section id="contact" className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-block mb-3 sm:mb-4 px-4 sm:px-6 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full border border-white/10">
            <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed px-4">
            Ready to move your cargo? Reach out to Pakistan's most trusted transport partner
          </p>
        </div>

        {/* Truck Fleet Image with Overlay Stats */}
        <div className="relative mb-10 sm:mb-12 md:mb-16 group">
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl transform transition-all duration-500 hover:scale-[1.02]">
            <div className="relative">
              <img 
                src={gq4} 
                alt="GQ Transport Fleet" 
                className="w-full h-48 sm:h-64 md:h-80 lg:h-[500px] object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60"></div>
              
              {/* Floating Stats */}
              <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 md:top-6 md:left-6 md:right-6 grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                <div className="bg-gray-900/90 backdrop-blur-md p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl border border-white/20 transform transition-all hover:scale-105">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">10+</div>
                  <div className="text-xs sm:text-sm text-gray-300 mt-0.5 sm:mt-1">Modern Trucks</div>
                </div>
                <div className="bg-gray-900/90 backdrop-blur-md p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl border border-white/20 transform transition-all hover:scale-105">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-300 mt-0.5 sm:mt-1">Available</div>
                </div>
                <div className="bg-gray-900/90 backdrop-blur-md p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl border border-white/20 transform transition-all hover:scale-105">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">100%</div>
                  <div className="text-xs sm:text-sm text-gray-300 mt-0.5 sm:mt-1">Insured</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-7xl mx-auto">
          
          {/* Contact Info Cards */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Get in Touch</h3>
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${info.color} rounded-l-xl sm:rounded-l-2xl`}></div>
                
                <div className="flex items-start space-x-3 sm:space-x-4 ml-3 sm:ml-4">
                  <div className={`bg-gradient-to-br ${info.color} p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 text-gray-100">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm sm:text-base text-gray-400 leading-relaxed break-words">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Additional Info */}
            <div className="mt-6 sm:mt-8 p-4 sm:p-5 md:p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl sm:rounded-2xl border border-white/10">
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                <span className="font-semibold text-white">Operating Hours:</span> We're available 24/7 to serve you. 
                Call us anytime for urgent shipments or emergencies.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Send a Message</h3>
              <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">Fill out the form and we'll get back to you within 24 hours</p>
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8 sm:py-12">
                  <div className="bg-green-500/20 p-3 sm:p-4 rounded-full mb-3 sm:mb-4 animate-bounce">
                    <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-400" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-green-400 mb-2">Message Sent!</h4>
                  <p className="text-sm sm:text-base text-gray-400 text-center px-4">Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              ) : (
                <div className="space-y-4 sm:space-y-5">
                  {error && (
                    <div className="flex items-center gap-2 p-3 sm:p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <p className="text-xs sm:text-sm text-red-400">{error}</p>
                    </div>
                  )}
                  
                  <div className="relative">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Full Name *"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="relative">
                    <textarea
                      name="message"
                      placeholder="Tell us about your transport needs... *"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 sm:px-5 sm:py-4 bg-gray-800/50 border border-white/10 rounded-xl text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      required
                    ></textarea>
                  </div>
                  
                  <Button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="w-full group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 px-6 py-4 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <span className="flex items-center justify-center gap-2 text-sm sm:text-base font-semibold">
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                          Send Message
                        </>
                      )}
                    </span>
                  </Button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;