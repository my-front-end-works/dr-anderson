"use client";
import { options } from "@/app/_constants/header/options";
import { Icon } from "@iconify/react";
import { RiToothFill } from "react-icons/ri";
import { useState } from "react";
import Sidebar from "./sidebar-mobile";
import Logo from "./logo";

export default function Options() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const openSidebar = () => setIsOpenSidebar(prev => !prev);

  return (
    <main className="w-full h-auto flex flex-row justify-between items-center">
      {isOpenSidebar && <Sidebar />}
      <div className="w-auto h-auto">
        <Logo/>
      </div>
      <div className="xl:flex flex-row gap-10 items-center hidden">
        {options.map((value, idx) => (
          <button
            key={idx}
            className="hover: cursor-pointer p-3 rounded-3xl text-black/80 text-md"
          >
            {value}
          </button>
        ))}
      </div>
      <div className="xl:flex items-center hidden">
        <button className="bg-blue-500 w-auto rounded-4xl px-3 py-2 text-white flex flex-row justify-center items-center gap-10 text-md shadow">
          Entre em contato!
        </button>
      </div>
      <div className="xl:hidden flex justify-center items-center">
        <Icon
          icon="line-md:align-justify"
          className="w-6 h-6 text-black"
          onClick={() => openSidebar()}
        />
      </div>
    </main>
  );
}
