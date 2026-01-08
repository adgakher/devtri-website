import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { caseStudiesData } from '../data/caseStudiesData';

export const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-[#FBFBFB] font-[Castledown]">
      {/* Page Header */}
      <header className="px-8 lg:px-16 pt-24 pb-16 relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#17312C]/5 rounded-full blur-3xl -z-10 animate-blob"></div>
        <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-[#F2735B]/5 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000"></div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-12 bg-[#F2735B]"></div>
            <span className="text-[#17312C] tracking-[0.3em] text-sm font-bold uppercase">Success Stories</span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-[#17312C] tracking-tighter leading-none mb-4">
            Case <span className="text-gradient-effect">Studies</span>
          </h1>
        </div>
      </header>

      {/* Interlocking Grid Section */}
      <main className="grid grid-cols-1 md:grid-cols-2">
        {caseStudiesData.map((study, index) => {
          const rowIndex = Math.floor(index / 2);
          const colIndex = index % 2;
          const isImageFirst = rowIndex % 2 === 0 ? colIndex === 0 : colIndex === 1;

          return (
            <div key={study.id} className="grid grid-cols-1 md:grid-cols-2 col-span-1 md:col-span-2 contents">
              {/* Image Block */}
              <div className={`relative h-[400px] md:h-[600px] overflow-hidden group ${isImageFirst ? 'order-1' : 'order-1 md:order-2'}`}>
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-[#17312C]/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              {/* Content Block */}
              <div className={`flex flex-col justify-center p-10 lg:p-20 relative overflow-hidden ${study.bgColor} ${study.textColor} ${isImageFirst ? 'order-2' : 'order-2 md:order-1'}`}>
                {/* Decorative faint number */}
                <span className="absolute top-10 right-10 text-8xl font-black opacity-10 pointer-events-none">
                  {study.id}
                </span>

                <div className="max-w-xl relative z-10">
                  <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] mb-8 ${study.badgeBg} ${study.badgeText}`}>
                    {study.category}
                  </span>

                  <h2 className="text-3xl lg:text-4xl font-extrabold mb-8 leading-tight">
                    {study.title}
                  </h2>

                  <p className={`text-base lg:text-lg opacity-85 mb-10 leading-relaxed font-medium`}>
                    {study.description}
                  </p>

                  <Link
                    to={`/casestudies/${study.slug}`}
                    className={`inline-flex items-center gap-3 font-bold text-sm uppercase tracking-[0.2em] ${study.btnColor} group transition-all duration-300 relative`}
                  >
                    <span className="relative z-10">Read More</span>
                    <ArrowUpRight size={20} className="group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-300" />
                    <div className={`absolute bottom-0 left-0 w-0 h-[2px] ${study.btnColor.replace('text', 'bg')} group-hover:w-full transition-all duration-300`}></div>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </main>

      {/* Footer CTA */}
      <section className="py-24 px-8 lg:px-16 bg-white border-t border-gray-100">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#17312C] tracking-tighter">
            Have a <span className="text-gradient-effect">project in mind?</span>
          </h2>

          <button className="px-10 py-4 font-bold text-lg rounded-full border-2 border-transparent gradient-border-btn text-[#17312C] whitespace-nowrap">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};
