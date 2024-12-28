import React from 'react';
import { motion } from 'framer-motion';

interface FilterOption {
  value: string;
  label: string;
}

interface ProgramFilterProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters: FilterOption[] = [
  { value: 'all', label: 'Tous les Programmes' },
  { value: 'engineering', label: 'Ingénierie' },
  { value: 'computer-science', label: 'Informatique' },
  { value: 'management', label: 'Management' },
];

export const ProgramFilter: React.FC<ProgramFilterProps> = ({ selectedFilter, onFilterChange }) => {
  return (
    <div className="flex gap-4 mb-8">
      {filters.map((filter) => (
        <motion.button
          key={filter.value}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-full transition-colors ${
            selectedFilter === filter.value
              ? 'bg-esprit-red text-white'
              : 'bg-black/40 text-gray-300 hover:bg-black/60'
          }`}
          onClick={() => onFilterChange(filter.value)}
        >
          {filter.label}
        </motion.button>
      ))}
    </div>
  );
};