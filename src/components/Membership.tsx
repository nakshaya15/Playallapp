import React from 'react';

const MembershipPage: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-start justify-center text-white p-8 md:p-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <img
          src="/mem.jpg"
          alt="Soccer ball on grass"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 max-w-2xl mt-40">
        <p className="text-sm uppercase tracking-wide font-bold mb-2 text-orange-400">Play Better</p>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          We Are Redefining Sports. Experience The Difference.
        </h1>
        {/* The "Book Now" button on this page will not open a form */}
        <button
          className="mt-6 inline-block bg-white text-orange-500 font-semibold py-2 px-6 rounded-md hover:bg-gray-200 transition-colors"
        >
          Book Now
        </button>
      </div>
      <a href="https://wa.me/" className="fixed bottom-6 right-6 z-20">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Icon" className="w-12 h-12" />
      </a>
    </div>
  );
};

export default MembershipPage;