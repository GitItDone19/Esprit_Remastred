import { Program } from '../types/program';

export const programs: Program[] = [
  {
    id: 'software-engineering',
    title: 'Génie Logiciel',
    category: 'computer-science',
    description: 'Développez une expertise en développement logiciel, architecture et gestion de projets.',
    icon: 'Code2',
    videoUrl: 'https://player.vimeo.com/external/477743905.sd.mp4?s=04c68f88ec9e83d859a61e6a870090e1f1799471&profile_id=164&oauth2_token_id=57447761',
    stats: {
      students: 1200,
      graduationRate: 92,
      employmentRate: 95
    }
  },
  {
    id: 'embedded-systems',
    title: 'Systèmes Embarqués',
    category: 'engineering',
    description: 'Maîtrisez la conception et l\'implémentation des systèmes embarqués et des solutions IoT.',
    icon: 'Cpu',
    stats: {
      students: 800,
      graduationRate: 89,
      employmentRate: 93
    }
  },
  {
    id: 'business-intelligence',
    title: 'Intelligence d\'Affaires',
    category: 'management',
    description: 'Apprenez à transformer les données en insights exploitables pour la prise de décision.',
    icon: 'PieChart',
    stats: {
      students: 600,
      graduationRate: 91,
      employmentRate: 94
    }
  }
];