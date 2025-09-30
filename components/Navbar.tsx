"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-64 right-0 z-50 shadow-md p-4 m-2 text-gray-700 flex justify-between items-center bg-white">
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <div className={`space-x-4 ${isOpen ? "block" : "hidden"} md:block`}>
        <Link
          href="/"
          className={`transition-colors duration-200 ${
            pathname === "/"
              ? "text-indigo-600"
              : "hover:text-indigo-600"
          }`}
        >
          About
        </Link>
        <Link
          href="/certificates"
          className={`transition-colors duration-200 ${
            pathname === "/certificates"
              ? "text-indigo-600"
              : "hover:text-indigo-600"
          }`}
        >
          Certificates
        </Link>
        <Link
          href="/projects"
          className={`transition-colors duration-200 ${
            pathname === "/projects"
              ? "text-indigo-600"
              : "hover:text-indigo-600"
          }`}
        >
          Projects
        </Link>
      </div>
    </nav>
  );
}
