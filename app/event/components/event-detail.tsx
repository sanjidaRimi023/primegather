"use client";

import Image from "next/image";
import type { ComponentType, SVGProps } from "react";
import { EventType } from "@/lib/types/event";
import { Calendar, Tag, DollarSign, ArrowRight } from "lucide-react";
import Link from "next/link";
function InfoPill({
  icon: Icon,
  label,
  value,
}: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  value: string | number;
}) {
  return (
    <div className="flex items-center space-x-2 p-3  border border-orange-100 rounded-lg">
      <Icon className="w-10 h-10 text-white bg-orange-400 border rounded-full p-2" />
      <div className="text-sm">
        <div className="text-gray-500 font-medium">{label}</div>
        <div className="font-semibold">{value}</div>
      </div>
    </div>
  );
}


// Helper component for a modern "Similar Event" card
function SimilarEventCard({ s }: { s: EventType }) {
  return (
    <Link
      href={`/event/${s.id}`}
      className="group block h-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl rounded-xl overflow-hidden border border-gray-200"
    >
      <div className="relative w-full aspect-video">
        <Image
          src={s.thumbnail}
          alt={s.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
      
        />
      </div>

      <div className="p-4 dark:text-white">
        <h3 className="text-lg font-semibold line-clamp-2 mt-1 group-hover:text-orange-600 transition">
          {s.title}
        </h3>
        <p className="text-sm mt-1">{s.brand}</p>
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
          <span className="text-base font-bold text-orange-600">
            ${s.price}
          </span>
          <div className="flex items-center text-sm font-medium text-orange-600">
            View <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function EventDetail({
  event,
  similar,
}: {
  event: EventType;
  similar: EventType[];
}) {
  return (
    <section className="space-y-16 container mx-auto px-4 sm:px-6 lg:px-8 py-10 dark:text-white">
      <header className="text-center md:text-left">
        <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-snug">
          {event.title}
        </h1>
        <p className="text-xl text-orange-600 font-medium mt-3">
          Organized by 
          <span className="underline decoration-double mx-2 decoration-2 decoration-orange-500">
            {event.brand}
          </span>
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

        <div className="lg:col-span-2 w-full aspect-video relative rounded-2xl overflow-hidden shadow-2xl shadow-orange-200/50">
          <Image
            src={event.thumbnail}
            alt={event.title}
            fill
            className="object-cover"

            priority
          />
        </div>

  
        <div className="lg:col-span-1 flex flex-col space-y-8  p-6 rounded-xl border  shadow-lg">
  
          <div className="space-y-4">
            <div className="text-4xl font-bold">
              <span className="text-orange-600">${event.price}</span>
            </div>

            <button className="w-full px-6 py-4 text-lg bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition duration-300 transform hover:scale-[1.01] shadow-lg shadow-orange-500/50 flex items-center justify-center space-x-2">
              <span>Register Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="border-t pt-4 space-y-4">
            <h2 className="text-xl font-bold">Event Details</h2>
            <div className="grid grid-cols-1 gap-3">
              <InfoPill
                icon={DollarSign}
                label="Pricing"
                value={`$${event.price}`}
              />
              <InfoPill icon={Tag} label="Category" value={event.category} />
              <InfoPill icon={Calendar} label="Date" value="Oct 24, 2025" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto space-y-6 pt-8">
        <h2 className="text-3xl font-bold border-b pb-2">
          About This Event
        </h2>
        <p className="text-lg">
          {event.description}
        </p>
      </div>

      <div className="pt-8">
        <h2 className="text-3xl font-bold mb-8 border-b pb-2">
          Similar Events You Might Like
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {similar.map((s) => (
            <SimilarEventCard key={s.id} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
