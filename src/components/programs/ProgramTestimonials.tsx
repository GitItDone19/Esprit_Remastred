import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Le programme m'a fourni les compétences dont j'avais besoin pour réussir dans l'industrie tech.",
    author: "Sarah Mejri",
    role: "Diplômée en Génie Logiciel",
    company: "Google",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200"
  },
  {
    quote: "Une formation complète qui m'a permis de devenir un professionnel polyvalent.",
    author: "Ahmed Ben Salem",
    role: "Diplômé en Systèmes Embarqués",
    company: "Tesla",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200"
  }
];

const ProgramTestimonials = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-white mb-8">Témoignages d'Anciens</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.author}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-esprit-red/20"
          >
            <Quote className="w-8 h-8 text-esprit-red mb-4" />
            <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-white font-medium">{testimonial.author}</h3>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
                <p className="text-sm text-esprit-red">{testimonial.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProgramTestimonials;