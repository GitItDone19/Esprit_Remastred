import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck } from 'lucide-react';

const requirements = [
  'Baccalauréat ou équivalent',
  'Relevés de notes des deux dernières années',
  'Lettre de motivation',
  'CV détaillé',
  'Deux lettres de recommandation',
  'Certificat de niveau en langue française (B2 minimum)',
  'Certificat de niveau en langue anglaise (B1 minimum)',
  'Copie de la carte d\'identité ou du passeport',
];

const RequirementsList = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-white mb-8">Documents Requis</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {requirements.map((requirement, index) => (
          <motion.div
            key={requirement}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-3 bg-black/20 p-4 rounded-lg"
          >
            <FileCheck className="w-5 h-5 text-esprit-red flex-shrink-0" />
            <span className="text-gray-300">{requirement}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RequirementsList;