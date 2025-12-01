"use client"
import { EventType } from "@/lib/types/event";
import Image from "next/image";
import React, { useState } from "react";
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion'
import Button from "./customs/button";
type EventCardProps = {
  event: EventType;
};

const EventCard: React.FC<EventCardProps> = ({ event }) => {

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prevState) => !prevState);
  };
  return (
    <>
      <div className='border'>
      <div className='rounded-md p-2 '>
        <Image
          src={event.images?.[0] || ""}
          alt='shoes'
          width={1000}
          height={1000}
          className='h-52 w-full rounded-md object-cover transition-all duration-300'
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
          }}
        />
        <div className=' pt-2'>
          <div className='flex justify-between'>
            <h1 className='font-semibold text-xl dark:text-white'>{event.title}</h1>
            <motion.button
              className=' text-2xl text-red-400 pr-2 '
              onClick={handleClick}
              animate={{ scale: isActive ? 1.2 : 1 }}
              transition={{ type: 'spring', stiffness: 1000, damping: 10 }}
            >
              {isActive ? (
                <>
                  <Heart className=' fill-red-400' />
                </>
              ) : (
                <>
                  <Heart />
                </>
              )}
            </motion.button>
          </div>
          <p className='text-xs dark:text-white'>
           {event.description}
          </p>
          <div className='flex justify-between py-1'>
            <span className='font-semibold text-xl dark:text-white'>$39</span>
        
          </div>
          <Button>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
    </>
  );
};

export default EventCard;
