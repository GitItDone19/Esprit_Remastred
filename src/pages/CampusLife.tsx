import React from 'react';
import { motion } from 'framer-motion';
import { Users, Coffee, BookOpen, Dumbbell, Music, Globe, Calendar, Award, Camera, Heart } from 'lucide-react';
import Container from '../components/shared/Container';
import PageHeader from '../components/shared/PageHeader';

const activities = [
  {
    icon: Users,
    title: 'Clubs Étudiants',
    description: 'Plus de 20 clubs actifs couvrant la technologie, les arts et le sport.',
    members: '500+',
  },
  {
    icon: Coffee,
    title: 'Espaces de Vie',
    description: 'Cafétérias modernes, zones de coworking et espaces de détente.',
    rating: '4.8/5',
  },
  {
    icon: BookOpen,
    title: 'Ressources',
    description: 'Bibliothèque numérique, labs de recherche et salles de projet.',
    resources: '10,000+',
  },
  {
    icon: Dumbbell,
    title: 'Sport & Bien-être',
    description: 'Salle de sport, terrains multisports et cours de fitness.',
    facilities: '8',
  },
  {
    icon: Music,
    title: 'Arts & Culture',
    description: 'Événements culturels, concerts et expositions réguliers.',
    events: '50+/an',
  },
  {
    icon: Globe,
    title: 'International',
    description: 'Étudiants de 50+ pays, échanges internationaux.',
    countries: '50+',
  },
];

const upcomingEvents = [
  {
    title: "Hackathon ESPRIT 2024",
    date: "15-16 Mars 2024",
    type: "Technologie",
    icon: Award,
  },
  {
    title: "Festival des Cultures",
    date: "22 Mars 2024",
    type: "Culture",
    icon: Globe,
  },
  {
    title: "Journée Portes Ouvertes",
    date: "5 Avril 2024",
    type: "Campus",
    icon: Heart,
  },
];

const testimonials = [
  {
    name: "Sarah Ben Ali",
    program: "Génie Logiciel",
    year: "3ème année",
    quote: "La vie étudiante à ESPRIT est incroyable. Les clubs et les événements m'ont permis de développer mes compétences au-delà du technique.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200",
  },
  {
    name: "Mohamed Karray",
    program: "Systèmes Embarqués",
    year: "4ème année",
    quote: "Entre les projets pratiques et les activités parascolaires, chaque journée apporte son lot de découvertes et d'apprentissages.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200",
  },
];

const CampusLife = () => {
  return (
    <Container className="py-12">
      <PageHeader
        title="La Vie à ESPRIT"
        description="Une expérience étudiante riche et dynamique au cœur de l'innovation"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative h-[400px] rounded-2xl overflow-hidden mb-12"
      >
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3"
          alt="Vie au Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-end p-8">
          <p className="text-white text-xl max-w-2xl">
            Découvrez une vie étudiante vibrante où l'excellence académique rencontre l'épanouissement personnel.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-esprit-red/20 hover:border-esprit-red/60 transition-colors"
          >
            <activity.icon className="w-8 h-8 text-esprit-red mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">{activity.title}</h3>
            <p className="text-gray-300 mb-4">{activity.description}</p>
            <div className="text-sm text-esprit-red font-semibold">
              {Object.values(activity)[3]}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-white mb-6">Témoignages d'Étudiants</h2>
          <div className="grid gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-esprit-red/20"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400 mb-2">
                      {testimonial.program} - {testimonial.year}
                    </p>
                    <p className="text-gray-300">{testimonial.quote}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Événements à Venir</h2>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-esprit-red/20"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-esprit-red/10 rounded-lg">
                    <event.icon className="w-5 h-5 text-esprit-red" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{event.title}</h3>
                    <p className="text-sm text-gray-400">{event.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-black/40 backdrop-blur-md rounded-xl p-6 text-center"
      >
        <h2 className="text-2xl font-bold text-white mb-4">Rejoignez Notre Communauté</h2>
        <p className="text-gray-300 mb-6">
          Découvrez tout ce qu'ESPRIT a à offrir et devenez partie intégrante de notre communauté dynamique.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-esprit-red text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors"
        >
          En Savoir Plus
        </motion.button>
      </motion.div>
    </Container>
  );
};

export default CampusLife;