import { iconsLink } from "@/app/_constants/footer/links-footer";
import Logo from "../header/logo";
import PageContainer from "./page-container";
import Link from "next/link";

export default function Footer() {
  return (
    <PageContainer className="w-full grid grid-rows-1 md:grid-rows-4 bg-black">
      <div className="w-full h-auto grid grid-rows-2 md:grid-cols-2 justify-evenly items-center">
        <div className="w-full flex justify-center md:justify-start items-center">
          <Logo color="white" />
        </div>
        <div className="w-full flex flex-col md:flex-row justify-end items-center gap-2">
          <h1>Currículo Lattes</h1>
          <div className="border" />
          <h1>
            Conselho Regional de Odontologia{" "}
            <span className="text-center font-bold">20854</span>
          </h1>
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
