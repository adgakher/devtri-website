import React from 'react';
import { Heart, GraduationCap, Plane, Coins, Building2, Home, ShoppingBag, Leaf } from 'lucide-react';

const industries = [
    { name: 'Healthcare', icon: <Heart className="w-8 h-8 text-white" />, image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=500' },
    { name: 'Education', icon: <GraduationCap className="w-8 h-8 text-white" />, image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=500' },
    { name: 'Travel', icon: <Plane className="w-8 h-8 text-white" />, image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=500' },
    { name: 'Finance', icon: <Coins className="w-8 h-8 text-white" />, image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=500' },
    { name: 'Real Estate', icon: <Building2 className="w-8 h-8 text-white" />, image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=500' },
    { name: 'Mortgage', icon: <Home className="w-8 h-8 text-white" />, image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=500' },
    { name: 'Retail', icon: <ShoppingBag className="w-8 h-8 text-white" />, image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=500' },
    { name: 'Cannabis', icon: <Leaf className="w-8 h-8 text-white" />, image: 'https://images.unsplash.com/photo-1603909223429-69bb7101f420?auto=format&fit=crop&q=80&w=500' },
];

export const IndustriesWeServe = () => {
    return (
        <section className="py-20 bg-[#FBFBFB]">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row gap-12 lg:items-center">

                    {/* Left Column: Text Content */}
                    <div className="lg:w-1/3">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-8 h-0.5 bg-[#F2735B]"></span>
                            <p className="text-[#17312C]/60 font-bold uppercase tracking-widest text-sm">Focus Sectors</p>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-[#17312C] mb-6 leading-tight">
                            Industries We Serve
                        </h2>

                        <p className="text-gray-500 text-lg leading-relaxed">
                            AllianceTek serves a diverse range of industries, leveraging our expertise to provide customized solutions that address industry-specific challenges.
                        </p>
                    </div>

                    {/* Right Column: Grid */}
                    <div className="lg:w-2/3">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {industries.map((industry, index) => (
                                <div
                                    key={index}
                                    className="relative group overflow-hidden rounded-2xl aspect-square flex p-4 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                                >
                                    {/* Background Image */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{ backgroundImage: `url(${industry.image})` }}
                                    ></div>

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>

                                    {/* Content (Bottom Left) */}
                                    <div className="relative z-10 flex flex-col items-start justify-end w-full h-full text-left">
                                        <div className="mb-2 p-2 bg-white/20 backdrop-blur-sm rounded-full transform transition-transform duration-300 group-hover:-translate-y-1 group-hover:bg-white/30">
                                            {industry.icon}
                                        </div>
                                        <h3 className="text-white font-bold text-lg drop-shadow-md">{industry.name}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
