import React from "react";
import EventGrid from "../components/eventGrid";
import EventCard from "../components/event-card";
import { EventType } from "@/lib/types/event";

const EventSection = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=30");
  const data = (await res.json()) as {products?: EventType[]};
  const events = data.products??[];


  return (
    <div>
      <EventGrid>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </EventGrid>
    </div>
  );
};

export default EventSection;
