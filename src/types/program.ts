export interface Program {
  id: string;
  title: string;
  category: 'engineering' | 'computer-science' | 'management';
  description: string;
  icon: string;
  videoUrl?: string;
  stats: {
    students: number;
    graduationRate: number;
    employmentRate: number;
  };
}