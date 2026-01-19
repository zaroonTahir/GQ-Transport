// ========================================
// FILE: src/components/sections/GallerySection.jsx
// ========================================
import React from 'react';

const GallerySection = () => {
  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop',
      title: 'Highway Transport',
    },
    {
      url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
      title: 'Modern Fleet',
    },
    {
      url: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&h=600&fit=crop',
      title: 'Ready for Service',
    },
    {
      url: 'https://images.unsplash.com/photo-1617478755490-e21232a5eeaf?w=800&h=600&fit=crop',
      title: 'Container Transport',
    },
    {
      url: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop',
      title: 'Long Distance',
    },
    {
      url: 'https://images.unsplash.com/photo-1566933293069-b55c7f326dd4?w=800&h=600&fit=crop',
      title: 'Cargo Services',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Fleet</h2>
          <p className="text-gray-600 text-lg">Modern vehicles ready to serve your transport needs</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end">
                <p className="text-white p-4 font-semibold">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;