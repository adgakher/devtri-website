import React from 'react';
import { Link } from 'react-router-dom';
import {
    Code,
    Palette,
    Cloud,
    Database,
    Briefcase,
    TrendingUp,
    Globe,
    Layout,
    Smartphone,
    RefreshCw,
    Link as LinkIcon,
    Settings,
    Layers,
    ShoppingCart,
    CheckCircle,
    ArrowUpRight
} from 'lucide-react';

const services = [
    {
        id: "software-engineering",
        title: "Software Engineering",
        icon: <Code className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=800",
        description: "We build robust, scalable, and secure software solutions tailored to your business needs."
    },
    {
        id: "design-digital-experience",
        title: "Design & Digital Experience",
        icon: <Palette className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
        description: "Crafting intuitive and engaging user experiences through human-centered design principles."
    },
    {
        id: "cloud-engineering",
        title: "Cloud Engineering",
        icon: <Cloud className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
        description: "Accelerate your digital transformation with our cloud-native solutions and infrastructure."
    },
    {
        id: "data-analytics",
        title: "Data & Analytics",
        icon: <Database className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        description: "Unlock the power of your data with advanced analytics and business intelligence."
    },
    {
        id: "it-consulting-advisory",
        title: "IT Consulting & Advisory",
        icon: <Briefcase className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
        description: "Strategic guidance to align your technology integration with business goals."
    },
    {
        id: "digital-strategy",
        title: "Digital Strategy",
        icon: <TrendingUp className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
        description: "Comprehensive digital roadmaps to navigate the complex technology landscape."
    },
    {
        id: "website-development",
        title: "Website Development",
        icon: <Globe className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        description: "Creating stunning, high-performance websites that represent your brand."
    },
    {
        id: "web-app-development",
        title: "Web App Development",
        icon: <Layout className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800",
        description: "Building powerful, responsive web applications for seamless user experiences."
    },
    {
        id: "mobile-app-development",
        title: "Mobile App Development",
        icon: <Smartphone className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
        description: "Native and cross-platform mobile apps designed to engage users on the go."
    },
    {
        id: "app-modernization",
        title: "Application Modernization",
        icon: <RefreshCw className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800",
        description: "Revitalize your legacy systems with modern architectures and technologies."
    },
    {
        id: "blockchain-development",
        title: "Blockchain Development",
        icon: <LinkIcon className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1639762681485-3079053d8a9f?auto=format&fit=crop&q=80&w=800",
        description: "Secure and transparent decentralized solutions leveraging blockchain technology."
    },
    {
        id: "custom-software-development",
        title: "Custom Software Development",
        icon: <Settings className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
        description: "Tailor-made software solutions designed to address your unique business challenges."
    },
    {
        id: "saas-development",
        title: "SaaS Development",
        icon: <Layers className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=800",
        description: "Scalable Software-as-a-Service platforms built for multi-tenancy and high availability."
    },
    {
        id: "ecommerce-development",
        title: "E-Commerce Development",
        icon: <ShoppingCart className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800",
        description: "Robust online store solutions with secure payment gateways and intuitive shopping."
    },
    {
        id: "testing-quality-assurance",
        title: "Testing & Quality Assurance",
        icon: <CheckCircle className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1581092921461-eab62e97a782?auto=format&fit=crop&q=80&w=800",
        description: "Comprehensive testing services to ensure your software is bug-free and performant."
    }
];

export const ServiceGrid = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-12">

                {/* Section Header */}
                <div className="mb-12">
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest block mb-2">
                        Custom Software Development Solutions
                    </span>
                    <h2 className="text-4xl font-bold text-black">
                        We Specialize In
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Link
                            key={service.id}
                            to={`/services/${service.id}`}
                            className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 block"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url(${service.image})` }}
                            ></div>

                            {/* Overlay Gradient - Darker at bottom for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                            {/* Content Container */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">

                                {/* Initial View: Icon & Title */}
                                <div className="transform transition-transform duration-300 translate-y-4 group-hover:-translate-y-32 ease-in-out">
                                    <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-4">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white leading-tight">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Hover Detail: Description from bottom */}
                                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out bg-black/40 backdrop-blur-sm border-t border-white/10">
                                    <p className="text-gray-200 text-sm leading-relaxed mb-4">
                                        {service.description}
                                    </p>
                                    <div className="flex items-center text-white font-semibold text-sm">
                                        Learn more <ArrowUpRight className="w-4 h-4 ml-1" />
                                    </div>
                                </div>

                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
};
