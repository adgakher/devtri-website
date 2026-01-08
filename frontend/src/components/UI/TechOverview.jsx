import React, { useState } from 'react';
import {
    Code,
    Cpu,
    Zap,
    ShieldCheck,
    Headphones,
    Monitor,
    Layout,
    FastForward,
    RefreshCw,
    Library,
    Smartphone,
    Box,
    Globe,
    Clock,
    Users,
    Settings,
    TrendingUp,
    Cloud,
    Lock,
    ChevronRight
} from 'lucide-react';
import { techDetailData } from '../../data/techDetailData';

const IconComponent = ({ iconName, ...props }) => {
    const icons = {
        code: Code,
        api: Cpu,
        zap: Zap,
        'shield-check': ShieldCheck,
        headset: Headphones,
        monitor: Monitor,
        layout: Layout,
        'fast-forward': FastForward,
        'refresh-cw': RefreshCw,
        library: Library,
        smartphone: Smartphone,
        box: Box,
        globe: Globe,
        clock: Clock,
        users: Users,
        settings: Settings,
        'trending-up': TrendingUp,
        cloud: Cloud,
        lock: Lock
    };

    const SpecificIcon = icons[iconName] || Code;
    return <SpecificIcon {...props} />;
};

export const TechOverview = ({ techId }) => {
    const normalizedId = techId ? techId.replace(/-/g, '').toLowerCase() : 'default';
    const data = techDetailData[normalizedId] || techDetailData['default'];
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // If no overview cards, don't render this section
    if (!data || !data.overviewCards) return null;

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12 mb-16">
                {/* Header Section with Sticky Side */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                    {/* Left Column: Sticky Label, Heading and Image */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit space-y-8 self-start">
                        <div>
                            <span className="text-xl font-medium text-[#F2735B] tracking-tight block mb-4">
                                Overview
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#17312C] leading-[1.05] tracking-tighter">
                                {data.overviewTitle.split(' ').map((word, i, arr) => (
                                    <span key={i}>
                                        {i === 0 ? <span className="text-gradient-effect">{word} </span> : word + (i < arr.length - 1 ? ' ' : '')}
                                    </span>
                                ))}
                            </h2>
                        </div>

                        {/* Sticky Image */}
                        <div className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] bg-gray-100">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#17312C]/20 to-transparent z-10" />
                            <img
                                src={data.image || "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974"}
                                alt={data.overviewTitle}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out grayscale-[10%] group-hover:grayscale-0 relative z-0"
                                onError={(e) => {
                                    e.target.src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070";
                                }}
                            />
                        </div>
                    </div>

                    {/* Right Column: Scrollable Description Content */}
                    <div className="lg:col-span-7 pt-2 lg:pt-16">
                        <div className="space-y-8">
                            {data.overviewDescription.map((para, index) => (
                                <p key={index} className="text-xl text-gray-600 leading-relaxed font-medium">
                                    {para}
                                </p>
                            ))}

                            {/* Optional: Add a call to action or point list to make the scroll longer/more interesting */}
                            <div className="pt-8 border-t border-gray-100">
                                <p className="text-[#17312C] font-bold text-lg mb-6 italic opacity-85">
                                    Key focus areas in our {data.title} approach:
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {data.overviewCards.slice(0, 4).map((card, idx) => (
                                        <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl">
                                            <div className="w-2 h-2 bg-[#F2735B] rounded-full" />
                                            <span className="font-bold text-[#17312C]">{card.title}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Full-Width Expanding Cards Section */}
            <div className="w-full flex flex-col lg:flex-row border-y border-gray-100 min-h-[320px] lg:min-h-[400px]">
                {data.overviewCards.map((card, index) => {
                    const isHovered = hoveredIndex === index;

                    return (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={`
                                relative border-t lg:border-t-0 lg:border-l first:border-t-0 lg:first:border-l-0 border-gray-100 transition-all duration-700 ease-in-out cursor-pointer overflow-hidden
                                ${isHovered ? 'lg:flex-[4] bg-[#F1F5F9]' : 'lg:flex-1 bg-white'}
                                flex flex-col flex-shrink-0 p-8 lg:p-10
                            `}
                        >
                            <div className={`
                                transition-all duration-700 flex flex-col h-full w-full
                                ${isHovered ? 'lg:flex-row lg:items-center justify-start gap-6 lg:gap-10' : 'items-center justify-center'}
                            `}>
                                {/* Icon Container */}
                                <div className={`
                                    flex-shrink-0 transition-all duration-700 flex items-center justify-center
                                    ${isHovered ? 'w-16 h-16 lg:w-20 lg:h-20' : 'w-20 h-20 mb-6'}
                                `}>
                                    <div className={`
                                        w-full h-full flex items-center justify-center rounded-2xl transition-all duration-700
                                        ${isHovered ? 'bg-white shadow-xl' : 'bg-transparent'}
                                    `}>
                                        <div className={!isHovered ? 'text-gradient-effect' : 'text-[#17312C]'}>
                                            <IconComponent
                                                iconName={card.icon}
                                                className="w-10 h-10 transition-colors duration-700"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Content Container */}
                                <div className={`
                                    transition-all duration-700 flex flex-col
                                    ${isHovered ? 'opacity-100 flex-1 text-left' : 'opacity-100 items-center text-center'}
                                `}>
                                    <h3 className={`
                                        text-xl lg:text-2xl font-bold transition-all duration-700 text-[#17312C]
                                        ${isHovered ? 'mb-3' : 'mb-0'}
                                    `}>
                                        {card.title}
                                    </h3>

                                    {/* Description - only shown when hovered */}
                                    <div className={`
                                        transition-all duration-700 overflow-hidden
                                        ${isHovered ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}
                                    `}>
                                        <p className="text-gray-600 leading-relaxed text-base lg:text-lg max-w-2xl">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

