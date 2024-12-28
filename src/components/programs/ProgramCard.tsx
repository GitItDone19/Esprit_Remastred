import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, PieChart } from 'lucide-react';
import { Program } from '../../types/program';

interface ProgramCardProps {
  program: Program;
  onClick: () => void;
}

const iconMap = {
  'Code2': Code2,
  'Cpu': Cpu,
  'PieChart': PieChart,
};

export const ProgramCard: React.FC<ProgramCardProps> = ({ program, onClick }) => {
  const Icon = iconMap[program.icon as keyof typeof iconMap];

  if (!Icon) {
    return null; // Or render a fallback icon
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-black/40 backdrop-blur-md rounded-xl p-6 cursor-pointer border border-esprit-red/20 hover:border-esprit-red/60 transition-colors"
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-esprit-red/10 rounded-lg">
          <Icon className="w-6 h-6 text-esprit-red" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{program.title}</h3>
          <p className="text-gray-300 mb-4">{program.description}</p>
          <div className="flex gap-4 text-sm text-gray-400">
            <div>
              <span className="text-esprit-red font-semibold">{program.stats.students}</span> Students
            </div>
            <div>
              <span className="text-esprit-red font-semibold">{program.stats.employmentRate}%</span> Employment
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};