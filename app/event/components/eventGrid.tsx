import Link from "next/link";
import React from "react";

type EventGridProps = {
  children?: React.ReactNode;
};

const EventGrid: React.FC<EventGridProps> = ({ children }) => {
  return (
    <>
      <section className="py-12 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-6 text-center dark:text-white">Events You Don’t Want To Miss</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
        {children}
      </div>
      <Link href="/event">
       <button className="px-6 py-3 rounded-full text-lg border border-orange-500 transition-all duration-300 bg-orange-500 text-white hover:bg-white hover:text-orange-500">
        See All Events
      </button>
      </Link>
      </section>
     
    </>
  );
};

export default EventGrid;
