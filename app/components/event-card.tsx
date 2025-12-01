import Link from "next/link";
import React from "react";
type EventCardProps = {
  event: Event;
};
interface Event {
  id: string | number;
  title: string;
  description: string;
  category: string;
  rating: string;
  price: string;
}
const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <>
      <div className="border rounded p-3 hover:shadow">
        <h2 className="font-semibold text-lg">{event.title}</h2>
        <p className="text-sm text-gray-600">{event.category}</p>
        <p className="mt-2 font-medium">${event.price}</p>
        <Link
          href={`/event/${event.id}`}
          className="text-blue-600 mt-2 inline-block"
        >
          View Details
        </Link>
      </div>
    </>
  );
};

export default EventCard;
