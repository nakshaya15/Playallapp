import React from 'react';

const SchoolsPage: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-start justify-center text-white p-8 md:p-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <img
          src="/bgschool1.jpg"
          alt="Sports fields"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 max-w-2xl mt-40">
        <p className="text-m uppercase tracking-wide font-bold mb-2 text-orange-400">Build. Monetize. Maintain.</p>
        <h1 className="text-3xl md:text-3xl font-extrabold leading-tight">
          Upgrade your School Ground to a Top-Notch Sports Infrastructure with <span className="text-orange-400">PROFESSIONAL</span> Maintenance & <span className="text-orange-400">ZERO INVESTMENT</span>
        </h1>
      </div>
      <a href="https://wa.me/" className="fixed bottom-6 right-6 z-20">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Icon" className="w-12 h-12" />
      </a>
    </div>
  );
};

export default SchoolsPage;