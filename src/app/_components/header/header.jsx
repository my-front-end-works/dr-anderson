"use client";

import Options from "./options";
import Button from "../global/button";
import Paragraph from "../global/ paragraph";
import Title from "../global/title";

export default function Header() {
  return (
    <header className="w-full h-auto bg-[url('/header/desktop/banner-header.png')] bg-center bg-no-repeat p-5 pb-20">
      <div className="w-full h-full">
        <Options />
      </div>

      <div className="w-full h-full xl:flex flex-row justify-between items-start md:p-40 text-gray-700 hidden">
        <div className="w-3/9 flex flex-col gap-7">
          <hr className="w-1/5 border-2 border-blue-800 rounded-full" />

          <Title
            text="Formado em odontologia, especialista em saúde pública"
            color="black"
            small={true}
            className="w-2/3 text-2xl"
          />

          <div className="flex flex-col">
            <Title
              text="Cuidado de Sorrisos,"
              color="black"
              className="text-5xl text-blue-900 font-bold"
            />

            <Title
              text="transformando vidas."
              color="black"
              className="text-5xl text-blue-800 font-bold"
            />
          </div>

          <Paragraph
            text="Compromisso com a sua saúde bucal, em um atendimento humanizado."
            className="text-gray-700"
          />

          <div className="xl:flex items-center hidden">
            <Button text="Faça um agendamento" />
          </div>
        </div>

        <div className="w-2/7 flex flex-col gap-7">
          <hr className="w-1/3 border-2 border-blue-800 rounded-full" />

          <Title
            text="Meu objetivo é oferecer um atendimento humanizado e cuidadoso, promovendo saúde bucal, confiança e bem-estar em cada sorriso."
            color="black"
            small={true}
            className="text-2xl"
          />
        </div>
      </div>
    </header>
  );
}
