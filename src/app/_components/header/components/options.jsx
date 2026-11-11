import { options } from "@/app/_constants/header/options";
import { RiToothFill } from "react-icons/ri";

export default function Options() {
  return (
    <main className="w-full h-auto flex flex-row justify-between items-center">
      <div className="w-auto h-auto flex flex-row items-center gap-2">
        <RiToothFill className="text-2xl text-black/80" />
        <h1 className="text-xl text-black/80 font-mono">Anderson Daniel</h1>
      </div>
      <div className="flex flex-row gap-10 items-center">
        {options.map((value, idx) => (
          <button
            key={idx}
            className="hover: cursor-pointer p-3 rounded-3xl text-black/80 text-md"
          >
            {value}
          </button>
        ))}
      </div>
      <div className="flex items-center">
        <button className="bg-blue-500 w-auto rounded-4xl px-3 py-2 text-white flex flex-row justify-center items-center gap-10 text-md shadow">
          Entre em contato!
        </button>
      </div>
    </main>
  );
}
{
  /* <MdOutlineIosShare className="w-auto h-auto  border rounded-full p-2 text-black hover:bg-black hover:text-black delay-700 duration-700 " />; */
}
