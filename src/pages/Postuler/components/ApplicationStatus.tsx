import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

const ApplicationStatus = () => {
  return (
    <div className="bg-black/40 backdrop-blur-md rounded-xl p-6">
      <h3 className="text-xl font-semibold text-white mb-6">État de la Candidature</h3>
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-green-500">
          <CheckCircle className="w-5 h-5" />
          <span>Formulaire de base</span>
        </div>
        <div className="flex items-center gap-3 text-yellow-500">
          <Clock className="w-5 h-5" />
          <span>Documents requis</span>
        </div>
        <div className="flex items-center gap-3 text-gray-400">
          <AlertCircle className="w-5 h-5" />
          <span>Entretien</span>
        </div>
      </div>
    </div>
  );
};

export default ApplicationStatus;