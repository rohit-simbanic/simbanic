"use client";

import React from "react";
import { useTheme } from "../context/theme-context";
import Image from "next/image";
import logoLight from "@/public/images/logoLight.svg";
import Link from "next/link";
import { links } from "@/data/data";

export default function HeaderMenu() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white bg-opacity-5 text-white hidden md:block dark:bg-gray-700">
      <div className="container mx-auto flex items-center h-24">
        <Link href="/" className="flex items-center justify-center">
          <Image
            className="h-16"
            src={logoLight}
            alt="logo"
            width={232}
            height={36}
          />
        </Link>
        <nav className="contents font-semibold text-base lg:text-lg">
          <ul className="mx-auto flex items-center">
            {links.map((link, i) => (
              <Link
                key={i}
                href={link.hash}
                className="p-5 xl:p-8 active text-[#1E273B] dark:text-[#C4CDE1]"
              >
                <span>{link.name}</span>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
