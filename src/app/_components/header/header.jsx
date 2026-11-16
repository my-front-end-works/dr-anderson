"use client";

import Options from "./options";
import Button from "../global/button";
import Paragraph from "../global/ paragraph";
import Title from "../global/title";

export default function Header() {
  return (
    <header
      className="
        w-full min-h-screen 
        bg-[url('/header/mobile/banner-header.png')]
        md:bg-[url('/header/desktop/banner-header.png')]
        bg-top 
        md:bg-center bg-no-repeat bg-fill
        p-5
      "
    >
      <div className="w-full">
        <Options />
      </div>

      {/* Conteúdo desktop */}
      <div className="hidden md:flex w-full flex-row justify-between items-start md:p-40 text-gray-700">
        <div className="md:w-3/9 flex flex-col gap-7">
          <hr className="w-1/5 border-2 border-blue-800 rounded-full" />

          <Title
            text="Formado em odontologia, especialista em saúde pública"
            color="black"
            small={true}
          />

          <div className="flex flex-col">
            <Title text="Cuidado de Sorrisos," color="blue" />
            <Title text="transformando vidas." color="blue-light" />
          </div>

          <Paragraph text="Compromisso com a sua saúde bucal, em um atendimento humanizado." />

          <Button
            text="Faça um agendamento"
            link="https://wa.me/558184547544"
          />
        </div>

        <div className="md:w-2/7 flex flex-col gap-7">
          <hr className="w-1/3 border-2 border-blue-800 rounded-full" />

          <Title
            text="Meu objetivo é oferecer um atendimento humanizado e cuidadoso, promovendo saúde bucal, confiança e bem-estar em cada sorriso."
            color="black"
            small={true}
          />
        </div>
      </div>

      {/* Conteúdo mobile */}
      <div
        className="
          md:hidden
          flex flex-col
          items-center
          text-center
          gap-5
          pt-[440px]
        "
      >
        <div className="flex flex-col items-center gap-3">
          <hr className="w-16 border-2 border-white rounded-full" />

          <p className="text-sm font-semibold uppercase tracking-[3px] text-white">
            Odontologia humanizada
          </p>
        </div>

        <h1 className="text-4xl font-bold leading-tight text-white">
          Cuidando de sorrisos,
          <span className="block text-white">transformando vidas.</span>
        </h1>

        <p className="max-w-sm text-base leading-relaxed text-white">
          Um atendimento acolhedor e personalizado, dedicado à sua saúde bucal e
          ao seu bem-estar.
        </p>

        <div className="w-full flex justify-center pt-2">
          <Button
            text="Faça um agendamento"
            link="https://wa.me/558184547544"
          />
        </div>
      </div>
    </header>
  );
}
