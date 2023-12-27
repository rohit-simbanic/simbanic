"use client";
import React from "react";
import Image from "next/image";

export default function CloudMigration() {
  return (
    <section className="cloudconsulting mt-[80px] relative">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 items-center">
          <h2 className="font-graphik font-bold leading-[124%] capitalize mb-8 text-[#111827] text-[35px] text-center">
            <span className="dark:text-[#E5EDFE] text-center">
              <span className="text-[#B272FF]">Cloud</span> Migration Services
            </span>
          </h2>

          <div>
            <p className="text-[#A8ADB3] font-prompt text-[16px] text-center leading-[160%]">
              Cloud migration services typically involve a series of activities
              to smoothly transfer an organizations
              <br /> applications, data, and infrastructure from on-premises or
              other cloud environments to a cloud-based
              <br /> infrastructure. The specific components of cloud migration
              services may vary depending on the
              <br /> provider and the unique requirements of each organization,
              but commonly include:
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-12 lg:gap-15 xl:gap-30 md:mt-12">
          <div className="about-text text-center lg:text-left">
            <h2 className="font-graphik font-bold leading-[124%] capitalize mb-8 text-[#111827] text-[28px]">
              <span className="dark:text-[#E5EDFE]">
                Cloud assessment and planning
              </span>
            </h2>

            <p className=" w-4/5 dark:text-[#D7D2D2] text-[#4A505F] leading-[150%] text-[16px] my-4 mx-auto lg:mx-0">
              This involves evaluating an organization&#39;s existing IT
              environment and applications to determine their suitability for
              migration to the cloud. It may include identifying dependencies,
              assessing the readiness of applications for migration, and
              creating a comprehensive migration plan.
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
              <span className="dark:text-[#E5EDFE]">Data migration</span>
            </h2>

            <p className=" w-4/5 dark:text-[#D7D2D2] text-[#4A505F] leading-[150%] text-[16px] my-4 mx-auto lg:mx-0">
              This includes transferring an organization&#39;s data from
              on-premises or other cloud environments to the cloud. It may
              involve strategies such as lift-and-shift, re-platforming, or
              re-architecting data to meet the requirements of the cloud
              environment.
            </p>
          </div>
          <div className="about-text text-center lg:text-left">
            <h2 className="font-graphik font-bold leading-[124%] capitalize mb-8 text-[#111827] text-[28px]">
              <span className="dark:text-[#E5EDFE]">Application migration</span>
            </h2>

            <p className=" w-4/5 dark:text-[#D7D2D2] text-[#4A505F] leading-[150%] text-[16px] my-4 mx-auto lg:mx-0">
              This involves migrating an organization&#39;s applications to the
              cloud, which may include re-hosting, re-platforming, or
              re-architecting applications to run effectively in the cloud
              environment.
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
                Infrastructure migration
              </span>
            </h2>

            <p className=" w-4/5 dark:text-[#D7D2D2] text-[#4A505F] leading-[150%] text-[16px] my-4 mx-auto lg:mx-0">
              This includes moving an organization&#39s virtual machines,
              servers, storage, and networking components to the cloud, and
              setting up the necessary infrastructure configurations to support
              the migrated applications.
            </p>
          </div>
          <div className="about-text text-center lg:text-left">
            <h2 className="font-graphik font-bold leading-[124%] capitalize mb-8 text-[#111827] text-[28px]">
              <span className="dark:text-[#E5EDFE]">
                Testing and validation
              </span>
            </h2>

            <p className=" w-4/5 dark:text-[#D7D2D2] text-[#4A505F] leading-[150%] text-[16px] my-4 mx-auto lg:mx-0">
              This involves thoroughly testing and validating the migrated
              applications and data in the cloud environment to ensure they are
              functioning as expected and meeting the desired performance and
              security requirements.
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
              <span className="dark:text-[#E5EDFE]">Cutover and go-live</span>
            </h2>

            <p className=" w-4/5 dark:text-[#D7D2D2] text-[#4A505F] leading-[150%] text-[16px] my-4 mx-auto lg:mx-0">
              This includes executing the final cutover plan to transition from
              the existing IT environment to the cloud, and ensuring a smooth
              go-live with minimal disruption to business operations.
            </p>
          </div>
          <div className="about-text text-center lg:text-left">
            <h2 className="font-graphik font-bold leading-[124%] capitalize mb-8 text-[#111827] text-[28px]">
              <span className="dark:text-[#E5EDFE]">
                Post-migration support
              </span>
            </h2>

            <p className=" w-4/5 dark:text-[#D7D2D2] text-[#4A505F] leading-[150%] text-[16px] my-4 mx-auto lg:mx-0">
              This may involve providing ongoing monitoring, management, and
              support for the migrated applications and infrastructure in the
              cloud environment to ensure smooth operations and optimal
              performance.
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
