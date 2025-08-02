'use client'

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import NavigationBar from "@/components/navigationBar/navigationBar"

const technology = [
  {
    type: "THE TERMINOLOGY…",
    name: "LAUNCH VEHICLE",
    description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    imageLandscape: "/images/image-launch-vehicle-landscape.jpg",
    imagePortrait: "/images/image-launch-vehicle-portrait.jpg"
  },
  {
    type: "THE TERMINOLOGY…",
    name: "SPACEPORT",
    description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    imageLandscape: "/images/image-spaceport-landscape.jpg",
    imagePortrait: "/images/image-spaceport-portrait.jpg"
  },
  {
    type: "THE TERMINOLOGY…",
    name: "SPACE CAPSULE",
    description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    imageLandscape: "/images/image-space-capsule-landscape.jpg",
    imagePortrait: "/images/image-space-capsule-portrait.jpg"
  }
]

export default function Technology() {

  const [activeIndex, setActiveIndex] = useState(0)
  const tech = technology[activeIndex]

  // for images size
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">("mobile")
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 768) {
        setScreenSize("mobile")
      } else if (width >= 768 && width < 1440) {
        setScreenSize("tablet")
      } else {
        setScreenSize("desktop")
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const getImageSrc = () => {
    if (screenSize === "mobile") {
      return tech.imagePortrait
    }
    if (screenSize === "tablet") {
      return tech.imageLandscape
    }
    if (screenSize === "desktop") {
      return tech.imagePortrait
    }
    return tech.imageLandscape
  }

  return (
    <div className="bg-tech">
      <NavigationBar />

      {/* header */}
      <div className="pt-[24px] pb-[48px] md:pt-[40px] md:pl-[40px] md:pb-14 lg:pt-[48px] lg:pl-40">
        <p className="barlowCondensed uppercase text-white tracking-[15%] text-center text-[16px]
                      md:text-[20px] md:text-start lg:text-[28px]">
          <span className="text-white/25 mr-[24px]">03</span>
          SPACE LAUNCH 101
        </p>
      </div>

      {/* content */}
      <div className="flex flex-col-reverse items-center justify-center lg:flex-row lg:justify-end lg:space-x-[32px]">
        <div className="flex flex-col justify-center items-center lg:flex-row lg:w-[635px] lg:h-[304px]">
          {/* navigationBar menu */}
          <div className="space-x-[16px] lg:flex lg:flex-col lg:space-x-[64px] lg:space-y-[32px]">
            {technology.map((tech, i) => (
              <button
                key={tech.name}
                onClick={() => setActiveIndex(i)}
                className={`bellefair rounded-full border text-[18px] w-[40px] h-[40px] overflow-hidden hover:border-white transition-all ease-in-out duration-700
                          md:text-[24px] md:w-[56px] md:h-[56px]
                          lg:text-[32px] lg:w-[80px] lg:h-[80px] cursor-pointer
                          ${activeIndex === i ? "bg-white text-black border-white" : "bg-transparent text-white border-white/25"}`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          {/* text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tech.name + "-content"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="text-center w-[327px] h-[243px] space-y-4 pt-[40px] 
                        md:w-[512px] md:h-[251px] lg:w-[491px] lg:h-[301px] lg:text-start lg:pt-0"
            >
              <div>
                <p className="bellefair text-white/50 text-[18px] md:text-[24px] lg:text-[32px]">{tech.type}</p>
                <h1 className="bellefair text-white text-[24px] md:text-[40px] lg:text-[56px]">{tech.name}</h1>
              </div>
              <p className="barlow text-[#D0D6F9] text-[15px] leading-[180%] md:text-[16px] lg:text-[18px] lg:h-[160px]">{tech.description}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tech.name + "-image"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={`relative mb-8
                        ${screenSize === "mobile" ? "w-full h-[258px]" : ""}
                        ${screenSize === "tablet" ? "w-full h-[357px]" : ""}
                        ${screenSize === "desktop" ? "w-[608px] h-[600px]" : ""}`}
          >
            <Image
              src={getImageSrc()}
              alt={tech.name}
              fill
              className={`${screenSize === "mobile" ? "object-cover" : "object-contain"}
                        ${screenSize === "desktop" ? "object-cover" : "object-contain"}`}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
