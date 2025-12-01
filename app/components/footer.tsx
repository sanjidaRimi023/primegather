"use client";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/" },
      { name: "Careers", href: "/" },
      { name: "Customers", href: "/" },
      { name: "Pricing", href: "/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Features", href: "/" },
      { name: "Solutions", href: "/" },
      { name: "Help Center", href: "/" },
      { name: "Blog", href: "/" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/" },
      { name: "Terms of Service", href: "/" },
      { name: "Cookie Settings", href: "/" },
    ],
  },
];

const socialIcons = [
  {
    name: "LinkedIn",
    href: "/",
    svg: (
      <svg
        className="size-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
        ></path>
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "/",
    svg: (
      <svg
        className="size-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
        ></path>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "/",
    svg: (
      <svg
        className="size-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
        ></path>
      </svg>
    ),
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/60 dark:bg-black/60 backdrop-blur-lg border border-gray-200/80 dark:border-gray-800/80 shadow-lg dark:shadow-gray-900/20 py-10 px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-10 sm:pb-14">
          <div className="col-span-2">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="primeGater footer logo"
                width={150}
                height={30}
                className="h-auto w-auto"
              />
            </div>
            <p className="max-w-xs text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Built to bring people together.{" "}
              <span className="text-orange-400 font-bold">PrimeGather</span>{" "}
              connects organizers and attendees through a simple and reliable
              event platform.
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-base font-semibold text-gray-800 dark:text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200 ease-in-out"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
{/* buttom section */}
        <div className=" pt-10 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
            &copy; {currentYear} PrimeGather. All rights reserved. Built by
            seraui.
          </p>
          {/* icons */}
          <div className="flex space-x-3">
            {socialIcons.map((icon) => (
              <Link
                key={icon.name}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={icon.name}
                href={icon.href}
                className="size-10 flex items-center justify-center rounded-full text-gray-300 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-600 transition-all duration-300"
              >
                {icon.svg}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
