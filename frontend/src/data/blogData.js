export const blogData = [
    {
        id: 1,
        slug: "unlock-the-power-of-google-consent-mode",
        title: "Unlock the Power of Google Consent Mode with Basic vs Advanced for digital marketers in 2025",
        category: "Blogs",
        author: "Gaurab Soni",
        date: "Jan 5, 2025",
        readTime: "8 minutes read",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        link: "#",
        isFeatured: true,
        content: `
            <div class="blog-intro mb-12">
                <p class="text-xl font-bold leading-relaxed text-[#17312C]">In the rapidly evolving landscape of digital marketing, staying ahead of privacy regulations while maintaining data-driven insights is crucial. Google Consent Mode has emerged as a pivotal tool for marketers in 2025, offering a way to balance user privacy with the need for accurate measurement.</p>
            </div>

            <div class="key-takeaways bg-[#E5F3F1] rounded-[2rem] p-8 mb-12">
                <h3 class="text-2xl font-extrabold text-[#17312C] mb-4">Key Takeaways</h3>
                <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li class="flex items-center gap-3">
                        <div class="w-2 h-2 bg-[#F2735B] rounded-full"></div>
                        <span class="font-bold">Privacy-first measurement</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <div class="w-2 h-2 bg-[#F2735B] rounded-full"></div>
                        <span class="font-bold">Basic vs Advanced modes</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <div class="w-2 h-2 bg-[#F2735B] rounded-full"></div>
                        <span class="font-bold">Conversion modeling</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <div class="w-2 h-2 bg-[#F2735B] rounded-full"></div>
                        <span class="font-bold">Regulatory compliance</span>
                    </li>
                </ul>
            </div>

            <h2 class="text-3xl font-extrabold text-[#17312C] mb-6">What is Google Consent Mode?</h2>
            <p>Google Consent Mode allows you to adjust how your Google tags behave based on the consent status of your users. You can indicate whether consent has been granted for analytics and advertising cookies. Google's tags will then dynamically adapt, only using cookies for the specified purposes when consent has been given.</p>
            
            <div class="my-12">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Data Analytics" class="rounded-[2.5rem] shadow-lg w-full h-96 object-cover" />
                <p class="text-center text-sm text-black/40 mt-4 italic">Visualizing data flow in 2025</p>
            </div>

            <h2 class="text-3xl font-extrabold text-[#17312C] mb-6">Basic vs. Advanced Consent Mode</h2>
            <p>There are two primary ways to implement Consent Mode: Basic and Advanced. Understanding the difference is critical for your data strategy.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                <div class="p-8 bg-white rounded-[2rem] border border-black/5 shadow-sm">
                    <h4 class="text-xl font-extrabold text-[#17312C] mb-4">Basic Mode</h4>
                    <p class="text-sm">In this setup, Google tags are prevented from loading until the user interacts with a consent banner. If the user grants consent, the tags load and function normally. If they decline, no data is collected.</p>
                </div>
                <div class="p-8 bg-[#17312C] text-white rounded-[2rem] shadow-md">
                    <h4 class="text-xl font-extrabold mb-4">Advanced Mode</h4>
                    <p class="text-sm">Google tags load before the user interacts with the consent banner. If consent is denied, the tags send "pings" to Google, which provide anonymous information. Google then uses modeling to fill in the gaps.</p>
                </div>
            </div>

            <h2 class="text-3xl font-extrabold text-[#17312C] mb-6">Why It Matters for 2025</h2>
            <p>For digital marketers in 2025, the choice between Basic and Advanced depends on your risk tolerance and your need for data accuracy. While Advanced Consent Mode provides more comprehensive data through modeling, Basic Consent Mode offers a more conservative approach to privacy.</p>
            
            <blockquote class="border-l-4 border-[#F2735B] pl-8 my-12 italic text-2xl font-medium text-[#17312C]/60">
                "The future of marketing is not just about collecting data, but about respecting the user's journey while still gaining actionable insights."
            </blockquote>

            <h2 class="text-3xl font-extrabold text-[#17312C] mb-6">Implementation Steps</h2>
            <ol class="space-y-4 mb-12">
                <li class="flex gap-4">
                    <span class="flex-shrink-0 w-8 h-8 rounded-full bg-[#17312C] text-white flex items-center justify-center font-bold">1</span>
                    <p>Audit your current tag management setup and consent banner provider.</p>
                </li>
                <li class="flex gap-4">
                    <span class="flex-shrink-0 w-8 h-8 rounded-full bg-[#17312C] text-white flex items-center justify-center font-bold">2</span>
                    <p>Decide between Basic and Advanced implementation based on legal advice.</p>
                </li>
                <li class="flex gap-4">
                    <span class="flex-shrink-0 w-8 h-8 rounded-full bg-[#17312C] text-white flex items-center justify-center font-bold">3</span>
                    <p>Update your GTM containers to include the Consent Mode default settings.</p>
                </li>
            </ol>
        `
    },
    {
        id: 2,
        slug: "how-to-build-an-accountable-software-development-team",
        title: "How To Build an Accountable Software Development Team for high-growth startups",
        category: "Blogs",
        author: "Gaurab Soni",
        date: "Dec 20, 2024",
        readTime: "12 minutes read",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
        link: "#",
        isFeatured: false,
        content: "<p>Building a high-performing software development team is more than just hiring talented engineers. It's about creating a culture of accountability, where every member takes ownership of their work and is committed to the team's success.</p>"
    },
    {
        id: 3,
        slug: "whats-next-for-digital-experience-in-2025",
        title: "Design? What’s Next for Digital Experience in 2025: From AI to immersive UX",
        category: "Blogs",
        author: "Gaurab Soni",
        date: "Jan 2, 2025",
        readTime: "6 minutes read",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
        link: "#",
        isFeatured: false,
        content: "<p>The digital experience landscape is undergoing a profound transformation. As we look towards 2025, the integration of AI into every facet of UX design is set to redefine how users interact with technology.</p>"
    },
    {
        id: 4,
        slug: "custom-accountable-software-development-for-startups",
        title: "Custom Accountable Software Development for Startups: Practical strategies",
        category: "Blogs",
        author: "Gaurab Soni",
        date: "Dec 15, 2024",
        readTime: "10 minutes read",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
        link: "#",
        isFeatured: false,
        content: "<p>Startups face unique challenges when it comes to software development. With limited resources and tight timelines, accountability is not just a buzzword—it's a survival mechanism.</p>"
    },
    {
        id: 5,
        slug: "unlock-3x-roi-with-website-personalization",
        title: "Unlock 3X ROI with Website Personalization Strategies for e-commerce",
        category: "Ebooks",
        author: "Unified Infotech",
        date: "Jan 10, 2025",
        readTime: "15 minutes read",
        image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=2070&auto=format&fit=crop",
        link: "#",
        isFeatured: true,
        content: "<p>Website personalization is no longer a luxury; it's a necessity for e-commerce success. By tailoring the user experience to individual preferences, businesses can significantly increase their ROI.</p>"
    },
    {
        id: 6,
        slug: "the-future-of-fintech-trends-2025",
        title: "The Future of Fintech: Major digital trends to watch in 2025",
        category: "Case Studies",
        author: "Gaurab Soni",
        date: "Jan 8, 2025",
        readTime: "10 minutes read",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        link: "#",
        isFeatured: false,
        content: "<p>The fintech industry is at a crossroads. As traditional banking faces disruption from digital-first players, 2025 will be a defining year for the future of finance.</p>"
    },
    {
        id: 7,
        slug: "visualizing-data-strategic-power-of-infographics",
        title: "Visualizing Data: The Strategic Power of Infographics in Marketing",
        category: "Infographics",
        author: "Unified Infotech",
        date: "Dec 30, 2024",
        readTime: "5 minutes read",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        link: "#",
        isFeatured: false,
        content: "<p>In an era of information overload, infographics offer a way to cut through the noise. By combining visual appeal with data-driven insights, marketers can communicate complex ideas effectively.</p>"
    },
    {
        id: 8,
        slug: "scaling-ecommerce-platform-peak-holiday-seasons",
        title: "Scaling Your E-commerce Platform for Peak Holiday Seasons",
        category: "Case Studies",
        author: "Gaurab Soni",
        date: "Nov 25, 2024",
        readTime: "11 minutes read",
        image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070&auto=format&fit=crop",
        link: "#",
        isFeatured: false,
        content: "<p>Peak holiday seasons can either make or break an e-commerce business. Scalability is the key to ensuring your platform can handle the surge in traffic and transactions.</p>"
    },
    {
        id: 9,
        slug: "cloud-migration-comprehensive-guide-2025",
        title: "Cloud Migration: A Comprehensive Guide for Enterprises in 2025",
        category: "Ebooks",
        author: "Unified Infotech",
        date: "Oct 12, 2024",
        readTime: "20 minutes read",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
        link: "#",
        isFeatured: false,
        content: "<p>Cloud migration is a journey, not a destination. For enterprises in 2025, a well-defined strategy is essential for navigating the complexities of the cloud.</p>"
    },
    {
        id: 10,
        slug: "ai-integration-enhancing-customer-experience",
        title: "AI Integration: Enhancing Customer Experience in 2025 with smart tech",
        category: "Blogs",
        author: "Gaurab Soni",
        date: "Jan 12, 2025",
        readTime: "9 minutes read",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
        link: "#",
        isFeatured: false,
        content: "<p>AI is transforming the customer experience. From chatbots to personalized recommendations, smart technology is enabling businesses to connect with their customers in new and meaningful ways.</p>"
    }
];
