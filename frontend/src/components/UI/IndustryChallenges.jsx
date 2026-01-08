import React from 'react';
import { industryData } from '../../data/industryData';
import { Plus } from 'lucide-react';

export const IndustryChallenges = ({ industryId }) => {
    const data = industryData[industryId] || industryData['healthcare'];
    const { challengesSection } = data;

    if (!challengesSection) return null;

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    {/* Left Column: Side Label */}
                    <div className="lg:w-1/4">
                        <div className="sticky top-32">
                            <h3 className="text-xl font-mono text-[#17312C] max-w-[200px] leading-relaxed">
                                {challengesSection.tagline}
                            </h3>
                        </div>
                    </div>

                    {/* Right Column: Main Content */}
                    <div className="lg:w-3/4">
                        {/* Heading */}
                        <div className="mb-12">

                            <h2 className="text-4xl lg:text-5xl font-bold text-[#17312C] leading-tight mb-8">
                                <span dangerouslySetInnerHTML={{ __html: challengesSection.headingHtml || challengesSection.heading }} />
                            </h2>

                            <p className="text-lg text-gray-500">
                                {challengesSection.subheading}
                            </p>
                        </div>

                        {/* Challenges Pills */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            {challengesSection.challenges.map((challenge, index) => (
                                <div key={index} className="flex items-center gap-3 bg-gray-50 rounded-full px-6 py-4">
                                    <Plus className="w-4 h-4 text-yellow-500 flex-shrink-0" strokeWidth={4} />
                                    <span className="text-[#17312C] font-medium">{challenge}</span>
                                </div>
                            ))}
                        </div>

                        {/* Description Text */}
                        <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                            {challengesSection.description.map((paragraph, index) => (
                                <p key={index} className="leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
