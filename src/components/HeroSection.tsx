import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-start justify-center text-white p-8 md:p-16">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay for text readability */}
        <img
          src="/play-all-background.jpg"
          alt="Sports equipment on grass"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-2xl mt-40">
        <p className="text-sm uppercase tracking-wide font-bold mb-2 text-orange-400">Play Better</p>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          We Are Redefining Sports. Experience The Difference.
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Now book your sports venue for prices starting from
          <span className="font-bold text-orange-400"> ₹100.</span>
        </p>
      </div>

      {/* WhatsApp Icon */}
      <a href="https://wa.me/" className="fixed bottom-6 right-6 z-20">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Icon" className="w-12 h-12" />
      </a>
    </div>
  );
};

export default HeroSection;