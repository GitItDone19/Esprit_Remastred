import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap, User, Mail, Phone, Globe, BookOpen, FileText } from 'lucide-react';

const ApplicationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    nationality: '',
    address: '',
    city: '',
    country: '',
    
    // Academic Background
    lastDegree: '',
    institution: '',
    graduationYear: '',
    gpa: '',
    
    // Program Choice
    program: '',
    specialization: '',
    startDate: '',
    studyMode: '',
    
    // Language Skills
    frenchLevel: '',
    englishLevel: '',
    otherLanguages: '',
    
    // Professional Experience
    hasExperience: false,
    experienceYears: '',
    currentCompany: '',
    position: '',
    
    // Additional Information
    motivation: '',
    howDidYouHear: '',
    questions: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <User className="w-5 h-5 text-esprit-red" />
              Informations Personnelles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-esprit-red" />
              Formation Académique
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">Dernier Diplôme</label>
                <input
                  type="text"
                  value={formData.lastDegree}
                  onChange={(e) => setFormData({ ...formData, lastDegree: e.target.value })}
                  className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-esprit-red focus:ring-1 focus:ring-esprit-red"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Institution</label>
                <input
                  type="text"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-esprit-red focus:ring-1 focus:ring-esprit-red"
                  required
                />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-esprit-red" />
              Programme Souhaité
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <label className="block text-gray-300 mb-2">Date de début</label>
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
            </div>
          </div>
        );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-black/40 backdrop-blur-md rounded-xl p-6 space-y-8">
      {renderStep()}
      
      <div className="flex justify-between mt-8">
        {step > 1 && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={() => setStep(step - 1)}
            className="px-6 py-2 border border-esprit-red text-white rounded-lg hover:bg-esprit-red/10 transition-colors"
          >
            Précédent
          </motion.button>
        )}
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type={step === 3 ? 'submit' : 'button'}
          onClick={() => step < 3 && setStep(step + 1)}
          className="px-6 py-2 bg-esprit-red text-white rounded-lg hover:bg-red-700 transition-colors ml-auto"
        >
          {step === 3 ? 'Soumettre' : 'Suivant'}
        </motion.button>
      </div>
    </form>
  );
};

export default ApplicationForm;