import Paragraph from "../../global/ paragraph";
import Button from "../../global/button";
import PageContainer from "../../global/page-container";
import Title from "../../global/title";

export default function About() {
  return (
    <PageContainer className="flex flex-col">
      <Title text="Conheça o Dr. Anderson Daniel Seu Dentista para um Sorriso Saudável" />
      <Paragraph
        text={
          "Um dentista dedicado a transformar sorrisos e cuidar da saúde bucal, oferecendo atendimento personalizado, acolhedor e de qualidade. Seu objetivo é proporcionar tratamentos seguros e eficientes, ajudando cada paciente a conquistar um sorriso mais saudável e confiante."
        }
      />
      <div className="w-full h-auto flex flex-col md:flex-row justify-start items-center gap-5">
        <div className="md:w-1/4">
          <Button text="Sobre mim" arrow={false} />
        </div>
        <div className="flex flex-col text-center md:text-start text-gray-400">
          <Paragraph text="2+ anos de experiencia" />
          <Paragraph text="Dou suporte na saúde pública com mais de 500 pacientes" />
        </div>
      </div>
    </PageContainer>
  );
}
