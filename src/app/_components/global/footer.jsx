import { iconsLink } from "@/app/_constants/footer/links-footer";
import Logo from "../header/logo";
import PageContainer from "./page-container";
import Link from "next/link";
import Paragraph from "./ paragraph";

export default function Footer() {
  return (
    <PageContainer className="w-full grid grid-rows-1 bg-black">
      <div className="w-full h-auto grid grid-rows-2 md:grid-cols-2 justify-evenly items-center">
        <div className="w-full flex justify-center md:justify-start items-center">
          <Logo color="white" />
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-end gap-2">
          <Paragraph text="Currículo Lattes" color="white" />

          <div className="border md:h-6" />

          <div className="w-full md:w-auto flex flex-col justify-center items-center text-center md:justify-end md:items-start">
            <Paragraph text="Conselho Regional de Odontologia" color="white" />
            <span className="font-bold">20854</span>
          </div>
        </div>
      </div>
      <hr className="w-full text-gray-300" />
      <div className="w-full h-auto flex flex-row justify-center md:justify-center items-center gap-5">
        {iconsLink.map((value, idx) => (
          <div
            key={idx}
            className="w-auto h-auto flex flex-row justify-center items-center "
          >
            <Link href={value.link} target="_blank">
              <button className="text-2xl border rounded-full p-3 cursor-pointer hover:bg-white hover:text-black duration-500 delay-75">
                {value.icon}
              </button>
            </Link>
          </div>
        ))}
      </div>
      <div className="w-full h-auto flex flex-row justify-center items-center">
        <h1>
          © 2026{" "}
          <Link
            href={
              "https://www.instagram.com/__andredev__?srtk=ZDNlZDc0MzIxNw=="
            }
            target="_blank"
          >
            <span className="hover:font-bold">André Luiz</span>
          </Link>
          . Todos os direitos reservados.
        </h1>
      </div>
    </PageContainer>
  );
}
