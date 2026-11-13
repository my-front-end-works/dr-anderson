"use client";
import { FiAlignRight } from "react-icons/fi";
import { useState } from "react";

import { options } from "@/app/_constants/header/options";

import Sidebar from "./sidebar-mobile";
import Logo from "./logo";
import Button from "../global/button";

export default function Options() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const openSidebar = () => setIsOpenSidebar(prev => !prev);

  return (
    <main className="w-full h-auto flex flex-row justify-between items-center">
      {isOpenSidebar && <Sidebar />}
      <div className="w-auto h-auto">
        <Logo />
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
        <Button text={"Entre em contato"} />
      </div>
      <div className="xl:hidden flex justify-center items-center">
        <FiAlignRight
          className="w-6 h-6 text-black"
          onClick={() => openSidebar()}
        />
      </div>
    </main>
  );
}
