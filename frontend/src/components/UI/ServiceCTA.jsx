import React from 'react';
import { Link } from 'react-router-dom';
import { serviceCTAData } from '../../data/serviceCTAData';

export const ServiceCTA = ({ serviceId }) => {
    const data = serviceCTAData[serviceId] || serviceCTAData['mobile-app-development'];

    return (
        <section className="py-20 relative overflow-hidden" style={{ background: 'var(--bg-gradient)' }}>
            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
                    {data.title}
                </h2>
                <p className="text-lg md:text-xl text-blue-100/80 mb-10 max-w-3xl mx-auto leading-relaxed">
                    {data.subtitle}
                </p>
                <div className="flex justify-center">
                    <Link to="/contact-us" className="bg-[#F2735B] text-white font-semibold py-4 px-10 rounded-full shadow-lg transition-all duration-300">
                        Contact Us Today
                    </Link>
                </div>
            </div>
        </section>
    );
};

