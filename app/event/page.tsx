import EventGrid from "./components/eventGrid";
import EventCard from "./components/event-card";
import { EventType } from "@/lib/types/event";
import fetcher from "@/lib/fetcher";

const EventSection = async () => {
  const data = await fetcher("https://dummyjson.com/products?limit=30");

  const events = (data as { products: EventType[] }).products || [];

  return (
    <section className="py-12 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-6 text-center dark:text-white">
        Events You Don’t Want To Miss
      </h1>
      <EventGrid>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </EventGrid>
      <div className="text-center mt-6"></div>
    </section>
  );
};

export default EventSection;
