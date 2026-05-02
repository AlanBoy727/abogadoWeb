"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Scale } from "lucide-react";
import Image from "next/image";



export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Inicio", href: "/inicio" },
    { name: "Servicios", href: "/servicios" },
    { name: "Nuestro equipo", href: "/nosotros" },
    { name: "Contacto", href: "/contacto" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="w-full border-b border-slate-200 bg-zinc-950 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/torre-abogado.png"
            alt="Bufete Ortega"
            width={60}
            height={60}
          />
          <span className="mx-2 text-2xl md:text-3xl text-slate-300 tracking-wide font-bold">Bufete de abogados ORTEGA</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const active = isActive(link.href);

            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`font-medium transition-colors duration-200 pb-1 border-b-2 ${
                    active
                      ? "text-blue-200 border-blue-700"
                      : "text-white border-transparent hover:text-blue-700"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-200"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-5 space-y-4 bg-white border-t">
          {links.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block font-medium ${
                  active ? "text-blue-700" : "text-slate-700"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}