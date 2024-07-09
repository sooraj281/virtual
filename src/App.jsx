import React from 'react';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import  Workflow  from './components/Workflow';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FeatureSection />
      <Workflow/>
      <Testimonials/>
      <Pricing/>
      <Footer/>
    </div>
  );
}

export default App;
