import { RiToothFill } from "react-icons/ri";

export default function Logo() {
  return (
    <div className="w-auto flex flex-row gap-2 justify-center items-center">
      <RiToothFill className="text-2xl text-black/80" />
      <h1 className="text-xl text-black/80 font-mono">Anderson Daniel</h1>
    </div>
  );
}
