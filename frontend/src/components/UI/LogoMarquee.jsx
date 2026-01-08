import React from 'react';

const defaultLogos = [
    { name: 'Google', url: 'https://logo.clearbit.com/google.com' },
    { name: 'Microsoft', url: 'https://logo.clearbit.com/microsoft.com' },
    { name: 'Amazon', url: 'https://logo.clearbit.com/amazon.com' },
    { name: 'Netflix', url: 'https://logo.clearbit.com/netflix.com' },
    { name: 'Spotify', url: 'https://logo.clearbit.com/spotify.com' },
    { name: 'Uber', url: 'https://logo.clearbit.com/uber.com' },
    { name: 'Airbnb', url: 'https://logo.clearbit.com/airbnb.com' },
    { name: 'Slack', url: 'https://logo.clearbit.com/slack.com' },
    { name: 'Adobe', url: 'https://logo.clearbit.com/adobe.com' },
    { name: 'Shopify', url: 'https://logo.clearbit.com/shopify.com' },
    { name: 'Google', url: 'https://logo.clearbit.com/google.com' },
    { name: 'Microsoft', url: 'https://logo.clearbit.com/microsoft.com' },
    { name: 'Amazon', url: 'https://logo.clearbit.com/amazon.com' },
    { name: 'Netflix', url: 'https://logo.clearbit.com/netflix.com' },
    { name: 'Spotify', url: 'https://logo.clearbit.com/spotify.com' },
    { name: 'Uber', url: 'https://logo.clearbit.com/uber.com' },
    { name: 'Airbnb', url: 'https://logo.clearbit.com/airbnb.com' },
    { name: 'Slack', url: 'https://logo.clearbit.com/slack.com' },
    { name: 'Adobe', url: 'https://logo.clearbit.com/adobe.com' },
    { name: 'Shopify', url: 'https://logo.clearbit.com/shopify.com' },
];

export const LogoMarquee = ({ logos = defaultLogos, title = "Trusted by Industry Leaders", className = "" }) => {
    return (
        <div className={`bg-white py-12 border-y border-black/5 overflow-hidden ${className}`}>
            <div className="relative w-full max-w-7xl mx-auto px-4 lg:px-8">
                {title && (
                    <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
                        {title}
                    </p>
                )}

                {/* Marquee Container */}
                <div className="relative mask-image-gradient w-full overflow-hidden"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                    }}>
                    <div className="flex w-max animate-scroll hover:[animation-play-state:paused] items-center">
                        {/* First Set of Logos */}
                        <div className="flex items-center gap-16 mx-8">
                            {logos.map((logo, index) => (
                                <img
                                    key={`logo-1-${index}`}
                                    src={logo.url}
                                    alt={logo.name}
                                    className="h-8 w-auto object-contain transition-all duration-300"
                                />
                            ))}
                        </div>

                        {/* Second Set of Logos (Duplicate for Seamless Loop) */}
                        <div className="flex items-center gap-16 mx-8">
                            {logos.map((logo, index) => (
                                <img
                                    key={`logo-2-${index}`}
                                    src={logo.url}
                                    alt={logo.name}
                                    className="h-8 w-auto object-contain transition-all duration-300"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
