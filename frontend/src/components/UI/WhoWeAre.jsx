import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LogoMarquee } from './LogoMarquee';

export const WhoWeAre = () => {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Left Column: Content */}
                    <div className="lg:col-span-8">
                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest block mb-4">
                            Who we are
                        </span>

                        <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
                            Engineering <span className="text-gradient-effect">digital experiences</span> with
                            our vision, insight, and experience
                        </h2>

                        <div className="space-y-6 text-lg text-gray-600 mb-8">
                            <p>
                                Founded in 2010, We believe in building a future where
                                People, Process, and Technology, drive lasting change.
                            </p>
                            <p>
                                Whatever we do is rooted in customer-centricity. We deliver
                                tailored solutions that enhance your business performance
                                and secure competitive advantages amid disruptions.
                            </p>
                        </div>

                        <p className="font-bold text-black text-lg mb-10">
                            Blending technology with innovation for end-to-end CX
                        </p>

                        <div className="mb-16">
                            <Link to="/company/about">
                                <button className="gradient-border-btn bg-white px-8 py-3 rounded-full text-base font-medium transition-all flex items-center gap-2 group">
                                    Learn More
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                        </div>
                        {/* Certifications Row (Marquee) */}
                        <div className="w-full opacity-70 hover:opacity-100 transition-opacity duration-500 -ml-4">
                            <LogoMarquee
                                className="!border-y-0 !bg-transparent"
                                title={null}
                                logos={[
                                    { name: 'BBB', url: 'https://logo.clearbit.com/bbb.org' },
                                    { name: 'NASSCOM', url: 'https://logo.clearbit.com/nasscom.in' },
                                    { name: 'Clutch', url: 'https://logo.clearbit.com/clutch.co' },
                                    { name: 'Inc', url: 'https://logo.clearbit.com/inc.com' },
                                    { name: 'Great Place to Work', url: 'https://logo.clearbit.com/greatplacetowork.com' },
                                    // Duplicating for seamless scroll effect if list is short, 
                                    // though LogoMarquee handles duplication, having a longer base list helps visual density
                                    { name: 'BBB', url: 'https://logo.clearbit.com/bbb.org' },
                                    { name: 'NASSCOM', url: 'https://logo.clearbit.com/nasscom.in' },
                                    { name: 'Clutch', url: 'https://logo.clearbit.com/clutch.co' },
                                    { name: 'Inc', url: 'https://logo.clearbit.com/inc.com' },
                                    { name: 'Great Place to Work', url: 'https://logo.clearbit.com/greatplacetowork.com' },
                                ]}
                            />
                        </div>
                    </div>

                    {/* Right Column: Stats (with divider) */}
                    <div className="lg:col-span-4 lg:border-l lg:border-black/10 lg:pl-12 flex flex-col justify-center space-y-12">

                        {/* Stat 1 */}
                        <div>
                            <h3 className="text-5xl font-bold text-gradient-effect mb-2">15+</h3>
                            <p className="text-gray-500 text-lg leading-tight">
                                Years in <br /> Business
                            </p>
                        </div>

                        {/* Stat 2 */}
                        <div>
                            <h3 className="text-5xl font-bold text-gradient-effect mb-2">300+</h3>
                            <p className="text-gray-500 text-lg leading-tight">
                                Global <br /> Clients
                            </p>
                        </div>

                        {/* Stat 3 */}
                        <div>
                            <h3 className="text-5xl font-bold text-gradient-effect mb-2">250+</h3>
                            <p className="text-gray-500 text-lg leading-tight">
                                Tech <br /> Experts
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};
