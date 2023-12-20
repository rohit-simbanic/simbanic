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
import menuTeam from "@/public/images/discussion.png";
import bigStar from "@/public/images/bigstar.svg";
import glassdoor from "@/public/images/glassdoor.svg";
import googleLogo from "@/public/images/google-logo.svg";
import goodfirms from "@/public/images/goodfirms-logo-vector-1.svg";
import clutch from "@/public/images/clutch-co-vector-logo.svg";
import getHired from "@/public/images/get-hired-1.png";

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
      <div className="container mx-auto relative">
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
                    href={
                      link.name === "Contact us" ? "#contact" : `${link.hash}`
                    }
                    className={`group p-3 xl:px-8 xl:py-3 active text-[#1E273B] dark:text-[#C4CDE1] ${
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
                              className={`absolute top-[3.5rem] left-[324px] hidden group-hover:md:block hover:md:block z-50 ${
                                link.name === "Company"
                                  ? "w-[782px]"
                                  : "w-[782px]"
                              }`}
                            >
                              <div className="py-3"></div>
                              <div
                                className={`bg-white p-5  ${
                                  link.name === "Company"
                                    ? "grid grid-cols-1"
                                    : "flex gap-2 justify-between items-center"
                                }  gap-[.1rem]`}
                              >
                                <div
                                  className={`${
                                    link.name === "Company" ? "" : "w-2/3"
                                  }`}
                                >
                                  {link.sublinks &&
                                    link.sublinks.map((mysublinks, i) => (
                                      <div
                                        key={i}
                                        className="flex items-center justify-between"
                                      >
                                        {/* <h1 className="text-lg font-semibold">
                                      {mysublinks.Head}
                                    </h1> */}
                                        <div className="flex gap-8">
                                          {mysublinks.sublink.map(
                                            (slink, i) => (
                                              <li
                                                className="text-sm text-gray-600 my-2.5"
                                                key={i}
                                              >
                                                <Link
                                                  href={slink.link}
                                                  className="hover:text-primary flex gap-2"
                                                >
                                                  {link.name === "Company" ? (
                                                    <>
                                                      <Image
                                                        src={slink.img}
                                                        alt=""
                                                        height={20}
                                                        width={20}
                                                      />
                                                      <p>{slink.name}</p>
                                                    </>
                                                  ) : (
                                                    <div className="">
                                                      <div className="flex gap-1 items-center">
                                                        <div className="flex gap-2 items-center">
                                                          <Image
                                                            src={slink.img}
                                                            alt=""
                                                            height={20}
                                                            width={20}
                                                          />
                                                          {slink.cat}
                                                        </div>
                                                        <p className="">
                                                          - {slink.name}
                                                        </p>
                                                      </div>
                                                    </div>
                                                  )}
                                                </Link>
                                              </li>
                                            )
                                          )}
                                        </div>

                                        {link.name === "Company" && (
                                          <div className="ratings border-l-[1px] pl-3">
                                            <div className="flex items-center">
                                              <div className="p-3">
                                                <div className="flex gap-4 items-center pb-2">
                                                  <Image
                                                    src={bigStar}
                                                    alt=""
                                                    height={30}
                                                    width={30}
                                                  />
                                                  <span>5.0</span>
                                                </div>
                                                <Image
                                                  src={glassdoor}
                                                  alt=""
                                                  height={120}
                                                  width={120}
                                                />
                                              </div>
                                              <div className="border-l-[1px] p-3">
                                                <div className="flex gap-4 items-center pb-2">
                                                  <Image
                                                    src={bigStar}
                                                    alt=""
                                                    height={30}
                                                    width={30}
                                                  />
                                                  <span>5.0</span>
                                                </div>
                                                <Image
                                                  src={googleLogo}
                                                  alt=""
                                                  height={120}
                                                  width={120}
                                                />
                                              </div>
                                            </div>
                                            <div className="flex items-center border-t-[1px]">
                                              <div className="p-3">
                                                <div className="flex gap-4 items-center pb-2">
                                                  <Image
                                                    src={bigStar}
                                                    alt=""
                                                    height={30}
                                                    width={30}
                                                  />
                                                  <span>5.0</span>
                                                </div>
                                                <Image
                                                  src={goodfirms}
                                                  alt=""
                                                  height={120}
                                                  width={120}
                                                />
                                              </div>
                                              <div className="border-l-[1px] p-3">
                                                <div className="flex gap-4 items-center pb-2">
                                                  <Image
                                                    src={bigStar}
                                                    alt=""
                                                    height={30}
                                                    width={30}
                                                  />
                                                  <span>5.0</span>
                                                </div>
                                                <Image
                                                  src={clutch}
                                                  alt=""
                                                  height={120}
                                                  width={120}
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    ))}
                                </div>
                                {link.name === "Services" && (
                                  <div className=" w-1/3 border-l-[1px] pl-3">
                                    <div className="ratings ">
                                      <Image src={getHired} alt="" />
                                    </div>
                                    <h3 className="text-center w-3/4 m-auto my-3">
                                      Hire Dedicated Developers and Build Your
                                      Dream Team.
                                    </h3>
                                    <span className="flex w-5/6 mx-auto gap-2 items-center bg-[#592CBA]  text-white py-[11px] px-[26px] rounded-[14px] hover:scale-[1.07] transition-all">
                                      Get in touch
                                      <svg
                                        width="18px"
                                        height="18px"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <g
                                          id="SVGRepo_bgCarrier"
                                          stroke-width="0"
                                        ></g>
                                        <g
                                          id="SVGRepo_tracerCarrier"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        ></g>
                                        <g id="SVGRepo_iconCarrier">
                                          {" "}
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                                            fill="#ffffff"
                                          ></path>{" "}
                                        </g>
                                      </svg>
                                    </span>
                                  </div>
                                )}

                                {link.name === "Company" && (
                                  <div className="flex gap-8 items-center my-6">
                                    <h3>
                                      Bring Creative Ideas to
                                      <br /> Life with Simbanic
                                    </h3>

                                    <Image src={links[1].img} alt="" />
                                    <span className="flex gap-2 items-center bg-[#592CBA]  text-white py-[11px] px-[26px] rounded-[14px] hover:scale-[1.07] transition-all">
                                      Get in touch
                                      <svg
                                        width="18px"
                                        height="18px"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <g
                                          id="SVGRepo_bgCarrier"
                                          stroke-width="0"
                                        ></g>
                                        <g
                                          id="SVGRepo_tracerCarrier"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        ></g>
                                        <g id="SVGRepo_iconCarrier">
                                          {" "}
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                                            fill="#ffffff"
                                          ></path>{" "}
                                        </g>
                                      </svg>
                                    </span>
                                  </div>
                                )}
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
