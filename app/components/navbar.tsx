"use client";
import React, { useState } from "react";
import { motion, Variants, Transition } from "framer-motion";
import { Home, User, Component, Menu, X } from "lucide-react";
import Image from "next/image";
import { ModeToggle } from "./toggle-btn";

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const menuItems: MenuItem[] = [
  {
    icon: <Home className="h-5 w-5" />,
    label: "Home",
    href: "#",
  },
  {
    icon: <Component className="h-5 w-5" />,
    label: "Categorys",
    href: "#",
  },
  {
    icon: <User className="h-5 w-5" />,
    label: "About us",
    href: "#",
  },
];

const itemVariants: Variants = {
  initial: { rotateX: 0, opacity: 1 },
};

const backVariants: Variants = {
  initial: { rotateX: 90, opacity: 0 },
};

const sharedTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5,
};

// Reusable gradient button
const gradientBtn =
  "px-4 py-2 rounded-xl text-white font-semibold bg-gradient-to-r from-[#ff5a0a] to-[#ffa727] hover:opacity-90 transition";
  
const navbutton =
  "px-4 py-2 rounded-xl font-semibold transition hover:bg-gradient-to-r hover:from-[#ff5a0a] hover:to-[#ffa727] dark:text-white hover:text-white";

function Navbar(): React.JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      className="bg-white/60 dark:bg-black/60 backdrop-blur-lg border border-gray-200/80 dark:border-gray-800/80 shadow-lg dark:shadow-gray-900/20 relative overflow-hidden px-6 py-3"
      initial="initial"
      whileHover="hover"
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="prime gather logo"
          width={140}
          height={140}
          className="w-28 sm:w-36"
        />

        {/* menu item */}
        <ul className="hidden md:flex items-center gap-4">
          {menuItems.map((item: MenuItem) => (
            <motion.li key={item.label} className="relative">
              <motion.div
                className="block rounded-xl overflow-visible group relative"
                style={{ perspective: "600px" }}
                whileHover="hover"
                initial="initial"
              >
                <motion.div className="absolute inset-0 z-0 pointer-events-none rounded-2xl" />

                <motion.a
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-2 relative z-10 rounded-xl  ${navbutton}`}
                  variants={itemVariants}
                  transition={sharedTransition}
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "center bottom",
                  }}
                >
                  <span className={`transition-colors duration-300`}>
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.label}</span>
                </motion.a>

                <motion.a
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 transition-colors rounded-xl"
                  variants={backVariants}
                  transition={sharedTransition}
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "center top",
                    transform: "rotateX(90deg)",
                  }}
                >
                  <span className={`transition-colors duration-300`}>
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.label}</span>
                </motion.a>
              </motion.div>
            </motion.li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <span className="text-white">
            <ModeToggle />
          </span>
          <button className={gradientBtn}>Register</button>
        </div>

        <button
          className="md:hidden text-gray-900 dark:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
{/* mobile device */}
      {open && (
        <div className="md:hidden mt-3 bg-white dark:bg-gray-900 rounded-lg p-4">
          <ul className="space-y-3">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {item.icon}
                {item.label}
              </a>
            ))}
          </ul>

          <div className="flex flex-col gap-3 mt-4">
            <span className="text-white">
              <ModeToggle />
            </span>
            <button className={gradientBtn}>Register</button>
          </div>
        </div>
      )}
    </motion.nav>
  );
}

export default Navbar;
