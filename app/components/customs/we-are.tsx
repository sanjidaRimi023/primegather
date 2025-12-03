'use client';
import React from 'react';
import { Users,  Wine, PartyPopper, PhoneCall, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Friendly Team',
    description: 'More than 200 teams',
  },
  {
    icon: PartyPopper,
    title: 'Perfect Venues',
    description: 'Perfect venues',
  },
  {
    icon: Wine,
    title: 'Unique Scenario',
    description: 'We thinking out of the box',
  },
  {
    icon: PartyPopper,
    title: 'Unforgettable Time',
    description: 'We make your perfect event',
  },
  {
    icon: PhoneCall,
    title: '24/7 Hours Support',
    description: 'Anytime anywhere',
  },
  {
    icon: Lightbulb,
    title: 'Brilliant Idea',
    description: 'We have million ideas',
  },
];

export default function WeAreGrid() {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center mb-4">We Are Harmoni</h2>
      <h3 className="text-2xl font-semibold text-center mb-10">No.1 Events Management</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 border rounded-lg transition-colors duration-300 cursor-pointer hover:bg-orange-500 hover:text-white"
            >
              <div className="mb-4">
                <Icon className="w-10 h-10 text-orange-500 hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
              <p className="text-gray-600 hover:text-white">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
