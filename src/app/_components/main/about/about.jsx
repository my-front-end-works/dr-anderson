import Paragraph from "../../global/ paragraph";
import Button from "../../global/button";
import Title from "../../global/title";

export default function About() {
  return (
    <main className="w-full h-auto p-5 xl:px-100 xl:py-50 gap-10 flex flex-col">
      <Title text="Conheça o Dr. Anderson Daniel Seu Dentista para um Sorriso Saudável" />
      <Paragraph
        text={
          "Um dentista dedicado a transformar sorrisos e cuidar da saúde bucal, oferecendo atendimento personalizado, acolhedor e de qualidade. Seu objetivo é proporcionar tratamentos seguros e eficientes, ajudando cada paciente a conquistar um sorriso mais saudável e confiante."
        }
      />
      <div className="w-full h-auto flex flex-col md:flex-row justify-start items-center gap-5">
        <Button text="Sobre mim" arrow={false} />
        <div className="flex flex-col gap-2 text-center md:text-start text-gray-400">
          <p>2+ anos de experiencia</p>
          <p>Dou suporte na saúde pública com mais de 500 pacientes</p>
        </div>
      </div>
    </main>
  );
}
