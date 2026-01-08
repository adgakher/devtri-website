import React from 'react';
import { useParams } from 'react-router-dom';
import { LogoMarquee } from '../components/UI/LogoMarquee';
import { TechDetail } from '../components/UI/TechDetail';
import { TechOverview } from '../components/UI/TechOverview';
import WhyChoose from '../components/UI/WhyChoose';
import { TechHireSection } from '../components/UI/TechHireSection';
import { TechCapabilities } from '../components/UI/TechCapabilities';
import { TechResources } from '../components/UI/TechResources';

import { OurProcess } from '../components/UI/OurProcess';
import { IndustriesWeServe } from '../components/UI/IndustriesWeServe';
import { CaseStudies } from '../components/UI/CaseStudies';
import { DigitalChange } from '../components/UI/DigitalChange';
import { Testimonials } from '../components/UI/Testimonials';
import { ServiceCTA } from '../components/UI/ServiceCTA';
import { FAQ } from '../components/UI/FAQ';

import ContactSection from '../components/UI/ContactSection';


export const Technology = () => {
    const { techId } = useParams();

    // Helper to format the techId back to a readable title
    const formatTitle = (id) => {
        if (!id) return '';
        return id
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <>
            <section className="py-24 bg-white min-h-[60vh] flex items-center justify-center net-background">
                {/* Moving Dots */}
                <div className="moving-dot"></div>
                <div className="moving-dot-2 animation-delay-2000"></div>

                <div className="container mx-auto px-6 lg:px-12 text-center relative z-20">
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest block mb-3 animate-fade-in">
                        Advanced Technology
                    </span>
                    <h1 className="text-4xl md:text-7xl font-bold mb-5 pt-2 pb-2 text-gradient-effect leading-snug">
                        {formatTitle(techId)}
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        We leverage {formatTitle(techId)} to build cutting-edge solutions that drive innovation and business growth. Our expertise ensures high performance and scalability.
                    </p>
                    <div className="mt-12">
                        <button className="contact-btn inline-flex items-center justify-center rounded-md text-sm font-normal bg-[#F2735B] text-white hover:bg-[#F2735B]/90 h-12 px-8 transition-all duration-300 transform hover:scale-105">
                            Leverage {formatTitle(techId)}
                        </button>
                    </div>
                </div>
            </section>
            <LogoMarquee />
            <TechOverview techId={techId} />
            <WhyChoose techId={techId} />
            <TechHireSection techId={techId} />
            <IndustriesWeServe />
            <CaseStudies />
            <DigitalChange />
            <Testimonials />
            <TechResources />
            <FAQ serviceId={techId} />
            <ContactSection />


        </>
    );
};
