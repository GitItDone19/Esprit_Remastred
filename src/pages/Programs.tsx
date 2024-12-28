import React, { useState } from 'react';
import Container from '../components/shared/Container';
import PageHeader from '../components/shared/PageHeader';
import { programs } from '../data/programs';
import { Program } from '../types/program';
import { ProgramCard } from '../components/programs/ProgramCard';
import { ProgramFilter } from '../components/programs/ProgramFilter';
import { ProgramModal } from '../components/programs/ProgramModal';
import ProgramHero from '../components/programs/ProgramHero';
import ProgramFeatures from '../components/programs/ProgramFeatures';
import ProgramTestimonials from '../components/programs/ProgramTestimonials';

export const Programs = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const filteredPrograms = programs.filter(
    (program) => selectedFilter === 'all' || program.category === selectedFilter
  );

  return (
    <>
      <Container className="py-12">
        <PageHeader
          title="Programmes Académiques"
          description="Découvrez nos programmes innovants conçus pour façonner l'avenir de la technologie"
        />

        <ProgramHero />
        
        <ProgramFilter
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {filteredPrograms.map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
              onClick={() => setSelectedProgram(program)}
            />
          ))}
        </div>

        <ProgramFeatures />
        <ProgramTestimonials />
      </Container>

      <ProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
      />
    </>
  );
};