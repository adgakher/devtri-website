import React, { useState, useMemo } from 'react';
import { blogData } from '../data/blogData';
import { ArrowUpRight, Search, ChevronRight, ChevronsRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination as SwiperPagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export const Blog = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const categories = ['All', 'Case Studies', 'Blogs', 'Infographics', 'Ebooks'];

    const filteredBlogs = useMemo(() => {
        return blogData.filter(post => {
            const matchesTab = activeTab === 'All' || post.category === activeTab;
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.category.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesTab && matchesSearch;
        });
    }, [activeTab, searchQuery]);

    const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
    const paginatedBlogs = filteredBlogs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const featuredBlogs = blogData.filter(post => post.isFeatured);

    // Row 1 Logic: One Slider and One Sidebar Card
    const sliderItems = featuredBlogs.length > 0 ? featuredBlogs : blogData.slice(0, 3);
    const sidebarCard = filteredBlogs.length > 0 ? filteredBlogs[0] : null;
    const gridBlogs = filteredBlogs.length > 1 ? filteredBlogs.slice(1) : [];

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-[#FBFBFB] pb-20">
            {/* Hero Section */}
            <header className="px-8 lg:px-16 pt-24 pb-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#17312C]/5 rounded-full blur-3xl -z-10 animate-blob"></div>
                <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-[#F2735B]/5 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000"></div>

                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <div className="h-[2px] w-12 bg-[#F2735B]"></div>
                        <span className="text-[#17312C] tracking-[0.3em] text-sm font-bold uppercase">Our Resources</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-[#17312C] tracking-tighter leading-none mb-4">
                        Latest <span className="text-gradient-effect">Blog</span>
                    </h1>
                </div>
            </header>

            {/* Filter and Search Bar */}
            <div className="container mx-auto px-6 lg:px-12 mb-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Tabs */}
                    <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-2 w-full md:w-auto">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => { setActiveTab(cat); setCurrentPage(1); }}
                                className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 relative group
                                    ${activeTab === cat
                                        ? '!bg-[#17312C] text-white shadow-md'
                                        : 'text-black/40 hover:text-[#17312C] bg-transparent border border-black/5 hover:border-black/10'
                                    }`}
                            >
                                <span className="relative z-10">{cat}</span>
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-72 group">
                        <div className="absolute inset-0 p-[2px] rounded-full bg-gradient-to-r from-[#17312C] to-[#56B77E]">
                            <div className="w-full h-full bg-[#FBFBFB] rounded-full"></div>
                        </div>
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                            className="relative w-full pl-6 pr-12 py-3 bg-transparent border-none text-sm font-medium outline-none z-10"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#17312C] z-10">
                            <Search size={18} />
                        </div>
                    </div>
                </div>
            </div>

            <main className="container mx-auto px-6 lg:px-12">
                {/* Row 1: Slider and 1 Card */}
                {currentPage === 1 && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
                        {/* Slider */}
                        <div className="lg:col-span-8 rounded-[2.5rem] overflow-hidden shadow-sm h-[400px] lg:h-[550px] relative">
                            <Swiper
                                modules={[SwiperPagination, Autoplay]}
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 5000 }}
                                loop={true}
                                className="h-full w-full blog-slider rounded-[2.5rem]"
                            >
                                {sliderItems.map(post => (
                                    <SwiperSlide key={post.id}>
                                        <div className="relative h-full w-full group">
                                            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-12 flex flex-col justify-end h-1/2">
                                                <span className="bg-[#56B77E] text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest w-fit mb-4">
                                                    {post.category}
                                                </span>
                                                <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-6 leading-tight max-w-2xl">
                                                    {post.title}
                                                </h2>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Sidebar Card */}
                        <div className="lg:col-span-4 h-full">
                            {sidebarCard && renderBlogCard(sidebarCard, true)}
                        </div>
                    </div>
                )}

                {/* Second and ongoing rows: 3 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {(currentPage === 1 ? gridBlogs : paginatedBlogs).map((post) => (
                        <div key={post.id}>
                            {renderBlogCard(post)}
                        </div>
                    ))}
                </div>

                {filteredBlogs.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-black/10">
                        <p className="text-xl text-[#17312C]/40 font-bold">No articles found matching your criteria.</p>
                        <button onClick={() => { setActiveTab('All'); setSearchQuery(''); }} className="mt-4 text-[#F2735B] font-bold hover:underline">Clear all filters</button>
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="mt-16 flex items-center justify-center gap-3">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 group relative
                                    ${currentPage === page
                                        ? '!bg-[#17312C] text-white shadow-md'
                                        : 'bg-transparent text-[#17312C] border border-black/10 hover:border-black/20'
                                    }`}
                            >
                                <span className="relative z-10">{page}</span>
                            </button>
                        ))}
                        <button
                            onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                            className="w-12 h-12 rounded-full bg-transparent border border-black/10 flex items-center justify-center text-[#17312C] hover:border-[#17312C]/20 transition-all font-bold"
                        >
                            <ChevronRight size={18} />
                        </button>
                        <button
                            onClick={() => handlePageChange(totalPages)}
                            className="w-12 h-12 rounded-full bg-transparent border border-black/10 flex items-center justify-center text-[#17312C] hover:border-[#17312C]/20 transition-all font-bold"
                        >
                            <ChevronsRight size={18} />
                        </button>
                    </div>
                )}
            </main>

            {/* Simplified Newsletter Section */}
            <section className="mt-20 container mx-auto px-6 lg:px-12">
                <div className="bg-[#17312C] rounded-[2.5rem] p-12 lg:p-16 relative overflow-hidden text-neutral-500">
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                            Unlock the Potential <br /> of Your Business
                        </h2>
                        <div className="w-full md:w-auto flex items-center bg-white/5 border border-white/10 rounded-full pl-6 pr-2 py-2 group focus-within:bg-white/10 transition-all">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-transparent border-none outline-none text-white text-sm font-medium w-full md:w-64 py-2 placeholder:text-white/30"
                            />
                            <button className="bg-[#56B77E] text-white p-3 rounded-full hover:scale-105 transition-all duration-300">
                                <ArrowUpRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Helper to render blog cards consistently
const renderBlogCard = (post, isDark = false, className = "") => (
    <Link to={`/blog/${post.slug}`} className={`group cursor-pointer rounded-[2.5rem] overflow-hidden border border-black/5 hover:border-transparent transition-all duration-500 flex flex-col h-full
        ${isDark ? 'bg-[#1D1D1D] text-white' : 'bg-white text-[#17312C]'}`}>

        {/* Image Section */}
        <div className="relative h-64 lg:h-72 overflow-hidden m-2 rounded-[2rem]">
            <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
        </div>

        {/* Content Section */}
        <div className="p-8 flex flex-col flex-grow">
            <div className="mb-4">
                <span className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border
                    ${isDark ? 'border-white/20 text-white/60' : 'border-black/20 text-black/40'}`}>
                    {post.category}
                </span>
            </div>

            <h2 className={`text-xl font-extrabold mb-8 leading-tight line-clamp-3 
                ${isDark ? 'text-white' : 'text-[#17312C]'}`}>
                {post.title}
            </h2>

            <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm
                        ${isDark ? 'bg-white/10' : 'bg-[#17312C]/5'}`}>
                        <img src={post.authorImage || `https://ui-avatars.com/api/?name=${post.author}&background=random`} alt={post.author} className="w-full h-full rounded-full object-cover" />
                    </div>
                    <div className="flex flex-col">
                        <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-[#17312C]'}`}>{post.author}</span>
                        <div className={`flex items-center gap-2 text-[10px] ${isDark ? 'text-white/40' : 'text-black/40'}`}>
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                </div>

                <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300
                    ${isDark
                        ? 'border-white/20 text-white group-hover:bg-white group-hover:text-black'
                        : 'border-black/10 text-[#17312C] group-hover:bg-[#17312C] group-hover:text-white'}`}>
                    <ArrowUpRight size={18} />
                </div>
            </div>
        </div>
    </Link>
);
