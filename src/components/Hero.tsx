import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  GraduationCap,
  Book,
  Lightbulb,
  Code2,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  // Define specific positions for icons that won't overlap with text
  const iconPositions = [
    { x: '15%', y: '20%', Icon: GraduationCap, delay: 0 },
    { x: '85%', y: '25%', Icon: Book, delay: 0.8 },
    { x: '10%', y: '75%', Icon: Lightbulb, delay: 1.6 },
    { x: '90%', y: '70%', Icon: Code2, delay: 2.4 },
  ];

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-esprit-red/5 via-transparent to-transparent" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <motion.div
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Façonnez Votre Avenir dans la
              <motion.span
                className="text-esprit-red ml-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Technologie
              </motion.span>
            </h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Rejoignez ESPRIT et faites partie de la prochaine génération
              d'innovateurs et de leaders technologiques
            </motion.p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, staggerChildren: 0.2 }}
          >
            {[
              { icon: GraduationCap, value: '3000+', label: 'Étudiants' },
              { icon: Lightbulb, value: '95%', label: "Taux d'Emploi" },
              { icon: Code2, value: '50+', label: 'Partenaires' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.2 }}
              >
                <stat.icon className="w-8 h-8 text-esprit-red mx-auto mb-2" />
                <motion.div
                  className="text-3xl font-bold text-white"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.2, type: 'spring' }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/postuler">
              <motion.button
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                className="bg-esprit-red text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Commencez Votre Parcours
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link to="/programs">
              <motion.button
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                transition={{ delay: 0.2 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto"
              >
                Découvrir Nos Programmes
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
