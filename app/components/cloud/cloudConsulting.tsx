"use client";
import React from "react";
import SectionHeading from "../section-heading";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useTheme } from "@/app/context/theme-context";

export default function CloudConsulting() {
  const { theme } = useTheme();
  const pathname = usePathname();
  return (
    <section className="cloudconsulting my-[80px] relative">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 items-center">
          <h2 className="font-graphik font-bold leading-[124%] capitalize mb-8 text-[#111827] text-[35px] text-center">
            <span className="dark:text-[#E5EDFE] text-center">
              <span className="text-[#B272FF]">Cloud</span> Consulting Services
            </span>
          </h2>

          <div>
            <h3 className="text-[#162753] text-[20px] font-prompt text-center leading-[160%] font-semibold dark:text-white">
              Revamp Your Cloud Infrastructure with Cloud Consulting Services: A
              Fresh Start to Optimize Your Cloud.
            </h3>
            <p className="text-[#A8ADB3] font-prompt text-[16px] text-center leading-[160%]">
              With our cloud consulting services, you can strategically plan
              your cloud foundation and <br />
              redefine your infrastructure, transforming your organization into
              an agent
              <br /> of change and experiencing a significant shift towards
              cloud excellence.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-12 lg:gap-30 xl:gap-56 md:mt-12">
          <div className="about-img">
            <div className="flex justify-center">
              <Image
                src={require("@/public/images/services/cloudEng/capabilities-2.svg")}
                className="w-[100%] lg:w-[80%] "
                alt={""}
              />
            </div>
          </div>

          <div className="about-text text-center lg:text-left">
            <h2 className="font-graphik font-bold leading-[124%] capitalize mb-8 text-[#111827] text-[35px]">
              <span className="dark:text-[#E5EDFE]">Capabilities</span>
            </h2>

            <p className=" w-4/5 dark:text-[#D7D2D2] text-[#4A505F] leading-[150%] text-[16px] my-4 mx-auto lg:mx-0">
              Cloud consulting services typically include a range of offerings
              to helporganizations optimize their cloud strategy, architecture,
              and operations
            </p>

            <Link
              href="/"
              className="block py-8 active text-[#1E273B] dark:text-[#C4CDE1]"
            >
              <span
                className={`flex items-center justify-center w-52 ${
                  theme === "dark" ? "bg-[#EC2F79]" : "bg-[#592CBA]"
                }  text-white py-4 px-0 rounded-[14px] hover:scale-[1.07]  transition-all backdrop-blur-[0.5rem] shadow-2xl m-auto lg:m-0`}
              >
                <MdEmail className="mr-2 text-lg" />
                {pathname === "/" ? "Contact us" : "Get started"}
              </span>
            </Link>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-12 lg:gap-15 xl:gap-30 md:mt-12">
          <div className="about-text text-center lg:text-left">
            <h2 className="font-graphik font-bold leading-[124%] capitalize mb-8 text-[#111827] text-[28px]">
              <span className="dark:text-[#E5EDFE]">
                Cloud strategy and planning
              </span>
            </h2>

            <p className=" w-4/5 dark:text-[#D7D2D2] text-[#4A505F] leading-[150%] text-[16px] my-4 mx-auto lg:mx-0">
              This involves assessing an organization&#39;s current IT
              environment, business objectives, and requirements to create a
              comprehensive plan for leveraging cloud technologies effectively.
            </p>
          </div>
          <div className="about-img">
            <div className="flex justify-center">
              <Image
                src={require("@/public/images/services/cloudEng/s-1.svg")}
                className="w-[100%] lg:w-[80%] "
                alt={""}
              />
            </div>
          </div>
          <div className="about-img">
            <div className="flex justify-center">
              <Image
                src={require("@/public/images/services/cloudEng/s-2.svg")}
                className="w-[100%] lg:w-[80%] "
                alt={""}
              />
            </div>
          </div>
          <div className="about-text text-center lg:text-left">
            <h2 className="font-graphik font-bold leading-[124%] capitalize mb-8 text-[#111827] text-[28px]">
              <span className="dark:text-[#E5EDFE]">
                Cloud migration and deployment
              </span>
            </h2>

            <p className=" w-4/5 dark:text-[#D7D2D2] text-[#4A505F] leading-[150%] text-[16px] my-4 mx-auto lg:mx-0">
              This includes designing and executing a smooth migration of
              applications, data, and infrastructure to the cloud, ensuring
              minimal disruption to business operations.
            </p>
          </div>
          <div className="about-text text-center lg:text-left">
            <h2 className="font-graphik font-bold leading-[124%] capitalize mb-8 text-[#111827] text-[28px]">
              <span className="dark:text-[#E5EDFE]">
                Cloud architecture and design
              </span>
            </h2>

            <p className=" w-4/5 dark:text-[#D7D2D2] text-[#4A505F] leading-[150%] text-[16px] my-4 mx-auto lg:mx-0">
              This involves designing and implementing a scalable and secure
              cloud architecture that aligns with an organization&#39;s specific
              needs, such as selecting appropriate cloud services, designing
              network configurations, and establishing best practices for data
              management and security.
            </p>
          </div>
          <div className="about-img">
            <div className="flex justify-center">
              <Image
                src={require("@/public/images/services/cloudEng/s-3.svg")}
                className="w-[100%] lg:w-[80%] "
                alt={""}
              />
            </div>
          </div>
          <div className="about-img">
            <div className="flex justify-center">
              <Image
                src={require("@/public/images/services/cloudEng/s-4.svg")}
                className="w-[100%] lg:w-[80%] "
                alt={""}
              />
            </div>
          </div>
          <div className="about-text text-center lg:text-left">
            <h2 className="font-graphik font-bold leading-[124%] capitalize mb-8 text-[#111827] text-[28px]">
              <span className="dark:text-[#E5EDFE]">
                Cloud security and compliance
              </span>
            </h2>

            <p className=" w-4/5 dark:text-[#D7D2D2] text-[#4A505F] leading-[150%] text-[16px] my-4 mx-auto lg:mx-0">
              This encompasses implementing robust security measures and
              ensuring compliance with industry regulations and standards to
              protect data and applications in the cloud.
            </p>
          </div>
          <div className="about-text text-center lg:text-left">
            <h2 className="font-graphik font-bold leading-[124%] capitalize mb-8 text-[#111827] text-[28px]">
              <span className="dark:text-[#E5EDFE]">
                Cloud cost optimization
              </span>
            </h2>

            <p className=" w-4/5 dark:text-[#D7D2D2] text-[#4A505F] leading-[150%] text-[16px] my-4 mx-auto lg:mx-0">
              This involves optimizing cloud spending and resource utilization,
              such as identifying cost-saving opportunities, right-sizing cloud
              resources, and monitoring and managing cloud costs.
            </p>
          </div>
          <div className="about-img">
            <div className="flex justify-center">
              <Image
                src={require("@/public/images/services/cloudEng/s-5.svg")}
                className="w-[100%] lg:w-[80%] "
                alt={""}
              />
            </div>
          </div>
          <div className="about-img">
            <div className="flex justify-center">
              <Image
                src={require("@/public/images/services/cloudEng/s-6.svg")}
                className="w-[100%] lg:w-[80%] "
                alt={""}
              />
            </div>
          </div>
          <div className="about-text text-center lg:text-left">
            <h2 className="font-graphik font-bold leading-[124%] capitalize mb-8 text-[#111827] text-[28px]">
              <span className="dark:text-[#E5EDFE]">
                Cloud operations and management
              </span>
            </h2>

            <p className=" w-4/5 dark:text-[#D7D2D2] text-[#4A505F] leading-[150%] text-[16px] my-4 mx-auto lg:mx-0">
              This includes providing ongoing monitoring, management, and
              support for cloud resources, troubleshooting issues, and
              optimizing performance to ensure smooth and efficient cloud
              operations.
            </p>
          </div>
          <div className="about-text text-center lg:text-left">
            <h2 className="font-graphik font-bold leading-[124%] capitalize mb-8 text-[#111827] text-[28px]">
              <span className="dark:text-[#E5EDFE]">
                Cloud training and knowledge transfer
              </span>
            </h2>

            <p className=" w-4/5 dark:text-[#D7D2D2] text-[#4A505F] leading-[150%] text-[16px] my-4 mx-auto lg:mx-0">
              This may involve providing training and knowledge transfer to the
              organization&#39;s IT staff to enable them to effectively manage
              and operate cloud environments.
            </p>
          </div>
          <div className="about-img">
            <div className="flex justify-center">
              <Image
                src={require("@/public/images/services/cloudEng/s-5.svg")}
                className="w-[100%] lg:w-[80%] "
                alt={""}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
