import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';

const caseStudies = [
    {
        id: '01',
        title: 'Real Estate Loan Application Portal',
        description: 'An experienced commercial real estate finance company with the secure upload of many financial documents from end users.',
        points: [
            'An easy-to-use platform where government programs could be analyzed and automated.',
            'In order to process the application in bulk, the SBA APIs be integrated with the limitations and third-party apps.'
        ],
        image: 'https://placehold.co/800x600/1e293b/FFFFFF?text=Project+1'
    },
    {
        id: '02',
        title: 'Fintech Dashboard Implementation',
        description: 'A comprehensive dashboard for tracking financial assets and real-time market data visualization.',
        points: [
            'Real-time data streaming using WebSocket integration for immediate market updates.',
            'Customizable widgets allowing users to personalize their dashboard experience.'
        ],
        image: 'https://placehold.co/800x600/1e293b/FFFFFF?text=Project+2'
    },
    {
        id: '03',
        title: 'Healthcare Patient Management',
        description: 'Streamlining patient intake and record management for a large healthcare provider.',
        points: [
            'HIPAA-compliant data storage and transmission ensuring patient privacy.',
            'Integrated appointment scheduling system reducing administrative overhead.'
        ],
        image: 'https://placehold.co/800x600/1e293b/FFFFFF?text=Project+3'
    }
];

export const CaseStudies = () => {
    const swiperRef = useRef(null);

    // Theme Constants
    const gradientText = "bg-clip-text text-transparent bg-gradient-to-r from-[#17312C] to-[#56B77E]";
    const gradientBg = "bg-gradient-to-r from-[#F2735B] to-[#E37439]";

    return (
        <section className="py-12 bg-[#FBFBFB] overflow-hidden relative font-[Castledown]">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#17312C]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

            <div className="container mx-auto px-6 lg:px-12 relative">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex flex-row items-center justify-center gap-4 mb-4">
                        <div className="h-[2px] w-12 bg-[#F2735B]"></div>
                        <h4 className="text-[#17312C] tracking-[0.2em] text-sm font-bold uppercase">Our Finest Achievements</h4>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#17312C] mb-6">Best of Our Work</h2>
                    <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
                        With a track record of successful projects and satisfied clients, we strive for excellence in every endeavour,
                        ensuring that our best work becomes a catalyst for our client's success.
                    </p>
                </div>

                {/* Content Area Wrapper */}
                <div className="relative max-w-[1400px] mx-auto">

                    {/* STATIC NAVIGATION BUTTONS */}
                    <div className="flex justify-end gap-4 mb-8 lg:mb-0 lg:absolute lg:top-10 lg:right-16 z-30">
                        <button onClick={() => swiperRef.current?.slidePrev()} className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-[#17312C] hover:bg-gray-50 hover:border-[#17312C] transition-all shadow-md">
                            <ArrowLeft size={20} />
                        </button>
                        <button onClick={() => swiperRef.current?.slideNext()} className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-[#F2735B] hover:bg-orange-50 hover:border-[#F2735B] transition-all shadow-md">
                            <ArrowRight size={20} />
                        </button>
                    </div>

                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={100} // High space to ensure neighbors don't peek
                        slidesPerView={1}
                        speed={1900} // Slow and smooth transition (1s)
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        loop={true}
                        className="overflow-hidden"
                    >
                        {caseStudies.map((study, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative flex flex-col lg:flex-row items-center pt-8 pb-8">

                                    {/* White Card (Left) */}
                                    {/* Link width increased to ~75-80% of container to align sections better. */}
                                    {/* Padding reduced as per user feedback (removed extra top padding for moved buttons) */}
                                    <div className="w-full lg:w-[80%] bg-white p-6 sm:p-8 lg:p-12 rounded-[40px] border border-gray-100 z-10 relative min-h-[450px] flex flex-col justify-center overflow-hidden">

                                        {/* Mobile Laptop Frame (Inside Card) */}
                                        <div className="lg:hidden mb-10 mt-2">
                                            <div className="relative w-full max-w-[450px] mx-auto transform transition-transform duration-500">
                                                {/* Laptop Body */}
                                                <div className="relative mx-auto border-[#1a1a1a] bg-[#1a1a1a] border-[6px] rounded-t-xl h-[160px] sm:h-[220px] w-full">
                                                    <div className="rounded-md overflow-hidden h-full bg-white relative">
                                                        <img src={study.image} className="w-full h-full object-cover" alt={study.title} />
                                                    </div>
                                                </div>
                                                {/* Laptop Bottom Deck */}
                                                <div className="relative mx-auto bg-[#262626] rounded-b-xl h-[12px] w-[110%] -left-[5%] flex items-center justify-center">
                                                    <div className="w-[60px] h-[2px] bg-[#333333] rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className={`text-4xl font-extrabold ${gradientText}`}>{study.id}</span>
                                            <div className="h-[2px] w-12 bg-[#17312C]/50"></div>
                                        </div>

                                        {/* Max width restricted to ensure it doesn't run under image */}
                                        <h3 className="text-3xl lg:text-4xl font-extrabold text-[#17312C] mb-6 leading-tight max-w-full lg:max-w-[65%]">
                                            {study.title}
                                        </h3>

                                        <p className="text-slate-500 mb-8 leading-relaxed text-lg max-w-full lg:max-w-[60%]">
                                            {study.description}
                                        </p>

                                        <ul className="space-y-4 mb-10 max-w-full lg:max-w-[60%]">
                                            {study.points.map((point, i) => (
                                                <li key={i} className="flex items-start gap-4">
                                                    <div className="relative mt-1.5 shrink-0">
                                                        <div className={`w-3 h-3 rounded-full ${gradientBg}`}></div>
                                                        <div className={`absolute -inset-1 rounded-full border border-[#FF7F50]/30`}></div> {/* Updated to coral */}
                                                    </div>
                                                    <span className="text-slate-600 text-base leading-relaxed font-medium">{point}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mb-0">
                                            <a href="#" className={`inline-block font-extrabold text-[#F2735B] border-b-2 border-[#17312C]/30 pb-1 hover:text-[#17312C] hover:border-[#17312C] transition-all text-lg tracking-wide`}>
                                                Read More
                                            </a>
                                        </div>
                                    </div>

                                    {/* Image (Right) */}
                                    {/* Reduced size as requested. W-40% roughly, constrained max-width. removed drop-shadow */}
                                    <div className="hidden lg:block lg:w-[45%] lg:absolute lg:-right-0 lg:top-1/2 lg:-translate-y-1/2 z-20 mt-8 lg:mt-0 pl-8 lg:pl-0 pointer-events-none">
                                        <div className="relative w-full max-w-[550px] transform transition-transform duration-500">
                                            {/* Laptop Body - Removed shadow-2xl */}
                                            <div className="relative mx-auto border-[#1a1a1a] bg-[#1a1a1a] border-[8px] rounded-t-xl h-[200px] sm:h-[260px] lg:h-[300px] w-full">
                                                <div className="rounded-md overflow-hidden h-full bg-white relative">
                                                    <img src={study.image} className="w-full h-full object-cover" alt={study.title} />
                                                </div>
                                            </div>
                                            {/* Laptop Bottom Deck - Removed shadow-lg */}
                                            <div className="relative mx-auto bg-[#262626] rounded-b-xl h-[16px] w-[110%] -left-[5%] flex items-center justify-center">
                                                <div className="w-[80px] h-[3px] bg-[#333333] rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </section>
    );
};
