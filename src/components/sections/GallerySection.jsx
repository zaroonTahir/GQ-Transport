import React, { useState, useEffect, useRef } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

const GallerySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const sectionRef = useRef(null);

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop',
      title: 'Highway Transport',
      category: 'Long Haul'
    },
    {
      url: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&h=600&fit=crop',
      title: 'Ready for Service',
      category: 'Fleet'
    },
    {
      url: 'https://images.unsplash.com/photo-1617478755490-e21232a5eeaf?w=800&h=600&fit=crop',
      title: 'Container Transport',
      category: 'Freight'
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
     <section id="gallery" className="pt-12 pb-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden" ref={sectionRef}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div
            className={`max-w-2xl mx-auto text-center mb-16 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
                Our Fleet
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Modern Transport Solutions
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              State-of-the-art vehicles equipped to handle all your logistics needs
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl bg-gray-800 cursor-pointer transform transition-all duration-700 hover:scale-[1.02] ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 80}ms`, aspectRatio: '4/3' }}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="inline-block px-3 py-1 bg-blue-600 rounded-full text-xs font-semibold text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      {image.category}
                    </div>
                    <h3 className="text-white text-xl font-bold">{image.title}</h3>
                  </div>

                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="absolute inset-0 border-2 border-blue-600 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div
            className={`mt-16 bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700 transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                ['10+', 'Vehicles in Fleet'],
                ['100%', 'GPS Tracked'],
                ['24/7', 'Maintenance'],
                ['Modern', 'Latest Models'],
              ].map(([value, label], i) => (
                <div key={i}>
                  <div className="text-4xl font-bold text-white mb-2">{value}</div>
                  <div className="text-sm text-gray-400 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center animate-fadeIn">
          <button onClick={closeLightbox} className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center">
            <X className="w-6 h-6 text-white" />
          </button>

          <button onClick={prevImage} className="absolute left-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button onClick={nextImage} className="absolute right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div className="max-w-6xl max-h-[90vh] mx-4">
            <img
              src={galleryImages[currentImage].url}
              alt={galleryImages[currentImage].title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />

            <div className="text-center mt-6">
              <div className="inline-block px-4 py-2 bg-white/10 rounded-full mb-2">
                <span className="text-sm text-white font-semibold">
                  {galleryImages[currentImage].category}
                </span>
              </div>
              <h3 className="text-white text-2xl font-bold mb-2">
                {galleryImages[currentImage].title}
              </h3>
              <p className="text-gray-400 text-sm">
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
