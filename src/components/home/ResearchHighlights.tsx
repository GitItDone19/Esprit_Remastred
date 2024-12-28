import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Cpu, Network, Brain } from 'lucide-react';

const highlights = [
  {
    icon: Microscope,
    title: 'Intelligence Artificielle',
    description: 'Recherche de pointe en deep learning et traitement du langage naturel',
    stats: '15+ Publications'
  },
  {
    icon: Cpu,
    title: 'Systèmes Embarqués',
    description: 'Innovation en IoT et systèmes temps réel',
    stats: '8 Brevets'
  },
  {
    icon: Network,
    title: 'Réseaux 5G',
    description: 'Développement d\'infrastructures de communication avancées',
    stats: '3 Partenariats'
  },
  {
    icon: Brain,
    title: 'Robotique',
    description: 'Recherche en robotique collaborative et autonome',
    stats: '5 Prototypes'
  }
];

const ResearchHighlights = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Innovation & Recherche</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Découvrez nos domaines de recherche de pointe et nos contributions à l'innovation technologique
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-esprit-red/20"
          >
            <item.icon className="w-8 h-8 text-esprit-red mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-gray-300 mb-4 text-sm">{item.description}</p>
            <div className="text-esprit-red font-semibold">{item.stats}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ResearchHighlights;