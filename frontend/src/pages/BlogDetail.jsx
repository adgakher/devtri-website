import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogData } from '../data/blogData';
import { ArrowLeft, User, Mail, MessageSquare, Send, Calendar, Clock, Tag, ChevronRight } from 'lucide-react';

const BlogDetail = () => {
    const { slug } = useParams();
    const post = blogData.find(p => p.slug === slug);

    // Initial dummy comments to show the feature
    const [comments, setComments] = useState([
        {
            id: 1,
            name: "Rahul Sharma",
            date: "Jan 6, 2025",
            text: "This is exactly what I was looking for! The difference between Basic and Advanced mode was always a bit confusing, but this guide makes it very clear.",
            replies: [
                {
                    id: 2,
                    name: "Gaurab Soni",
                    date: "Jan 6, 2025",
                    text: "Glad it helped, Rahul! Advanced mode is definitely the way to go if you want to maintain data accuracy while staying compliant."
                }
            ]
        },
        {
            id: 3,
            name: "Sarah Jenkins",
            date: "Jan 7, 2025",
            text: "Does Google Consent Mode work with all CMP providers?",
            replies: []
        }
    ]);

    const [commentData, setCommentData] = useState({
        name: '',
        email: '',
        comment: ''
    });

    const [replyingTo, setReplyingTo] = useState(null); // ID of comment being replied to
    const [replyData, setReplyData] = useState({ name: '', text: '' });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#FBFBFB]">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-[#17312C] mb-4">Blog Post Not Found</h1>
                    <Link to="/blog" className="text-[#F2735B] font-bold hover:underline">Back to All Blogs</Link>
                </div>
            </div>
        );
    }

    const handleCommentChange = (e) => {
        const { name, value } = e.target;
        setCommentData(prev => ({ ...prev, [name]: value }));
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        const newComment = {
            id: Date.now(),
            name: commentData.name,
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            text: commentData.comment,
            replies: []
        };
        setComments(prev => [...prev, newComment]);
        setCommentData({ name: '', email: '', comment: '' });
    };

    const handleReplySubmit = (e, parentId) => {
        e.preventDefault();
        const newReply = {
            id: Date.now(),
            name: replyData.name,
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            text: replyData.text
        };

        setComments(prev => prev.map(comment => {
            if (comment.id === parentId) {
                return { ...comment, replies: [...comment.replies, newReply] };
            }
            return comment;
        }));

        setReplyingTo(null);
        setReplyData({ name: '', text: '' });
    };

    return (
        <div className="min-h-screen bg-[#FBFBFB] pt-24 pb-20 font-[Castledown]">
            {/* Breadcrumbs */}
            <div className="container mx-auto px-6 lg:px-12 mb-8">
                <nav className="flex items-center gap-2 text-sm text-black/40 font-bold">
                    <Link to="/blog" className="hover:text-[#17312C] transition-colors uppercase tracking-widest text-[10px]">Resources</Link>
                    <ChevronRight size={10} />
                    <span className="text-[#17312C] truncate max-w-[200px] md:max-w-none uppercase tracking-widest text-[10px]">{post.category}</span>
                    <ChevronRight size={10} />
                    <span className="text-[#F2735B] truncate max-w-[200px] md:max-w-none uppercase tracking-widest text-[10px]">{post.title}</span>
                </nav>
            </div>

            <article className="container mx-auto px-6 lg:px-12">
                <div className="max-w-4xl mx-auto">
                    {/* Post Header */}
                    <header className="mb-12">
                        <div className="flex flex-wrap items-center gap-6 mb-8">
                            <span className="bg-[#17312C] text-white px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]">
                                {post.category}
                            </span>
                            <div className="flex items-center gap-6 text-black/40 text-[10px] font-bold uppercase tracking-[0.2em]">
                                <div className="flex items-center gap-2">
                                    <Calendar size={14} className="text-[#F2735B]" />
                                    <span>{post.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={14} className="text-[#F2735B]" />
                                    <span>{post.readTime}</span>
                                </div>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#17312C] leading-[1.1] tracking-tight mb-10">
                            {post.title}
                        </h1>

                        <div className="flex items-center justify-between py-10 border-y border-black/5">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-xl">
                                    <img
                                        src={post.authorImage || `https://ui-avatars.com/api/?name=${post.author}&background=17312C&color=fff`}
                                        alt={post.author}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-[#17312C] font-extrabold text-lg">{post.author}</p>
                                    <p className="text-xs text-[#F2735B] font-bold uppercase tracking-widest">Industry Expert</p>
                                </div>
                            </div>

                            <div className="hidden sm:flex items-center gap-4">
                                <span className="text-[10px] font-extrabold text-black/20 uppercase tracking-widest">Share this post</span>
                                <div className="flex gap-2">
                                    {['TW', 'LI', 'FB'].map(social => (
                                        <button key={social} className="w-8 h-8 rounded-full border border-black/5 flex items-center justify-center text-[10px] font-bold hover:bg-[#17312C] hover:text-white transition-all">
                                            {social}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <div className="mb-20 rounded-[3rem] overflow-hidden shadow-2xl aspect-[21/9] relative group">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Post Content */}
                    <div
                        className="blog-content prose prose-2xl max-w-none text-[#17312C]/80 leading-[1.8] font-medium mb-32
                        prose-headings:text-[#17312C] prose-headings:font-black prose-headings:tracking-tighter
                        prose-p:mb-8 prose-li:mb-4
                        prose-strong:text-[#17312C] prose-strong:font-black
                        prose-img:rounded-[3rem] prose-img:shadow-2xl prose-img:my-20"
                        dangerouslySetInnerHTML={{ __html: post.content || '<p>Content coming soon...</p>' }}
                    />

                    {/* Comments List */}
                    <section className="mb-20">
                        <div className="flex items-center gap-4 mb-12">
                            <h2 className="text-3xl font-black text-[#17312C] tracking-tight">Comments ({comments.reduce((acc, curr) => acc + 1 + curr.replies.length, 0)})</h2>
                            <div className="h-[2px] flex-grow bg-black/5"></div>
                        </div>

                        <div className="space-y-10">
                            {comments.map((comment) => (
                                <div key={comment.id} className="space-y-6">
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#17312C] to-[#56B77E] flex items-center justify-center text-white font-black shrink-0">
                                            {comment.name.charAt(0)}
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className="font-black text-[#17312C]">{comment.name}</h4>
                                                <span className="text-[10px] font-bold text-black/30 uppercase tracking-widest">{comment.date}</span>
                                            </div>
                                            <p className="text-[#17312C]/70 leading-relaxed mb-4">{comment.text}</p>
                                            <button
                                                onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                                                className="text-xs font-black text-[#F2735B] hover:text-[#17312C] transition-colors uppercase tracking-widest"
                                            >
                                                Reply
                                            </button>

                                            {/* Reply Form */}
                                            {replyingTo === comment.id && (
                                                <form onSubmit={(e) => handleReplySubmit(e, comment.id)} className="mt-6 p-6 bg-white rounded-2xl border border-black/5 shadow-sm space-y-4">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <input
                                                            type="text"
                                                            placeholder="Your Name"
                                                            required
                                                            className="w-full bg-[#FBFBFB] border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#56B77E]/20 transition-all outline-none"
                                                            value={replyData.name}
                                                            onChange={(e) => setReplyData({ ...replyData, name: e.target.value })}
                                                        />
                                                    </div>
                                                    <textarea
                                                        placeholder="Write your reply..."
                                                        required
                                                        rows="3"
                                                        className="w-full bg-[#FBFBFB] border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#56B77E]/20 transition-all outline-none resize-none"
                                                        value={replyData.text}
                                                        onChange={(e) => setReplyData({ ...replyData, text: e.target.value })}
                                                    ></textarea>
                                                    <div className="flex gap-3">
                                                        <button type="submit" className="!bg-black !text-white px-6 py-2 rounded-full text-xs font-bold hover:bg-[#F2735B] transition-all">Submit Reply</button>
                                                        <button type="button" onClick={() => setReplyingTo(null)} className="text-black/40 text-xs font-bold px-4 py-2 hover:text-black">Cancel</button>
                                                    </div>
                                                </form>
                                            )}
                                        </div>
                                    </div>

                                    {/* Replies List */}
                                    {comment.replies.length > 0 && (
                                        <div className="pl-16 space-y-8">
                                            {comment.replies.map((reply) => (
                                                <div key={reply.id} className="flex gap-4">
                                                    <div className="w-10 h-10 rounded-xl bg-[#F2735B]/10 flex items-center justify-center text-[#F2735B] font-black shrink-0 text-sm">
                                                        {reply.name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center gap-4 mb-1">
                                                            <h4 className="font-black text-[#17312C] text-sm">{reply.name}</h4>
                                                            <span className="text-[9px] font-bold text-black/30 uppercase tracking-widest shrink-0">{reply.date}</span>
                                                        </div>
                                                        <p className="text-sm text-[#17312C]/70 leading-relaxed">{reply.text}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* New Comment Form */}
                    <section className="bg-white rounded-[3rem] p-10 lg:p-16 shadow-2xl border border-black/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#E5F3F1]/50 rounded-full blur-3xl -z-0 translate-x-32 -translate-y-32"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="h-[2px] w-12 bg-[#F2735B]"></div>
                                <h2 className="text-3xl font-black text-[#17312C] tracking-tight">Leave a Comment</h2>
                            </div>

                            <form onSubmit={handleCommentSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-xs font-black text-[#17312C] uppercase tracking-widest ml-1">Your Name</label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="name"
                                                value={commentData.name}
                                                onChange={handleCommentChange}
                                                placeholder="Full Name"
                                                required
                                                className="w-full bg-[#FBFBFB] border-none rounded-2xl px-8 py-5 focus:ring-2 focus:ring-[#17312C]/5 outline-none transition-all font-bold shadow-sm"
                                            />
                                            <User size={20} className="absolute right-8 top-1/2 -translate-y-1/2 text-black/10" />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-black text-[#17312C] uppercase tracking-widest ml-1">Your Email</label>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                name="email"
                                                value={commentData.email}
                                                onChange={handleCommentChange}
                                                placeholder="Email Address"
                                                required
                                                className="w-full bg-[#FBFBFB] border-none rounded-2xl px-8 py-5 focus:ring-2 focus:ring-[#17312C]/5 outline-none transition-all font-bold shadow-sm"
                                            />
                                            <Mail size={20} className="absolute right-8 top-1/2 -translate-y-1/2 text-black/10" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-black text-[#17312C] uppercase tracking-widest ml-1">Message</label>
                                    <div className="relative">
                                        <textarea
                                            name="comment"
                                            value={commentData.comment}
                                            onChange={handleCommentChange}
                                            placeholder="Write your thoughts..."
                                            required
                                            rows="6"
                                            className="w-full bg-[#FBFBFB] border-none rounded-2xl px-8 py-5 focus:ring-2 focus:ring-[#17312C]/5 outline-none transition-all font-bold shadow-sm resize-none"
                                        ></textarea>
                                        <MessageSquare size={20} className="absolute right-8 top-8 text-black/10" />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="group flex items-center gap-4 !bg-black !text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-[#F2735B] transition-all duration-500 shadow-xl shadow-black/20"
                                >
                                    <span>Post Comment</span>
                                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </section>
                </div>
            </article>

            <div className="container mx-auto px-6 lg:px-12 mt-24 text-center">
                <Link to="/blog" className="inline-flex items-center gap-3 text-[#17312C] font-black hover:text-[#F2735B] transition-all group pb-1 border-b-2 border-transparent hover:border-[#F2735B]">
                    <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
                    <span className="uppercase tracking-[0.2em] text-xs">Back to all resources</span>
                </Link>
            </div>
        </div>
    );
};

export default BlogDetail;
