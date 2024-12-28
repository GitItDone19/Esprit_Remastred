import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, Users, Trophy } from 'lucide-react';

const projects = [
  {
    title: 'Smart City Lab',
    description: 'Développement de solutions IoT pour les villes intelligentes',
    image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800',
    stats: '12 Prototypes'
  },
  {
    title: 'FinTech Innovation',
    description: 'Recherche en blockchain et technologies financières',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800',
    stats: '5 Startups'
  }
];

const achievements = [
  { icon: Rocket, value: '25+', label: 'Startups Lancées' },
  { icon: Target, value: '40M€', label: 'en Financement' },
  { icon: Users, value: '500+', label: 'Étudiants Impliqués' },
  { icon: Trophy, value: '15', label: 'Prix d\'Innovation' }
];

const InnovationHub = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Hub d'Innovation ESPRIT</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Un écosystème unique où les idées deviennent réalité
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative group overflow-hidden rounded-xl"
          >
            <div className="aspect-video">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 flex flex-col justify-end">
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-2">{project.description}</p>
              <div className="text-esprit-red font-semibold">{project.stats}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {achievements.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <item.icon className="w-8 h-8 text-esprit-red mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
            <div className="text-sm text-gray-300">{item.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InnovationHub;