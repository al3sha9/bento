import React from "react";
import { RiHomeLine } from "react-icons/ri";
import { PiCircleDashedDuotone } from "react-icons/pi";
import Link from "next/link";
import { TbBrandPaypal } from "react-icons/tb";
import { AiOutlineApple } from "react-icons/ai";


const Navbar = () => {
  return (
    
    <section className=" flex justify-center items-center">
      <div className="flex flex-wrap overflow-hidden  container justify-center items-center">
        <div className="w-full px-1 my-1 sm:w-full sm:px-1 sm:my-1 py-10 md:w-1/3 md:px-1 md:my-1 lg:w-1/4 lg:px-1 lg:my-1 xl:w-1/4 xl:px-1 xl:my-1">
          <div className="flex justify-start items-center h-full space-x-2">
            <Link href="/" className="bg-gray-200 p-2 rounded-full">
              <RiHomeLine className="text-2xl" />
            </Link>
            <Link href="/" className="bg-gray-200 p-2 rounded-full">
              <PiCircleDashedDuotone className="text-2xl" />
            </Link>
          </div>
        </div>
        <div className="w-full px-1 my-1 sm:w-full sm:px-1 sm:my-1 py-10 md:w-1/3 md:px-1 md:my-1 lg:w-2/4 lg:px-1 lg:my-1 xl:w-2/4 xl:px-1 xl:my-1">
          <div className="flex justify-center items-center">
            <h2 className="font-bold text-2xl p-2">Ravo-X</h2>
          </div>
        </div>
        <div className="w-full px-1 my-1 sm:w-full sm:px-1 sm:my-1 py-10 md:w-1/3 md:px-1 md:my-1 lg:w-1/4 lg:px-1 lg:my-1 xl:w-1/4 xl:px-1 xl:my-1">
          <div className="flex justify-end items-center h-full space-x-2">
            <Link href="/" className="bg-gray-200 p-2 rounded-full">
              <TbBrandPaypal className="text-2xl" />
            </Link>
            <Link href="/" className="bg-gray-200 p-2 rounded-full">
              <AiOutlineApple className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
