import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const DigitalChange = () => {
    return (
        <section className="relative py-20 bg-[#0a0a0a] overflow-hidden text-white">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#17312C]/10 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#56B77E]/10 via-transparent to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                    {/* Left Content */}
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 font-[Castledown]">
                            Ready to Embrace<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#17312C] to-[#56B77E]">
                                Digital Change?
                            </span>
                        </h2>
                        <p className="text-lg text-gray-300 mb-8 max-w-md leading-relaxed font-[Castledown]">
                            Let's guide you through a seamless transformation process.
                        </p>

                        <Link to="/contact-us" className="group bg-gradient-to-r from-[#F2735B] to-[#E37439] text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-all duration-300 shadow-[0_10px_15px_-3px_rgba(242,115,91,0.3)] hover:shadow-[0_10px_15px_-3px_rgba(242,115,91,0.3)] font-[Castledown]">
                            Talk To Our Experts
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Right Stats Section */}
                    <div className="lg:w-1/2 w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center p-8 rounded-3xl backdrop-blur-sm font-[Castledown]">
                            <StatItem
                                number="15+"
                                label="Years in Service"
                                ringText="YEARS OF EXPERIENCE • YEARS OF EXPERIENCE •"
                            />
                            <StatItem
                                number="300+"
                                label="Global Clients"
                                ringText="TOTAL NO. OF SATISFIED CUSTOMERS •"
                            />
                            <StatItem
                                number="250+"
                                label="Tech Experts"
                                ringText="DRIVING TECH EXCELLENCE • DRIVING TECH EXCELLENCE •"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const StatItem = ({ number, label, ringText }) => {
    return (
        <div className="flex flex-col items-center justify-center relative py-4 group">
            {/* Rotating Ring */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                <div className="animate-[spin_10s_linear_infinite] group-hover:[animation-play-state:paused] w-[170px] h-[170px]">
                    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                        <defs>
                            <path id="circle" d="M 50, 50 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" />
                        </defs>
                        <text fontSize="10.5" fill="white" fontWeight="bold" letterSpacing="2" style={{ fontFamily: 'Castledown, sans-serif' }}>
                            <textPath href="#circle" startOffset="50%" textAnchor="middle">
                                {ringText}
                            </textPath>
                        </text>
                    </svg>
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10">
                <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#17312C] to-[#56B77E] text-3xl font-extrabold mb-1">{number}</h3>
                <p className="text-sm text-gray-300 font-medium whitespace-nowrap">{label}</p>
            </div>
        </div>
    );
}
