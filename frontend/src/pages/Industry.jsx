import React from 'react';
import { useParams } from 'react-router-dom';
import { LogoMarquee } from '../components/UI/LogoMarquee';
import { IndustryChallenges } from '../components/UI/IndustryChallenges';
import { WhoWeHelp } from '../components/UI/WhoWeHelp';
// import { TechCapabilities } from '../components/UI/TechCapabilities';
// import { TechCapabilities } from '../components/UI/TechCapabilities';

import { OurProcess } from '../components/UI/OurProcess';
// import { IndustriesWeServe } from '../components/UI/IndustriesWeServe';
import { CaseStudies } from '../components/UI/CaseStudies';
import { DigitalChange } from '../components/UI/DigitalChange';
import { Testimonials } from '../components/UI/Testimonials';
// import { ServiceCTA } from '../components/UI/ServiceCTA';
// import { FAQ } from '../components/UI/FAQ';

import ContactSection from '../components/UI/ContactSection';


export const Industry = () => {
    const { industryId } = useParams();

    // Helper to format the industryId back to a readable title
    const formatTitle = (id) => {
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
                        Industries We Serve
                    </span>
                    <h1 className="text-4xl md:text-7xl font-bold mb-5 pt-2 pb-2 text-gradient-effect leading-snug">
                        {formatTitle(industryId)}
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Tailored solutions for the {formatTitle(industryId)} sector. We understand the unique challenges and opportunities in your industry.
                    </p>
                    <div className="mt-12">
                        <button className="contact-btn inline-flex items-center justify-center rounded-md text-sm font-normal bg-[#F2735B] text-white hover:bg-[#F2735B]/90 h-12 px-8 transition-all duration-300 transform hover:scale-105">
                            Get Started
                        </button>
                    </div>
                </div>
            </section>
            <LogoMarquee />
            <IndustryChallenges industryId={industryId} />
            <WhoWeHelp industryId={industryId} />
            {/* <ServiceCTA serviceId={industryId} /> */}
            {/* <ServiceCTA serviceId={industryId} /> */}
            {/* <TechCapabilities serviceId={industryId} /> */}

            <OurProcess />
            <div className="py-12">
                {/* Space buffer instead of IndustriesWeServe */}
            </div>
            {/* <IndustriesWeServe /> */}
            <CaseStudies />
            <DigitalChange />
            <Testimonials />
            {/* <FAQ serviceId={industryId} /> */}
            <ContactSection />


        </>
    );
};
