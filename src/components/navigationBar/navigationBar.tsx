'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

const navbarMenuItem = [
  { label: "Home", path: "/", number: "00" },
  { label: "Destination", path: "/destinations", number: "01" },
  { label: "Crew", path: "/crew", number: "03" },
  { label: "Technology", path: "/technology", number: "04" },
]

export default function NavigationBar() {

  const [open, setOpen] = useState(false)
  const pathName = usePathname()

  return (
    <div className="relative z-10">
      <div className="flex justify-between items-center p-6 md:hidden">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={40}
            height={40}
            className="w-[40px] h-[40px] md:w-[48px] md:h-[48px]"
          />
        </Link>

        <button key="hamburger-menu" onClick={() => setOpen(true)} className="md:hidden lg:hidden cursor-pointer">
          <Image src="/images/icon-hamburger.svg" alt="hamburger-menu" width={24} height={21} className="cursor-pointer" />
        </button>
      </div>

      {/* overlay menu mobile only */}
      <div className={`${open ? "translate-x-0" : "translate-x-full"} fixed top-0 right-0 h-full w-[254px] bg-[#0B0D17]/15 backdrop-blur-xl flex flex-col transform transition-transform duration-700 ease-in-out`}>
        <button key="menu" className="cursor-pointer h-[85px] self-end pr-8" onClick={() => setOpen(false)}>
          <Image src="/images/icon-close.svg" alt="close" width={24} height={21} />
        </button>

        {/* menu moblie */}
        <nav className="flex flex-col h-[172px] barlow text-white text-[16px] uppercase gap-[32px] pl-[32px] pt-[48px]">
          {navbarMenuItem.map(({ label, path, number }) => {
            const isActive = pathName === path
            return (
              <Link
                key={path}
                href={path}
                className={`relative pr-4 transition-all duration-700 after:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-[4px] after:rounded-full 
                            ${isActive ? "after:bg-white" : "after:bg-transparent hover:after:bg-white"}`}>
                <span className="font-bold pr-3">{number}</span>
                {label}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* desktop menu */}
      <div className="hidden md:block relative">
        <div className="md:hidden lg:block absolute top-22 bg-white/25 w-[560px] h-px right-[700px] z-10" />

        <div className="flex justify-between items-center pl-[40px] lg:pt-[40px] lg:pl-[64px]">
          <Link href="/" className="cursor-pointer">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={48}
              height={48}
            />
          </Link>

          <nav className="h-[96px] relative flex items-center justify-end gap-[48px] pr-[40px] w-[640px] bg-white/5 backdrop-blur-xl lg:w-[736px]">
            {navbarMenuItem.map(({ label, path, number }) => {
              const isActive = pathName === path

              // for tablet size
              const isHome = path === "/" && pathName === "/"

              return (
                <Link
                  key={path}
                  href={path}
                  className={`${isActive ? "after:bg-white" : "after:bg-transparent hover:after:bg-white"}
                          relative flex items-center h-full uppercase text-white text-[16px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:rounded-full transition-all duration-300`}
                >
                  {!isHome && (
                    <span className="font-bold pr-2">{number}</span>
                  )}
                  {label}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </div>
  )
}
