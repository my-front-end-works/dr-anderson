import { MdOutlineIosShare } from "react-icons/md";

import Image from "next/image";
import { personal } from "../_constants/personal";

export default function Header() {
  return (
    <header className="w-full h-auto md:h-[80%] bg-[url('/header/mobile/banner.jpg')] md:bg-[url('/header/desktop/banner.png')] bg-cover p-5 rounded-xl flex flex-col gap-20">
      <div className="w-full h-auto flex flex-row justify-end ">
        <MdOutlineIosShare className="w-10 h-10  border rounded-full p-2 text-white" />
      </div>
      <div className="w-full md:w-1/3 h-full gap-10 flex flex-row justify-start items-center text-start md:p-5">
        <div className="text-white flex flex-col justify-center gap-5">
          <h1 className="text-5xl md:text-7xl">Dr. Anderson Daniel</h1>
          <p className="text-xl">Formado na universidade estadual de Pernambuco atuante no governo do estado como dentista.</p>
        </div>
      </div>
      {/* <div className="w-full h-30 bg-white rounded-2xl">

      </div> */}
      
    </header>
  );
}

{
  /* <div className="w-full h-auto grid grid-rows-[0.5fr_3fr] items-start gap-10">
        
        
          <div className="relative w-full h-50 flex justify-end items-end">
            <Image
              src={"/header/doutor.png"}
              fill
              alt="dentista"
              className="object-contain "
              sizes="192px"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-auto bg-white rounded-2xl flex flex-row justify-evenly items-center p-5">
        {personal.map((value, idx) => (
          <div key={idx} className="flex flex-row text-black gap-2">
            <div className="text-4xl">{value.icon}</div>
            <div className="flex flex-col">
              <h1 className="text-md">{value.title}</h1>
              <p className="text-sm">{value.subtitle}</p>
            </div>
          </div>
        ))}
      </div> */
}
