import Link from "next/link";
import React from "react";

type EventGridProps = {
  children?: React.ReactNode;
};

const EventGrid: React.FC<EventGridProps> = ({ children }) => {
  return (
    <>
      <section className="">
        <h1 className="text-3xl font-semibold mb-6 text-center dark:text-white">Events You Don’t Want To Miss</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
        {children}
      </div>
      <Link href="/event">
       <button className="px-4 py-2 rounded-full text-sm border border-orange-500 text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white">
        Detail
      </button>
      </Link>
      </section>
     
    </>
  );
};

export default EventGrid;
