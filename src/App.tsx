import { useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import DeploymentMapSection from './components/DeploymentMapSection';
import ProductsSection from './components/ProductsSection';
import EnterpriseProofSection from './components/EnterpriseProofSection';
import FutureInfrastructureLayer from './components/FutureInfrastructureLayer';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import ContactForm from './components/ContactForm';

function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState('Executive Briefing');

  const openContact = (subject: string) => {
    setContactSubject(subject);
    setContactOpen(true);
  };

  return (
    <>
      <Navigation onRequestBriefing={() => openContact('Executive Briefing')} />
      <main>
        {/* MAJOR MOMENT: The Battery Intelligence Network Trademark */}
        <HeroSection />
        
        {/* TECHNICAL EXPLANATION: The Crisis */}
        <ProblemSection />
        
        {/* MAJOR MOMENT: Planetary Scale */}
        <DeploymentMapSection />
        
        {/* TECHNICAL EXPLANATION: Platform Suite with Human Scale */}
        <ProductsSection />
        
        {/* PROOF: Proof Ecosystem */}
        <EnterpriseProofSection />
        
        {/* VISION: Emotional Peak */}
        <FutureInfrastructureLayer onRequestBriefing={() => openContact('Executive Briefing')} />
      </main>
      <Footer onOpenContact={openContact} />
      <ChatBot />
      <ContactForm isOpen={contactOpen} onClose={() => setContactOpen(false)} subject={contactSubject} />
    </>
  );
}

export default App;
