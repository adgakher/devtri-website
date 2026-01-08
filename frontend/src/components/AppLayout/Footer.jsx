import React from 'react';

export const Footer = () => {
  const companyLinks = [
    { title: 'Projects', href: '/projects' },
    { title: 'Contacts', href: '/contacts' },
    { title: 'Open Source', href: '/open-source' },
    { title: 'Blog', href: '/blog' }
  ];

  const servicesColumn1 = [
    { title: 'Web development front end', href: '/services/web-frontend' },
    { title: 'Responsive web design', href: '/services/responsive-design' },
    { title: 'Software product development', href: '/services/software-development' },
    { title: 'Node JS Development Services', href: '/services/nodejs' },
    { title: 'React JS Development Services', href: '/services/reactjs' },
    { title: 'Search Engine Optimisation', href: '/services/seo' },
    { title: 'Web design and development', href: '/services/web-design' },
    { title: 'Web development back end', href: '/services/web-backend' }
  ];

  const servicesColumn2 = [
    { title: 'Social Media Design', href: '/services/social-media' },
    { title: 'Landing Page', href: '/services/landing-page' },
    { title: 'Saas website design', href: '/services/saas-design' },
    { title: 'Mobile app design', href: '/services/mobile-design' },
    { title: 'Healthcare Web design', href: '/services/healthcare' },
    { title: 'CMS Development', href: '/services/cms' },
    { title: 'Branding for startups', href: '/services/branding' },
    { title: 'Pitch Deck Design', href: '/services/pitch-deck' }
  ];

  return (
    <footer className="text-black bg-[#f8f9fb] border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
          {/* Left Column - Brand & Badges */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center mb-12">
              <div className="relative w-8 h-8">
                <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
                  <circle cx="16" cy="16" r="14" stroke="black" strokeWidth="3" strokeDasharray="4 4" />
                  <circle cx="16" cy="6" r="2" fill="black" />
                </svg>
              </div>
            </div>

            {/* Upwork Badge */}
            <div className="mb-10">
              <div className="text-gradient-effect text-black mb-1" style={{ fontSize: '22px', fontWeight: '600' }}>
                Upwork
              </div>
              <p className="text-[13px]">Upwork awarded agency</p>
            </div>

            {/* Dribbble Badge */}
            <div className="mb-10">
              <div className="text-gradient-effect text-black mb-1" style={{ fontSize: '22px', fontWeight: '500' }}>
                dribbble
              </div>
              <p className="text-[13px]">#1 Agency Worldwide</p>
            </div>

            {/* Clutch Badge */}
            <div>
              <div className="text-gradient-effect text-black mb-1 font-semibold text-[22px]">
                Clutch
              </div>
              <p className="text-[13px]">4.9 proven client's score</p>
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h3 className="text-gradient-effect text-black font-normal text-[16px] uppercase mb-6 tracking-[2px] leading-tight">
              COMPANY
            </h3>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li className='hover-effect' key={link.title}>
                  <a
                    href={link.href}
                    className="text-black transition-colors text-[14px] leading-tight"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column 1 */}
          <div className="lg:col-span-3">
            <h3 className="text-gradient-effect text-black font-normal text-[16px] uppercase mb-6 tracking-[2px] leading-tight">
              SERVICES
            </h3>
            <ul className="space-y-4">
              {servicesColumn1.map((link) => (
                <li className='hover-effect' key={link.title}>
                  <a
                    href={link.href}
                    className="text-black transition-colors text-[14px] leading-tight"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column 2 */}
          <div className="lg:col-span-2">
            <h3 className="text-gradient-effect text-black font-normal text-[16px] uppercase mb-6 tracking-[2px] ">
              Technologies
            </h3>
            <ul className="space-y-4">
              {servicesColumn2.map((link) => (
                <li className='hover-effect' key={link.title}>
                  <a
                    href={link.href}
                    className="text-black transition-colors text-[14px] leading-tight"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-3">
            <h3 className="text-gradient-effect text-black font-normal text-[16px] uppercase mb-6 tracking-[2px] leading-tight">
              CONTACTS
            </h3>
            <div className="mb-10">
              <p className="text-black text-[14px] mb-2 leading-tight">+92347 6031166</p>
              <p className="text-[14px] leading-tight">Ismalabad, Pakistan</p>
            </div>

            <h3 className="text-black font-normal text-[11px] uppercase mb-6 tracking-[2px] leading-tight">
              INQUIRES
            </h3>
            <p className="text-[14px] mb-10 leading-tight">sales@nextgensoloutions.com</p>

            <h3 className="text-black font-normal text-[11px] uppercase mb-6 tracking-[2px] leading-tight">
              CAREERS
            </h3>
            <p className="text-[14px] leading-tight">carrier@nextgensoloutions.com</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-[13px]">
              © Next Gen. All rights reserved
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* Discord */}
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#1a1f35] hover:bg-[#242940] flex items-center justify-center transition-all"
              >
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>

              {/* Slack */}
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#1a1f35] hover:bg-[#242940] flex items-center justify-center transition-all"
              >
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 15a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2h2v2zm1 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-5zM9 6a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2v2H9zm0 1a2 2 0 0 1 2 2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2a2 2 0 0 1 2-2h5zm9 2a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-2V9zm-1 0a2 2 0 0 1-2 2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v5zm-2 9a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-2h2zm0-1a2 2 0 0 1-2-2a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-5z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#1a1f35] hover:bg-[#242940] flex items-center justify-center transition-all"
              >
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Behance */}
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#1a1f35] hover:bg-[#242940] flex items-center justify-center transition-all"
              >
                <span className="text-gray-400 font-normal text-sm">Bē</span>
              </a>

              {/* Dribbble */}
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#1a1f35] hover:bg-[#242940] flex items-center justify-center transition-all"
              >
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm7.5 5.94c1.34 1.63 2.17 3.71 2.26 6-.35-.08-3.85-.78-7.38-.34-.08-.18-.15-.37-.23-.56-.21-.52-.44-1.04-.68-1.55 3.82-1.56 5.55-3.82 5.55-3.82.48.4.92.85 1.3 1.35zM12 2.04c2.89 0 5.52 1.17 7.42 3.07 0 0-1.59 2.1-5.22 3.34A47.9 47.9 0 0 0 9.89 2.5c.7-.3 1.43-.46 2.11-.46zM7.5 3.38c.08 0 .15.02.23.03 1.63 3.28 3.18 6.05 4.36 8.13-5.51 1.47-10.37 1.44-10.37 1.44-.01-.15-.02-.29-.02-.44 0-3.24 1.29-6.18 3.38-8.33.48.1.96.17 1.42.17zm-5.46 9.1c0-.07 0-.14.01-.21 0 0 5.25.05 11.25-1.56.29.56.56 1.14.81 1.72-.14.04-.28.09-.42.13-6.26 2.02-9.58 7.55-9.58 7.55-1.73-1.94-2.79-4.49-2.79-7.3 0-.11.01-.22.01-.33zm4.65 8.88s2.93-4.92 9.58-7.17c.05-.02.1-.03.15-.05 1.45 3.76 2.04 6.92 2.2 7.8-1.31.57-2.76.88-4.28.88-2.99 0-5.72-1.17-7.74-3.07.03-.13.06-.26.09-.39zm12.15-.09c-.11-.66-.64-3.66-1.95-7.33 3.23-.51 6.06.33 6.37.42-.46 2.84-1.98 5.28-4.21 6.91z" />
                </svg>
              </a>

              {/* Chat Button */}
              <button
                className="w-14 h-14 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition-all shadow-lg ml-2"
              >
                <svg
                  className="w-6 h-6 text-[#0B0F1E]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};