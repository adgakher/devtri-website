import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Play, Quote, X } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
    {
        id: 1,
        name: "Richard Cruz",
        role: "Project Owner, WSI Priority Media",
        content: "Experience with Next Gen for 2 Major Projects we worked with has been wonderful. We've gotten 5 star reviews all the way across the board on our app & we've just found them to be very Responsive, Great to Work with. It has just been fantastic. If you're looking for a really great app developer, You just can't beat them. I Highly recommend them.",
        type: 'video',
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 2,
        name: "Sarah Johnson",
        role: "CTO, FinTech Innovations",
        content: "The team transformed our legacy system into a modern, scalable cloud infrastructure. Their attention to detail and technical expertise is unmatched in the industry. We saw a 300% increase in performance immediately after launch.",
        type: 'image',
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        name: "Michael Chen",
        role: "Director of Product, HealthPlus",
        content: "Security was our top priority, and Next Gen delivered beyond expectations. The patient portal they built is not only HIPAA compliant but also incredibly user-friendly. Our patient engagement has doubled.",
        type: 'video',
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    }
];

export const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [playingVideo, setPlayingVideo] = useState(null);

    const swiperRef = React.useRef(null);

    // Gradient Constants
    const gradientText = "bg-clip-text text-transparent bg-gradient-to-r from-[#17312C] to-[#56B77E]";
    const gradientBg = "bg-gradient-to-r from-[#F2735B] to-[#E37439]";

    const handlePlayClick = (videoUrl) => {
        setPlayingVideo(videoUrl);
    };

    const closeVideo = () => {
        setPlayingVideo(null);
    };

    // Control Swiper autoplay based on video state
    React.useEffect(() => {
        if (swiperRef.current && swiperRef.current.autoplay) {
            if (playingVideo) {
                swiperRef.current.autoplay.stop();
            } else {
                swiperRef.current.autoplay.start();
            }
        }
    }, [playingVideo]);

    return (
        <section className="py-24 bg-white relative overflow-hidden font-[Castledown]">
            {/* Video Modal Overlay */}
            {playingVideo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                    <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
                        <button
                            onClick={closeVideo}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-white/20 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <video
                            src={playingVideo}
                            controls
                            autoPlay
                            className="w-full h-full"
                        />
                    </div>
                    {/* Close on background click */}
                    <div className="absolute inset-0 -z-10" onClick={closeVideo}></div>
                </div>
            )}

            <div className="container mx-auto px-6 lg:px-12">

                {/* Header Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-[2px] w-10 bg-[#F2735B]"></div>
                            <span className="text-sm font-bold uppercase tracking-widest text-[#17312C]/60">Happy Clients Worldwide</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-[#17312C] leading-tight">
                            Business <span className={gradientText}>Success Stories</span>
                        </h2>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 lg:pl-10">
                        <p className="text-gray-500 leading-relaxed max-w-md">
                            From small businesses to large enterprises, our testimonials highlight the transformative experiences and the tangible value we deliver.
                        </p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left: Testimonial Card */}
                    <div className="w-full">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            speed={1900} // Slow and smooth transition matched to Case Studies
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            pagination={{
                                clickable: true,
                                renderBullet: function (index, className) {
                                    return '<span class="' + className + ' !bg-[#F2735B] !w-3 !h-3"></span>';
                                }
                            }}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                            className="pb-12" // Space for pagination dots
                        >
                            {testimonials.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="bg-[#F8FAFC] p-10 lg:p-12 rounded-[30px] border border-gray-100 relative">
                                        {/* Quote Icon */}
                                        <Quote className="absolute top-10 right-10 w-16 h-16 text-[#E2E8F0]/50 rotate-180" fill="currentColor" />

                                        <p className="text-base lg:text-lg text-gray-600 leading-relaxed font-normal mb-8 relative z-10">
                                            "{item.content}"
                                        </p>

                                        <div className="flex items-center gap-4">
                                            <div className={`w-1 h-12 ${gradientBg} rounded-full`}></div>
                                            <div>
                                                <h4 className="text-base font-bold text-[#17312C]">{item.name}</h4>
                                                <p className="text-xs text-gray-500">{item.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Right: Media Display (Dynamic Image/Video) */}
                    <div className="relative h-[250px] sm:h-[300px] lg:h-[350px] w-full rounded-[30px] overflow-hidden shadow-2xl group cursor-pointer">
                        {/* Transition handling would be complex without AnimatePresence, so we just render based on active index for now */}
                        {testimonials.map((item, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                            >
                                <img
                                    src={item.image}
                                    alt="Client Success"
                                    className="w-full h-full object-cover transform transition-transform duration-[10000ms] ease-linear group-hover:scale-110"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>

                                {/* Play Button (Only if video type) */}
                                {item.type === 'video' && item.videoUrl && (
                                    <div
                                        onClick={() => handlePlayClick(item.videoUrl)}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 hover:scale-110 transition-transform duration-300"
                                    >
                                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center">
                                            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center pl-1 shadow-lg">
                                                <Play className="w-6 h-6 text-[#F2735B]" fill="currentColor" />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Badge (Optional) */}
                                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg pointer-events-none">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                        <span className="text-xs font-bold text-gray-800">Verified Client</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};
