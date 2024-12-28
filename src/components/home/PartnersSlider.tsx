import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const partners = [
  {
    name: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'
  },
  {
    name: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
  },
  {
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg'
  },
  {
    name: 'IBM',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg'
  },
  {
    name: 'Oracle',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg'
  },
  {
    name: 'SAP',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg'
  },
  {
    name: 'Cisco',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg'
  },
  {
    name: 'Intel',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg'
  },
  {
    name: 'Samsung',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg'
  },
  {
    name: 'Huawei',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Huawei_Logo.svg'
  }
];

const PartnersSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % partners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + partners.length) % partners.length);
  };

  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Partenaires Industriels</h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Collaborations stratégiques avec les leaders mondiaux de la technologie
        </p>
      </div>

      <div 
        className="relative max-w-6xl mx-auto h-48"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <motion.div 
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/40 to-black/20 backdrop-blur-md rounded-2xl border border-white/10"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="flex items-center justify-center h-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <img
                src={partners[currentIndex].logo}
                alt={partners[currentIndex].name}
                className="h-24 w-auto object-contain filter brightness-100 contrast-100"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <div className="absolute inset-y-0 left-0 flex items-center">
          <motion.button
            onClick={prevSlide}
            className="ml-4 bg-black/80 hover:bg-black text-white p-4 rounded-full transition-colors border border-white/10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous partner"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center">
          <motion.button
            onClick={nextSlide}
            className="mr-4 bg-black/80 hover:bg-black text-white p-4 rounded-full transition-colors border border-white/10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next partner"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-3">
          {partners.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex 
                  ? 'bg-esprit-red scale-125' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSlider;