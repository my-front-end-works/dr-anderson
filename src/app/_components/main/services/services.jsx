"use client";

import Image from "next/image";
import {
  RiToothFill,
  RiToothLine,
  RiFirstAidKitLine,
} from "react-icons/ri";

import Button from "../../global/button";
import Title from "../../global/title";
import Paragraph from "../../global/ paragraph";

export default function Services() {
  return (
    <main className="w-full min-h-screen p-5 xl:px-100 xl:py-50 bg-blue-700 flex flex-col gap-10 xl:gap-20">
      <header className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
        <Title text="Serviços exercidos" color="white" />
        <Button text="Tire suas dúvidas" color="white" />
      </header>

      <section className="w-full grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-5 md:gap-0 justify-end items-center">
        <div className="w-full min-w-0 flex flex-col justify-start items-start gap-5">
          <div className="w-full flex items-center gap-3">
            <Title text="Limpeza dentária" color="white" small={true} />
            <RiToothLine className="text-white text-2xl shrink-0" />
          </div>

          <hr className="w-full border-white/20" />

          <div className="w-full flex flex-col justify-start items-start gap-4">
            <div className="flex items-center gap-3">
              <Title text="Urgência" color="white" small={true} />
              <RiFirstAidKitLine className="text-white text-2xl shrink-0" />
            </div>

            <Paragraph
              text="Procedimentos realizados com cuidado e precisão para recuperar a saúde bucal, aliviar desconfortos e restaurar a funcionalidade dos dentes, proporcionando mais conforto, segurança e confiança ao sorrir."
              color="white"
            />
          </div>

          <hr className="w-full border-white/20" />

          <div className="w-full flex items-center gap-3">
            <Title text="Prótese dentária" color="white" small={true} />
            <RiToothFill className="text-white text-2xl shrink-0" />
          </div>

          <hr className="w-full border-white/20" />
        </div>

        <div className="w-full h-auto flex justify-end items-center">
          <div className="relative w-full md:w-2/3 h-100 md:h-80 xl:h-100 overflow-hidden rounded-2xl">
            <Image
              src="/main/services/servicos.png"
              alt="Atendimento e procedimentos odontológicos"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-fill rounded-2xl"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
