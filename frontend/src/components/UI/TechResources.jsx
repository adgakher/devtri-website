import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const resourcesData = [
    {
        id: 1,
        title: "Have You Checked-in to Unified's HQ Office (NYC) Yet?",
        category: "Blog",
        author: "Tanmay Chatterjee",
        date: "Sep 10th, 2021",
        readTime: "2 minutes read",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", // Skyscraper/City image
        authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Challenges in Digital Transformation",
        category: "Blog",
        author: "Unified Tech CoE",
        date: "Sep 20th, 2021",
        readTime: "8 minutes read",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop", // Tech/Digital image
        authorImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Workplace Conflict Management",
        category: "Blog",
        author: "Samrat Biswas",
        date: "Sep 30th, 2021",
        readTime: "7 minutes read",
        image: "https://images.unsplash.com/photo-1588600878108-578307a3cc9d?q=80&w=2076&auto=format&fit=crop", // Shipping containers/Industry image
        authorImage: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop"
    }
];

export const TechResources = () => {
    return (
        <section className="py-24 bg-[#111111] relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <div>
                        <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest block mb-2">
                            Our Blog
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white max-w-2xl leading-tight">
                            Latest Insights & Updates
                        </h2>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resourcesData.map((resource) => (
                        <div key={resource.id} className="h-full">
                            <div className="group relative bg-black rounded-[20px] overflow-hidden border border-gray-800 h-full flex flex-col hover:border-gray-600 transition-colors duration-300 min-h-[450px]">

                                {/* Image Container */}
                                <div className="relative h-64 overflow-hidden shrink-0">
                                    <img
                                        src={resource.image}
                                        alt={resource.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                                    {/* Category Badge */}
                                    <div className="absolute bottom-4 left-4">
                                        <span className="px-3 py-1 rounded-full border border-white/30 text-xs text-white backdrop-blur-sm">
                                            {resource.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 md:p-8 flex flex-col flex-grow">
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-auto hover:text-[#4BC9C8] transition-colors leading-snug">
                                        {resource.title}
                                    </h3>

                                    <div className="mt-8 flex items-end justify-between">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={resource.authorImage}
                                                alt={resource.author}
                                                className="w-10 h-10 rounded-full border border-gray-600 object-cover"
                                            />
                                            <div>
                                                <p className="text-white text-sm font-medium">{resource.author}</p>
                                                <div className="flex items-center gap-2 text-xs text-gray-400">
                                                    <span>{resource.date}</span>
                                                    <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                                                    <span>{resource.readTime}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-[#4BC9C8] transition-colors duration-300 transform group-hover:rotate-45">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
