'use client';
import React from 'react';
import { Users, Star, MapPin, Clock, Lightbulb, TimerIcon } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Friendly Team',
    description: 'More than 200 teams',
  },
  {
    icon: Star,
    title: 'Perfect Venues',
    description: 'We provide amazing venues',
  },
  {
    icon: MapPin,
    title: 'Unique Scenario',
    description: 'We think out of the box',
  },
  {
    icon: TimerIcon,
    title: 'Unforgettable Time',
    description: 'We make your event perfect',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Anytime, anywhere',
  },
  {
    icon: Lightbulb,
    title: 'Brilliant Ideas',
    description: 'We have millions of ideas',
  },
];

export default function WeAreSection() {
  return (
    <section className="container mx-auto px-4 py-20 flex flex-col lg:flex-row gap-10">
  
      <div className="lg:w-1/2">
        <h2 className="text-4xl md:text-5xl dark:text-white font-bold mb-6">
          We Are PrimeGather
        </h2>
        <h3 className="text-2xl font-semibold mb-4 dark:text-white">No.1 Events Management</h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
         Our team is passionate about creating seamless experiences for both organizers and attendees.
        </p>
      </div>

     
      <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-4 p-4 border-l-6 border-gray-200 hover:border-orange-500 transition-colors duration-300 cursor-pointer group rounded-lg shadow-sm border"
            >
              <div className="p-3 bg-orange-100 rounded-full group-hover:bg-orange-500 transition-colors duration-300">
                <Icon className="text-orange-500 group-hover:text-white w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1 dark:text-white">{feature.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
