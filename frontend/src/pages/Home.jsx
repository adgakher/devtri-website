import React from 'react';
import { HeroSection } from '../components/UI/HeroSection';
import { LogoMarquee } from '../components/UI/LogoMarquee';
import { WhoWeAre } from '../components/UI/WhoWeAre';
import { ServiceGrid } from '../components/UI/ServiceGrid';
import { TechCapabilities } from '../components/UI/TechCapabilities';
import { OurProcess } from '../components/UI/OurProcess';
import { IndustriesWeServe } from '../components/UI/IndustriesWeServe';
import { DigitalChange } from '../components/UI/DigitalChange';
import { CaseStudies } from '../components/UI/CaseStudies';
import { Testimonials } from '../components/UI/Testimonials';
import ContactSection from '../components/UI/ContactSection';

export const Home = () => {
  return (
    <main>
      <HeroSection />
      <LogoMarquee />
      <WhoWeAre />
      <ServiceGrid />
      <TechCapabilities />
      <OurProcess />
      <IndustriesWeServe />
      <CaseStudies />
      <DigitalChange />
      <Testimonials />
      <ContactSection />
    </main>
  );
};
