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
import { services } from "@/app/_constants/main/services";

export default function Services() {
  return (
    <main className="w-full min-h-screen p-5 xl:px-100 xl:py-50 bg-blue-700 flex flex-col gap-10 xl:gap-20">
      <header className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
        <Title text="Serviços exercidos" color="white" />
        <Button text="Tire suas dúvidas" color="white" />
      </header>

      <section className="w-full grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-5 md:gap-0 justify-end items-center">
        <div className="w-full min-w-0 flex flex-col justify-start items-start gap-5">
          {services.map((value, idx) => (
            <div key={idx} className="flex flex-col w-full gap-5">
              <div className="w-full flex items-center gap-3 justify-between">
                <Title text={value.text} color="white" small={true} />
                <Paragraph text={value.icon} color="white"/>
              </div>
              <hr className="text-white w-full" />
            </div>
          ))}
        </div>

        <div className="w-full h-auto flex justify-end items-center">
          <div className="relative w-full md:w-[90%] h-full md:h-80 xl:h-100 overflow-hidden rounded-2xl">
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
