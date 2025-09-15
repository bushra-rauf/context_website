"use client"
import Logo from "../Logo"
import Link from "next/link"
import { GithubLogo } from "@phosphor-icons/react"

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-green-900 to-amber-700 text-white shadow-inner pt-16 pb-6 overflow-hidden">
      
      {/* Curve + green glow at top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px]"
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
        >
          <path
            d="M-0.27,44.40 C149.99,150.00 349.87,-49.98 500.84,49.99 L500.00,0.00 L0.00,0.00 Z"
            style={{ stroke: "none", fill: "#34D399" }} // green color fill
          />
        </svg>
      </div>

      <div className="p-5 max-w-8xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left: Logo */}

           <div className="flex ">
          <Logo />
          
        </div>

        {/* Right: Links */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-4 sm:mt-0">
          <Link
            href="https://github.com/bushra-rauf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
          >
            <GithubLogo size={24} weight="fill" className="text-white" />
            <span className="font-medium text-white hover:text-amber-300 transition-colors">
              MealDB
            </span>
          </Link>

          <Link
            href="/mycv.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-white hover:text-amber-300 transition-colors"
          >
            My CV
          </Link>
        </div>
      </div>

      {/* Horizontal line */}
      <div className="border-t border-white/40 mt-6 relative z-10"></div>

      {/* Copyright at bottom center */}
      <p className="mt-4 text-center text-sm text-white/80 relative z-10">
        © {new Date().getFullYear()} Bushra Rauf. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer

