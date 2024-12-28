import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap } from 'lucide-react';

const AdmissionHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative h-[300px] rounded-2xl overflow-hidden mb-12"
    >
      <img
        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3"
        alt="Admission"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 flex flex-col justify-end p-8">
        <div className="flex flex-wrap gap-6 text-white">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-esprit-red" />
            <span>Inscriptions ouvertes pour 2024-2025</span>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-esprit-red" />
            <span>Plus de 3000 diplômés</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AdmissionHero;