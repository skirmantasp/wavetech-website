import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import DeploymentMapSection from './components/DeploymentMapSection';
import ProductsSection from './components/ProductsSection';
import EnterpriseProofSection from './components/EnterpriseProofSection';
import FutureInfrastructureLayer from './components/FutureInfrastructureLayer';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigation />
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
        <FutureInfrastructureLayer />
      </main>
      <Footer />
    </>
  );
}

export default App;
