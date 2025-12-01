"use client";

import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Button({ children, className = "" }: Props) {
  const base =
    "px-4 py-2 rounded-full font-semibold w-full text-white " +
    "bg-gradient-to-r from-[#ff5a0a] to-[#ffa727] " +
    "transition-transform duration-300 ease-out " +
    "hover:scale-105 hover:from-[#ffa727] hover:to-[#ff5a0a]";

  return <button className={base + " " + className}>{children}</button>;
}
