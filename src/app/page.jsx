import Image from "next/image";
import Header from "./_components/header/header";
import { RiToothFill } from "react-icons/ri";
import About from "./_components/main/about/about";
import Timeline from "./_components/main/timeline/timeline";
import Services from "./_components/services/services";
import Expertise from "./_components/main/expertise/expertise";
export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col gap-10">
      <div className="w-full h-auto">
        <Header />
      </div>
      <div className="w-full h-auto">
        <About />
      </div>
      <div className="w-full h-auto">
        <Timeline />
      </div>
      <div className="w-full h-auto">
        <Expertise />
      </div>
      <div className="w-full h-auto">
        <Services />
      </div>
    </main>
  );
}
