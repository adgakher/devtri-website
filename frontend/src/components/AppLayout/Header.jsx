import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Search, Menu, X, ArrowUpRight } from "lucide-react";
import logo from "../../assets/Images/brand-logo.png";
import servicesimg from "../../assets/Images/servicesimg.png"

export const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const servicesItems = [
    { title: "Software Engineering", href: "/services/software-engineering" },
    { title: "Design & Digital Experience", href: "/services/design-digital-experience" },
    { title: "Cloud Engineering", href: "/services/cloud-engineering" },
    { title: "Data & Analytics", href: "/services/data-analytics" },
    { title: "IT Consulting & Advisory", href: "/services/it-consulting-advisory" },
    { title: "Digital Strategy", href: "/services/digital-strategy" },
    { title: "Website Development", href: "/services/website-development" },
    { title: "Web App Development", href: "/services/web-app-development" },
    { title: "Mobile App Development", href: "/services/mobile-app-development" },
    { title: "Application Modernization", href: "/services/application-modernization" },
    { title: "Blockchain Development", href: "/services/blockchain-development" },
    { title: "Custom Software Development", href: "/services/custom-software-development" },
    { title: "SaaS Development", href: "/services/saas-development" },
    { title: "E-Commerce Development", href: "/services/ecommerce-development" },
    { title: "Testing & Quality Assurance", href: "/services/testing-quality-assurance" },
  ];

  const technologiesCategories = [
    {
      title: "Backend",
      items: ["Node.js (Express/Nest)", "Laravel", "Python"],
    },
    {
      title: "Frontend",
      items: ["JavaScript", "Angular", "ReactJS", "Vue.JS"],
    },
    {
      title: "Mobile",
      items: ["React Native", "iOS Native", "Android Native", "Flutter"],
    },
    {
      title: "Cloud",
      items: ["AWS Cloud", "Azure"],
    },
    {
      title: "CMS",
      items: ["WordPress", "Drupal", "WooCommerce"],
    },
    {
      title: "Database",
      items: ["MongoDB", "MySQL"],
    },
    {
      title: "Automation",
      items: ["Playwright"],
    },
  ];

  const caseStudiesItems = [
    {
      title: "Platform Modernization enabled 3x sales growth",
      category: "Education & eLearning",
      description: "Implemented cutting-edge tech, optimizing UI/UX, enhancing performance",
      image: servicesimg,
      href: "/case-studies/education-platform",
    },
    {
      title: "Healthcare Platform Digital Transformation",
      category: "Healthcare",
      description: "Revolutionized patient care with integrated telemedicine solution",
      image: servicesimg,
      href: "/case-studies/healthcare-platform",
    },
    {
      title: "E-Commerce Platform Scaling Success",
      category: "Retail",
      description: "Built scalable e-commerce solution handling 10M+ transactions",
      image: servicesimg,
      href: "/case-studies/ecommerce-platform",
    },
    {
      title: "Fintech Mobile Banking Revolution",
      category: "Financial Services",
      description: "Created secure mobile banking app with advanced analytics",
      image: servicesimg,
      href: "/case-studies/fintech-banking",
    },
  ];

  const industriesItems = [
    { title: "Healthcare", href: "/industries/healthcare" },
    { title: "Finance & Banking", href: "/industries/finance" },
    { title: "E-Commerce & Retail", href: "/industries/ecommerce" },
    { title: "Education & eLearning", href: "/industries/education" },
    { title: "Manufacturing", href: "/industries/manufacturing" },
    { title: "Technology", href: "/industries/technology" },
    { title: "Real Estate", href: "/industries/real-estate" },
    { title: "Transportation", href: "/industries/transportation" },
  ];


  const toggleAccordion = (value) => {
    setOpenAccordion(openAccordion === value ? null : value);
  };

  return (
    <>
      <nav className="bg-white sticky top-0 z-50 border-b border-black/10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center z-50">
              <img
                src={logo}
                alt="Next Gen Solutions"
                style={{ width: '112px', height: '150px', marginTop: '20px' }}
                className="object-contain"
              />
            </Link>

            {/* Desktop Navigation Items */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Services */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-nav-text hover:text-primary transition-colors py-8">
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "services" ? "rotate-180" : ""}`} />
                </button>
                {activeDropdown === "services" && (
                  <div className="fixed left-0 right-0 top-20 bg-white border-b border-black/10 shadow-2xl animate-nav-dropdown">
                    <div className="container mx-auto px-6 lg:px-12 py-8">
                      <div className="grid grid-cols-12 gap-8">
                        {/* Image Section */}
                        <div className="col-span-3">
                          <div className="relative h-full min-h-[280px] rounded-lg overflow-hidden group">
                            <img
                              src={servicesimg}
                              alt="Our Services"
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex items-end p-6">
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                <h3 className="text-black text-xl font-bold mb-2">
                                  Leading Tech Offerings
                                </h3>
                                <p className="text-black text-sm">
                                  Comprehensive solutions for your business
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Services List */}
                        <div className="col-span-9">
                          <div className="grid grid-cols-3 gap-x-6 gap-y-2">
                            {servicesItems.map((item) => (
                              <Link
                                key={item.href}
                                to={item.href}
                                className="hover-effect flex items-center group py-2 px-3 rounded text-nav-text transition-colors duration-500"
                              >
                                {/* Text */}
                                <span className="text-sm group-hover:text-gradient">
                                  {item.title}
                                </span>

                                {/* Icon: hidden initially, appears on hover */}
                                <span className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <ArrowUpRight
                                    className="h-4 w-5"
                                    stroke="url(#hoverGradient)"
                                    strokeWidth={2}
                                  />
                                </span>

                                {/* SVG Gradient Definition */}
                                <svg width="0" height="0">
                                  <defs>
                                    <linearGradient id="hoverGradient" x1="0" y1="0" x2="1" y2="1">
                                      <stop offset="0%" stopColor="#17312C" />
                                      <stop offset="100%" stopColor="#56B77E" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                              </Link>

                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Technologies */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("technologies")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-nav-text hover:text-primary transition-colors py-8">
                  <span>Technologies</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "technologies" ? "rotate-180" : ""}`} />
                </button>
                {activeDropdown === "technologies" && (
                  <div className="fixed left-0 right-0 top-20 bg-white border-b border-black/10 shadow-2xl animate-nav-dropdown">
                    <div className="container mx-auto px-6 lg:px-12 py-8">
                      <div className="grid grid-cols-12 gap-8">
                        {/* Image Section */}
                        <div className="col-span-3">
                          <div className="relative h-full min-h-[280px] rounded-lg overflow-hidden group">
                            <img
                              src={servicesimg}
                              alt="Our Services"
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex items-end p-6">
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                <h3 className="text-black text-xl font-bold mb-2">
                                  Leading Tech Offerings
                                </h3>
                                <p className="text-black/80 text-sm">
                                  Comprehensive solutions for your business
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Technologies List */}
                        <div className="col-span-9">
                          <div className="grid grid-cols-4 gap-6">
                            {technologiesCategories.map((category) => (
                              <div key={category.title}>
                                <h3 className="text-gradient-effect mb-3 text-primary flex items-center justify-between">
                                  {category.title}
                                </h3>
                                <ul className="space-y-2">
                                  {category.items.map((item) => (
                                    <li key={item}>
                                      <Link
                                        to={`/technologies/${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                                        className="hover-effect flex items-center group py-2 px-3 rounded text-nav-text transition-colors duration-500"
                                      >
                                        {/* Text */}
                                        <span className="text-sm group-hover:text-gradient">
                                          {item}
                                        </span>
                                        {/* Icon: hidden initially, appears on hover */}
                                        <span className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                          <ArrowUpRight
                                            className="h-4 w-5"
                                            stroke="url(#hoverGradient)"
                                            strokeWidth={2}
                                          />
                                        </span>
                                        {/* SVG Gradient Definition */}
                                        <svg width="0" height="0">
                                          <defs>
                                            <linearGradient id="hoverGradient" x1="0" y1="0" x2="1" y2="1">
                                              <stop offset="0%" stopColor="#17312C" />
                                              <stop offset="100%" stopColor="#56B77E" />
                                            </linearGradient>
                                          </defs>
                                        </svg>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Industries */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("industries")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-nav-text hover:text-primary transition-colors py-8">
                  <span>Industries</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "industries" ? "rotate-180" : ""}`} />
                </button>
                {activeDropdown === "industries" && (
                  <div className="fixed left-0 right-0 top-20 bg-white border-b border-black/10 shadow-2xl animate-nav-dropdown">
                    <div className="container mx-auto px-6 lg:px-12 py-8">
                      <div className="grid grid-cols-12 gap-8">
                        {/* Image Section */}
                        <div className="col-span-3">
                          <div className="relative h-full min-h-[280px] rounded-lg overflow-hidden group">
                            <img
                              src={servicesimg}
                              alt="Our Services"
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex items-end p-6">
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                <h3 className="text-black text-xl font-bold mb-2">
                                  Leading Tech Offerings
                                </h3>
                                <p className="text-black/80 text-sm">
                                  Comprehensive solutions for your business
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Industries List */}
                        <div className="col-span-9">
                          <div className="grid grid-cols-3 gap-x-6 gap-y-2">
                            {industriesItems.map((item) => (
                              <Link
                                key={item.href}
                                to={item.href}
                                className="hover-effect flex items-center group py-2 px-3 rounded text-nav-text transition-colors duration-500 hover:bg-nav-hover"
                              >
                                <span className="text-sm group-hover:text-gradient">{item.title}</span>
                                <span className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <ArrowUpRight
                                    className="h-4 w-5"
                                    stroke="url(#hoverGradient)"
                                    strokeWidth={2}
                                  />
                                </span>
                                {/* SVG Gradient Definition */}
                                <svg width="0" height="0">
                                  <defs>
                                    <linearGradient id="hoverGradient" x1="0" y1="0" x2="1" y2="1">
                                      <stop offset="0%" stopColor="#D8318A" />
                                      <stop offset="100%" stopColor="#E37439" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Case Studies */}
              <Link
                to="/casestudies"
                className="text-nav-text hover:text-primary transition-colors py-8 flex items-center"
              >
                <span>Case Studies</span>
              </Link>

              {/* Blog */}
              <Link
                to="/blog"
                className="text-nav-text hover:text-primary transition-colors py-8 flex items-center"
              >
                <span>Blog</span>
              </Link>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4 z-50">
              <Link to="/contact-us" className="contact-btn hidden lg:inline-flex items-center justify-center rounded-md text-sm font-normal transition-colors bg-[#F2735B] text-white hover:bg-[#F2735B]/90 h-10 px-4 py-2">
                Contact Us
              </Link>
              <button
                onClick={() => setSearchOpen(true)}
                className="search-icon-container hidden lg:block text-nav-text p-2 rounded-full"
              >
                <Search className="w-5 h-5 text-black" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden text-nav-text hover:text-primary transition-colors p-2"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Slide-in Panel */}
      {/* Mobile Menu Slide-in Panel */}
      <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${mobileMenuOpen ? "visible" : "invisible delay-300"}`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-white transition-opacity duration-300 ease-in-out ${mobileMenuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Side Panel */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-full sm:w-[400px] bg-nav border-l border-black/10 overflow-y-auto transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-nav-text text-lg">Menu</h2>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-nav-text hover:text-primary transition-colors p-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Accordion Menu */}
            <div className="space-y-2">
              {/* Services Accordion */}
              <div className="border-b border-black/10">
                <button
                  onClick={() => toggleAccordion("services")}
                  className="flex justify-between items-center w-full py-4 text-nav-text hover:text-primary transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === "services" ? "rotate-180" : ""}`} />
                </button>
                {openAccordion === "services" && (
                  <div className="pb-4 space-y-2 pl-4">
                    {servicesItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm text-nav-text hover:text-primary py-2"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Technologies Accordion */}
              <div className="border-b border-black/10">
                <button
                  onClick={() => toggleAccordion("technologies")}
                  className="flex justify-between items-center w-full py-4 text-nav-text hover:text-primary transition-colors"
                >
                  <span>Technologies</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === "technologies" ? "rotate-180" : ""}`} />
                </button>
                {openAccordion === "technologies" && (
                  <div className="pb-4 space-y-4 pl-4">
                    {technologiesCategories.map((category) => (
                      <div key={category.title}>
                        <h4 className="font-semibold text-primary text-sm mb-2">
                          {category.title}
                        </h4>
                        <div className="space-y-2">
                          {category.items.map((item) => (
                            <Link
                              key={item}
                              to={`/technologies/${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block text-sm text-nav-text hover:text-primary py-1"
                            >
                              {item}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Industries Accordion */}
              <div className="border-b border-black/10">
                <button
                  onClick={() => toggleAccordion("industries")}
                  className="flex justify-between items-center w-full py-4 text-nav-text hover:text-primary transition-colors"
                >
                  <span>Industries</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === "industries" ? "rotate-180" : ""}`} />
                </button>
                {openAccordion === "industries" && (
                  <div className="pb-4 space-y-2 pl-4">
                    {industriesItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm text-nav-text hover:text-primary py-2"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Case Studies Link */}
              <div className="border-b border-black/10">
                <Link
                  to="/casestudies"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex justify-between items-center w-full py-4 text-nav-text hover:text-primary transition-colors"
                >
                  <span>Case Studies</span>
                </Link>
              </div>

              {/* Blog Link */}
              <div className="border-b border-black/10">
                <Link
                  to="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex justify-between items-center w-full py-4 text-nav-text hover:text-primary transition-colors"
                >
                  <span>Blog</span>
                </Link>
              </div>
            </div>

            {/* Contact Button and Search at Bottom */}
            <div className="pt-6 space-y-3 border-t border-black/10">
              <Link
                to="/contact-us"
                className="contact-btn w-full inline-flex items-center justify-center rounded-md text-sm font-normal h-10 px-4 py-2 text-white bg-[#F2735B]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setSearchOpen(true);
                }}
                className="w-full text-nav-text hover:text-primary transition-colors p-3 hover:bg-nav-hover rounded-lg flex items-center justify-center space-x-2"
              >
                <Search className="w-5 h-5" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Dialog/Modal */}
      {searchOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-white/50 z-50"
            onClick={() => setSearchOpen(false)}
          />

          {/* Modal Content */}
          <div className="search-popup fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-[600px] bg-white border border-black/10 rounded-lg shadow-2xl p-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-gradient-effect text-nav-text text-2xl font-semibold">Search</h2>
              <button
                onClick={() => setSearchOpen(false)}
                className="text-nav-text hover:text-primary transition-colors p-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search for services, technologies, case studies..."
                  className="w-full pl-10 pr-4 py-3 bg-nav-hover border border-black/10 text-nav-text placeholder:text-muted-foreground rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  autoFocus
                />
              </div>

              <div className="space-y-3 mt-6">
                <p className="text-sm text-muted-foreground">Popular Searches</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Web Development",
                    "Mobile Apps",
                    "Cloud Services",
                    "AI Solutions",
                    "E-Commerce",
                  ].map((tag) => (
                    <button
                      key={tag}
                      className="bg-gradient px-4 py-2 bg-nav-hover text-nav-text rounded-lg text-sm hover:bg-primary hover:text-black transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

