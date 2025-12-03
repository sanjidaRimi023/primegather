'use client';
import React from 'react';

export default function OfferPage() {
  return (
    <section className="relative w-full p-10 my-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/eventbg3.jpg')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          30% Off in June~July for Birthday Events
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Contact us now and we will make your event unique & unforgettable
        </p>
        <button className="px-6 py-3 bg-linear-to-r from-[#ff5a0a] to-amber-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300">
          Connect Us Now
        </button>
      </div>
    </section>
  );
}
