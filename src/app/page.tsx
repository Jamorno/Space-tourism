'use client'

import Link from "next/link"
import NavigationBar from "@/components/navigationBar/navigationBar"

export default function Page() {
  return (
    <div className="bg-home">
      <NavigationBar />

      <div className="pt-12 w-[327px] mx-auto md:w-[512px] md:pt-[128px] lg:flex lg:justify-between lg:items-center lg:h-[888px] lg:w-[1110px] lg:pt-[128px]">
        <div className="text-center text-[#D0D6F9] space-y-[24px] h-[294px] lg:text-start lg:w-[540px]">
          <p className="text-[16px] h-[19px] md:text-[28px] md:h-[34px]">
            SO, YOU WANT TO TRAVEL TO
          </p>

          <h1 className="bellefair text-white text-[80px] h-[92px] md:text-[144px] md:h-[165px]">SPACE</h1>

          <p className="text-[15px] leading-[27px] h-[135px] pt-4 md:text-[16px]">
            Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this would experience
          </p>
        </div>

        <div className="relative group flex justify-center items-center p-24 h-[382px] md:mt-[96px] lg:p-0">
          <div className="absolute inset-0 aspect-square m-auto rounded-full bg-white opacity-10 scale-0 group-hover:scale-90 group-hover:opacity-20 transition-all duration-500 pointer-events-none lg:group-hover:scale-200" />

          <Link
            href="/destinations"
            className="bellefair text-[18px] flex justify-center items-center uppercase bg-white w-[144px] h-[144px] aspect-square rounded-full transition ease-in-out duration-300 cursor-pointer 
                      md:text-[32px] md:w-[272px] md:h-[272px]"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  )
}
