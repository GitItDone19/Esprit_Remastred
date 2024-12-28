import React from 'react';
import Container from '../../components/shared/Container';
import PageHeader from '../../components/shared/PageHeader';
import ApplicationForm from './components/ApplicationForm';
import ApplicationStatus from './components/ApplicationStatus';
import DocumentUpload from './components/DocumentUpload';

const Postuler = () => {
  return (
    <Container className="py-12">
      <PageHeader
        title="Postuler à ESPRIT"
        description="Commencez votre parcours vers l'excellence - Remplissez votre dossier de candidature"
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ApplicationForm />
        </div>
        <div className="space-y-6">
          <ApplicationStatus />
          <DocumentUpload />
        </div>
      </div>
    </Container>
  );
};

export default Postuler;