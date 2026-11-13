import Image from "next/image";
import Header from "./_components/header";
export default function Home() {
  return (
    <main className="w-full h-screen">
      <div className="w-full h-auto p-5">
        <Header />
      </div>
      {/* <div className="w-full h-auto bg-gray-700 text-3xl p-5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam doloremque esse eum ad, optio quisquam modi magni repellendus commodi, maxime provident dolores minus deserunt, repudiandae accusamus officia cumque deleniti ea.
      </div>
      <div className="w-full h-30 bg-white"></div> */}
    </main>
  );
}
