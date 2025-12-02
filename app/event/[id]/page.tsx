import fetcher from "@/lib/fetcher";
import { EventListResponse, EventType } from "@/lib/types/event";
import EventDetail from "../components/event-detail";

export default async function EventDetailsPage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;

  const eventData = await fetcher<EventType>(
    `https://dummyjson.com/products/${id}`
  );

  if (!eventData) {
    return <div className="text-center py-20 text-xl">Event not found</div>;
  }

  const allEvents = await fetcher<EventListResponse>(
    "https://dummyjson.com/products?limit=30"
  );

  const similar = allEvents?.products
    ? allEvents.products
        .filter(ev => ev.category === eventData.category && ev.id !== eventData.id)
        .slice(0, 4)
    : [];

  return (
    <main className="container mx-auto p-6">
      <EventDetail event={eventData} similar={similar} />
    </main>
  );
}
