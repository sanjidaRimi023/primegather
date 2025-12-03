import Image from "next/image";
import React from "react";

interface Partner {
  id: number;
  name: string;
  image: string;
}

const partners = [
  { id: 1, name: "Partner 1", image: "/brand1.png" },
  { id: 2, name: "Partner 2", image: "/brand2.jpeg" },
  { id: 3, name: "Partner 3", image: "/brand3.png" },
  { id: 4, name: "Partner 4", image: "/brand4.jpeg" },
  { id: 5, name: "Partner 5", image: "/brand3.png" },
  { id: 6, name: "Partner 6", image: "/brand1.png" },
  { id: 7, name: "Partner 7", image: "/brand2.jpeg" },
  { id: 8, name: "Partner 8", image: "/brand3.png" },
  { id: 9, name: "Partner 9", image: "/brand4.jpeg" },
  { id: 10, name: "Partner 10", image: "/brand3.png" },
  { id: 11, name: "Partner 11", image: "/brand1.png" },
  { id: 12, name: "Partner 12", image: "/brand2.jpeg" },
  { id: 13, name: "Partner 13", image: "/brand3.png" },
  { id: 14, name: "Partner 14", image: "/brand4.jpeg" },
  { id: 15, name: "Partner 15", image: "/brand3.png" },
];

function Brand() {
  return (
    <section className="w-full pb-10">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold dark:text-white">Our Partners</h2>
        <p className="text-lg  dark:text-white">Companies we’ve managed events for</p>
      </div>
      <div className="w-full text-5xl py-8  inline-flex flex-nowrap overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-200px),transparent_100%)] ">
        <ul className="flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
          {partners.map((partner) => (
            <li key={partner.id} className="transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,165,0,0.7)]">
              <Image
               width={100}
                  height={100}
                  className="object-contain"
                src={partner.image}
                alt={partner.name}
        
              />
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
          {partners.map((partner) => (
            <li key={partner.id} className="transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,165,0,0.7)]">
              <Image
               width={100}
                  height={100}
                  className="object-contain"
                src={partner.image}
                alt={partner.name}
        
              />
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
          {partners.map((partner) => (
            <li key={partner.id} className="transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,165,0,0.7)]">
              <Image
               width={100}
                  height={100}
                  className="object-contain"
                src={partner.image}
                alt={partner.name}
        
              />
            </li>
          ))}
        </ul>
      </div>
      
    </section>
  );
}

export default Brand;
