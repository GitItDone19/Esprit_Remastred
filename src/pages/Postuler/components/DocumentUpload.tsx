import React from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText, Check, X } from 'lucide-react';

const requiredDocuments = [
  { name: 'CV', status: 'pending' },
  { name: 'Lettre de motivation', status: 'pending' },
  { name: 'Diplômes', status: 'pending' },
  { name: 'Relevés de notes', status: 'pending' },
  { name: 'Pièce d\'identité', status: 'pending' }
];

const DocumentUpload = () => {
  return (
    <div className="bg-black/40 backdrop-blur-md rounded-xl p-6">
      <h3 className="text-xl font-semibold text-white mb-6">Documents Requis</h3>
      <div className="space-y-4">
        {requiredDocuments.map((doc) => (
          <div key={doc.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-esprit-red" />
              <span className="text-gray-300">{doc.name}</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 py-1 bg-esprit-red/10 text-esprit-red rounded-lg hover:bg-esprit-red/20 transition-colors"
            >
              <Upload className="w-4 h-4" />
            </motion.button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentUpload;