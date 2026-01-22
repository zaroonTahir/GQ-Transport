import React, { useState, useEffect, useRef } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import gq3 from "../../assets/gq3.jpg"
import gq2 from "../../assets/gq2.png"
import gq4 from "../../assets/gq4.png"

const GallerySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const sectionRef = useRef(null);

  const galleryImages = [
    {
      img: gq3,
      title: 'Highway Transport',
      category: 'Long Haul',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      img: gq4,
      title: 'Ready for Service',
      category: 'Fleet',
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      img: gq2,
      title: 'Container Transport',
      category: 'Freight',
      gradient: 'from-blue-500 to-purple-500'
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? 'hidden' : 'unset';
    return () => (document.body.style.overflow = 'unset');
  }, [lightboxOpen]);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = () => setCurrentImage((p) => (p + 1) % galleryImages.length);
  const prevImage = () => setCurrentImage((p) => (p - 1 + galleryImages.length) % galleryImages.length);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <>
      <section id="gallery" className="pt-12 pb-16 sm:pb-20 md:pb-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden" ref={sectionRef}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-1/4 right-1/3 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Header */}
          <div
            className={`max-w-2xl mx-auto text-center mb-10 sm:mb-12 md:mb-16 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full mb-4 sm:mb-6 border border-white/10">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-semibold text-gray-300 uppercase tracking-wide">
                Our Fleet
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Modern Transport Solutions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed px-4">
              State-of-the-art vehicles equipped to handle all your logistics needs
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border-2 border-white/10 cursor-pointer transform transition-all duration-700 hover:scale-[1.02] hover:border-white/20 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 80}ms`, aspectRatio: '4/3' }}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.img}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 md:p-6">
                  <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className={`inline-block px-2 sm:px-3 py-1 bg-gradient-to-r ${image.gradient} rounded-full text-xs font-semibold text-white mb-2 sm:mb-3 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg`}>
                      {image.category}
                    </div>
                    <h3 className="text-white text-lg sm:text-xl font-bold">{image.title}</h3>
                  </div>

                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all border border-white/20">
                    <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                </div>

                <div className={`absolute inset-0 border-2 bg-gradient-to-r ${image.gradient} opacity-0 group-hover:opacity-20 transition-opacity rounded-xl`}></div>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${image.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-xl`}></div>
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div
            className={`mt-10 sm:mt-12 md:mt-16 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 border border-white/10 transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
              {[
                { value: '10+', label: 'Vehicles in Fleet', gradient: 'from-blue-500 to-purple-500' },
                { value: '100%', label: 'GPS Tracked', gradient: 'from-purple-500 to-blue-500' },
                { value: '24/7', label: 'Maintenance', gradient: 'from-blue-500 to-purple-500' },
                { value: 'Modern', label: 'Latest Models', gradient: 'from-purple-500 to-blue-500' },
              ].map((stat, i) => (
                <div key={i} className="group">
                  <div className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center animate-fadeIn">
          <button onClick={closeLightbox} className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 border border-white/10 rounded-full flex items-center justify-center transition-all z-10">
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          <button onClick={prevImage} className="absolute left-2 sm:left-4 md:left-6 w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 border border-white/10 rounded-full flex items-center justify-center transition-all z-10">
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          <button onClick={nextImage} className="absolute right-2 sm:right-4 md:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 border border-white/10 rounded-full flex items-center justify-center transition-all z-10">
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          <div className="max-w-6xl max-h-[90vh] mx-4 px-2 sm:px-4">
            <div className="relative">
              <img
                src={galleryImages[currentImage].img}
                alt={galleryImages[currentImage].title}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border-2 border-white/10"
              />
            </div>

            <div className="text-center mt-4 sm:mt-6">
              <div className={`inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r ${galleryImages[currentImage].gradient} rounded-full mb-2 shadow-lg`}>
                <span className="text-xs sm:text-sm text-white font-semibold">
                  {galleryImages[currentImage].category}
                </span>
              </div>
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {galleryImages[currentImage].title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                {currentImage + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;