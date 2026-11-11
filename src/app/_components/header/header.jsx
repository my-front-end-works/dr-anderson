import Options from "./components/options";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Icon } from "@iconify/react";



export default function Header() {
  return (
    <header className="w-full h-full bg-[url('/header/desktop/banner-header.png')] bg-center bg-no-repeat p-5 pb-30">
      <div className="w-full h-full">
        <Options />
      </div>
      <div className="w-full h-full flex flex-row justify-between items-start p-40 text-gray-700 text-2xl">
        <div className="w-3/9 flex flex-col gap-7">
          <hr className="w-1/5 border-2 border-blue-800 rounded-full" />
          <h1 className="w-2/3">
            Formado em odontologia, especialista em saúde pública
          </h1>
          <h1 className="text-5xl">
            <span className="text-blue-900 font-bold">
              Cuidado de Sorrisos,
            </span>{" "}
            <span className="text-blue-800 font-bold">
              transformando vidas.
            </span>
          </h1>
          <p>
            Compromisso com a sua saúde bucal, em um atendimento
            humanizado.{" "}
          </p>
          <button className="bg-blue-500 w-auto rounded-4xl px-3 py-2 text-white flex flex-row justify-center items-center gap-10 text-md shadow">
            <span>
              <FaRegCalendarAlt className="text-2xl" />
            </span>
            Agende sua consulta
            <span>
              <FaArrowRightLong />
            </span>
          </button>
        </div>
        <div className="w-2/7 flex flex-col gap-7">
          <hr className="w-1/3 border-2 border-blue-800 rounded-full" />
          <h1>
            <span className="font-bold">Meu objetivo</span> é oferecer um
            atendimento humanizado e cuidadoso, promovendo saúde bucal,
            confiança e bem-estar em cada sorriso.
          </h1>
        </div>
      </div>
      <div className="w-full h-auto flex justify-center items-center">
        <Icon
          icon="svg-spinners:bouncing-ball"
          className="w-5 h-auto flex justify-center items-center"
        />
      </div>
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
