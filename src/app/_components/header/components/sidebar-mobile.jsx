import { options } from "@/app/_constants/header/options";
import { AiOutlineLeft } from "react-icons/ai";
import Logo from "./logo";

export default function Sidebar() {
  return (
    <main className="fixed top-0 right-0 w-full sm:w-2/3 md:w-1/2 xl:w-1/3 h-screen bg-white z-50 shadow-2xl ">
      <div className="flex flex-row w-full h-auto p-5">
        <div className="flex flex-row w-full justify-between p-10 rounded-2xl shadow-md">
          <AiOutlineLeft className="text-2xl text-black" />
          <Logo />
        </div>
      </div>
    </main>
  );
}
