
import { EventType } from "@/lib/types/event";
import fetcher from "@/lib/fetcher";
import EventGrid from "./eventGrid";
import EventCard from "./event-card";

const FeatureEvents = async () => {
  const data = await fetcher("https://dummyjson.com/products?limit=30");
 
  const events = data.products as EventType[] || [];
console.log(events);
  return (
    <div>
      <EventGrid>
        {events.slice(0,6).map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </EventGrid>
      <div className="text-center mt-6">
  
</div>

    </div>
  );
};

export default FeatureEvents;
