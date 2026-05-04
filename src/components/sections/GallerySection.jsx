import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import gq3 from '../../assets/gq3.jpg';
import gq2 from '../../assets/gq2.png';
import gq4 from '../../assets/gq4.png';
import gq5 from '../../assets/gq5.png';

const galleryImages = [
  { img: gq3, title: 'Highway Transport', category: 'Long Haul', gradient: 'from-blue-500 to-cyan-500', span: 'lg:col-span-2' },
  { img: gq4, title: 'Ready for Service', category: 'Fleet', gradient: 'from-purple-500 to-pink-500', span: '' },
  { img: gq2, title: 'Container Transport', category: 'Freight', gradient: 'from-cyan-500 to-blue-500', span: '' },
  { img: gq5, title: 'Modern Fleet', category: 'Vehicles', gradient: 'from-pink-500 to-purple-500', span: 'lg:col-span-2' },
];

/* ── Lightbox ── */
function Lightbox({ images, current, onClose, onNext, onPrev }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center"
        onClick={onClose}
      >
        {/* Close */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center z-10 transition-colors"
          onClick={onClose}
        >
          <X className="w-5 h-5 text-white" />
        </motion.button>

        {/* Prev */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute left-4 md:left-8 w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center z-10 transition-colors"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </motion.button>

        {/* Next */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute right-4 md:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center z-10 transition-colors"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </motion.button>

        {/* Image */}
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="max-w-5xl max-h-[85vh] mx-8 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[current].img}
            alt={images[current].title}
            className="max-w-full max-h-[75vh] object-contain rounded-2xl border border-white/10 shadow-2xl"
          />
          <div className="text-center mt-4">
            <span className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${images[current].gradient} text-xs font-bold text-white mb-2`}>
              {images[current].category}
            </span>
            <h3 className="text-white text-xl font-bold">{images[current].title}</h3>
            <p className="text-gray-500 text-sm mt-1">{current + 1} / {images.length}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ── Gallery card ── */
function GalleryCard({ image, index, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative group cursor-pointer overflow-hidden rounded-2xl border border-white/10 hover:border-white/20 ${image.span}`}
      style={{ aspectRatio: image.span ? '16/7' : '4/3' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.01 }}
    >
      {/* Image */}
      <motion.img
        src={image.img}
        alt={image.title}
        className="w-full h-full object-cover"
        animate={{ scale: hovered ? 1.08 : 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
        animate={{ opacity: hovered ? 1 : 0.6 }}
        transition={{ duration: 0.3 }}
      />

      {/* Gradient border glow */}
      <motion.div
        className={`absolute inset-0 rounded-2xl border-2 bg-gradient-to-r ${image.gradient}`}
        animate={{ opacity: hovered ? 0.2 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
        <motion.div
          animate={{ y: hovered ? 0 : 8, opacity: hovered ? 1 : 0.7 }}
          transition={{ duration: 0.3 }}
        >
          <span className={`inline-block px-2.5 py-1 rounded-full bg-gradient-to-r ${image.gradient} text-xs font-bold text-white mb-2`}>
            {image.category}
          </span>
          <h3 className="text-white text-lg md:text-xl font-bold">{image.title}</h3>
        </motion.div>
      </div>

      {/* Zoom icon */}
      <motion.div
        className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center"
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.8 }}
        transition={{ duration: 0.2 }}
      >
        <ZoomIn className="w-4 h-4 text-white" />
      </motion.div>

      {/* Bottom line */}
      <motion.div
        className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${image.gradient}`}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
}

const GallerySection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const nextImage = () => setCurrentImage((p) => (p + 1) % galleryImages.length);
  const prevImage = () => setCurrentImage((p) => (p - 1 + galleryImages.length) % galleryImages.length);

  React.useEffect(() => {
    const handleKey = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxOpen]);

  const fleetStats = [
    { value: '10+', label: 'Vehicles in Fleet', gradient: 'from-blue-500 to-cyan-500' },
    { value: '100%', label: 'GPS Tracked', gradient: 'from-purple-500 to-pink-500' },
    { value: '24/7', label: 'Maintenance', gradient: 'from-cyan-500 to-blue-500' },
    { value: 'Modern', label: 'Latest Models', gradient: 'from-pink-500 to-purple-500' },
  ];

  return (
    <>
      <section
        id="gallery"
        ref={ref}
        className="relative py-20 md:py-28 bg-[#030712] overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        </div>

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 text-sm font-medium text-pink-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
              Our Fleet
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
              <span className="text-white">Modern </span>
              <span className="animated-gradient-text">Transport Fleet</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              State-of-the-art vehicles equipped to handle all your logistics needs across Pakistan
            </p>
          </motion.div>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-12">
            {galleryImages.map((image, index) => (
              <GalleryCard
                key={index}
                image={image}
                index={index}
                onClick={() => openLightbox(index)}
              />
            ))}
          </div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-900/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {fleetStats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <div className={`text-3xl md:text-4xl font-black mb-1 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={galleryImages}
          current={currentImage}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </>
  );
};

export default GallerySection;
