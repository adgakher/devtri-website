import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { serviceTechData } from '../../data/serviceTechData';

const defaultCategories = [
    {
        id: 'ui-ux',
        label: 'UI/UX',
        gradientFrom: '#17312C',
        gradientTo: '#56B77E',
        description: 'Offering the best in UI/UX designs to ensure high-quality output that enhances your ROI with user-centric interfaces.',
        tools: [
            { name: 'Figma', url: 'https://logo.clearbit.com/figma.com' },
            { name: 'Adobe XD', url: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg' },
            { name: 'Sketch', url: 'https://logo.clearbit.com/sketch.com' },
            { name: 'Photoshop', url: 'https://logo.clearbit.com/adobe.com?size=200&format=png' },
            { name: 'Illustrator', url: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg' },
            { name: 'InVision', url: 'https://logo.clearbit.com/invisionapp.com' },
            { name: 'Zeplin', url: 'https://logo.clearbit.com/zeplin.io' },
            { name: 'Miro', url: 'https://logo.clearbit.com/miro.com' },
        ]
    },
    {
        id: 'web-dev',
        label: 'Website',
        gradientFrom: '#17312C',
        gradientTo: '#56B77E',
        description: 'Building robust, scalable, and high-performance applications using modern web technologies and frameworks.',
        tools: [
            { name: 'React', url: 'https://logo.clearbit.com/reactjs.org' },
            { name: 'Next.js', url: 'https://logo.clearbit.com/nextjs.org' },
            { name: 'Vue.js', url: 'https://logo.clearbit.com/vuejs.org' },
            { name: 'Node.js', url: 'https://logo.clearbit.com/nodejs.org' },
            { name: 'Python', url: 'https://logo.clearbit.com/python.org' },
            { name: 'TypeScript', url: 'https://logo.clearbit.com/typescriptlang.org' },
            { name: 'Tailwind CSS', url: 'https://logo.clearbit.com/tailwindcss.com' },
            { name: 'HTML5', url: 'https://logo.clearbit.com/w3.org' },
        ]
    },
    {
        id: 'app-dev',
        label: 'App',
        gradientFrom: '#17312C',
        gradientTo: '#56B77E',
        description: 'Creating seamless native and cross-platform mobile experiences for iOS and Android devices.',
        tools: [
            { name: 'Flutter', url: 'https://logo.clearbit.com/flutter.dev' },
            { name: 'React Native', url: 'https://logo.clearbit.com/reactnative.dev' },
            { name: 'Swift', url: 'https://logo.clearbit.com/swift.org' },
            { name: 'Kotlin', url: 'https://logo.clearbit.com/kotlinlang.org' },
            { name: 'Android', url: 'https://logo.clearbit.com/android.com' },
            { name: 'iOS', url: 'https://logo.clearbit.com/apple.com' },
            { name: 'Firebase', url: 'https://logo.clearbit.com/firebase.google.com' },
            { name: 'Expo', url: 'https://logo.clearbit.com/expo.dev' },
        ]
    },
    {
        id: 'devops',
        label: 'DevOps',
        gradientFrom: '#17312C',
        gradientTo: '#56B77E',
        description: 'Streamlining deployment and operations with automated pipelines and infrastructure as code.',
        tools: [
            { name: 'Docker', url: 'https://logo.clearbit.com/docker.com' },
            { name: 'Kubernetes', url: 'https://logo.clearbit.com/kubernetes.io' },
            { name: 'Jenkins', url: 'https://logo.clearbit.com/jenkins.io' },
            { name: 'GitLab', url: 'https://logo.clearbit.com/gitlab.com' },
            { name: 'GitHub', url: 'https://logo.clearbit.com/github.com' },
            { name: 'Terraform', url: 'https://logo.clearbit.com/terraform.io' },
            { name: 'Ansible', url: 'https://logo.clearbit.com/ansible.com' },
            { name: 'Prometheus', url: 'https://logo.clearbit.com/prometheus.io' },
        ]
    },
    {
        id: 'cloud',
        label: 'Cloud',
        gradientFrom: '#17312C',
        gradientTo: '#56B77E',
        description: 'Leveraging the power of cloud computing for scalable, secure, and cost-effective infrastructure.',
        tools: [
            { name: 'AWS', url: 'https://logo.clearbit.com/amazon.com' },
            { name: 'Azure', url: 'https://logo.clearbit.com/azure.microsoft.com' },
            { name: 'Google Cloud', url: 'https://logo.clearbit.com/cloud.google.com' },
            { name: 'DigitalOcean', url: 'https://logo.clearbit.com/digitalocean.com' },
            { name: 'Vercel', url: 'https://logo.clearbit.com/vercel.com' },
            { name: 'Heroku', url: 'https://logo.clearbit.com/heroku.com' },
            { name: 'Cloudflare', url: 'https://logo.clearbit.com/cloudflare.com' },
            { name: 'MongoDB Atlas', url: 'https://logo.clearbit.com/mongodb.com' },
        ]
    },
    {
        id: 'ai',
        label: 'AI & ML',
        gradientFrom: '#17312C',
        gradientTo: '#56B77E',
        description: 'Implementing intelligent solutions with cutting-edge Artificial Intelligence and Machine Learning technologies.',
        tools: [
            { name: 'OpenAI', url: 'https://logo.clearbit.com/openai.com' },
            { name: 'TensorFlow', url: 'https://logo.clearbit.com/tensorflow.org' },
            { name: 'PyTorch', url: 'https://logo.clearbit.com/pytorch.org' },
            { name: 'Python', url: 'https://logo.clearbit.com/python.org' },
            { name: 'Hugging Face', url: 'https://logo.clearbit.com/huggingface.co' },
            { name: 'Pandas', url: 'https://logo.clearbit.com/pandas.pydata.org' },
            { name: 'Scikit-learn', url: 'https://logo.clearbit.com/scikit-learn.org' },
            { name: 'Keras', url: 'https://logo.clearbit.com/keras.io' },
        ]
    },
    {
        id: 'cybersecurity',
        label: 'Cybersecurity',
        gradientFrom: '#17312C',
        gradientTo: '#56B77E',
        description: 'Protecting your digital assets with advanced security tools and protocols.',
        tools: [
            { name: 'Splunk', url: 'https://logo.clearbit.com/splunk.com' },
            { name: 'Wireshark', url: 'https://logo.clearbit.com/wireshark.org' },
            { name: 'Kali', url: 'https://logo.clearbit.com/kali.org' },
            { name: 'CrowdStrike', url: 'https://logo.clearbit.com/crowdstrike.com' },
            { name: 'Fortinet', url: 'https://logo.clearbit.com/fortinet.com' },
            { name: 'Okta', url: 'https://logo.clearbit.com/okta.com' },
            { name: 'Auth0', url: 'https://logo.clearbit.com/auth0.com' },
            { name: 'Cloudflare', url: 'https://logo.clearbit.com/cloudflare.com' },
        ]
    }
];

export const TechCapabilities = ({ serviceId }) => {
    // Determine categories based on serviceId
    const categories = (serviceId && serviceTechData[serviceId])
        ? serviceTechData[serviceId].map(cat => ({
            ...cat,
            gradientFrom: cat.gradientFrom || '#17312C',
            gradientTo: cat.gradientTo || '#56B77E'
        }))
        : defaultCategories;

    const [activeCategory, setActiveCategory] = useState(categories[0]);

    // Update active category when categories change (e.g. when navigating between services)
    useEffect(() => {
        setActiveCategory(categories[0]);
    }, [serviceId]);

    return (
        <section className="py-24 bg-[#FBFBFB]">
            <div className="container mx-auto px-6 lg:px-12">

                <div className="mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#17312C] max-w-4xl leading-tight">
                        Driving Digital Transformation through advanced <span className="text-gradient-effect">Technology Capabilities</span>.
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Column: Navigation Tabs (2 Columns Grid) */}
                    <div className="lg:col-span-3">
                        <div className="grid grid-cols-2 gap-4">
                            {categories.map((category, index) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category)}
                                    style={{
                                        '--gradient-from': category.gradientFrom,
                                        '--gradient-to': category.gradientTo
                                    }}
                                    className={`relative px-3 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center justify-center text-center h-full group gradient-border-btn
                                        ${activeCategory.id === category.id
                                            ? 'text-black'
                                            : 'text-gray-500 hover:text-black hover:bg-gray-50'
                                        }
                                    `}
                                >
                                    <div className="flex items-center gap-2 relative z-10">
                                        {activeCategory.id === category.id && (
                                            <span
                                                className="min-w-[8px] w-2 h-2 rounded-full"
                                                style={{ background: `linear-gradient(to right, ${category.gradientFrom}, ${category.gradientTo})` }}
                                            ></span>
                                        )}
                                        <span>{category.label}</span>
                                    </div>
                                </button>))}
                        </div>
                    </div>

                    {/* Divider Line (Vertical) */}
                    {/* Centered vertical line between columns */}
                    <div className="hidden lg:flex justify-center lg:col-span-1 h-full min-h-[400px]">
                        <div className="w-[1px] h-full bg-gray-200"></div>
                    </div>

                    {/* Right Column: Content (No Background) */}
                    <div className="lg:col-span-8 lg:pl-4">
                        <div className="animate-fade-in" key={activeCategory.id}>

                            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl">
                                {activeCategory.description}
                            </p>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                                {activeCategory.tools.map((tool, index) => (
                                    <Link
                                        key={index}
                                        to={`/technologies/${tool.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                                        className="bg-white rounded-xl p-6 border border-gray-100 hover:border-purple-100 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center gap-4 group h-32"
                                    >
                                        <div className="w-12 h-12 relative flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110">
                                            <img
                                                src={tool.url}
                                                alt={tool.name}
                                                className="max-w-full max-h-full object-contain"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.parentElement.innerText = tool.name[0];
                                                    e.target.parentElement.className += " bg-gray-100 text-xl font-bold text-gray-400"
                                                }}
                                            />
                                        </div>
                                        <span className="text-sm font-medium text-gray-500 group-hover:text-black transition-colors">
                                            {tool.name}
                                        </span>
                                    </Link>
                                ))}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
