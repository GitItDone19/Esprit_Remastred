import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Send, Users, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Soumission du Dossier',
    description: 'Complétez le formulaire en ligne et téléchargez les documents requis',
  },
  {
    icon: Users,
    title: 'Entretien',
    description: 'Participez à un entretien avec notre équipe pédagogique',
  },
  {
    icon: Send,
    title: 'Décision d\'Admission',
    description: 'Recevez notre réponse sous 2 semaines',
  },
  {
    icon: CheckCircle,
    title: 'Inscription Finale',
    description: 'Confirmez votre place et finalisez votre inscription',
  },
];

const AdmissionSteps = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-white mb-8">Processus d'Admission</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-esprit-red/20"
          >
            <step.icon className="w-8 h-8 text-esprit-red mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
            <p className="text-gray-300 text-sm">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AdmissionSteps;