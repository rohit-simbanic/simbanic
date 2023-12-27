"use client";
import Carousel from "@/app/components/carousel";
import Copyright from "@/app/components/copyright";
import CTA from "@/app/components/cta";
import Footer from "@/app/components/footer";
import Portfolio from "@/app/components/portfolio";
import ServiceSlider from "@/app/components/serviceSlider";
import Services from "@/app/components/services";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <ServiceSlider />
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="-z-10 relative px-5"
      >
        <h2 className="font-graphik font-bold leading-[124%] capitalize mb-8 text-[#111827] text-[35px] text-center">
          <span className="dark:text-[#E5EDFE] text-center">
            <span className="text-[#B272FF]">Test</span> Automation Service
          </span>
        </h2>
        <h3 className="text-[#162753] text-[20px] font-prompt text-center leading-[160%] font-semibold dark:text-white">
          Enhance Efficiency and Maintain Quality with Test Automation Services
        </h3>
        <p className="text-[#A8ADB3] font-prompt text-[16px] text-center leading-[160%]">
          Achieve Maximum Value for Your Project with a Comprehensive Test
          Automation Approach. Streamline
          <br /> Maintenance Efforts by Leveraging Top-Tier Tools and Continuous
          Improvement Practices to Foster Sustainable
          <br /> Business Growth.
        </p>
      </motion.div>
      <section className="slider mt-[56px] mb-[80px]">
        <div className="container mx-auto">
          <div>
            <div>
              <h4 className="uppercase text-center font-graphik font-semibold text-[14px] mt-24 mb-9 dark:text-white">
                TRUSTED BY +250 BUSINESSEs
              </h4>
            </div>
            <div>
              <Carousel />
            </div>
          </div>
          <div className="md:mt-[110px] mt-4 max-w-screen-xl px-4">
            <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] items-center md:px-9">
              <div className="md:col-span-5 order-1 md:order-2">
                <div className="lg:ms-8 flex justify-center">
                  <Image
                    src={require("@/public/images/services/automationEng/automation.png")}
                    alt=""
                    width={48}
                    height={48}
                    width={761}
                    height={415}
                    className="w-[76%]"
                  />
                </div>
              </div>

              <div className="md:col-span-7 order-2 md:order-1">
                <div className="lg:me-5">
                  <h3 className="mb-4 text-[#162753] text-[20px] max-md:text-center font-prompt leading-[160%] font-semibold dark:text-white">
                    Capabilities
                  </h3>

                  <p className="text-[#A8ADB3] font-prompt text-[16px] max-sm:text-center leading-[160%] max-md:text-center">
                    Our full range of test automation services can enhance the
                    efficiency of your software development projects. We design
                    a cutting-edge test environment that evolves in accordance
                    with your organization&#39;s needs. With the aid of top-tier
                    tools and frameworks, we facilitate the delivery of
                    impeccable products to your end-users.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-10">
              <h2 className="font-graphik font-bold leading-[124%] capitalize mb-8 text-[#111827] text-[35px] text-center">
                <span className="dark:text-[#E5EDFE] text-center">
                  <span className="text-[#B272FF]">Microservice</span> Testing
                </span>
              </h2>
              <h3 className="text-[#162753] text-[20px] font-prompt text-center leading-[160%] font-semibold dark:text-white">
                Attain Equilibrium of Cost, Speed, and Quality through
                Comprehensive
                <br /> Microservices Testing Services from Start to Finish
              </h3>
              <div className="flex md:flex-row flex-col gap-3 items-center">
                <div className="flex justify-center w-1/2">
                  <Image
                    src={require("@/public/images/services/cloudEng/capabilities-2.svg")}
                    alt={""}
                    className="w-[100%] md:w-[80%] "
                  />
                </div>
                <div className=" md:w-1/2 w-full mt-3">
                  <p className="text-[#A8ADB3] font-prompt text-[16px] md:text-left text-center leading-[160%]">
                    Microservices Architecture Empowers Modularity, but Reliable
                    Microservices Testing Ensures Product Excellence. Redefine
                    User Experiences with Meticulous Testing, One Microservice
                    at a Time.
                  </p>
                  <br />
                  <p className="text-[#A8ADB3] font-prompt text-[16px] md:text-left text-center leading-[160%]">
                    Unlock the Full Potential of Microservices with Reliable and
                    Efficient Microservices Testing. Enhance User Experiences by
                    Reimagining Each Microservice, Ensuring Modular and
                    Dependable Products.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 py-14 text-center md:w-2/3 lg:w-3/4 mx-auto">
              <h2 className="font-graphik font-bold leading-[124%] capitalize mb-8 text-[#111827] text-[35px] text-center">
                <span className="dark:text-[#E5EDFE] text-center">
                  <span className="text-[#B272FF]">Performance</span> Testing
                </span>
              </h2>
              <h3 className="text-[#162753] text-[20px] font-prompt text-center leading-[160%] font-semibold dark:text-white">
                Ensure Optimal Application Speed, Scalability, and Stability{" "}
                <br />
                with Our Performance Testing Services. Efficiently Identify
                Performance <br />
                Bottlenecks and Optimize Your Systems Workload Handling
                Capability with Our Expertly Curated Performance Testing
                Solutions.
              </h3>

              <p className="leading-normal font-prompt text-sm mb-4 text-slate-400 dark:text-white max-w-screen-sm mx-auto underline underline-offset-4 mt-4">
                We Offer a Comprehensive Suite of Performance Testing Services,
                Meticulously Crafted to Ensure Consistent User Experiences 24/7.
                Our Teams Scale with Your Organization and Provide Expert
                Recommendations to Enhance Your Business Value.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px] px-4">
              <div className="text-center md:px-6 p-6 hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-800 transition duration-500 rounded-2xl mt-6 dark:border border-cyan-200 border-y-pink-500 ">
                <div className="w-28 h-28 bg-indigo-600/5 text-indigo-600 rounded-3xl text-4xl flex align-middle justify-center items-center shadow-md dark:shadow-gray-800 mx-auto">
                  <Image
                    src="data:image/png;base64,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"
                    alt=""
                    width={48}
                    height={48}
                  />
                </div>

                <div className="content mt-7">
                  <Link
                    href=""
                    className="text-[#162753] text-[17px] font-prompt text-center leading-[160%] font-semibold dark:text-white"
                  >
                    Stress, Spike &amp; Endurance Tests
                  </Link>
                  <p className="dark:text-[#D7D2D2] text-slate-400 leading-[150%] text-[16px] mt-3 font-graphik">
                    Simbanic can help your teams gain complete knowledge of your
                    application&#39;s overall capacity by effectively testing it
                    against extreme workloads to determine its breaking point.
                    This provides them with a vantage point to skillfully handle
                    sudden spikes in traffic and ensure that your application
                    can handle the demands placed on it.
                  </p>
                </div>
              </div>

              <div className="text-center md:px-6 p-6 shadow-xl shadow-gray-100 dark:shadow-none transition duration-500 rounded-2xl mt-6 dark:border border-cyan-200 border-y-pink-500 ">
                <div className="w-28 h-28 bg-red-600/5 text-red-600 rounded-3xl text-4xl flex align-middle justify-center items-center shadow-md dark:shadow-gray-800 mx-auto">
                  <Image
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADoklEQVR4nO2YfUgTYRzHV/3fH/VHUGPnbNbutnOuaYuCqDQoiOgFLUuCXixLiexFwbSNvemVbrZSGymlbpZpznxthjYsKxWkIDIri0orjXxN6cX6xXOY/dEfee6OubgvfOH+uOd338/ze57tuRMIePHixYsXL2aaKVpIqjBMtl3kR+xnw5g/sRvD8PVCITFHwKXEEnkUgS/pDV2+tv9QxO7B+B3RrHnnhoh+XKoaIYmQ62KxfB7r4Uk82Bq2PGz4qcMJ4G7lxF9u3YPM+ORvOL6kRyQKFLMWXiyR7wxdETY06mqiH/Q4vxTMR5Lg3LFTQMUlQlpcwpTdmHX5L5ASg2VMRgQ/EwjCZ7GRfwYhVX14UlhGF6+gzsNVXQb8aGjmrBPgboVt67YOoX3mcXo/P5li1bI1/agogriiS+c0OIy7JiMHgkh1rccAmL9sS0z4rgFU1BJ/kvOZh3E/L7oBCvnSFx4DiMTyqKNR0cOoKFrzkw1Qn30JLIZUsBhTodpqYwzQdb0WSFlIt9cALDoj/Bjro33WRPkegNVETQCco84wCj9Q7Z4GAPrUPx0wpE163KirCfKSjN4HOJui/wOgNU563M/bLfD6Wo33AfK0FHwefk8DWJP1jDqQm2TwPkBNpg2edTyE3p5OcJjMjI4TBaco7wM8ulwC7vpaaGtrgsbsv48L/1pGXd4GeFfmgtIrDrhZVQYdReWMOlCsN3sf4LPrDuRmZ4E9Lxc+VTb43h4AdH96Ou2xhhbfBIjdEwOxe2MYjRmdTgAjrru0fRLgUUEpmLUG2g/zS3wPIF2jm/gnRtc+B2DWmyYA0LXPATTaCiBDZ6DDN9rypwfA+eMaRhtyKu6vcoNdc5o9AMyfiDwcuW8IFc+MT+YcoNlmh/sXCuFNSS0EEiFvPe+APx4asW5LHyqOvkZ0Xq3kFICKS4TvDc3QmlsESlLd5jGARCKZLV2sHEG/56iw7sBRRkcDJnZoTsO9nIJxkIRvUqnSKGBDpCzYTsUmfP29ydDXiUINBa+uVdGvf574Y0U9HTotNpFeOugZ7523QIarhhdISCErAPPnS+fiuKq7MIX6/nu2PjjroJLKAof2jEcu1puh5aJj4rz0zlkHK9Wrh6QByjgBm0KzISeCH28K3ThYnmaFdruTfvVjwy+Lq+CBzQ6mgye+oplfJCEPCTjSTAyTb1bIQ8qDAtXtQaS6ky0rA9XNAQEKrVCoWMBVeF68ePHi9f/pF7eHvPvc3kQuAAAAAElFTkSuQmCC"
                    alt=""
                    width={48}
                    height={48}
                  />
                </div>

                <div className="content mt-7">
                  <Link
                    href=""
                    className="text-[#162753] text-[17px] font-prompt text-center leading-[160%] font-semibold dark:text-white"
                  >
                    High Availability Testing
                  </Link>
                  <p className="dark:text-[#D7D2D2] text-slate-400 leading-[150%] text-[16px] mt-3 font-graphik">
                    Our expert teams can assist you in monitoring the actual
                    availability of your application to users, and determine the
                    time required to repair it for consistent functionality.
                    Using advanced measurements and formulas, we can achieve
                    in-depth results every time, providing you with valuable
                    insights and guidance to optimize your application&#39;s
                    performance.
                  </p>
                </div>
              </div>

              <div className="text-center md:px-6 p-6 hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-800 transition duration-500 rounded-2xl mt-6 dark:border border-cyan-200 border-y-pink-500 ">
                <div className="w-28 h-28 bg-emerald-600/5 text-emerald-600 rounded-3xl text-4xl flex align-middle justify-center items-center shadow-md dark:shadow-gray-800 mx-auto">
                  <Image
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACeElEQVR4nO2ZXWvTUBjHA4L6HVyvpxd+B9EeJ0wrelOabjBMroUNh7A7BVHoNPFy4NggGbN1OfVCVvBO/ARuvswXUGEvrZjp6ho3oXvkOVvGmX1Z0zRtKucHDyGlPef/P88/ofBIUgCMz2YjmmnN6aZVxNJMSjXjaa/UDYzPZiO6QW3dpHCgDGo/NKweKexo7OSZ6Gf3pzMnULRuWPN7JjJS2NFZbCjwp826YlLQTGujI6LOx4ciRFbmogm1SGQV3KqICVdjDyb63d+PahOxet8l3Jq4R1RWs33Ja70tEx+VVZvfpBEDqanH22gCxaemMtuNGiCuEVlZx719G8CTr7bBYQa8FKmxPpFV/88MH5s37z8BT6sM8CwufeTj5P+Z4U/kXx7RnG/xkzRXsS6/Z6AGPq/kfZmYpDn4spLvnIGgIMIAh+hAExARIQ4RoTqU/jhw72UKbMcOf4TWfuXhzou7TLQr/vr8CJyb7oObz8fab+BIevPQ4hnO3WBiUbTtrO/fJ54MwmpxNfwGCpsFGLCGmOhLM1dqig9thNwY9ZsxJv6ieZndVyO0BpCFwmuIzVxl11qE2kAjEGGAQ3SgCYiIEIeI0B7lt8uwdeYW7Kz9YPc73zZg6+xtKC98ha6IEIotSXH4fXoUyu+W2bUkxdnnHTHg9a8Enrgr2jk2sGvm1Mh+R0JvAMGTd44P7po4moTyq8r4tM2AV6p24ORw5zrQ9c+AV/Btg2KxE135FvICEQY4RAeagIgI1Rhw4PAhaBaXPnAdUH5KfsGBW50RUMClpH0bwGkhDtzaLj6hfr+QVHtaOGZVMzizClp4lO2hpFsmXiD4z/kLbXx6anPglAgAAAAASUVORK5CYII="
                    alt=""
                    width={48}
                    height={48}
                  />
                </div>

                <div className="content mt-7">
                  <Link
                    href=""
                    className="text-[#162753] text-[17px] font-prompt text-center leading-[160%] font-semibold dark:text-white"
                  >
                    Regression testing
                  </Link>
                  <p className=" dark:text-[#D7D2D2] text-slate-400 leading-[150%] text-[16px] mt-3 font-graphik">
                    Gain clear insights into the performance of frequent
                    codebase changes with our regression testing solutions. Our
                    experienced team empowers you to adopt proven test cases and
                    tools, helping you prevent application breakdowns and save
                    costs by identifying potential issues early in the
                    development process.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-10">
              <h2 className="font-graphik font-bold leading-[124%] capitalize mb-8 text-[#111827] text-[35px] text-center">
                <span className="dark:text-[#E5EDFE] text-center">
                  <span className="text-[#B272FF]">Load</span> Testing
                </span>
              </h2>
              <h3 className="text-[#162753] text-[20px] font-prompt text-center leading-[160%] font-semibold dark:text-white">
                Optimize Performance with Our Load Testing Services: Simulating
                <br />
                and Measuring Accurate Performance. Establish a Stimulating Test{" "}
                Environment and
                <br /> Monitor Your Application&#39;s Performance to Ensure
                <br />
                Stability and Smooth Functioning
              </h3>
              <div className="flex md:flex-row flex-col gap-3 items-center">
                <div className=" md:w-1/2 w-full mt-3">
                  <h3 className="mb-4 text-[#162753] text-[20px] md:text-left text-center font-prompt leading-[160%] font-semibold dark:text-white">
                    Capabilities
                  </h3>
                  <p className="text-[#A8ADB3] font-prompt text-[16px] md:text-left text-center leading-[160%]">
                    At Simbanic, we provide load testing services that help you
                    maximize non-stop user interaction with your application. We
                    ensure a consistent user experience and stable performance
                    by testing your application&#39;s strength and offering
                    detailed analysis on how to optimize its operating capacity.
                  </p>
                  <br />
                </div>
                <div className="flex justify-center w-1/2">
                  <Image
                    src={require("@/public/images/marketingStrategy.svg")}
                    alt={""}
                    className="w-[100%] md:w-[80%] "
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 py-14 text-center md:w-2/3 lg:w-3/4 mx-auto">
              <h2 className="font-graphik font-bold leading-[124%] capitalize mb-8 text-[#111827] text-[35px] text-center">
                <span className="dark:text-[#E5EDFE] text-center">
                  <span className="text-[#B272FF]">Security</span> Testing
                </span>
              </h2>

              <h3 className="text-[#162753] text-[20px] font-prompt text-center leading-[160%] font-semibold dark:text-white">
                Enhance Security with Comprehensive Testing: Uncover Hidden
                Vulnerabilities and Mitigate Malicious Threats. Redefining
                Application Security: Protecting Confidentiality, Upholding
                Authentication, and Maintaining Integrity with Simbanic
                Strengthen Your Application Security with Simbanic&#39;s Testing
                Services: Tailored Strategies and Appropriate Tools for Your
                Business Requirements
              </h3>

              <p className="leading-normal font-prompt text-sm mb-4 text-slate-400 dark:text-white max-w-screen-sm mx-auto underline underline-offset-4 mt-4">
                Our comprehensive application security testing services at
                Simbanic offer a customized strategy with appropriate testing
                tools to meet your unique business requirements. We help you
                identify and address flaws in your security mechanism, ensuring
                seamless functionality and robust protection of data against
                unidentified threats
              </p>
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-[30px]">
              <div className="group relative px-6 py-10 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-pink-600 dark:hover:bg-pink-600 dark:border transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
                <div className="relative overflow-hidden text-transparent -m-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-hexagon h-24 w-24 fill-indigo-600/5 group-hover:fill-white/10 mx-auto"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  </svg>
                  <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                    <Image
                      width="36"
                      height="36"
                      src="https://img.icons8.com/cotton/36/cryptocurrency-security.png"
                      alt="cryptocurrency-security"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href=""
                    className="text-[#162753] text-[17px] font-prompt text-center leading-[160%] font-semibold dark:text-white"
                  >
                    Application Security Testing
                  </a>
                  <p className="font-prompt text-slate-400 text-left tracking-[1px] group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3">
                    Enhance Application Security with Comprehensive
                    Vulnerability Assessment: Identifying Hidden Security
                    Vulnerabilities and Safeguarding Against Unauthorized Access
                  </p>
                  <p className="font-prompt text-slate-400 text-left tracking-[1px] group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3">
                    Our application security testing services at Simform provide
                    a comprehensive vulnerability assessment, enabling you to
                    identify hidden security vulnerabilities that may be
                    compromising the safety of your application. We help you
                    maintain app security operations throughout the software
                    development lifecycle, safeguarding against authorized
                    access and potential security breaches.
                  </p>
                </div>
              </div>
              <div className="group relative px-6 py-10 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-pink-600 dark:hover:bg-pink-600 dark:border transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
                <div className="relative overflow-hidden text-transparent -m-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-hexagon h-24 w-24 fill-indigo-600/5 group-hover:fill-white/10 mx-auto"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  </svg>
                  <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                    <Image
                      width="36"
                      height="36"
                      src="https://img.icons8.com/doodle/36/google-mobile--v1.png"
                      alt="google-mobile--v1"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href=""
                    className="text-[#162753] text-[17px] font-prompt text-center leading-[160%] font-semibold dark:text-white"
                  >
                    Network Penetration Testing
                  </a>
                  <p className="font-prompt text-slate-400 text-left tracking-[1px] group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3">
                    Customized Network Security Testing: Identifying Deep
                    Security Vulnerabilities and Unrevealed Cybersecurity
                    Threats with Simbanic
                  </p>
                  <p className="font-prompt text-slate-400 text-left tracking-[1px] group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3">
                    Our network security testing at Simbanic is customized to
                    examine deep security vulnerabilities, enabling us to
                    identify cybersecurity threats that are often missed during
                    manual vulnerability testing processes. Our experienced
                    penetration testers can spot even the slightest network
                    infrastructure weakness and review its status for further
                    optimization, ensuring the highest level of security for
                    your network.
                  </p>
                </div>
              </div>
              <div className="group relative px-6 py-10 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-pink-600 dark:hover:bg-pink-600 dark:border transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
                <div className="relative overflow-hidden text-transparent -m-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-hexagon h-24 w-24 fill-indigo-600/5 group-hover:fill-white/10 mx-auto"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  </svg>
                  <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                    <Image
                      width="36"
                      height="36"
                      src="https://img.icons8.com/office/36/000000/private-cloud-storage.png"
                      alt="private-cloud-storage"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href=""
                    className="text-[#162753] text-[17px] font-prompt text-center leading-[160%] font-semibold dark:text-white"
                  >
                    Cloud Application Security Testing
                  </a>
                  <p className="font-prompt text-slate-400 text-left tracking-[1px] group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3">
                    &#39;Ensuring Cloud Application Security: Equally Important
                    as Local Application&#39;s
                  </p>
                  <p className="font-prompt text-slate-400 text-left tracking-[1px] group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3">
                    Securing your cloud-based applications is just as crucial as
                    securing your local ones. Equip your cloud application to
                    handle cybersecurity threats effectively by integrating a
                    defensive security mechanism with Simbanic&#39;s progressive
                    cloud security testing solutions.
                  </p>
                </div>
              </div>
              <div className="group relative px-6 py-10 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-pink-600 dark:hover:bg-pink-600 dark:border transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
                <div className="relative overflow-hidden text-transparent -m-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-hexagon h-24 w-24 fill-indigo-600/5 group-hover:fill-white/10 mx-auto"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  </svg>
                  <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                    <Image
                      width="64"
                      height="64"
                      src="https://img.icons8.com/cotton/64/source-code--v1.png"
                      alt="source-code--v1"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href=""
                    className="text-[#162753] text-[17px] font-prompt text-center leading-[160%] font-semibold dark:text-white"
                  >
                    Source Code Review
                  </a>
                  <p className="font-prompt text-slate-400 text-left tracking-[1px] group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3">
                    Enhance Code Security with Simbanic&#39;s Security Code
                    Review Services: Comprehensive Audits and Integrated
                    Analysis
                  </p>
                  <p className="font-prompt text-slate-400 text-left tracking-[1px] group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3">
                    Acquire a thorough review of each code push and ensure
                    vulnerability management with Simbanic&#39;s security code
                    review services. Our expert team conducts comprehensive
                    audits and integrated code analysis, verifying the
                    implementation of critical security controls in your
                    software development life cycle. Protect your code and
                    software from potential security risks with our reliable
                    security code review services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <Portfolio />
      <CTA />
      <Footer />
      <Copyright />
    </>
  );
};

export default page;
