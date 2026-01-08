import React, { useState, useEffect } from 'react';
import { industryData } from '../../data/industryData';

export const WhoWeHelp = ({ industryId }) => {
    const data = industryData[industryId] || industryData['healthcare'];
    const { whoWeHelpSection } = data;

    // Use state to track active tab
    const [activeTab, setActiveTab] = useState(null);

    // Set initial active tab when data loads or changes
    useEffect(() => {
        if (whoWeHelpSection && whoWeHelpSection.targetAudience.length > 0) {
            setActiveTab(whoWeHelpSection.targetAudience[0]);
        }
    }, [industryId, whoWeHelpSection]);

    if (!whoWeHelpSection) return null;

    // Loading state or safe return
    if (!activeTab) return null;

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 mb-16">
                {/* Heading */}
                <div className="mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#17312C] mb-8">
                        {/* Render Title with HTML support for coloring 'help?' */}
                        <span dangerouslySetInnerHTML={{ __html: whoWeHelpSection.title }} />
                    </h2>

                    {/* Tabs */}
                    {/* Tabs */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                        {whoWeHelpSection.targetAudience.map((audience) => {
                            const isActive = activeTab.id === audience.id;

                            return (
                                <button
                                    key={audience.id}
                                    onClick={() => setActiveTab(audience)}
                                    className={`relative group rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 h-14`}
                                >
                                    {isActive ? (
                                        // Gradient Border Active State
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#17312C] to-[#56B77E] p-[2px]">
                                            <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-[#17312C]">
                                                {audience.label}
                                            </div>
                                        </div>
                                    ) : (
                                        // Inactive State: Border, No BG, Shadow
                                        <div className="w-full h-full rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-gray-500 hover:border-gray-300 hover:text-gray-700 hover:shadow-md transition-all">
                                            {audience.label}
                                        </div>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Content Area - Full Bleed Split Layout */}
            <div className="flex flex-col lg:flex-row h-auto lg:h-[450px]"> {/* Reduced height even more */}

                {/* Left Column: Image (Full Bleed - No Space) */}
                <div className="lg:w-1/2 relative h-[400px] lg:h-full animate-fade-in group">
                    {/* Added border radius for top-right and bottom-right */}
                    <img
                        src={activeTab.image}
                        alt={activeTab.title}
                        className="w-full h-full object-cover rounded-tr-[3rem] rounded-br-[3rem]"
                    />
                    {/* Optional: Overlay gradient if needed for text over image, but layout says image is separate */}
                </div>

                {/* Right Column: Content */}
                <div className="lg:w-1/2 p-8 lg:p-24 flex flex-col justify-center animate-fade-in">
                    <div className="max-w-xl">
                        {/* Icon on Top */}
                        {activeTab.icon && (
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#17312C] to-[#56B77E] flex items-center justify-center mb-10 shadow-lg text-white transform hover:scale-110 transition-transform duration-300">
                                {typeof activeTab.icon === 'string' ? (
                                    <img src={activeTab.icon} alt="" className="w-10 h-10" />
                                ) : (
                                    React.createElement(activeTab.icon, { className: "w-10 h-10 text-white" })
                                )}
                            </div>
                        )}

                        {/* Title & Divider Line */}
                        <div className="mb-8">
                            <h3 className="text-4xl font-bold text-[#17312C] mb-6">
                                {activeTab.title}
                            </h3>
                        </div>

                        {/* Paragraphs */}
                        <div className="prose prose-lg text-gray-600 space-y-6">
                            {activeTab.description.map((paragraph, index) => (
                                <p key={index} className="leading-relaxed text-lg">
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
