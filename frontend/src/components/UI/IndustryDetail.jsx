import React from 'react';
import { industryData } from '../../data/industryData';

export const IndustryDetail = ({ industryId }) => {
    const data = industryData[industryId] || industryData['healthcare'];

    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Side: Dual Overlapping Images */}
                    <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[500px] flex items-center justify-center lg:block">
                        {/* Main Image (Square with Round Corners) */}
                        <div className="relative w-full lg:w-[85%] lg:ml-auto overflow-hidden rounded-[40px] shadow-xl">
                            <img
                                src={data.image}
                                alt={data.title}
                                className="w-full h-[350px] lg:h-[450px] object-cover"
                            />
                        </div>

                        {/* Secondary Overlapping Image (Smaller Circle) */}
                        <div className="absolute -bottom-6 -right-4 lg:-bottom-10 lg:left-0 lg:right-auto w-[150px] h-[150px] lg:w-[240px] lg:h-[240px] rounded-full border-[6px] lg:border-[10px] border-white overflow-hidden shadow-2xl z-20 hidden sm:block">
                            <img
                                src={data.image2}
                                alt={`${data.title} Detail`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#17312C] leading-tight">
                            {data.title.split(' ').slice(0, -1).join(' ')} <span className="text-gradient-effect">{data.title.split(' ').slice(-1)}</span>
                        </h2>

                        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                            {data.description}
                        </p>

                        <div className="space-y-8">
                            {data.points.map((point, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-4 h-4 rounded-full border-4 border-white shadow-[0_0_0_2px_rgba(86,183,126,0.3)] bg-[#56B77E]"></div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#17312C] mb-2">
                                            {point.label}:
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {point.text}
                                        </p>
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
