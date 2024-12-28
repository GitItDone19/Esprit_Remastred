import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Globe } from 'lucide-react';

const stats = [
  { icon: GraduationCap, value: '15+', label: 'Programmes' },
  { icon: Award, value: '92%', label: 'Taux de Réussite' },
  { icon: Globe, value: '50+', label: 'Partenariats Internationaux' },
];

const ProgramHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative h-[300px] rounded-2xl overflow-hidden mb-12"
    >
      <img
        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3"
        alt="Programmes"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 flex flex-col justify-end p-8">
        <div className="grid grid-cols-3 gap-6 text-white">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              className="text-center"
            >
              <stat.icon className="w-6 h-6 text-esprit-red mx-auto mb-2" />
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProgramHero;