import React, { useState } from 'react';
import { Search, FileSpreadsheet, MonitorSmartphone, Code2, ClipboardCheck, Settings } from 'lucide-react';

const processSteps = [
    {
        id: "01",
        title: "Discovery Workshop",
        description: "We dive deep into your vision, understanding your goals and requirements to set a solid foundation for the project.",
        icon: <Search className="w-6 h-6 sm:w-8 sm:h-8" />,
        bg: "from-[#17312C] to-[#56B77E]" // New gradient for active state
    },
    {
        id: "02",
        title: "Predictive Planning",
        description: "Our strategic roadmap anticipates challenges and optimizes resources for a smooth development journey.",
        icon: <FileSpreadsheet className="w-6 h-6 sm:w-8 sm:h-8" />,
        bg: "from-[#17312C] to-[#56B77E]"
    },
    {
        id: "03",
        title: "IA & UX/UI Design",
        description: "Crafting intuitive and visually stunning interfaces that provide an exceptional user experience.",
        icon: <MonitorSmartphone className="w-6 h-6 sm:w-8 sm:h-8" />,
        bg: "from-[#17312C] to-[#56B77E]"
    },
    {
        id: "04",
        title: "Development",
        description: "Solve complex digital challenges with ease using creative yet pragmatic innovations with our enterprise software development team of design architects, developers, engineers, and testers. They relentlessly work to upgrade your software solutions with access to premier technologies.",
        icon: <Code2 className="w-6 h-6 sm:w-8 sm:h-8" />,
        bg: "from-[#17312C] to-[#56B77E]"
    },
    {
        id: "05",
        title: "Testing",
        description: "Rigorous testing ensures your software is bug-free, secure, and ready for a flawless launch.",
        icon: <ClipboardCheck className="w-6 h-6 sm:w-8 sm:h-8" />,
        bg: "from-[#17312C] to-[#56B77E]"
    },
    {
        id: "06",
        title: "Maintenance",
        description: "Continuous support and updates to keep your application running smoothly and adapting to future needs.",
        icon: <Settings className="w-6 h-6 sm:w-8 sm:h-8" />,
        bg: "from-[#17312C] to-[#56B77E]"
    }
];

export const OurProcess = () => {
    const [activeId, setActiveId] = useState(null); // Default all closed

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">

                {/* Header */}
                <div className="mb-12">
                    <h4 className="text-gray-500 font-medium uppercase tracking-widest text-sm mb-2">Our Process</h4>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                        Maximizing software engineering <br />
                        output with our people-focused <br />
                        <span className="text-gradient-effect">
                            Processes.
                        </span>
                    </h2>
                </div>

                {/* Process Cards Container */}
                <div
                    className="flex flex-col lg:flex-row gap-2 lg:gap-0 lg:h-[500px] w-full bg-gray-100/50 rounded-3xl p-2 lg:p-0 overflow-hidden"
                    onMouseLeave={() => setActiveId(null)}
                >
                    {processSteps.map((step) => {
                        const isActive = activeId === step.id;

                        return (
                            <div
                                key={step.id}
                                onMouseEnter={() => setActiveId(step.id)}
                                className={`
                  relative transition-all duration-500 ease-in-out cursor-pointer overflow-hidden
                  ${isActive ? 'lg:flex-[3.5]' : 'lg:flex-[1]'}
                  ${isActive ? 'bg-gradient-to-br ' + step.bg : 'bg-[#EAEFF3] hover:bg-gray-200'}
                  lg:border-r border-gray-300 last:border-r-0
                  rounded-xl lg:rounded-none
                  min-h-[100px] lg:min-h-auto
                  flex flex-col
                `}
                            >
                                {/* Content Container */}
                                <div className={`
                   flex flex-col h-full p-6
                   ${isActive ? 'lg:p-8 justify-between' : 'lg:px-4 lg:py-8 justify-between lg:items-center'}
                `}>

                                    {/* Top: ID & Icon */}
                                    <div className={`flex lg:flex-col lg:gap-4 justify-between lg:justify-start w-full ${!isActive && 'lg:items-center'}`}>
                                        <span className={`text-xl font-bold ${isActive ? 'text-white/80' : 'text-gray-400'}`}>
                                            p{step.id}
                                        </span>
                                        <div className={`${isActive ? 'text-white' : 'text-gray-400'}`}>
                                            {step.icon}
                                        </div>
                                    </div>

                                    {/* Middle/Bottom: Title & Description */}
                                    <div className={`mt-auto transition-opacity duration-300`}>

                                        {/* Title */}
                                        <h3 className={`
                      text-lg sm:text-2xl font-bold mb-4 whitespace-nowrap origin-center
                      ${isActive ? 'text-white' : 'text-gray-700 lg:[writing-mode:vertical-rl] lg:rotate-180 lg:text-xl lg:tracking-wider'}
                    `}>
                                            {step.title}
                                        </h3>

                                        {/* Description - Only visible when active */}
                                        <div className={`
                      overflow-hidden transition-all duration-500
                      ${isActive ? 'opacity-100 max-h-[300px]' : 'opacity-0 max-h-0'}
                    `}>
                                            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>

                                        {/* Plus Icon for Inactive state (Desktop only) */}
                                        {!isActive && (
                                            <div className="hidden lg:block text-gray-400 text-2xl mt-8">
                                                +
                                            </div>
                                        )}
                                    </div>

                                    {/* Mobile expansion indicator (plus) for inactive items if we were doing click-to-expand on mobile, 
                      but here we let them just stack. We can add a plus if needed. */}
                                    {!isActive && (
                                        <div className="lg:hidden absolute bottom-4 right-4 text-gray-400">
                                            +
                                        </div>
                                    )}

                                </div>

                                {/* Background Decor for Active Card (Optional - simulates the fluid art in screenshot) */}
                                {isActive && (
                                    <div className="absolute inset-0 -z-10 mix-blend-overlay opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-cover"></div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
