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
    <main className="w-full h-auto flex flex-row justify-between items-center md:fixed md:px-10 md:py-3 left-0 bg-white top-0 z-100">
      {isOpenSidebar && <Sidebar />}
      <div className="w-auto h-auto">
        <Logo />
      </div>

      <div className="xl:flex items-center hidden">
        <Button text="Entre em contato" link="https://wa.me/558184547544" />
      </div>
    </main>
  );
}
