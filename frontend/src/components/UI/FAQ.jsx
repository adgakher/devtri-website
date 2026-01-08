import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqData, defaultFAQs } from '../../data/faqData';

export const FAQ = ({ serviceId }) => {
    const [openIndex, setOpenIndex] = useState(null);

    // Get FAQs for the specific service or use defaults
    const faqs = faqData[serviceId] || defaultFAQs;

    const toggleAccordion = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <section className="py-24 bg-[#F8F9FA]">
            <div className="container mx-auto px-6 lg:px-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                        Frequently Asked Questions <span className="text-gradient-effect font-light">(FAQs)</span>
                    </h2>
                </div>


                <div className="max-w-4xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border-b border-gray-200 transition-all duration-300 ${index === 0 ? 'border-t' : ''}`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between py-8 px-4 text-left transition-colors duration-300"
                            >
                                <span className={`text-lg md:text-xl font-medium transition-colors duration-300 ${openIndex === index ? 'text-[#F2735B]' : 'text-gray-900'}`}>
                                    {faq.question}
                                </span>
                                <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    {openIndex === index ? (
                                        <Minus className="w-6 h-6 text-[#F2735B]" />
                                    ) : (
                                        <Plus className="w-6 h-6 text-gray-400" />
                                    )}
                                </div>
                            </button>


                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 mb-8' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="px-4 pb-4 text-gray-600 text-lg leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
