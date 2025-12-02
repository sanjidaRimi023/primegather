import EventGrid from "./components/eventGrid";
import EventCard from "./components/event-card";
import { EventType } from "@/lib/types/event";
import fetcher from "@/lib/fetcher";

const EventSection = async () => {
  const data = await fetcher("https://dummyjson.com/products?limit=30");
 
  const events = data.products as EventType[] || [];
console.log(events);
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
