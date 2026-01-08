import React from 'react';
import { ArrowRight, Code2, Cloud, Smartphone, Database, Globe, Shield } from 'lucide-react';
import heroShape from '../../assets/Images/hero-shapes.png';
import { NavLink } from 'react-router-dom';

export const HeroSection = () => {
  const services = [
    { icon: <Code2 className="w-4 h-4 text-[#17312C]" />, label: "Software Design", bg: "bg-emerald-50" },
    { icon: <Cloud className="w-4 h-4 text-[#F2735B]" />, label: "Cloud Architecture", bg: "bg-orange-50" },
    { icon: <Smartphone className="w-4 h-4 text-[#56B77E]" />, label: "Mobile Dev", bg: "bg-emerald-50" },
    { icon: <Database className="w-4 h-4 text-[#17312C]" />, label: "Database Mgmt", bg: "bg-gray-100" },
    { icon: <Globe className="w-4 h-4 text-[#56B77E]" />, label: "Web Solutions", bg: "bg-emerald-50" },
    { icon: <Shield className="w-4 h-4 text-[#F2735B]" />, label: "Cyber Security", bg: "bg-orange-50" },
  ];

  return (
    <div className="relative bg-[#FBFBFB] pt-10 lg:pt-20 pb-20 overflow-hidden flex flex-col justify-center min-h-[90vh] lg:h-auto lg:min-h-0">
      <div className="container mx-auto px-6 lg:px-12 flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

          {/* Left Content */}
          <div className="max-w-xl z-20 order-1 lg:order-1">
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-black mb-6 leading-[1.1]">
              Let's Work <br />
              Together to Create <br />
              <span className="text-gradient-effect">Wonders with Us</span>
            </h1>

            <p className="text-lg text-black/60 mb-8 leading-relaxed max-w-lg font-normal">
              A visionary creative, crafting captivating wonders through art and design.
              Adept at turning imagination into extraordinary reality.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <NavLink to='/contact-us' className="bg-gradient text-white px-8 py-3 rounded-full text-base font-medium shadow-lg hover:shadow-xl transition-all">
                Let's Talk
              </NavLink>
              <NavLink to="/contact-us" className="gradient-border-btn text-black px-8 py-3 rounded-full text-base font-medium hover:bg-gray-50 transition-all text-center">
                Start Project
              </NavLink>
            </div>

            {/* Stats Row */}
            <div className="flex gap-12 border-t border-black/5 pt-8">
              <div>
                <h3 className="text-3xl font-bold text-black mb-1">15+</h3>
                <p className="text-xs text-black/50 uppercase tracking-wider font-medium">Years <br /> Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-black mb-1">26K</h3>
                <p className="text-xs text-black/50 uppercase tracking-wider font-medium">Projects <br /> Success</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-black mb-1">98%</h3>
                <p className="text-xs text-black/50 uppercase tracking-wider font-medium">Satisfied <br /> Rate</p>
              </div>
            </div>
          </div>

          {/* Right Image / Visual */}
          <div className="relative z-10 flex justify-center items-center order-2 lg:order-2 mt-8 lg:mt-0">
            {/* Container for Image & Badges - constrained width to keep badges close */}
            {/* Adjusted size for mobile responsiveness */}
            <div className="relative w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[550px] lg:h-[550px] flex items-center justify-center">

              {/* Gradient Glow Behind */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-br from-[#17312C]/20 to-[#56B77E]/20 blur-[60px] lg:blur-[100px] rounded-full -z-10" />

              {/* Bottom Shadow Effect */}
              <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[70%] h-[15%] bg-black/20 blur-2xl rounded-[100%] -z-10" />

              {/* Main 3D Shape */}
              <img
                src={heroShape}
                alt="Abstract 3D Shape"
                className="object-contain mix-blend-multiply z-10 w-[80%] h-[80%]"
              />

              {/* 360 Badge Layout */}
              {services.map((service, index) => {
                const angleRad = ((index / services.length) * 360 - 90) * (Math.PI / 180); // -90 to start at top

                // We need them to orbit. 
                // X/Y coordinates on a circle. 50% is center. 
                // Radius is ~42% of the container width to sit nicely around the image.
                const x = 50 + 44 * Math.cos(angleRad);
                const y = 50 + 44 * Math.sin(angleRad);

                return (
                  <div
                    key={index}
                    className="absolute flex bg-white py-1.5 px-2.5 sm:py-2 sm:px-3 lg:px-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] items-center gap-2 sm:gap-3 whitespace-nowrap transform sm:scale-100 scale-90"
                    style={{
                      top: `${y}%`,
                      left: `${x}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 ${service.bg}`}>
                      {service.icon}
                    </div>
                    <span className="text-[10px] sm:text-xs lg:text-sm font-semibold text-gray-800">{service.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Mobile View Services Grid (REMOVED) */}
          </div>
        </div>
      </div>
    </div>
  );
};