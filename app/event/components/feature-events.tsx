import { EventType } from "@/lib/types/event";
import fetcher from "@/lib/fetcher";
import EventGrid from "./eventGrid";
import EventCard from "./event-card";

const FeatureEvents = async () => {
  const data = await fetcher<{ products?: EventType[] }>(
    "https://dummyjson.com/products?limit=30"
  );

  const events = data?.products ?? [];

  return (
    <section className="py-12 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-6 text-center dark:text-white">
        Featured Events
      </h1>
      <EventGrid>
        {events.slice(0, 6).map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </EventGrid>
      <div className="text-center mt-6"></div>
    </section>
  );
};

export default FeatureEvents;
