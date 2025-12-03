"use client";

import { useEffect, useMemo, useState } from "react";
import EventGrid from "./components/eventGrid";
import EventCard from "./components/event-card";
import { EventListResponse, EventType } from "@/lib/types/event";

export default function EventSection() {
  const [allEvents, setAllEvents] = useState<EventType[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<EventType[]>([]);

  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [sort, setSort] = useState<string>("");

  const [page, setPage] = useState<number>(1);
  const limit = 9;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/products?limit=80");
      const json: EventListResponse = await res.json();

      setAllEvents(json.products);
      setFilteredEvents(json.products);
    };
    fetchData();
  }, []);

  //filter search sort section
  const categories = useMemo(() => {
    const cats = allEvents.map((event) => event.category);
    return Array.from(new Set(cats));
  }, [allEvents]);

  useEffect(() => {
    let temp: EventType[] = [...allEvents];

    if (search) {
      temp = temp.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category) {
      temp = temp.filter((item) => item.category === category);
    }

    if (sort === "price-asc") {
      temp = temp.sort((a, b) => a.price - b.price);
    }
    if (sort === "price-desc") {
      temp = temp.sort((a, b) => b.price - a.price);
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFilteredEvents(temp);
    setPage(1);
  }, [search, category, sort, allEvents]);

  const start = (page - 1) * limit;
  const end = start + limit;
  const paginated = filteredEvents.slice(start, end);

  return (
    <section className="pb-12 flex flex-col justify-center items-center">
      <div
        className="relative h-60 w-full bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/eventbg1.jpg')" }}
      >
        <h1 className="text-4xl font-bold text-white">
          Events You Don’t Want To Miss
        </h1>

        {/* Search / Filter / Sort */}
        <div className="max-w-6xl mx-auto mt-6 flex flex-col md:flex-row items-center gap-3 px-3 w-full justify-center">
          <input
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-4 py-2 bg-white w-full md:w-60 rounded-lg shadow"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border px-4 py-2 bg-white w-full md:w-60 rounded-lg shadow"
          >
            <option value="">All Categories</option>

            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border px-4 py-2 bg-white w-full md:w-60 rounded-lg shadow"
          >
            <option value="">Sort by</option>
            <option value="price-asc">Price Low to High</option>
            <option value="price-desc">Price High to Low</option>
          </select>
        </div>
      </div>

      <EventGrid>
        {paginated.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </EventGrid>

      <div className="flex gap-2 mt-6">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-4 py-2 bg-gray-300 text-black rounded-lg disabled:opacity-50"
        >
          Previous
        </button>

        <button
          disabled={end >= filteredEvents.length}
          onClick={() => setPage((p) => p + 1)}
          className="px-8 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
}
