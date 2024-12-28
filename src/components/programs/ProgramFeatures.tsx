import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Users, Globe, BookOpen, Trophy, Briefcase } from 'lucide-react';

const features = [
  {
    icon: Laptop,
    title: 'Technologies Avancées',
    description: 'Accès aux dernières technologies et outils de développement'
  },
  {
    icon: Users,
    title: 'Apprentissage Collaboratif',
    description: 'Travail en équipe sur des projets concrets'
  },
  {
    icon: Globe,
    title: 'Perspective Internationale',
    description: 'Opportunités d\'échanges et stages à l\'international'
  },
  {
    icon: BookOpen,
    title: 'Formation Continue',
    description: 'Mise à jour régulière des programmes'
  },
  {
    icon: Trophy,
    title: 'Excellence Académique',
    description: 'Enseignants experts et chercheurs reconnus'
  },
  {
    icon: Briefcase,
    title: 'Insertion Professionnelle',
    description: 'Partenariats avec des entreprises leaders'
  }
];

const ProgramFeatures = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-white mb-8">Points Forts des Programmes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-esprit-red/20"
          >
            <feature.icon className="w-8 h-8 text-esprit-red mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-300 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProgramFeatures;