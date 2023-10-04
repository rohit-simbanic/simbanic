import Image from "next/image";

export default function Copyright() {
  return (
    <>
      <section className="copyright py-[50px] bg-white dark:bg-opacity-5 rounded-t-[60px]">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <p className="text-[#4C4C4C] text-[14px] font-graphik font-normal dark:text-gray-100">
              © 2023 Simbanic. All Rights Reserved.
            </p>
            <div className="flex gap-9">
              <div className="bg-[#F7F7FA] p-6 rounded-full">
                <Image
                  src={require("@/public/images/footer/linkedin.svg")}
                  width={24}
                  height={24}
                  alt={""}
                />
              </div>
              <div className="bg-[#F7F7FA] p-6 rounded-full">
                <Image
                  src={require("@/public/images/footer/insta.svg")}
                  width={24}
                  height={24}
                  alt={""}
                />
              </div>
              <div className="bg-[#F7F7FA] p-6 rounded-full">
                <Image
                  src={require("@/public/images/footer/facebook.svg")}
                  width={24}
                  height={24}
                  alt={""}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
