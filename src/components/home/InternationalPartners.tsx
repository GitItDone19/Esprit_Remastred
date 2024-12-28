import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const partners = [
  {
    region: 'Europe',
    universities: [
      { name: 'École Polytechnique Paris', country: 'France' },
      { name: 'TU Munich', country: 'Allemagne' },
      { name: 'Politecnico di Milano', country: 'Italie' }
    ]
  },
  {
    region: 'Amérique du Nord',
    universities: [
      { name: 'MIT', country: 'États-Unis' },
      { name: 'Stanford University', country: 'États-Unis' },
      { name: 'University of Toronto', country: 'Canada' }
    ]
  },
  {
    region: 'Asie',
    universities: [
      { name: 'University of Tokyo', country: 'Japon' },
      { name: 'KAIST', country: 'Corée du Sud' },
      { name: 'Tsinghua University', country: 'Chine' }
    ]
  }
];

const InternationalPartners = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Partenaires Internationaux</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Un réseau mondial d'institutions prestigieuses pour enrichir votre parcours académique
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {partners.map((region, index) => (
          <motion.div
            key={region.region}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-esprit-red/20"
          >
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-esprit-red" />
              <h3 className="text-xl font-semibold text-white">{region.region}</h3>
            </div>
            <ul className="space-y-3">
              {region.universities.map((uni) => (
                <li key={uni.name} className="text-gray-300">
                  <span className="font-medium">{uni.name}</span>
                  <span className="text-sm text-gray-400 block">{uni.country}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InternationalPartners;