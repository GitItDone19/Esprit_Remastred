import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: '',
    startDate: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mb-16"
    >
      <h2 className="text-2xl font-bold text-white mb-8">Formulaire de Candidature</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-300 mb-2">Prénom</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-esprit-red focus:ring-1 focus:ring-esprit-red"
            required
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Nom</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-esprit-red focus:ring-1 focus:ring-esprit-red"
            required
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-esprit-red focus:ring-1 focus:ring-esprit-red"
            required
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Téléphone</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-esprit-red focus:ring-1 focus:ring-esprit-red"
            required
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Programme</label>
          <select
            value={formData.program}
            onChange={(e) => setFormData({ ...formData, program: e.target.value })}
            className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-esprit-red focus:ring-1 focus:ring-esprit-red"
            required
          >
            <option value="">Sélectionnez un programme</option>
            <option value="software">Génie Logiciel</option>
            <option value="embedded">Systèmes Embarqués</option>
            <option value="business">Intelligence d'Affaires</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Date de début souhaitée</label>
          <select
            value={formData.startDate}
            onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
            className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-esprit-red focus:ring-1 focus:ring-esprit-red"
            required
          >
            <option value="">Sélectionnez une date</option>
            <option value="2024-09">Septembre 2024</option>
            <option value="2025-02">Février 2025</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-esprit-red text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            type="submit"
          >
            Soumettre ma candidature
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default ApplicationForm;