"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 md:left-64 right-0 z-50 shadow-md p-4 text-gray-700 bg-white">
      {/* Navbar container */}
      <div className="flex justify-between items-center">
        {/* Toggle button for mobile */}
        <div className="flex items-center space-x-4 md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            ☰
          </button>

          {isOpen && (
            <div className="flex space-x-4">
              <NavLink href="/" label="About" pathname={pathname} />
              <NavLink
                href="/certificates"
                label="Certificates"
                pathname={pathname}
              />
              <NavLink href="/projects" label="Projects" pathname={pathname} />
            </div>
          )}
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex space-x-4">
          <NavLink href="/" label="About" pathname={pathname} />
          <NavLink
            href="/certificates"
            label="Certificates"
            pathname={pathname}
          />
          <NavLink href="/projects" label="Projects" pathname={pathname} />
        </div>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  label,
  pathname,
}: {
  href: string;
  label: string;
  pathname: string;
}) {
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`transition-colors duration-200 ${
        isActive ? "text-indigo-600 font-semibold" : "hover:text-indigo-600"
      }`}
    >
      {label}
    </Link>
  );
}
