import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    MessageSquare,
    Sparkle,
    BarChart3,
    TrendingUp,
    ShieldCheck,
    PieChart,
    UserSquare2,
    Monitor,
    Globe,
    Cpu,
    Database,
    Shield,
    Star,
    Plus,
    Minus
} from 'lucide-react';
import { caseStudiesData } from '../data/caseStudiesData';
import { DigitalChange } from '../components/UI/DigitalChange';
import { Testimonials } from '../components/UI/Testimonials';
import ContactSection from '../components/UI/ContactSection';

export const CaseStudyDetail = () => {
    const { slug } = useParams();
    const study = caseStudiesData.find(s => s.slug === slug);
    const [activeTechTab, setActiveTechTab] = useState(0);
    const [openSolutionIndex, setOpenSolutionIndex] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!study) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#FBFBFB]">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-[#17312C] mb-4">Case Study Not Found</h1>
                    <Link to="/casestudies" className="text-[#F2735B] font-bold hover:underline">Back to All Case Studies</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white font-[Castledown]">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
                <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#17312C]/40 flex items-end">
                    <div className="container mx-auto px-8 lg:px-16 pb-12">
                        <Link to="/casestudies" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 underline underline-offset-4 transition-colors">
                            <ArrowLeft size={18} />
                            Back to Case Studies
                        </Link>
                        <div className="max-w-5xl">
                            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                                {study.title}
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* 1. About the Client and Project Section */}
            <section className="py-24 px-8 lg:px-16">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-7">
                        <h2 className="text-4xl font-extrabold text-[#17312C] mb-8">About the Client and Project</h2>
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-medium">
                            <p>{study.details.aboutClient}</p>
                            {study.description && <p>{study.description}</p>}
                        </div>
                    </div>

                    <div className="lg:col-span-5 grid grid-cols-2 gap-y-10 border-l border-gray-100 pl-8 lg:pl-16">
                        <div>
                            <p className="text-gray-400 text-sm uppercase tracking-widest font-bold mb-2">Industry</p>
                            <p className="text-xl font-extrabold text-[#17312C] leading-tight">{study.industry || study.category}</p>
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm uppercase tracking-widest font-bold mb-2">Project Duration</p>
                            <p className="text-xl font-extrabold text-[#17312C] leading-tight">{study.duration || '9 months'}</p>
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm uppercase tracking-widest font-bold mb-2">Client Location</p>
                            <p className="text-xl font-extrabold text-[#17312C] leading-tight">{study.location || 'New York City'}</p>
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm uppercase tracking-widest font-bold mb-2">Team Size</p>
                            <p className="text-xl font-extrabold text-[#17312C] leading-tight">{study.teamSize || '15'}</p>
                        </div>
                        <div className="col-span-2">
                            <p className="text-gray-400 text-sm uppercase tracking-widest font-bold mb-2">Engagement Model</p>
                            <p className="text-xl font-extrabold text-[#17312C] leading-tight">{study.engagementModel || 'Fixed Budget'}</p>
                        </div>
                        <div className="col-span-2 pt-4">
                            <p className="text-gray-400 text-sm uppercase tracking-widest font-bold mb-2 italic">Build Your Idea</p>
                            <Link to="/contact" className="text-xl font-extrabold text-[#F2735B] underline underline-offset-8">
                                Consult Our Experts
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Background and Strategic Fit Section */}
            <section className="py-24 px-8 lg:px-16 bg-[#FBFBFB]">
                <div className="container mx-auto">
                    <div className="bg-[#E5F3F1] rounded-[3rem] p-10 lg:p-20 shadow-sm">
                        <h2 className="text-4xl font-extrabold text-[#17312C] mb-8">Background and Strategic fit</h2>
                        <div className="max-w-4xl space-y-8">
                            <p className="text-lg text-[#17312C] font-medium leading-relaxed">
                                {study.details.background}
                            </p>

                            <div className="pt-4">
                                <p className="text-lg text-[#17312C] font-bold mb-6 italic opacity-80">This project aimed to address these business objectives</p>
                                <ul className="space-y-6">
                                    {study.details.backgroundObjectives?.map((obj, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <div className="w-2 h-2 bg-[#F2735B] rounded-full mt-2.5 shrink-0" />
                                            <p className="text-lg text-[#17312C] font-medium leading-relaxed opacity-90">{obj}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p className="text-lg text-[#17312C] font-semibold pt-4">
                                To address these challenges, the company decided to develop an intelligent and robust bespoke solution.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Services Offered Section */}
            <section className="py-24 px-8 lg:px-16 bg-[#17312C] text-white">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-extrabold mb-16">Services Offered</h2>
                    <div className="flex flex-wrap lg:flex-nowrap items-start gap-8 lg:gap-4 overflow-x-auto pb-4 no-scrollbar border-b border-white/10">
                        {study.details.detailedServices?.map((service, idx) => (
                            <React.Fragment key={idx}>
                                <div className="min-w-[280px] lg:flex-1">
                                    <span className="text-4xl font-extrabold text-white/20 mb-6 block transition-colors">0{idx + 1}</span>
                                    <h3 className="text-2xl font-extrabold mb-6 text-[#F2735B] leading-tight">{service.title}</h3>
                                    <p className="text-gray-400 font-medium leading-relaxed">{service.desc}</p>
                                </div>
                                {idx < study.details.detailedServices.length - 1 && (
                                    <div className="hidden lg:flex items-center pt-2 px-4 opacity-30">
                                        <ArrowRight size={24} />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Challenges Section */}
            <section className="py-24 px-8 lg:px-16 bg-white">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-extrabold text-[#17312C] mb-20">Challenges</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start relative">
                        {/* Left Side: Stacking Challenges Content */}
                        <div className="lg:col-span-7 space-y-0">
                            {study.details.detailedChallenges?.map((challenge, idx) => (
                                <div
                                    key={idx}
                                    className="sticky top-40 bg-white py-24 flex gap-8 lg:gap-12 items-start"
                                    style={{ zIndex: 10 + idx }}
                                >
                                    <span className="text-6xl md:text-8xl font-black text-[#E5F3F1] leading-none shrink-0">{challenge.id}</span>
                                    <div className="pt-4">
                                        <h3 className="text-2xl md:text-4xl font-extrabold text-[#17312C] mb-8">{challenge.title}</h3>
                                        <ul className="space-y-6">
                                            {challenge.points.map((point, k) => (
                                                <li key={k} className="flex items-start gap-4">
                                                    <div className="w-1.5 h-1.5 bg-[#F2735B] rounded-full mt-2.5 shrink-0" />
                                                    <p className="text-xl text-gray-600 font-medium leading-relaxed">{point}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Side: Sticky Image Container */}
                        <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-40 h-fit self-start pt-24">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#E5F3F1] rounded-[2.5rem] rotate-3" />
                                <div className="relative z-10 w-full">
                                    <img
                                        src={study.details.detailedChallenges?.[0]?.image || study.image}
                                        alt="Project Challenge"
                                        className="w-full h-auto rounded-[2.5rem] grayscale-[10%] object-cover shadow-sm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Client Goals Section */}
            <section className="py-24 px-8 lg:px-16 bg-[#17312C] text-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div className="lg:col-span-5 lg:sticky lg:top-40 h-fit self-start">
                            <h2 className="text-4xl font-extrabold mb-12">Client Goals</h2>
                            <p className="text-xl text-gray-400 font-medium leading-relaxed">
                                {study.details.goals}
                            </p>
                        </div>

                        <div className="lg:col-span-7 space-y-4">
                            {study.details.detailedGoals?.map((goal, idx) => (
                                <div key={idx} className="flex items-center gap-6 p-6 md:p-8 bg-[#233F3A]/50 border border-white/10 rounded-2xl hover:border-[#F2735B]/50 transition-all group">
                                    <div className="w-3 h-3 bg-[#E37439] rounded-full shrink-0 group-hover:scale-125 transition-transform" />
                                    <p className="text-lg font-bold tracking-tight">{goal}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Solutions Provided Section */}
            {study.details.solutionsProvided && (
                <section className="py-24 px-8 lg:px-16 bg-[#FBFBFB] border-t border-gray-100">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start relative">
                            {/* Left Side: Sticky Intro & Image */}
                            <div className="lg:col-span-5 lg:sticky lg:top-40 h-fit self-start space-y-12">
                                <div>
                                    <h2 className="text-4xl font-extrabold mb-8 text-[#17312C]">{study.details.solutionsProvided.title}</h2>
                                    <p className="text-xl text-gray-600 font-medium leading-relaxed">
                                        {study.details.solutionsProvided.description}
                                    </p>
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-0 bg-[#E5F3F1] rounded-[3rem] -rotate-3" />
                                    <img
                                        src={study.details.solutionsProvided.image}
                                        alt="Solution Visual"
                                        className="relative z-10 w-full h-auto rounded-[3rem] shadow-xl object-cover aspect-[4/3] grayscale-[10%]"
                                    />
                                </div>
                            </div>

                            {/* Right Side: Solution Accordion (FAQ Style) */}
                            <div className="lg:col-span-7">
                                {study.details.solutionsProvided.items.map((item, idx) => {
                                    const isOpen = openSolutionIndex === idx;
                                    return (
                                        <div
                                            key={idx}
                                            className={`border-b border-gray-200 transition-all duration-300 ${idx === 0 ? 'border-t' : ''}`}
                                        >
                                            <button
                                                onClick={() => setOpenSolutionIndex(isOpen ? null : idx)}
                                                className="w-full flex items-center justify-between py-8 px-4 text-left transition-colors duration-300"
                                            >
                                                <div className="flex items-center gap-6">
                                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? 'bg-[#F2735B]/10 text-[#F2735B]' : 'bg-[#E5F3F1]/50 text-[#17312C]'}`}>
                                                        {idx === 0 && <UserSquare2 size={20} />}
                                                        {idx === 1 && <BarChart3 size={20} />}
                                                        {idx === 2 && <TrendingUp size={20} />}
                                                        {idx === 3 && <MessageSquare size={20} />}
                                                        {idx === 4 && <ShieldCheck size={20} />}
                                                        {idx === 5 && <PieChart size={20} />}
                                                    </div>
                                                    <span className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${isOpen ? 'text-[#F2735B]' : 'text-gray-900'}`}>
                                                        {item.title}
                                                    </span>
                                                </div>
                                                <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                                    {isOpen ? (
                                                        <Minus className="w-6 h-6 text-[#F2735B]" />
                                                    ) : (
                                                        <Plus className="w-6 h-6 text-gray-400" />
                                                    )}
                                                </div>
                                            </button>

                                            <div
                                                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-8' : 'max-h-0 opacity-0'}`}
                                            >
                                                <div className="pl-20 pr-4 pb-4 text-gray-600 text-lg leading-relaxed">
                                                    {item.desc}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* 7. Technology Stack Section */}
            {study.details.techStack && (
                <section className="py-24 px-8 lg:px-16 bg-[#040404] text-white relative overflow-hidden">
                    {/* Radial Glow - Digital Change Theme (Green) */}
                    <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#56B77E]/5 rounded-full blur-[120px] -translate-y-1/2" />
                    <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#17312C]/10 rounded-full blur-[100px] -translate-y-1/2" />

                    <div className="container mx-auto relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                            {/* Left Side: Title & Info List */}
                            <div className="lg:col-span-5 space-y-12">
                                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-[Castledown]">
                                    Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#17312C] to-[#56B77E]">Stack</span>
                                </h2>
                                <div className="space-y-10">
                                    {study.details.techStack.categories.map((cat, idx) => {
                                        const isActive = activeTechTab === idx;
                                        return (
                                            <div key={idx} className={`space-y-3 transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-40'}`}>
                                                <div className="flex items-center gap-4">
                                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors duration-500 ${isActive ? 'border-[#56B77E]' : 'border-gray-600'}`}>
                                                        <div className={`w-2 h-2 rounded-full transition-colors duration-500 ${isActive ? 'bg-[#56B77E]' : 'bg-gray-600'}`} />
                                                    </div>
                                                    <h3 className={`text-xl font-bold transition-colors duration-500 ${isActive ? 'text-white' : 'text-gray-400'}`}>
                                                        {cat.name}:
                                                    </h3>
                                                </div>
                                                <p className={`text-base leading-relaxed pl-10 font-medium transition-colors duration-500 ${isActive ? 'text-gray-200' : 'text-gray-500'}`}>
                                                    {cat.details}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Right Side: Interactive Tabs & Icons */}
                            <div className="lg:col-span-7 space-y-12">
                                {/* Tab Buttons - Gradient Border on Active, Silver on Inactive */}
                                <div className="flex flex-wrap gap-4">
                                    {study.details.techStack.categories.map((cat, idx) => {
                                        const isActive = activeTechTab === idx;
                                        return (
                                            <button
                                                key={idx}
                                                onClick={() => setActiveTechTab(idx)}
                                                className={`px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest transition-all relative group ${isActive ? 'text-white' : 'text-gray-400'
                                                    }`}
                                            >
                                                {/* Silver Border (Inactive) */}
                                                <div className={`absolute inset-0 rounded-full border transition-all duration-300 ${isActive ? 'opacity-0 scale-105' : 'border-gray-500/50 group-hover:border-gray-300'
                                                    }`} />

                                                {/* Gradient Border (Active) */}
                                                {isActive && (
                                                    <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#17312C] to-[#56B77E]">
                                                        <div className="w-full h-full bg-[#040404] rounded-full" />
                                                    </div>
                                                )}

                                                <span className="relative z-10">{cat.name}</span>
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Icon Grid - Colorful logos on dark cards */}
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                                    {study.details.techStack.categories[activeTechTab].items.map((item, idx) => (
                                        <div key={idx} className="aspect-square bg-[#111111] border border-white/5 shadow-2xl rounded-3xl p-8 flex flex-col items-center justify-center gap-4 transition-all">
                                            <div className="w-16 h-16 flex items-center justify-center">
                                                <img
                                                    src={item.icon}
                                                    alt={item.name}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center">
                                                {item.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
            {/* 8. Results Section */}
            {study.details.detailedResults && (
                <section className="py-24 px-8 lg:px-16 bg-white">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
                            {/* Left Side: Content & Metrics */}
                            <div className="lg:col-span-7 space-y-12">
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#17312C] mb-8">{study.details.detailedResults.title}</h2>
                                    <p className="text-xl text-gray-600 font-medium leading-relaxed max-w-2xl">
                                        {study.details.detailedResults.description}
                                    </p>
                                </div>

                                <ul className="space-y-6">
                                    {study.details.detailedResults.bullets.map((bullet, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <Star className="text-yellow-400 fill-yellow-400 shrink-0 mt-1" size={20} />
                                            <p className="text-lg text-gray-700 font-semibold leading-relaxed">{bullet}</p>
                                        </li>
                                    ))}
                                </ul>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-8">
                                    {study.details.detailedResults.metrics.map((metric, idx) => (
                                        <div key={idx} className="space-y-4">
                                            <div className="text-5xl md:text-5xl font-black tracking-tighter" style={{ color: metric.color }}>
                                                {metric.value}
                                            </div>
                                            <p className="text-lg font-extrabold text-gray-500 leading-tight max-w-[200px]">
                                                {metric.label}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side: Results Image */}
                            <div className="lg:col-span-5 relative">
                                <div className="absolute inset-0 bg-gray-100 rounded-[3rem] -rotate-3 scale-105" />
                                <img
                                    src={study.details.detailedResults.image}
                                    alt="Project Results"
                                    className="relative z-10 w-full h-auto rounded-[3rem] shadow-2xl object-cover aspect-[4/3]"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            )}
            <DigitalChange />
            <Testimonials />
            <ContactSection />
        </div>
    );
};
