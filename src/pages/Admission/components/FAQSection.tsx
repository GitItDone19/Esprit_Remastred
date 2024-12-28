import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Quels sont les critères de sélection ?",
    answer: "Nous évaluons les candidats sur leur dossier académique, leur motivation, leurs compétences linguistiques et leur potentiel de réussite dans le programme choisi.",
  },
  {
    question: "Quand dois-je postuler ?",
    answer: "Les candidatures sont ouvertes toute l'année, mais nous recommandons de postuler au moins 3 mois avant le début du semestre souhaité.",
  },
  {
    question: "Y a-t-il des frais de candidature ?",
    answer: "Oui, des frais de dossier de 50€ non remboursables sont requis pour le traitement de votre candidature.",
  },
  {
    question: "Comment se déroule l'entretien ?",
    answer: "L'entretien dure environ 30 minutes et peut se faire en présentiel ou en visioconférence. Il permet d'évaluer votre motivation et vos objectifs.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-white mb-8">Questions Fréquentes</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-black/40 backdrop-blur-md rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <span className="text-white font-medium">{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-5 h-5 text-esprit-red" />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="px-6 pb-6"
                >
                  <p className="text-gray-300">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;