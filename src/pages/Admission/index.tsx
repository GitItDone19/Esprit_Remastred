import React from 'react';
import Container from '../../components/shared/Container';
import PageHeader from '../../components/shared/PageHeader';
import AdmissionHero from './components/AdmissionHero';
import AdmissionSteps from './components/AdmissionSteps';
import RequirementsList from './components/RequirementsList';
import FAQSection from './components/FAQSection';

const Admission = () => {
  return (
    <Container className="py-12">
      <PageHeader
        title="Admission à ESPRIT"
        description="Commencez votre parcours vers l'excellence technologique"
      />
      
      <AdmissionHero />
      <AdmissionSteps />
      <RequirementsList />
      <FAQSection />
    </Container>
  );
};

export default Admission;