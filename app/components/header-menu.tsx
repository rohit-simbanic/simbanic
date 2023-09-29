"use client";

import React from "react";
import { useTheme } from "../context/theme-context";
import Image from "next/image";
import logoLight from "@/public/images/logoLight.svg";
import logoDark from "@/public/images/logoDark.svg";
import Link from "next/link";
import { links } from "@/data/data";
import { MdEmail } from "react-icons/md";

export default function HeaderMenu() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white bg-opacity-5 text-white hidden md:block">
      <div className="container mx-auto flex justify-between items-center h-24">
        <Link href="/" className="flex items-center justify-center">
          <Image
            className="h-16 sm:w-232"
            src={theme === "dark" ? logoDark : logoLight}
            alt="logo"
            width={232}
            height={36}
          />
        </Link>
        <nav className="block font-semibold text-base lg:text-lg">
          <ul className="mx-auto flex items-center">
            {links.map((link, i) => (
              <Link
                key={i}
                href={link.hash}
                className={`p-5 xl:p-8 active text-[#1E273B] dark:text-[#C4CDE1] ${
                  link.name === "Contact us" ? "menu-button" : ""
                }`}
              >
                {link.name === "Contact us" ? (
                  <span className="flex items-center bg-[#592CBA] text-white py-[25px] px-[26px] rounded-[14px]">
                    <MdEmail className="mr-2" />
                    Contact us
                  </span>
                ) : (
                  <span>{link.name}</span>
                )}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
