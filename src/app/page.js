"use client"

import { useState, useEffect } from "react";
import Navbar from "@/components/nav";
import Image from "next/image";
import IMGPIC from '../../public/pic.png'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="h-[300vh]">
      <section className="h-[100vh]">
        <div className="h-[15%]">
          <Navbar />
          {/* navbar here */}
        </div>
        <div className="bg-class h-[85%]">
          <div className="flex w-full h-full justify-center items-end">
            <Image
              src={IMGPIC}
              width={434}
              height={666}
              alt="B"
              className="transition-all md:ms-10"
              style={{ transform: isScrolled ? 'scale(2)' : 'scale(1)' }}
            />
            <button
              className={`absolute transition-all bottom-[50px]   rounded-full text-2xl bg-[#BBFF1A] ${isScrolled ? 'shadow-[5px_5px_0px_0px_rgba(109,40,217)]' : 'shadow-sm'
                } ${isScrolled ? 'px-16 py-6' : 'px-10 py-4'
                }`}
            >
              Discover
            </button>

          </div>
        </div>
      </section>
    </main>
  );
}
