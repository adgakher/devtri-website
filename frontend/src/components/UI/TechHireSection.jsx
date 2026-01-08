import React from 'react';
import { techDetailData } from '../../data/techDetailData';
import { Sparkles } from 'lucide-react';

export const TechHireSection = ({ techId }) => {
    // Normalize techId for lookup
    const normalizedId = techId ? techId.replace(/-/g, '').toLowerCase() : 'default';
    const data = techDetailData[normalizedId] || techDetailData['default'];
    const hireData = data.hireSection;

    if (!hireData) return null;

    // Split title for coloring
    const titleWords = hireData.title.split(' ');
    // Assuming the technology name is usually the 3rd word "Hire expert [Tech] developers..."
    // or we can just try to find the word that matches the tech or just hardcode styling for now which is safer.
    // Let's rely on the design: "Hire expert Node.js developers" -> "Node.js" is colored.
    // simpler approach: Highlight the tech name if found.

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Top Section: Heading, Paragraph, and Image */}
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-16">
                    {/* Left Side: Content */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#17312C] leading-tight">
                            {hireData.title.split(' ').map((word, index) => {
                                const isTarget = word.toLowerCase().includes('node.js') ||
                                    word.toLowerCase().includes('react.js') ||
                                    word.toLowerCase().includes('flutter') ||
                                    (index > 1 && index < 4 && word.toLowerCase().includes('developers'));

                                return isTarget ? (
                                    <span key={index} className="text-gradient-effect">{word} </span>
                                ) : (
                                    <span key={index}>{word} </span>
                                );
                            })}
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            {hireData.description}
                        </p>
                    </div>

                    {/* Right Side: Image */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative rounded-[30px] overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src={hireData.image}
                                alt={hireData.title}
                                className="w-full h-auto object-cover min-h-[300px]"
                            />
                        </div>
                        <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-[#F2F4F7] rounded-[30px]"></div>
                    </div>
                </div>

                {/* Bottom Section: Key Capabilities */}
                <div className="w-full">
                    <h3 className="text-2xl font-bold text-[#17312C] mb-8">
                        Key Capabilities:
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8">
                        {hireData.capabilities.map((capability, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <div className="flex-shrink-0 mt-1">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#a855f7" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                    {capability}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
