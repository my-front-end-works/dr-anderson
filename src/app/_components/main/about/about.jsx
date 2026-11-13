import Button from "../../global/button";

export default function About() {
  return (
    <div className="w-full h-auto p-10 xl:px-100 xl:py-50 flex flex-col gap-10">
      <h1 className="text-4xl text-black">
        Conheça o Dr. Anderson Daniel Seu Dentista para um Sorriso Saudável
      </h1>
      <p className="text-xl text-gray-600">
        Um dentista dedicado a transformar sorrisos e cuidar da saúde bucal,
        oferecendo atendimento personalizado, acolhedor e de qualidade. Seu
        objetivo é proporcionar tratamentos seguros e eficientes, ajudando cada
        paciente a conquistar um sorriso mais saudável e confiante.
      </p>
      <div className="w-full h-auto flex flex-col md:flex-row justify-start items-center gap-5">
        <Button text="Sobre mim" arrow={false}/>
        <div className="flex flex-col gap-5 text-center md:text-start text-gray-400">
          <p>2+ anos de experiencia</p>
          <p>Dou suporte na saúde pública com mais de 500 pacientes</p>
        </div>
      </div>
    </div>
  );
}
