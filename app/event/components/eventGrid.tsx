import Link from "next/link";
import React from "react";

type EventGridProps = {
  children?: React.ReactNode;
};

const EventGrid: React.FC<EventGridProps> = ({ children }) => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
        {children}
      </div>
     
    </>
  );
};

export default EventGrid;
