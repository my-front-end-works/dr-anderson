import { RiToothFill } from "react-icons/ri";

export default function Logo({color = 'black'}) {
  return (
    <main className="w-auto flex flex-row gap-2 justify-center items-center">
      <RiToothFill
        className={`text-2xl ${color !== "black" ? "text-white" : "text-black/80"}`}
      />
      <h1
        className={`text-xl ${color !== "black" ? "text-white" : "text-black/80"}`}
      >
        Anderson Daniel
      </h1>
    </main>
  );
}
