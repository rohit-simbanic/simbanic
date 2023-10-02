"use client";

import React, { useState } from "react";
import { useTheme } from "../context/theme-context";
import Image from "next/image";
import logoLight from "@/public/images/logoLight.svg";
import logoDark from "@/public/images/logoDark.svg";
import Link from "next/link";
import { links } from "@/data/data";
import { MdEmail } from "react-icons/md";
import Hamburger from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";

export default function HeaderMenu() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white bg-opacity-5 text-white md:block">
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
        <nav className="block font-semibold text-base lg:text-lg lg:hidden">
          <button
            className="text-gray-800 p-2 rounded-full focus:outline-none focus:bg-opacity-10"
            onClick={toggleMenu}
          >
            <Hamburger
              toggled={menuOpen}
              toggle={setMenuOpen}
              duration={0.8}
              color="#4FD1C5"
            />
          </button>
          <AnimatePresence>
            {menuOpen && (
              <motion.ul
                className={`mt-2 absolute left-0 top-[90px] w-full ${
                  theme === "dark" ? "bg-[#ffffff] bg-opacity-5" : "bg-white"
                }`}
                initial={{ opacity: 0, y: -10 }} // Initial animation state
                animate={{ opacity: 1, y: 0 }} // Animation when the menu opens
                exit={{ opacity: 0, y: -10 }}
              >
                {links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.hash}
                      className={`block p-3 active text-[#1E273B] dark:text-[#C4CDE1] ${
                        link.name === "Contact us" ? "menu-button" : ""
                      }`}
                    >
                      {link.name === "Contact us" ? (
                        <span
                          className={`flex items-center ${
                            theme === "dark" ? "bg-[#EC2F79]" : "bg-[#592CBA]"
                          }  text-white py-2 px-4 rounded-full`}
                        >
                          <MdEmail className="mr-2" />
                          Contact us
                        </span>
                      ) : (
                        <span>{link.name}</span>
                      )}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </nav>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 125,
            delay: 0.1,
            duration: 0.7,
          }}
        >
          <nav className="hidden lg:block font-semibold text-base lg:text-lg">
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
                    <span
                      className={`flex items-center ${
                        theme === "dark" ? "bg-[#EC2F79]" : "bg-[#592CBA]"
                      }  text-white py-[18px] px-[26px] rounded-[14px]`}
                    >
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
        </motion.div>
      </div>
    </header>
  );
}
