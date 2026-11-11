export default function About() {
  return (
    <div className="w-full h-auto pl-100 pe-100 pt-10 pb-50 flex flex-col gap-10">
      <h1 className="text-5xl text-black">
        Conheça o Dr. Anderson Daniel Seu Dentista para um Sorriso Saudável
      </h1>
      <p className="text-xl text-gray-600">
        Um dentista dedicado a transformar sorrisos e cuidar da saúde bucal,
        oferecendo atendimento personalizado, acolhedor e de qualidade. Seu
        objetivo é proporcionar tratamentos seguros e eficientes, ajudando cada
        paciente a conquistar um sorriso mais saudável e confiante.
      </p>
      <div className="w-full h-auto flex flex-row justify-start items-center gap-5">
        <button className="bg-blue-500 w-auto rounded-4xl px-7 py-2 text-white flex flex-row justify-center items-center gap-10 text-md shadow">
          Sobre mim
        </button>
        <div className="flex flex-col text-gray-400">
          <p>2+ anos de experiencia</p>
          <p>Dou suporte na saúde pública com mais de 500 pacientes</p>
        </div>
      </div>
    </div>
  );
}
