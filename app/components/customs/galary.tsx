/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React, { SetStateAction, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const items = [
  {
    id: 1,
    url: "/image1.jpg",
    title: 'Tech Innovators Summit',
    description:
      'Join leading tech experts and innovators for a two-day summit packed with workshops, panels, and networking opportunities.',
    tags: ['Technology', 'Innovation', 'Summit', 'Workshops', 'Networking'],
  },
  {
    id: 2,
    url: '/image2.jpg',
    title: 'Music Fiesta 2025',
    description:
      'Experience an electrifying weekend of live music, performances, and entertainment from top artists across genres.',
    tags: ['Music', 'Live', 'Festival', 'Entertainment', 'Artists'],
  },
  {
    id: 3,
    url: '/image3.jpg',
    title: 'Startup Pitch Night',
    description:
      'Watch emerging startups pitch their ideas to investors and industry leaders in a high-energy, competitive setting.',
    tags: ['Startup', 'Pitch', 'Investors', 'Entrepreneurs', 'Competition'],
  },
  {
    id: 4,
    url: '/image4.jpg',
    title: 'Culinary Arts Expo',
    description:
      'Discover culinary trends, taste gourmet dishes, and meet renowned chefs at this immersive food and beverage event.',
    tags: ['Culinary', 'Expo', 'Chefs', 'Food', 'Tasting'],
  },
  {
    id: 5,
    url: '/image5.jpg',
    title: 'Adventure & Sports Festival',
    description:
      'Engage in thrilling outdoor activities, sports competitions, and adventure challenges for all ages and skill levels.',
    tags: ['Adventure', 'Sports', 'Outdoor', 'Festival', 'Competition'],
  },
];

const article = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

type item = {
  id: number;
  url: string;
  title: string;
  description: string;
  tags?: string[];
};
interface GalleryProps {
  items: item[];
  setIndex: React.Dispatch<SetStateAction<number>>;
  index: number | undefined;
}

function Gallery({ items, setIndex, index }: GalleryProps) {
  return (
    <div className='flex overflow-hidden gap-4 my-8'>
      {items.map((item: item, i: number) => (
        <motion.div
          key={i}
          whileTap={{ scale: 0.95 }}
          className={`rounded-xl relative transition-[width] duration-500 ease-in-out shrink-0 h-[400px] ${
            index === i ? 'w-[350px] md:w-[450px]' : 'w-[50px]'
          }`}
          onClick={() => setIndex(i)}
          onMouseEnter={() => setIndex(i)}
        >
          <motion.img
            src={item.url}
            className={`w-full h-full object-cover rounded-xl ${
              index === i ? 'cursor-default' : 'cursor-pointer'
            }`}
          />
          <AnimatePresence mode='wait'>
            {index === i && (
              <motion.article
                variants={article}
                initial='hidden'
                animate='show'
                className='absolute top-0 p-4 flex flex-col justify-end h-full rounded-xl bg-linear-to-t from-gray-100/60 to-transparent dark:from-gray-900/60 dark:text-white'
              >
                <motion.h1 variants={article} className='text-2xl font-semibold'>
                  {item.title}
                </motion.h1>
                <motion.p variants={article} className='leading-[1.2]'>
                  {item.description}
                </motion.p>
              </motion.article>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

export default function EventGallery() {
  const [index, setIndex] = useState(2);

  return (
    <section className='container mx-auto px-4  py-12'>
      <div className='flex flex-col md:flex-row items-start md:items-center gap-8'>
      
        <div className='md:w-1/3'>
          <h2 className='text-3xl dark:text-gray-300 md:text-4xl font-bold mb-4'>
            Upcoming Events
          </h2>
          <p className='text-gray-700 dark:text-gray-300'>
            Explore our curated list of events including tech summits, music festivals, and adventure challenges. Click on any event to learn more.
          </p>
        </div>
        
        <div className='md:w-2/3 w-full'>
          <Gallery items={items} index={index} setIndex={setIndex} />
        </div>
      </div>
    </section>
  );
}
