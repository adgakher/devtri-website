import React from 'react';
import { techDetailData } from '../../data/techDetailData';
import {
    Zap,
    TrendingUp,
    Code,
    Box,
    Users,
    Smartphone,
    Globe,
    Library,
    Settings,
    RefreshCw,
    Clock,
    Cpu,
    ShieldCheck,
    FastForward,
    Layout
} from 'lucide-react';

const IconComponent = ({ iconName, className }) => {
    const icons = {
        'zap': Zap,
        'trending-up': TrendingUp,
        'code': Code,
        'box': Box,
        'users': Users,
        'smartphone': Smartphone,
        'globe': Globe,
        'library': Library,
        'settings': Settings,
        'refresh-cw': RefreshCw,
        'clock': Clock,
        'cpu': Cpu,
        'shield-check': ShieldCheck,
        'fast-forward': FastForward,
        'layout': Layout
    };

    const Icon = icons[iconName] || Code;
    return <Icon className={className} />;
};

const WhyChoose = ({ techId }) => {
    // Normalize techId for lookup (remove dashes if any, as keys are solid nodejs, reactjs, etc)
    const normalizedId = techId ? techId.replace(/-/g, '').toLowerCase() : 'default';
    const data = techDetailData[normalizedId] || techDetailData['default'];
    const whyChooseData = data.whyChoose;

    if (!whyChooseData) return null;

    return (
        <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
            {/* Subtle Texture/Background Detail */}
            {/* Subtle Texture/Background Detail */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("/src/assets/Images/choose-tech-bg.webp")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.3 // Adjusting opacity as it's an image now, not just a pattern
                }}></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Header Section */}
                <div className="max-w-4xl mb-16 px-4">
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-8 text-white leading-tight">
                        {whyChooseData.title.split(' ').map((word, i, arr) => {
                            const isTechName = word.toLowerCase().includes('node') ||
                                word.toLowerCase().includes('react') ||
                                word.toLowerCase().includes('flutter');
                            return (
                                <span key={i}>
                                    {isTechName ? (
                                        <span className="text-gradient-effect">{word} </span>
                                    ) : (
                                        word + (i < arr.length - 1 ? ' ' : '')
                                    )}
                                </span>
                            );
                        })}
                    </h2>
                    <p className="text-lg text-gray-400 leading-relaxed max-w-3xl">
                        {whyChooseData.subtitle}
                    </p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {whyChooseData.cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-[#F8F9FA] rounded-[30px] p-8 lg:p-10 flex flex-col items-start transition-all duration-300 h-full justify-between"
                        >
                            <div>
                                {/* Icon Container (Circular Gradient) */}
                                <div className="w-16 h-16 rounded-full bg-[#1A1A1A] border border-gray-800 flex items-center justify-center mb-8 relative group">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#627EF4] to-[#4BC9C8] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                                    <IconComponent
                                        iconName={card.icon}
                                        className="w-8 h-8 text-[#56B77E]"
                                    />
                                </div>

                                <h3 className="text-2xl font-bold text-[#111111] mb-6 leading-tight">
                                    {card.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
