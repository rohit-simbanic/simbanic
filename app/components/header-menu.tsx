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
import { FaChevronDown } from "react-icons/fa6";
import getHired from "@/public/images/get-hired-1.png";
import { usePathname } from "next/navigation";

export default function HeaderMenu() {
  const { theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenu(!isMobileMenu);
  };
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
                  className={`mt-[73px] absolute left-0 top-[57px] z-50 w-full ${
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
                        className={`block group p-3 active text-[#1E273B] dark:text-[#C4CDE1] ${
                          link.name === "Contact us" ? "menu-button" : ""
                        }`}
                      >
                        {link.name === "Contact us" ? (
                          <span
                            className={`flex items-center ${
                              theme === "dark" ? "bg-[#EC2F79]" : "bg-[#592CBA]"
                            }  text-white py-2 px-4 rounded-full`}
                            onClick={toggleMenu}
                          >
                            <MdEmail className="mr-2" />
                            Contact us
                          </span>
                        ) : link.name === "Services" ? (
                          <>
                            <div
                              className="flex gap-2 items-center"
                              onClick={toggleMobileMenu}
                            >
                              <span>{link.name}</span>
                              {link.name === "Services" && <FaChevronDown />}
                            </div>
                            {link.name === "Services" && isMobileMenu && (
                              <div
                                className={`relative top-[0] left-0  transition-all duration-500 ease-in-out z-50 w-full}`}
                              >
                                <div
                                  className={`bg-white dark:bg-opacity-5 py-2 px-5 rounded-md flex gap-2 justify-between items-center`}
                                >
                                  <div>
                                    {link.sublinks &&
                                      link.sublinks.map((mysublinks, i) => (
                                        <div key={i} onClick={toggleMenu}>
                                          {/* <h1 className="text-lg font-semibold">
                                      {mysublinks.Head}
                                    </h1> */}

                                          {mysublinks.sublink.map(
                                            (slink, i) => (
                                              <li
                                                className="text-sm text-gray-600 my-5"
                                                key={i}
                                              >
                                                <Link
                                                  href={slink.link}
                                                  className="hover:text-primary flex gap-2"
                                                >
                                                  <div className="">
                                                    <div className="flex gap-1 items-center">
                                                      <p className="">
                                                        {slink.name}
                                                      </p>
                                                    </div>
                                                  </div>
                                                </Link>
                                              </li>
                                            )
                                          )}
                                        </div>
                                      ))}
                                  </div>
                                </div>
                              </div>
                            )}
                          </>
                        ) : (
                          <span onClick={toggleMenu}>{link.name}</span>
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
              <ul className="mx-auto flex items-center gap-3">
                {links.map((link, i) => (
                  <Link
                    key={i}
                    href={
                      link.name === "Contact us" ? "/contact" : `${link.hash}`
                    }
                    className={`${
                      link.name === "Services" ? "group relative" : ""
                    } p-3 xl:px-8 xl:py-3 active text-[#1E273B] dark:text-[#C4CDE1] ${
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
                    ) : link.name === "Services" ? (
                      <>
                        <span className="flex items-center gap-2">
                          {link.name}
                          <FaChevronDown />
                        </span>
                        {link.name === "Services" && (
                          <div className="absolute top-[28px] -left-[407px] transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[769px] transform">
                            <div className="relative top-6 p-6 bg-white dark:bg-[#412767] rounded-xl shadow-xl w-full">
                              <div className="w-10 h-10 bg-white dark:bg-[#412767] transform rotate-45 absolute top-0 left-[17.25rem] z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>

                              <div className="relative z-50">
                                <div className="grid grid-cols-2 gap-6">
                                  {link.sublinks &&
                                    link.sublinks.map((mysublinks, i) => (
                                      <div key={i}>
                                        {/* <h1 className="text-lg font-semibold">
                                      {mysublinks.Head}
                                    </h1> */}

                                        {mysublinks.sublink.map((slink, i) => (
                                          <li
                                            className="text-sm text-gray-600"
                                            key={i}
                                          >
                                            <Link
                                              href={slink.link}
                                              className="hover:text-primary flex gap-2"
                                            >
                                              <div className="">
                                                <div className="flex gap-3 items-center">
                                                  <Image
                                                    src={slink.logoUrl}
                                                    alt=""
                                                    height={70}
                                                    width={70}
                                                  />
                                                  <div>
                                                    <p className="dark:text-white">
                                                      {slink.name}
                                                    </p>
                                                    <p className="text-14px font-light dark:text-[#D7D2D2] mt-2">
                                                      {slink.description}
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                            </Link>
                                          </li>
                                        ))}
                                      </div>
                                    ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </>
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
