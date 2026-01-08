import servicesimg from "../assets/Images/servicesimg.png";
import { GraduationCap, Building2, Users, Tent } from "lucide-react";

export const industryData = {
    "healthcare": {
        title: "Healthcare Solutions",
        description: "Transforming patient care through innovative digital solutions. We help healthcare providers, payers, and life sciences companies improve outcomes, reduce costs, and enhance the patient experience.",
        image: servicesimg,
        image2: servicesimg,
        points: [
            { label: "Telemedicine", text: "Secure, real-time virtual consultation platforms." },
            { label: "EHR Integration", text: "Seamless integration with Electronic Health Records." },
            { label: "Healthcare Analytics", text: "Data-driven insights for better clinical decisions." },
            { label: "Patient Engagement", text: "Mobile apps and portals to keep patients connected." }
        ],
        challengesSection: {
            tagline: "Healthcare Software Development Company",
            headingHtml: "Tailored <span class='text-gradient-effect'>Healthcare Solutions</span> to fit your precise requirements",
            subheading: "Are you facing any of these challenges?",
            challenges: [
                "Interoperability issues between systems",
                "Data privacy and HIPAA compliance",
                "Patient engagement and retention",
                "Legacy system modernization"
            ],
            description: [
                "It’s time to upgrade your Healthcare solution with advanced tools.",
                "We come with extensive experience and expertise. Leverage them to overcome these challenges. Our bespoke healthcare solutions improve patient outcomes by transforming digital care delivery.",
                "Whether you seek to empower your providers with data-driven insights or drive operational efficiency, our custom healthcare development services will help them reach their true potential.",
                "We don't just build—we inspire trust!"
            ]
        },
        whoWeHelpSection: {
            title: "Who can we <span class='text-gradient-effect'>help?</span>",
            targetAudience: [
                {
                    id: "providers",
                    label: "Healthcare Providers",
                    image: servicesimg,
                    title: "Hospitals & Clinics",
                    description: [
                        "Boost your operational efficiency with our custom healthcare management systems.",
                        "Track patient history, manage appointments, and streamline billing with ease."
                    ],
                    icon: Building2
                },
                {
                    id: "payers",
                    label: "Payers & Insurers",
                    image: servicesimg,
                    title: "Insurance Companies",
                    description: [
                        "Automate claims processing and improve risk assessment with AI-driven tools.",
                        "Enhance member engagement through personalized portals."
                    ],
                    icon: Users
                }
            ]
        }
    },
    "finance": {
        title: "Finance & Banking",
        description: "Modernizing financial services with secure and scalable technology. We assist banks, fintechs, and insurance companies in navigating the digital landscape.",
        image: servicesimg,
        image2: servicesimg,
        points: [
            { label: "Digital Banking", text: "Next-gen mobile and web banking experiences." },
            { label: "Fraud Detection", text: "AI-powered systems to detect and prevent fraud." },
            { label: "Blockchain Solutions", text: "Secure and transparent transaction ledgers." },
            { label: "Wealth Management", text: "Digital tools for portfolio management and advice." }
        ],
        challengesSection: {
            tagline: "Fintech Software Development Company",
            headingHtml: "Tailored <span class='text-gradient-effect'>Fintech Solutions</span> to fit your precise requirements",
            subheading: "Are you facing any of these challenges?",
            challenges: [
                "Cybersecurity threats and fraud",
                "Regulatory compliance (GDPR, PCI-DSS)",
                "Legacy infrastructure limitations",
                "Seamless customer onboarding"
            ],
            description: [
                "It’s time to upgrade your Financial solution with secure tools.",
                "We come with extensive experience and expertise. Leverage them to overcome these challenges. Our bespoke fintech solutions improve security and user trust by transforming digital banking.",
                "Whether you seek to empower your customers with seamless transactions or drive operational efficiency, our custom financial software development services will help them reach their true potential.",
                "We don't just build—we inspire trust!"
            ]
        },
        whoWeHelpSection: {
            title: "Who can we <span class='text-gradient-effect'>help?</span>",
            targetAudience: [
                {
                    id: "banks",
                    label: "Banks",
                    image: servicesimg,
                    title: "Retail & Commercial Banks",
                    description: ["Modernize core banking systems."],
                    icon: Building2
                }
            ]
        }
    },
    "education": {
        title: "Education & eLearning",
        description: "Revolutionizing learning with interactive edtech platforms. We build solutions for schools, universities, and corporate training programs.",
        image: servicesimg,
        image2: servicesimg,
        points: [
            { label: "LMS Development", text: "Custom Learning Management Systems." },
            { label: "Virtual Classrooms", text: "Interactive video conferencing and collaboration tools." },
            { label: "Gamification", text: "Engaging learning experiences through game mechanics." },
            { label: "Student Analytics", text: "Tracking progress and performance insights." }
        ],
        challengesSection: {
            tagline: "EdTech Software Development Company",
            headingHtml: "Tailored <span class='text-gradient-effect'>eLearning Solutions</span> to fit your precise requirements",
            subheading: "Are you facing any of these challenges?",
            challenges: [
                "Accessibility and inclusivity barriers",
                "Data security and privacy concerns",
                "Digital fatigue and content overload",
                "Learner engagement and retention issues"
            ],
            description: [
                "It’s time to upgrade your EdTech solution with AI tools.",
                "We come with extensive experience and expertise. Leverage them to overcome these challenges. Our bespoke AI-powered eLearning solutions improve student engagement and retention by transforming digital teaching and learning.",
                "Whether you seek to empower your students with personalized solutions or drive human productivity through corporate training, our custom eLearning development services will help them reach their true potential.",
                "We don't just build—we inspire trust!"
            ]
        },
        whoWeHelpSection: {
            title: "Who can we <span class='text-gradient-effect'>help?</span>",
            targetAudience: [
                {
                    id: "edtech",
                    label: "EdTech Companies",
                    image: servicesimg,
                    title: "EdTech Companies",
                    description: [
                        "Boost your EdTech venture's returns with our elite eLearning development team, drawn from the top tier of global IT experts.",
                        "Tap into our deep knowledge of innovative tech to build comprehensive eLearning solutions, including modern upskilling platforms, student-focused educational apps, and interactive training systems."
                    ],
                    icon: GraduationCap
                },
                {
                    id: "institutions",
                    label: "Academic Institutions",
                    image: servicesimg,
                    title: "Schools & Universities",
                    description: [
                        "Digitalize your campus with integrated management systems.",
                        "Provide students with seamless access to resources and virtual classrooms."
                    ],
                    icon: Building2
                },
                {
                    id: "corporate",
                    label: "Corporate Firms",
                    image: servicesimg,
                    title: "Corporate Training",
                    description: [
                        "Upskill your workforce with custom LMS and training portals.",
                        "Track employee progress and certification compliance."
                    ],
                    icon: Users
                },
                {
                    id: "nonprofits",
                    label: "Non-Profits",
                    image: servicesimg,
                    title: "Non-Profit Organizations",
                    description: [
                        "Reach more beneficiaries with accessible educational tools.",
                        "Maximize impact with cost-effective digital learning solutions."
                    ],
                    icon: Tent
                },
                {
                    id: "massmarket",
                    label: "Mass Market",
                    image: servicesimg,
                    title: "Mass Market",
                    description: [
                        "Democratize education with accessible mobile learning apps.",
                        "Reach global audiences with scalable B2C platforms."
                    ],
                    icon: Users
                }
            ]
        }
    },
    "ecommerce": {
        title: "E-Commerce & Retail",
        description: "Empowering retailers to deliver omnichannel shopping experiences. From storefront to supply chain, we provide end-to-end commerce solutions.",
        image: servicesimg,
        image2: servicesimg,
        points: [
            { label: "Custom Marketplaces", text: "Scalable multi-vendor e-commerce platforms." },
            { label: "Personalization", text: "AI-driven product recommendations and content." },
            { label: "Inventory Management", text: "Real-time stock tracking and optimization." },
            { label: "Headless Commerce", text: "Flexible frontend architectures for seamless UX." }
        ],
        challengesSection: {
            tagline: "Retail Software Development Company",
            headingHtml: "Tailored <span class='text-gradient-effect'>Retail Solutions</span> to fit your precise requirements",
            subheading: "Are you facing any of these challenges?",
            challenges: [
                "Cart abandonment and conversion rates",
                "Inventory synchronization issues",
                "Omnichannel customer experience",
                "Scalability during peak traffic"
            ],
            description: [
                "It’s time to upgrade your Retail solution with modern tools.",
                "We come with extensive experience and expertise. Leverage them to overcome these challenges. Our bespoke e-commerce solutions improve sales and retention by transforming digital shopping.",
                "Whether you seek to empower your customers with personalized experiences or drive supply chain efficiency, our custom retail development services will help them reach their true potential.",
                "We don't just build—we inspire trust!"
            ]
        },
        whoWeHelpSection: {
            title: "Who can we <span class='text-gradient-effect'>help?</span>",
            targetAudience: [{ id: "retailers", label: "Retailers", image: servicesimg, title: "Retailers", description: ["Scale your online store."], icon: Building2 }]
        }
    },
    "manufacturing": {
        title: "Manufacturing",
        description: "Driving Industry 4.0 with smart manufacturing solutions. We help manufacturers optimize operations, reduce downtime, and improve quality.",
        image: servicesimg,
        image2: servicesimg,
        points: [
            { label: "IoT Integration", text: "Connecting machines for real-time monitoring." },
            { label: "Supply Chain", text: "End-to-end visibility and logistics management." },
            { label: "Predictive Maintenance", text: "AI models to anticipate equipment failures." },
            { label: "Digital Twins", text: "Virtual replicas for simulation and optimization." }
        ],
        challengesSection: {
            tagline: "Manufacturing Software Development Company",
            headingHtml: "Tailored <span class='text-gradient-effect'>Manufacturing Solutions</span> to fit your precise requirements",
            subheading: "Are you facing any of these challenges?",
            challenges: [
                "Supply chain visibility gaps",
                "Equipment downtime and maintenance",
                "Production quality control",
                "Workflow limitations"
            ],
            description: [
                "It’s time to upgrade your Manufacturing solution with smart tools.",
                "We come with extensive experience and expertise. Leverage them to overcome these challenges. Our bespoke manufacturing solutions improve efficiency and reduce costs by transforming digital operations.",
                "Whether you seek to empower your workforce with real-time data or drive automation, our custom manufacturing development services will help them reach their true potential.",
                "We don't just build—we inspire trust!"
            ]
        },
        whoWeHelpSection: {
            title: "Who can we <span class='text-gradient-effect'>help?</span>",
            targetAudience: [{ id: "factories", label: "Factories", image: servicesimg, title: "Factories", description: ["Optimize production."], icon: Building2 }]
        }
    },
    "technology": {
        title: "Technology",
        description: "Accelerating innovation for software and high-tech companies. We provide product engineering, cloud migration, and QA services.",
        image: servicesimg,
        image2: servicesimg,
        points: [
            { label: "SaaS Development", text: "Building cloud-native software products." },
            { label: "Cloud Migration", text: "Seamless transition to AWS, Azure, or GCP." },
            { label: "DevOps", text: "Automating CI/CD pipelines for faster delivery." },
            { label: "QA Automation", text: "Ensuring software quality and reliability." }
        ],
        challengesSection: {
            tagline: "Tech Software Development Company",
            headingHtml: "Tailored <span class='text-gradient-effect'>Tech Solutions</span> to fit your precise requirements",
            subheading: "Are you facing any of these challenges?",
            challenges: [
                "Speed to market pressure",
                "Scalability and performance bottlenecks",
                "Talent shortage and retention",
                "Technical debt accumulation"
            ],
            description: [
                "It’s time to upgrade your technology stack with modern tools.",
                "We come with extensive experience and expertise. Leverage them to overcome these challenges. Our bespoke tech solutions improve agility and innovation by transforming digital product development.",
                "Whether you seek to empower your teams with automated workflows or drive cloud adoption, our custom software development services will help them reach their true potential.",
                "We don't just build—we inspire trust!"
            ]
        },
        whoWeHelpSection: {
            title: "Who can we <span class='text-gradient-effect'>help?</span>",
            targetAudience: [{ id: "startups", label: "Startups", image: servicesimg, title: "Startups", description: ["Build your MVP."], icon: Building2 }]
        }
    },
    "real-estate": {
        title: "Real Estate",
        description: "Digitizing the property market with proptech solutions. We build platforms for buying, selling, leasing, and managing real estate.",
        image: servicesimg,
        image2: servicesimg,
        points: [
            { label: "Property Listings", text: "Advanced search and filtering for properties." },
            { label: "Virtual Tours", text: "Immersive 3D viewing experiences." },
            { label: "CRM Integration", text: "Managing client relationships and leads." },
            { label: "Property Management", text: "Tools for landlords and tenants." }
        ],
        challengesSection: {
            tagline: "PropTech Software Development Company",
            headingHtml: "Tailored <span class='text-gradient-effect'>Real Estate Solutions</span> to fit your precise requirements",
            subheading: "Are you facing any of these challenges?",
            challenges: [
                "Fragmented property data",
                "Inefficient leasing processes",
                "Customer communication delays",
                "Virtual viewing limitations"
            ],
            description: [
                "It’s time to upgrade your Real Estate solution with digital tools.",
                "We come with extensive experience and expertise. Leverage them to overcome these challenges. Our bespoke proptech solutions improve sales and tenant satisfaction by transforming property management.",
                "Whether you seek to empower your agents with mobile tools or drive portfolio growth, our custom real estate development services will help them reach their true potential.",
                "We don't just build—we inspire trust!"
            ]
        },
        whoWeHelpSection: {
            title: "Who can we <span class='text-gradient-effect'>help?</span>",
            targetAudience: [{ id: "agencies", label: "Agencies", image: servicesimg, title: "Agencies", description: ["Manage listings."], icon: Building2 }]
        }
    },
    "transportation": {
        title: "Transportation",
        description: "Optimizing logistics and mobility with smart transportation systems. We serve carriers, logistics providers, and travel companies.",
        image: servicesimg,
        image2: servicesimg,
        points: [
            { label: "Fleet Management", text: "Real-time tracking and dispatching." },
            { label: "Route Optimization", text: "Algorithms to reduce fuel and delivery time." },
            { label: "Booking Systems", text: "Seamless ticketing and reservation platforms." },
            { label: "Last-Mile Delivery", text: "Solutions for efficient final delivery steps." }
        ],
        challengesSection: {
            tagline: "Logistics Software Development Company",
            headingHtml: "Tailored <span class='text-gradient-effect'>Transportation Solutions</span> to fit your precise requirements",
            subheading: "Are you facing any of these challenges?",
            challenges: [
                "Real-time visibility gaps",
                "Fuel cost volatility",
                "Driver shortage and safety",
                "Last-mile delivery inefficiencies"
            ],
            description: [
                "It’s time to upgrade your Transportation solution with smart tools.",
                "We come with extensive experience and expertise. Leverage them to overcome these challenges. Our bespoke logistics solutions improve efficiency and customer experience by transforming digital supply chains.",
                "Whether you seek to empower your fleet with telematics or drive route optimization, our custom transportation development services will help them reach their true potential.",
                "We don't just build—we inspire trust!"
            ]
        },
        whoWeHelpSection: {
            title: "Who can we <span class='text-gradient-effect'>help?</span>",
            targetAudience: [{ id: "logistics", label: "Logistics", image: servicesimg, title: "Logistics", description: ["Track fleets."], icon: Building2 }]
        }
    }
};
