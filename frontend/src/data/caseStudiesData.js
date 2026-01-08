export const caseStudiesData = [
    {
        id: '01',
        slug: 'source-ag-mobile-app',
        category: 'Product Design',
        title: 'Empowering Access to Fresh Produce: Building a Mobile App for Source.ag',
        description: 'Source.ag is an Amsterdam-based agtech startup that is revolutionizing access to fresh produce using cutting-edge AI-powered greenhouses. By enabling efficient operations for growers through pioneering technology.',
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop',
        bgColor: 'bg-white',
        textColor: 'text-[#17312C]',
        accentColor: 'text-[#56B77E]',
        btnColor: 'text-[#56B77E]',
        badgeBg: 'bg-[#56B77E]/10',
        badgeText: 'text-[#56B77E]',
        location: 'Amsterdam, Netherlands',
        duration: '9 months',
        teamSize: '15',
        engagementModel: 'Fixed Budget',
        industry: 'AgTech',
        details: {
            aboutClient: "Source.ag is a pioneering AgTech company based in Amsterdam, dedicated to revolutionizing greenhouse farming through artificial intelligence. By leveraging advanced data science and machine learning, they empower growers to optimize their crop yields and resource efficiency, making sustainable farming more accessible and scalable.",
            background: "The agricultural sector is facing unprecedented challenges: a growing global population, climate change, and the need for more efficient resource management. Traditional greenhouse farming, while highly productive, relies heavily on the expertise of individual growers, which can be difficult to scale and sustain in a rapidly changing environment.",
            backgroundObjectives: [
                "Develop AI-driven models to predict crop growth and optimize harvests.",
                "Create a scalable platform that integrates data from various greenhouse sensors.",
                "Provide growers with actionable insights to reduce resource consumption (water, energy, etc.).",
                "Enable remote monitoring and management of multiple greenhouse locations."
            ],
            detailedServices: [
                { title: "AI/ML Product Engineering", desc: "Building sophisticated algorithms to analyze plant behavior and predict environmental impacts." },
                { title: "Data Platform Development", desc: "Creating a robust infrastructure to collect and process millions of data points from sensors." },
                { title: "UX/UI Design for Complex Data", desc: "Designing intuitive interfaces that translate complex AI insights into simple, actionable steps for growers." }
            ],
            detailedChallenges: [
                {
                    id: "01",
                    title: "Data Engineering & Predictive Analytics",
                    points: [
                        "Understanding and developing a custom data model to ensure accurate predictive analytics.",
                        "Cleaning large amounts of data from different sources within the organization.",
                        "Ensuring data privacy and security while extracting valuable insights."
                    ],
                    image: "https://images.unsplash.com/photo-1551288049-bbbda5366991?q=80&w=2070"
                },
                {
                    id: "02",
                    title: "Hardware Integration & Sensor Calibration",
                    points: [
                        "Integrating data from diverse sensor types across multiple greenhouse sites.",
                        "Ensuring consistent calibration and data reliability in varying environmental conditions.",
                        "Managing real-time data ingestion at high scale without latency."
                    ],
                    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070"
                },
                {
                    id: "03",
                    title: "User Adoption & Cognitive Load",
                    points: [
                        "Reducing the complexity of AI outputs for traditional agricultural workers.",
                        "Directly translating data into physical farming actions (irrigation, climate control).",
                        "Building trust in automated recommendations through transparency."
                    ],
                    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070"
                }
            ],
            goals: "The primary goal was to build a comprehensive AI-driven ecosystem that would take the guesswork out of greenhouse farming. The client aimed to transition from reactive farming to proactive, predictive management, ultimately increasing yield by over 15% while reducing resource waste.",
            detailedGoals: [
                "Increase crop yield accuracy to >95% through deep learning models.",
                "Reduce water and energy consumption by 20% across all pilot sites.",
                "Enable 100% remote greenhouse management via a central cloud dashboard.",
                "Support multi-crop and multi-region scaling for global expansion."
            ],
            solutionsProvided: {
                title: "Solutions Provided",
                description: "To address the outlined business objectives, we consulted, designed, and engineered a highly sophisticated and intelligent cloud application that encompassed both the client-facing online portal for performance analytics and future forecasts, as well as an internal tool for management. Here's a high-level breakdown of the application:",
                image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1974",
                items: [
                    { title: "User Authentication, Authorization & Account Management", icon: "UserSquare2", desc: "Implementing secure OIDC-compliant authentication flows with multi-factor support and granular role-based access control (RBAC) to manage grower and admin permissions across the platform." },
                    { title: "Advertisement Performance Analytics", icon: "BarChart3", desc: "Real-time tracking of resource allocation versus crop yield, visualizing complex data through custom interactive dashboards that highlight ROI and operational efficiency." },
                    { title: "Predictive Analysis & Future Forecasting", icon: "TrendingUp", desc: "Proprietary AI models that simulate thousands of growth scenarios based on historical sensor data, weather patterns, and market demands to provide precise harvest forecasts." },
                    { title: "Messaging and Ticket System", icon: "MessageSquare", desc: "Integrated communication hub allowing growers to receive automated alerts from the AI models and manually coordinate with support teams or consultants within the app." },
                    { title: "Data Security and Compliance", icon: "ShieldCheck", desc: "Ensuring all agricultural data is encrypted at rest and in transit, complying with global standards for data sovereignty and intellectual property protection in the AgTech space." },
                    { title: "Internal Advertising Budget and Strategy Management", icon: "PieChart", desc: "Tools for administrative users to manage operational budgets, set strategic growth targets, and monitor the performance of different greenhouse sites against global benchmarks." }
                ]
            },
            techStack: {
                title: "Technology Stack",
                description: "A robust and scalable architecture was essential to handle the high volume of sensor data and complex AI computations. We selected a modern tech stack that prioritized performance, security, and developer productivity.",
                categories: [
                    {
                        name: "Frontend",
                        details: "AngularJS, HTML5, CSS3, TypeScript for static typing",
                        items: [
                            { name: "Angular", icon: "https://cdn.worldvectorlogo.com/logos/angular-icon.svg" },
                            { name: "TypeScript", icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
                            { name: "CSS3", icon: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
                            { name: "JSON", icon: "https://cdn.worldvectorlogo.com/logos/json.svg" }
                        ]
                    },
                    {
                        name: "Backend",
                        details: "Node.js with Express.js for RESTful APIs, Python with Django for complex business logic",
                        items: [
                            { name: "Node.js", icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
                            { name: "Python", icon: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
                            { name: "Django", icon: "https://cdn.worldvectorlogo.com/logos/django.svg" }
                        ]
                    },
                    {
                        name: "Database",
                        details: "MongoDB for flexible document-based storage, PostgreSQL for relational data modeling",
                        items: [
                            { name: "MongoDB", icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
                            { name: "PostgreSQL", icon: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" }
                        ]
                    },
                    {
                        name: "Cloud",
                        details: "AWS for hosting, Docker for containerization, and Terraform for Infrastructure as Code",
                        items: [
                            { name: "AWS", icon: "https://cdn.worldvectorlogo.com/logos/amazon-web-services-2.svg" },
                            { name: "Docker", icon: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
                            { name: "Terraform", icon: "https://cdn.worldvectorlogo.com/logos/terraform-enterprise.svg" }
                        ]
                    }
                ]
            },
            detailedResults: {
                title: "Results",
                description: "The client's adoption of the cloud application improved customer experience and drove significant operational efficiency improvements.",
                bullets: [
                    "The application garnered high praise from our customer's clients, who are among the world's foremost global brands.",
                    "Streamlined the planning process for internal teams, slashing workload by over 35%.",
                    "Noteworthy 5% increase in ROI for customers who adopted engine-recommended plans within just six months."
                ],
                metrics: [
                    { value: "15%", label: "Increase in backoffice operational efficiency", color: "#F2735B" },
                    { value: "60%", label: "Improvement in customer satisfaction survey", color: "#17312C" }
                ],
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026"
            }
        }
    },
    {
        id: '02',
        slug: 'pangea-ai-marketplace',
        category: 'Product Design',
        title: 'Streamline remote hiring with Pangea.ai\'s marketplace',
        description: 'Struggling to find the perfect software development partner? Pangea.ai cuts through the noise. The platform connects businesses with elite development firms, ensuring a perfect match for your project.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
        bgColor: 'bg-[#17312C]',
        textColor: 'text-white',
        accentColor: 'text-[#56B77E]',
        btnColor: 'text-[#56B77E]',
        badgeBg: 'bg-white/10',
        badgeText: 'text-white',
        location: 'Global',
        duration: '12 months',
        teamSize: '20',
        engagementModel: 'Time & Materials',
        industry: 'Media & Entertainment',
        details: {
            aboutClient: 'Pangea.ai is a directory and networking hub for verified software development agencies and tech teams. They help businesses find elite development firms.',
            background: 'Finding reliable tech partners is a major hurdle for startups. Pangea.ai provides a vetted list of partners to simplify this process.',
            backgroundObjectives: [
                'Streamline the remote hiring process for tech projects.',
                'Create a transparent ecosystem for software development outsourcing.',
                'Enhance trust through a rigorous verification system.'
            ],
            services: ['Marketplace Development', 'Platform Architecture', 'Verification System Design'],
            detailedServices: [
                { title: 'Full-Stack Development', desc: 'Building a robust and scalable marketplace platform' },
                { title: 'Information Architecture', desc: 'Structuring discovery for 1000+ development firms' },
                { title: 'UI/UX design', desc: 'Creating a seamless bridge between talent and projects' }
            ],
            challenges: 'Handling large volumes of agency data while maintaining a fast, searchable interface.',
            detailedChallenges: [
                {
                    id: '01', title: 'Search Optimization', points: [
                        'Developing a low-latency search engine for agency discovery.',
                        'Implementing complex filtering based on verified performance metrics.'
                    ], image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?w=400&h=300&fit=crop'
                }
            ],
            goals: 'Our mission was to create an intelligent marketplace that would:',
            detailedGoals: [
                'Automate the matching process between clients and developers',
                'Provide high-level analytics for platform growth',
                'Simplify the invoicing and payment flow for international projects'
            ],
            technology: ['Next.js', 'PostgreSQL', 'Elasticsearch', 'AWS'],
            results: 'Average time-to-hire reduced by 40% for client companies.'
        }
    },
    {
        id: '03',
        slug: 'java-sdk-security-products',
        category: 'Network Architecture',
        title: 'Java SDK for Security-Sensitive Products',
        description: 'The project focused on the development of a specialized and security-sensitive Java Software Development Kit (SDK). The SDK\'s primary purpose was to expose APIs for various functions while maintaining peak security.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
        bgColor: 'bg-[#F2735B]',
        textColor: 'text-white',
        accentColor: 'text-white',
        btnColor: 'text-white',
        badgeBg: 'bg-white/20',
        badgeText: 'text-white',
        location: 'USA',
        duration: '8 months',
        teamSize: '10',
        engagementModel: 'Fixed Price',
        industry: 'Cybersecurity',
        details: {
            aboutClient: 'A global cybersecurity firm providing SDKs for enterprise-level data protection and secure communication.',
            background: 'Modern enterprises require secure ways to integrate encryption and identity services into their custom applications.',
            backgroundObjectives: [
                'Expose secure APIs for complex cryptographic functions.',
                'Ensure zero-knowledge architecture in all data transmissions.',
                'Support legacy systems while enabling modern security protocols.'
            ],
            services: ['SDK Development', 'API Design', 'Security Auditing'],
            detailedServices: [
                { title: 'Security Architecture', desc: 'Designing bulletproof cryptographic SDK layers' },
                { title: 'API Engineering', desc: 'Creating intuitive yet secure developer interfaces' }
            ],
            challenges: 'Ensuring absolute data integrity while keeping the SDK easy for developers to use.',
            detailedChallenges: [
                {
                    id: '01', title: 'Cryptographic Complexity', points: [
                        'Implementing multi-layered encryption without sacrificing performance.',
                        'Managing secure key storage across disparate environments.'
                    ], image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop'
                }
            ],
            goals: 'The goal was to provide a robust toolkit that would:',
            detailedGoals: [
                'Simplify the integration of AES-256 encryption for enterprise clients',
                'Automate identity provider handshakes',
                'Reduce potential for developer error in security implementations'
            ],
            technology: ['Java 17', 'Spring Boot', 'OpenSSL', 'Docker'],
            results: 'Adopted by 50+ enterprise clients within the first 6 months.'
        }
    },
    {
        id: '04',
        slug: 'healthcare-security-systems',
        category: 'Healthcare',
        title: 'The Imperative of Security in Healthcare Systems',
        description: 'Managing patient data requires the highest level of security. We built a HIPAA-compliant infrastructure that ensures data integrity and privacy while maintaining lightning-fast access for providers.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
        bgColor: 'bg-white',
        textColor: 'text-[#17312C]',
        accentColor: 'text-[#56B77E]',
        btnColor: 'text-[#56B77E]',
        badgeBg: 'bg-[#56B77E]/10',
        badgeText: 'text-[#56B77E]',
        location: 'UK',
        duration: '10 months',
        teamSize: '12',
        engagementModel: 'Retainer',
        industry: 'Healthcare',
        details: {
            aboutClient: 'A large regional healthcare provider network managing over 1 million patient records.',
            background: 'Healthcare systems are prime targets for cyberattacks. The client needed a modernized, secure way to share data across clinics.',
            backgroundObjectives: ['Modernize IT infrastructure', 'Enhance data privacy', 'Ensure 100% HIPAA compliance'],
            services: ['HIPAA Consulting', 'Cloud Security'],
            detailedServices: [
                { title: 'Security Compliance', desc: 'Implementing HIPAA-grade data protection' },
                { title: 'Infrastructure', desc: 'Building resilient healthcare cloud systems' }
            ],
            challenges: 'Migrating legacy on-premise data to the cloud without any downtime.',
            detailedChallenges: [
                { id: '01', title: 'Zero-Downtime Migration', points: ['Ensuring continuous access to patient records.', 'Implementing real-time data syncing during migration.'], image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop' }
            ],
            goals: 'Our goal was to architect a system that would:',
            detailedGoals: ['Protect patient sensitivity', 'Enable provider collaboration', 'Scale with facility growth'],
            technology: ['Azure Health Data Services', 'Kubernetes', 'Bicep', 'Sentinel'],
            results: 'Achieved 100% compliance score in external audits.'
        }
    },
    {
        id: '05',
        slug: 'real-estate-loan-portal',
        category: 'FinTech',
        title: 'Real Estate Loan Application Portal',
        description: 'An experienced commercial real estate finance company with the secure upload of many financial documents from end users. Integration with SBA APIs and automated verification workflows.',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
        bgColor: 'bg-[#17312C]',
        textColor: 'text-white',
        accentColor: 'text-[#56B77E]',
        btnColor: 'text-[#56B77E]',
        badgeBg: 'bg-[#56B77E]/20',
        badgeText: 'text-[#56B77E]',
        location: 'Chicago, USA',
        duration: '7 months',
        teamSize: '8',
        engagementModel: 'Fixed Price',
        industry: 'FinTech',
        details: {
            aboutClient: 'A boutique commercial lending firm specializing in SBA (Small Business Administration) loans.',
            background: 'Loan application processes are traditionally slow and paper-heavy.',
            backgroundObjectives: ['Digitize paper-heavy workflows', 'Reduce application churn', 'Integrate with SBA legacy APIs'],
            services: ['Portal Development', 'API Integration'],
            detailedServices: [
                { title: 'FinTech Development', desc: 'Building secure loan application rails' },
                { title: 'Process Automation', desc: 'Digitizing document verification' }
            ],
            challenges: 'Integrating with outdated government APIs.',
            detailedChallenges: [
                { id: '01', title: 'Legacy Interop', points: ['Bridging modern web apps with COBOL-based government APIs.', 'Handling brittle API responses gracefully.'], image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop' }
            ],
            goals: 'The objective was to build a portal that would:',
            detailedGoals: ['Cut approval times by 50%', 'Improve document accuracy', 'Allow borrowers to track status live'],
            technology: ['React.js', 'Python/Django', 'AWS Textract', 'S3'],
            results: 'Loan processing time reduced by 65%.'
        }
    },
    {
        id: '06',
        slug: 'ecommerce-next-gen-experience',
        category: 'UI/UX Design',
        title: 'Next-Gen E-Commerce Experience',
        description: 'Revolutionizing how users interact with online retail. We focused on micro-interactions, lightning-fast search, and a checkout process that converts at 2x the industry average.',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop',
        bgColor: 'bg-[#F2735B]',
        textColor: 'text-white',
        accentColor: 'text-white',
        btnColor: 'text-white',
        badgeBg: 'bg-white/20',
        badgeText: 'text-white',
        location: 'Paris, France',
        duration: '6 months',
        teamSize: '14',
        engagementModel: 'Product Growth',
        industry: 'Lifestyle',
        details: {
            aboutClient: 'A high-growth luxury lifestyle brand expanding into global markets.',
            background: 'The brand\'s existing e-commerce site was cluttered and had high bounce rates.',
            backgroundObjectives: ['Improve mobile engagement', 'Streamline the luxury checkout', 'Build a global design system'],
            services: ['UX Audit', 'Conversion Optimization'],
            detailedServices: [
                { title: 'High-Conversion UI', desc: 'Designing for the luxury buyer experience' },
                { title: 'Frontend Speed', desc: 'Optimizing for sub-second page loads' }
            ],
            challenges: 'Balancing high-resolution imagery with fast page load speeds.',
            detailedChallenges: [
                { id: '01', title: 'Asset Optimization', points: ['Delivering 4K imagery without lag.', 'Implementing dynamic image decoding.'], image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop' }
            ],
            goals: 'We aimed to deliver a storefront that would:',
            detailedGoals: ['Boost mobile conversion', 'Elevate brand perception', 'Simplify international multi-currency checkout'],
            technology: ['Shopify Plus', 'Hydrogen', 'Sanity.io', 'Cloudflare'],
            results: 'Mobile conversion rate increased by 85%.'
        }
    },
    {
        id: '07',
        slug: 'modern-interactive-learning',
        category: 'Education',
        title: 'Interactive Learning for the Modern Age',
        description: 'A platform designed to keep students engaged through gamification and real-time collaboration. Educators can track progress with proprietary analytics tools developed specifically for educators.',
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop',
        bgColor: 'bg-white',
        textColor: 'text-[#17312C]',
        accentColor: 'text-[#F2735B]',
        btnColor: 'text-[#F2735B]',
        badgeBg: 'bg-[#F2735B]/10',
        badgeText: 'text-[#F2735B]',
        location: 'Remote',
        duration: '11 months',
        teamSize: '18',
        engagementModel: 'Staff Augmentation',
        industry: 'EdTech',
        details: {
            aboutClient: 'An ed-tech non-profit providing STEM education to underprivileged school districts.',
            background: 'Traditional remote learning tools often fail to maintain student engagement.',
            backgroundObjectives: ['Engage young learners in STEM', 'Work in low-bandwidth areas', 'Provide educator-specific analytics'],
            services: ['LMS Development', 'Content Strategy'],
            detailedServices: [
                { title: 'Interactive LMS', desc: 'Building a gamified learning core' },
                { title: 'Data Viz', desc: 'Educator dashboards for tracking progress' }
            ],
            challenges: 'Designing for low-bandwidth environments.',
            detailedChallenges: [
                { id: '01', title: 'Connectivity Resilience', points: ['Optimizing for 3G networks in rural areas.', 'Offline-first data syncing models.'], image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop' }
            ],
            goals: 'Our mission was to build an LMS that would:',
            detailedGoals: ['Increase course completion by 50%', 'Empower teachers with insights', 'Scale to 1 million students'],
            technology: ['Vue.js', 'Go', 'Redis', 'Three.js'],
            results: 'Course completion rates increased by 60%.'
        }
    },
    {
        id: '08',
        slug: 'mobile-banking-redefined',
        category: 'Mobile App',
        title: 'Mobile Banking: Redefined',
        description: 'Security meets simplicity. We completely redesigned the mobile banking experience for a leading European bank, prioritizing accessibility and intuitive navigation for all age groups.',
        image: 'https://images.unsplash.com/photo-1563986768494-1dee277c0fe1?w=800&h=600&fit=crop',
        bgColor: 'bg-[#17312C]',
        textColor: 'text-white',
        accentColor: 'text-white',
        btnColor: 'text-[#56B77E]',
        badgeBg: 'bg-white/10',
        badgeText: 'text-white',
        location: 'Berlin, Germany',
        duration: '14 months',
        teamSize: '25',
        engagementModel: 'Partnered Innovation',
        industry: 'Banking',
        details: {
            aboutClient: 'A mid-sized European retail bank with 2 million active mobile users.',
            background: 'The existing app was perceived as "stodgy" and difficult to navigate.',
            backgroundObjectives: ['Attract the Gen Z demographic', 'Modernize the core banking UX', 'Enhance security features'],
            services: ['Mobile Redesign', 'Identity Management'],
            detailedServices: [
                { title: 'Modern FinTech UX', desc: 'Reimagining banking for the digital native' },
                { title: 'Cyber Resilience', desc: 'Implementing bank-grade biometric layers' }
            ],
            challenges: 'Redesigning core banking workflows without confusing long-time users.',
            detailedChallenges: [
                { id: '01', title: 'Generational UX', points: ['Balancing simplicity for youth and familiarity for seniors.', 'Mapping thousands of legacy banking features.'], image: 'https://images.unsplash.com/photo-1563013544-824ae1df9069?w=400&h=300&fit=crop' }
            ],
            goals: 'The bank wanted a mobile platform that would:',
            detailedGoals: ['Improve app ratings to 4.5+', 'Increase digital account openings', 'Lower branch visit dependency'],
            technology: ['Flutter', 'Node.js', 'Firebase', 'AWS Lambda'],
            results: 'App store rating jumped from 3.2 to 4.8 stars.'
        }
    },
    {
        id: '09',
        slug: 'supply-chain-ai-optimization',
        category: 'Logistics',
        title: 'Supply Chain AI Optimization',
        description: 'Predicting delays before they happen. Our AI models analyzed millions of data points to optimize trans-Atlantic shipping routes, saving our client millions in overhead costs.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
        bgColor: 'bg-white',
        textColor: 'text-[#17312C]',
        accentColor: 'text-[#56B77E]',
        btnColor: 'text-[#56B77E]',
        badgeBg: 'bg-[#56B77E]/10',
        badgeText: 'text-[#56B77E]',
        location: 'Singapore',
        duration: '9 months',
        teamSize: '15',
        engagementModel: 'Fixed Price',
        industry: 'Logistics',
        details: {
            aboutClient: 'A global logistics and freight forwarding company operating in 40+ countries.',
            background: 'Global logistics faces unpredictability due to weather and port congestion.',
            backgroundObjectives: ['Predict shipping delays', 'Optimize route efficiency', 'Reduce fuel consumption'],
            services: ['Data Engineering', 'Predictive AI'],
            detailedServices: [
                { title: 'AI Infrastructure', desc: 'Building high-performance predictive engines' },
                { title: 'Logistics Dashboard', desc: 'Real-time visibility into thousands of containers' }
            ],
            challenges: 'Cleaning and normalizing data from hundreds of different sources.',
            detailedChallenges: [
                { id: '01', title: 'Data Fragmentation', points: ['Normalizing data from 500+ different carriers.', 'Handling missing or corrupt IoT data from containers.'], image: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=400&h=300&fit=crop' }
            ],
            goals: 'The system was designed to:',
            detailedGoals: ['Lower ETA variance by 30%', 'Reduce overhead by $5M', 'Improve customer satisfaction via live tracking'],
            technology: ['Python', 'Snowflake', 'Dask', 'Grafana'],
            results: 'Saved $12M annually in operational overhead.'
        }
    },
    {
        id: '10',
        slug: 'smart-city-iot-infrastructure',
        category: 'IoT',
        title: 'Smart City Infrastructure Management',
        description: 'A dashboard for urban planners to monitor energy usage, traffic flow, and emergency services in real-time. Built on a scalable cloud architecture that handles billions of events.',
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop',
        bgColor: 'bg-[#F2735B]',
        textColor: 'text-white',
        accentColor: 'text-white',
        btnColor: 'text-white',
        badgeBg: 'bg-white/20',
        badgeText: 'text-white',
        location: 'Barcelona, Spain',
        duration: '18 months',
        teamSize: '30',
        engagementModel: 'Government Partnership',
        industry: 'Metropolitan',
        details: {
            aboutClient: 'A metropolitan government authority overseeing a city of 5 million residents.',
            background: 'The city struggled with disparate data silos for traffic, energy, and emergency services.',
            backgroundObjectives: ['Create a unified data hub', 'Improve emergency response times', 'Track energy and water consumption live'],
            services: ['IoT Platform', 'Geospatial viz'],
            detailedServices: [
                { title: 'Real-time Arch', desc: 'Handling billions of Kafka events daily' },
                { title: 'GIS Integration', desc: 'Visualizing urban flow on-the-fly' }
            ],
            challenges: 'Scaling the system to handle 100,000+ IoT sensor devices.',
            detailedChallenges: [
                { id: '01', title: 'Massive Scalability', points: ['Maintaining 99.99% uptime for life-critical emergency data.', 'Handling peak data surges during urban events.'], image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop' }
            ],
            goals: 'The city aimed for a platform that would:',
            detailedGoals: ['Lower response times by 10%', 'Reduce urban energy waste', 'Provide public safety alerts in seconds'],
            technology: ['Java/Spring', 'Apache Kafka', 'Mapbox', 'Kubernetes'],
            results: 'Emergency response times reduced by 14%.'
        }
    }
];
