"use client";
import { EventType } from "@/lib/types/event";
import Image from "next/image";

import Button from "../../components/customs/button";
import Link from "next/link";
type EventCardProps = {
  event: EventType;
};

const EventCard: React.FC<EventCardProps> = ({ event }) => {

  return (
    <>
      <div className="border border-amber-300 rounded-md transition-all duration-300 hover:border-orange-500 p-3 hover:shadow-2xl hover:shadow-amber-600">
        <div className="relative">
          <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-3 py-1 rounded-full z-20">
            {event.stock > 0 ? `In stock: ${event.stock}` : "Out of stock"}
          </span>
          <span className="bg-orange-500  z-20 absolute top-9  left-2 text-white text-xs px-3 py-1 rounded-full">
            {event.category}
          </span>

          <Image
            src={event.images?.[0] || ""}
            alt={event.title}
            width={1000}
            height={1000}
            className="h-52 w-full rounded-md object-cover transition-all duration-300"
          />
        </div>

        {/* Content */}
        <div className="mt-3">
          <h1 className="font-semibold text-xl dark:text-white mt-2">
            {event.title}
          </h1>

          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">
            {event.description}
          </p>

          <div className="flex justify-between items-center mt-3">
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Ticket: {event.price}
            </span>
          </div>

          <div className="flex gap-3 mt-4">
            <Button>Tickets</Button>

            <Link
              href={`/event/${event.id}`}
              className="px-4 py-2 rounded-full text-sm border border-orange-500 text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white"
            >
              Detail
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
