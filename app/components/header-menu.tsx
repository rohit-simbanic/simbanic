"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "../context/theme-context";
import Image from "next/image";
import logoLight from "@/public/images/logoLight.svg";
import logoDark from "@/public/images/logoDark.svg";
import Link from "next/link";
import { links } from "@/data/data";
import { MdEmail } from "react-icons/md";
import Hamburger from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";

export default function HeaderMenu() {
  const { theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const headerVariants = {
    initial: { y: -64, opacity: 1 }, // Initial state when not scrolled
    scrolled: { y: 0, opacity: 1 }, // State after scrolling 20px
  };

  const headerTransition = {
    duration: 0.3,
    ease: "easeInOut",
  };

  return (
    <motion.header
      className={`bg-${
        isScrolled
          ? "white lg:fixed lg:top-0 lg:left-0 lg:right-0 lg:z-20 dark:bg-[#0E0421] lg:pt-0 dark:border-b dark:border-solid dark:border-cyan-800"
          : "white bg-opacity-5"
      } text-white md:block pt-[65px]`}
      initial="initial" // Initial animation state
      animate={isScrolled ? "scrolled" : "initial"} // Animate when scrolled 20px
      variants={headerVariants}
      transition={headerTransition}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center justify-center ps-3">
            <Image
              className="h-16 sm:w-150"
              src={theme === "dark" ? logoDark : logoLight}
              alt="logo"
              width={150}
              height={36}
              priority={true}
            />
          </Link>
          {/* mobile menu */}
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

            {menuOpen && (
              <AnimatePresence>
                <motion.ul
                  className={`mt-[73px] absolute left-0 top-[57px] z-30 w-full ${
                    theme === "dark" ? "bg-[#0E0421]" : "bg-white"
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
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
              </AnimatePresence>
            )}
          </nav>
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            <nav className="font-semibold text-base lg:text-lg">
              <ul className="mx-auto flex items-center ">
                {links.map((link, i) => (
                  <Link
                    key={i}
                    href={link.hash}
                    className={`relative group p-3 xl:px-8 xl:py-3 active text-[#1E273B] dark:text-[#C4CDE1] ${
                      link.name === "Contact us" ? "menu-button" : ""
                    }`}
                  >
                    {link.name === "Contact us" ? (
                      <span
                        className={`flex items-center ${
                          theme === "dark" ? "bg-[#EC2F79]" : "bg-[#592CBA]"
                        }  text-white py-[11px] px-[26px] rounded-[14px] hover:scale-[1.07] transition-all`}
                      >
                        <MdEmail className="mr-2" />
                        Contact us
                      </span>
                    ) : link.name === "Company" || link.name === "Services" ? (
                      <div className="">
                        <span className="flex items-center gap-2">
                          {link.name}
                          <FaChevronDown />
                        </span>
                        {(link.name === "Company" ||
                          link.name === "Services") && (
                          <div>
                            <div
                              className={`absolute top-[2.5rem] hidden group-hover:md:block hover:md:block z-50 ${
                                link.name === "Company"
                                  ? "w-[160px]"
                                  : "w-[500px]"
                              }`}
                            >
                              <div className="py-3">
                                <div
                                  className="w-4 h-4 left-3 absolute 
                            mt-1 bg-white rotate-45"
                                ></div>
                              </div>
                              <div
                                className={`bg-white p-5 grid ${
                                  link.name === "Company"
                                    ? "grid-cols-1"
                                    : "grid-cols-2"
                                }  gap-[.1rem]`}
                              >
                                {link.sublinks.map((mysublinks, i) => (
                                  <div key={i}>
                                    {/* <h1 className="text-lg font-semibold">
                                      {mysublinks.Head}
                                    </h1> */}
                                    {mysublinks.sublink.map((slink, i) => (
                                      <li
                                        className="text-sm text-gray-600 my-2.5"
                                        key={i}
                                      >
                                        <Link
                                          href={slink.link}
                                          className="hover:text-primary"
                                        >
                                          {slink.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <span>{link.name}</span>
                    )}
                  </Link>
                ))}
              </ul>
            </nav>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
