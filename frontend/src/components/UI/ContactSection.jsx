import React, { useState } from 'react';
import {
    Phone,
    Mail,
    Briefcase,
    CheckCircle,
    Globe,
    Users,
    Upload,
    User,
    Smartphone,
    MessageSquare,
    Paperclip
} from 'lucide-react';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        projectDescription: '',
        detailsFile: null,
        smsConsent: false
    });

    const stats = [
        { icon: <Briefcase className="w-8 h-8 text-[#17312C]" />, value: "18+", label: "Years Of Trust" },
        { icon: <CheckCircle className="w-8 h-8 text-[#17312C]" />, value: "580+", label: "Successful Projects" },
        { icon: <Globe className="w-8 h-8 text-[#17312C]" />, value: "9+", label: "Global Locations" },
        { icon: <Users className="w-8 h-8 text-[#17312C]" />, value: "110+", label: "IT Professionals" }
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({
            ...prev,
            detailsFile: e.target.files[0]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        // Add form submission logic here
    };

    return (
        <section className="py-24 bg-[#FBFBFB] overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Info & Stats */}
                    <div className="space-y-12">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-[2px] w-8 bg-[#F2735B]"></div>
                                <span className="text-sm font-bold text-[#F2735B] uppercase tracking-widest">
                                    LET'S DISCUSS
                                </span>
                            </div>
                            <h2 className="text-5xl lg:text-6xl font-extrabold text-[#17312C] mb-6 font-[Castledown]">
                                Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#17312C] to-[#56B77E]">Project</span>
                            </h2>
                            <p className="text-lg text-gray-500 max-w-md font-[Castledown]">
                                Please fill in the form and our representative will get back to you.
                            </p>
                        </div>

                        {/* Contact info pills */}
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-4 bg-white border border-gray-100 shadow-sm rounded-full px-6 py-4 hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                                    <Phone className="w-5 h-5 text-[#17312C]" />
                                </div>
                                <span className="text-lg font-medium text-[#17312C] font-[Castledown]">(484) 892-5713</span>
                            </div>
                            <div className="flex items-center gap-4 bg-white border border-gray-100 shadow-sm rounded-full px-6 py-4 hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                                    <Mail className="w-5 h-5 text-[#17312C]" />
                                </div>
                                <span className="text-lg font-medium font-[Castledown]">hello@nextgen.com</span>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-x-8 gap-y-12 pt-12 border-t border-gray-100">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex gap-5">
                                    <div className="flex-shrink-0">
                                        {stat.icon}
                                    </div>
                                    <div className="font-[Castledown]">
                                        <div className="text-3xl font-bold text-[#17312C] mb-1">{stat.value}</div>
                                        <div className="text-gray-400 font-medium">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="relative">
                        {/* Soft background shape */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#F2735B]/5 rounded-full blur-3xl opacity-50 -z-10"></div>

                        <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Full Name */}
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-sm font-semibold text-gray-700 ml-1 font-[Castledown]">Full Name *</label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="fullName"
                                                placeholder="Name"
                                                required
                                                className="w-full bg-[#f8f9fb] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#17312C]/20 transition-all outline-none font-[Castledown]"
                                                onChange={handleChange}
                                            />
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#17312C] flex items-center justify-center">
                                                <User className="w-4 h-4 text-white" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Phone Number */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 ml-1 font-[Castledown]">Phone Number *</label>
                                        <div className="relative">
                                            <input
                                                type="tel"
                                                name="phoneNumber"
                                                placeholder="Phone"
                                                required
                                                className="w-full bg-[#f8f9fb] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#17312C]/20 transition-all outline-none font-[Castledown]"
                                                onChange={handleChange}
                                            />
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#17312C] flex items-center justify-center">
                                                <Smartphone className="w-4 h-4 text-white" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 ml-1 font-[Castledown]">Email *</label>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                required
                                                className="w-full bg-[#f8f9fb] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#17312C]/20 transition-all outline-none font-[Castledown]"
                                                onChange={handleChange}
                                            />
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#17312C] flex items-center justify-center">
                                                <Mail className="w-4 h-4 text-white" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Description */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 ml-1 font-[Castledown]">Project Description *</label>
                                    <div className="relative">
                                        <textarea
                                            name="projectDescription"
                                            placeholder="Comments"
                                            required
                                            rows="4"
                                            className="w-full bg-[#f8f9fb] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#17312C]/20 transition-all outline-none resize-none font-[Castledown]"
                                            onChange={handleChange}
                                        ></textarea>
                                        <div className="absolute right-4 top-6 w-8 h-8 rounded-full bg-[#17312C] flex items-center justify-center">
                                            <MessageSquare className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                </div>

                                {/* File Upload */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 ml-1 font-[Castledown]">Requirement Details Document</label>
                                    <div className="relative flex items-center bg-[#f8f9fb] rounded-2xl overflow-hidden shadow-sm">
                                        <label className="flex items-center gap-2 px-6 py-4 cursor-pointer hover:bg-gray-100 transition-colors border-r border-gray-100">
                                            <span className="text-gray-500 font-medium font-[Castledown]">Choose File</span>
                                            <input
                                                type="file"
                                                className="hidden"
                                                onChange={handleFileChange}
                                            />
                                        </label>
                                        <span className="px-4 text-gray-400 text-xs truncate font-[Castledown]">
                                            {formData.detailsFile ? formData.detailsFile.name : 'No file chosen'}
                                        </span>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#17312C] flex items-center justify-center">
                                            <Paperclip className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                </div>

                                {/* SMS Consent */}
                                <div className="flex items-start gap-3 py-2">
                                    <input
                                        type="checkbox"
                                        name="smsConsent"
                                        id="smsConsent"
                                        className="mt-1 w-4 h-4 rounded border-gray-300 accent-[#17312C] focus:ring-[#17312C]/20"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="smsConsent" className="text-[10px] leading-relaxed text-gray-400 italic font-[Castledown]">
                                        By checking this box, you agree to receive text messages from Next Gen Inc. related to our services at the phone number provided above. You may reply STOP to opt-out at any time. Reply HELP for assistance. Messages and data rates may apply. Message frequency will vary.
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full md:w-auto bg-gradient-to-r from-[#F2735B] to-[#E37439] hover:opacity-90 font-bold py-4 px-12 rounded-full transition-all shadow-lg hover:shadow-[#F2735B]/20 font-[Castledown]"
                                >
                                    Submit Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
