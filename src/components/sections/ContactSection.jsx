import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import contactBgImage from '../../assets/gq4.png';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
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
    <section id="contact" className="relative py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full border border-white/10">
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Ready to move your cargo? Reach out to Pakistan's most trusted transport partner
          </p>
        </div>

        {/* Truck Fleet Image with Overlay Stats */}
        <div className="relative mb-16 group">
          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl transform transition-all duration-500 hover:scale-[1.02]">
            <div className="relative">
              <img 
                src={contactBgImage} 
                alt="GQ Transport Fleet" 
                className="w-full h-72 md:h-[500px] object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60"></div>
              
              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-4">
                <div className="bg-gray-900/90 backdrop-blur-md p-4 rounded-xl border border-white/20 transform transition-all hover:scale-105">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">10+</div>
                  <div className="text-sm text-gray-300 mt-1">Modern Trucks</div>
                </div>
                <div className="bg-gray-900/90 backdrop-blur-md p-4 rounded-xl border border-white/20 transform transition-all hover:scale-105">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">24/7</div>
                  <div className="text-sm text-gray-300 mt-1">Available</div>
                </div>
                <div className="bg-gray-900/90 backdrop-blur-md p-4 rounded-xl border border-white/20 transform transition-all hover:scale-105">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">100%</div>
                  <div className="text-sm text-gray-300 mt-1">Insured</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${info.color} rounded-l-2xl`}></div>
                
                <div className="flex items-start space-x-4 ml-4">
                  <div className={`bg-gradient-to-br ${info.color} p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-2 text-gray-100">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-400 leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-white/10">
              <p className="text-gray-300 leading-relaxed">
                <span className="font-semibold text-white">Operating Hours:</span> We're available 24/7 to serve you. 
                Call us anytime for urgent shipments or emergencies.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-white/10 shadow-2xl">
              <h3 className="text-3xl font-bold mb-2">Send a Message</h3>
              <p className="text-gray-400 mb-8">Fill out the form and we'll get back to you within 24 hours</p>
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="bg-green-500/20 p-4 rounded-full mb-4 animate-bounce">
                    <CheckCircle className="w-16 h-16 text-green-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-green-400 mb-2">Message Sent!</h4>
                  <p className="text-gray-400 text-center">Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="relative">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address"
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
                      placeholder="Tell us about your transport needs..."
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-gray-800/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    ></textarea>
                  </div>
                  
                  <Button
                    onClick={handleSubmit}
                    variant="primary"
                    className="w-full group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      Send Message
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