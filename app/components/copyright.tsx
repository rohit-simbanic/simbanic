import Image from "next/image";

export default function Copyright() {
  return (
    <>
      <section className="copyright py-[20px] bg-white dark:bg-opacity-5 rounded-t-[60px]">
        <div className="container mx-auto">
          <div className="flex justify-between items-center flex-col sm:flex-row">
            <p className="text-[#4C4C4C] text-[14px] font-graphik font-normal dark:text-gray-100">
              © 2023 Simbanic. All Rights Reserved.
            </p>
            <div className="flex gap-[.5rem]">
              <div className="bg-[#F4F4F4] p-2 rounded-full cursor-pointer">
                <Image
                  src={require("@/public/images/footer/linkedin.svg")}
                  width={24}
                  height={24}
                  alt={""}
                />
              </div>
              <div className="bg-[#F4F4F4] p-2 rounded-full cursor-pointer">
                <Image
                  src={require("@/public/images/footer/insta.svg")}
                  width={24}
                  height={24}
                  alt={""}
                />
              </div>
              <div className="bg-[#F4F4F4] p-2 rounded-full cursor-pointer">
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
