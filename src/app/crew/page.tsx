'use client'

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import NavigationBar from "@/components/navigationBar/navigationBar"

const crews = [
  {
    position: "commander",
    name: "Douglas Hurley",
    image: "/images/image-douglas-hurley.png",
    description: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    position: "Mission Specialist",
    name: "MARK SHUTTLEWORTH",
    image: "/images/image-mark-shuttleworth.png",
    description: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
  },
  {
    position: "PILOT",
    name: "Victor Glover",
    image: "/images/image-victor-glover.png",
    description: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
  },
  {
    position: "Flight Engineer",
    name: "Anousheh Ansari",
    image: "/images/image-anousheh-ansari.png",
    description: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
  }
]

export default function Crew() {

  const [activeIndex, setActiveIndex] = useState(0)
  const crew = crews[activeIndex]

  return (
    <div className="bg-crew flex flex-col h-screen">
      <NavigationBar />

      {/* header */}
      <div className="pt-[24px] pb-[48px] md:pt-[40px] md:pl-[40px] md:pb-14 lg:pt-[48px] lg:pl-40">
        <p className="barlowCondensed text-[16px] text-center text-white uppercase tracking-[15%] md:text-[20px] md:text-start lg:text-[28px]">
          <span className="text-white/25 mr-[24px]">02</span>
          Meet your crew
        </p>
      </div>

      {/* content */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:w-[1110px] lg:h-[734px] lg:space-x-[32px] lg:pb-[48px]">
          {/* text */}
          <AnimatePresence mode="wait">
            <div className="flex flex-col justify-between w-[327px] md:w-[512px] md:h-[305px] lg:w-[539px] lg:h-[734px] lg:space-y-[16px]">
              <motion.div
                key={crew.name + "-content"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col space-y-6 text-center h-[245px] md:h-[231px] lg:justify-center lg:text-start lg:h-[631px] lg:pb-[40px]"
              >
                <div>
                  <p className="bellefair text-[18px] uppercase text-white/50 pb-1 md:text-[24px] md:pb-2 lg:text-[32px] lg:pb-2">{crew.position}</p>
                  <h1 className="bellefair text-[24px] uppercase text-white md:text-[40px] lg:text-[56px]">{crew.name}</h1>
                </div>
                <p className="barlow text-[15px] text-[#D0D6F9] h-[164px] md:text-[16px] lg:text-[18px]">{crew.description}</p>
              </motion.div>

              {/* menu */}
              <div className="flex justify-center space-x-[16px] mb-8 md:space-x-4 lg:justify-start lg:space-x-8 lg:h-[63px]">
                {crews.map((d, i) => (
                  <button
                    key={d.name}
                    onClick={() => setActiveIndex(i)}
                    className={`w-[10px] h-[10px] lg:w-[15px] lg:h-[15px] rounded-full cursor-pointer hover:bg-white/50 transition-all ease-in-out duration-700
                              ${activeIndex === i ? "bg-white" : "bg-white/20"}`}
                  />
                ))}
              </div>
            </div>
          </AnimatePresence>

          {/* image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={crew.image}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="relative mx-auto md:w-[446px] md:h-[560px] lg:w-[539px] lg:h-[676px]"
            >
              <Image
                src={crew.image}
                alt={crew.name}
                width={217.24}
                height={340}
                className="object-contain w-full h-full"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
