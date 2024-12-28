import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Program } from '../../types/program';

interface ProgramModalProps {
  program: Program | null;
  onClose: () => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({ program, onClose }) => {
  if (!program) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-black/90 rounded-2xl p-8 max-w-2xl w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-3xl font-bold text-white">{program.title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-400" />
            </button>
          </div>

          {program.videoUrl && (
            <div className="relative aspect-video mb-6 rounded-lg overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={program.videoUrl} type="video/mp4" />
              </video>
            </div>
          )}

          <p className="text-gray-300 mb-6">{program.description}</p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center p-4 bg-white/5 rounded-lg">
              <div className="text-2xl font-bold text-esprit-red">
                {program.stats.students}
              </div>
              <div className="text-sm text-gray-400">Active Students</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg">
              <div className="text-2xl font-bold text-esprit-red">
                {program.stats.graduationRate}%
              </div>
              <div className="text-sm text-gray-400">Graduation Rate</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg">
              <div className="text-2xl font-bold text-esprit-red">
                {program.stats.employmentRate}%
              </div>
              <div className="text-sm text-gray-400">Employment Rate</div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-esprit-red text-white py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
          >
            Apply Now
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};