import { EventType } from "@/lib/types/event";
import fetcher from "@/lib/fetcher";
import EventGrid from "./eventGrid";
import EventCard from "./event-card";
import Link from "next/link";

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
       <Link href="/event">
        <button className="px-6 py-3 rounded-full text-lg border border-orange-500 transition-all duration-300 bg-orange-500 text-white hover:bg-white hover:text-orange-500">
          See All Events
        </button>
      </Link>
    </section>
  );
};

export default FeatureEvents;
