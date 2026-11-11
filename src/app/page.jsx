import Image from "next/image";
import Header from "./_components/header/header";
import { RiToothFill } from "react-icons/ri";
import About from "./_components/main/about/about";
import Timeline from "./_components/main/timeline/timeline";
export default function Home() {
  return (
    <main className="w-full h-full flex flex-col gap-10">
      <div className="w-full h-full">
        <Header />
      </div>
      <div className="w-full h-full">
        <About />
      </div>
      <div className="w-full h-full">
        <Timeline />
      </div>
    </main>
  );
}
