import Header from "./_components/header/header";
import About from "./_components/main/about/about";
import Timeline from "./_components/main/timeline/timeline";
import Services from "./_components/main/services/services";
import Expertise from "./_components/main/expertise/expertise";
import Recommendations from "./_components/main/recommendations/recommendations";

export default function Home() {
  return (
    <main className="w-full h-auto flex flex-col gap-10">
      <div className="w-full h-full">
        <About />
      </div>
      <div className="w-full h-full">
        <Timeline />
      </div>
      <div className="w-full h-full">
        <Expertise />
      </div>
      <div className="w-full h-full">
        <Services />
      </div>
      <div className="w-full h-full">
        <Recommendations/>
      </div>
    </main>
  );
}
