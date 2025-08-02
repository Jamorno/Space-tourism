'use client'

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import NavigationBar from "@/components/navigationBar/navigationBar"

const destinations = [
  {
    name: "moon",
    description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    image: "/images/image-moon.png",
    distance: "384,400 km",
    travelTime: "3 days"
  },
  {
    name: "mars",
    description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    image: "/images/image-mars.png",
    distance: "225 mil. km",
    travelTime: "9 months"

  },
  {
    name: "europa",
    description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    image: "/images/image-europa.png",
    distance: "682 mil. km",
    travelTime: "3 years"
  },
  {
    name: "titan",
    description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    image: "/images/image-titan.png",
    distance: "1.6 bli. km",
    travelTime: "7 years"
  }
]

export default function Destination() {

  const [activeIndex, setActiveIndex] = useState(0)
  const destination = destinations[activeIndex]

  return (
    <div className="bg-destination">
      <NavigationBar />

      {/* header for tablet and desktop */}
      <div className="pt-[24px] md:pt-[40px] md:pl-[40px] lg:pt-[48px] lg:pl-40">
        <p className="barlowCondensed text-[16px] text-white text-center tracking-[15%] md:text-[20px] md:text-start lg:text-[28px]">
          <span className="text-white/25 mr-[24px]">01</span>
          PICK YOUR DESTINATION
        </p>
      </div>

      <div className="flex flex-col items-center justify-start lg:justify-start lg:h-[800px] lg:mt-20">
        <div className="flex flex-col justify-center items-center space-y-[24px] p-[24px] md:p-[32px] lg:flex-row lg:justify-between lg:items-start lg:w-[1110px]">
          {/* image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={destination.name + "-image"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <Image
                src={destination.image}
                alt={destination.name}
                width={150}
                height={150}
                className="py-8 md:w-[300px] lg:w-[480px]"
              />
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-col items-center md:h-[384px] md:mt-[24px] lg:items-start lg:w-[445px] lg:h-[468px]">
            {/* planet destinations menu items */}
            <div className="barlowCondensed text-[14px] flex gap-8 tracking-[15%] md:text-[16px] md:gap-10">
              {destinations.map((d, i) => (
                <button
                  key={d.name}
                  onClick={() => setActiveIndex(i)}
                  className={`${i === activeIndex ? " text-[#D0D6F9] border-b-2 border-white" :
                    "text-[#D0D6F9]/50 hover:text-[#D0D6F9] hover:border-b-2 border-white/50 transition-all ease-out duration-300"}
                        uppercase text-[14px] tracking-wider pb-2 cursor-pointer`}
                >
                  {d.name}
                </button>
              ))}
            </div>

            {/* content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={destination.name + "-content"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <div className="h-[215px] mt-4 mb-6 md:mb-[24px] text-center lg:text-start lg:mb-20">
                  {/* title name */}
                  <h1 className="text-white bellefair text-[56px] uppercase p-0 md:text-[80px] md:h-[92px] lg:text-[96px]">{destination.name}</h1>

                  {/* description */}
                  <p className="barlow text-[#D0D6F9] text-[15px] text-center h-[135px] leading-[180%] md:text-[16px] md:w-[514px] md:h-[87px] md:py-8 lg:text-start lg:text-[18px] lg:w-[445px]">
                    {destination.description}
                  </p>
                </div>

                <div className="bg-white/25 w-[327px] h-[1px] z-10 p-0 md:w-[514px] lg:w-[445px]" />

                <div className="h-[146px] mt-6 md:flex md:justify-between md:items-center md:w-[514px] md:h-[61px] md:mt-[24px] lg:items-start lg:mt-10">
                  {/* distance */}
                  <div className="text-center uppercase pb-[24px] md:w-[245px] md:pb-0 lg:text-start">
                    <p className="barlowCondensed text-[#D0D6F9] text-[14px]">AVG. DISTANCE</p>
                    <p className="bellefair text-white text-[28px]">{destination.distance}</p>
                  </div>

                  {/* travel times */}
                  <div className="text-center uppercase md:w-[245px] lg:text-start">
                    <p className="barlowCondensed text-[#D0D6F9] text-[14px]">AVG. DISTANCE</p>
                    <p className="bellefair text-white text-[28px]">{destination.travelTime}</p>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
