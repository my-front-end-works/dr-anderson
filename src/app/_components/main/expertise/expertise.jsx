import Image from "next/image";
import { expertise, history } from "@/app/_constants/main/expertise";

export default function Expertise() {
  return (
    <main className="w-full h-auto p-10 xl:px-100 xl:py-50 gap-10 grid grid-cols-1 md:grid-cols-2">
      <div className="w-full h-auto flex flex-col text-black gap-10">
        {history.map((value) =>(
          <p key={value}>{value}</p>
        ))}

        {expertise.map((value, idx) => (
          <div key={idx} className="flex flex-col gap-5">
            <div className="w-full h-auto flex flex-row justify-between items-center">
              <h1 className="text-3xl">{value.number}</h1>
              <h2 className="text-gray-600">{value.text}</h2>
            </div>
            <hr className="text-gray-400" />
          </div>
        ))}
      </div>

      <div className="relative w-full aspect-4/5 md:aspect-auto md:min-h-full rounded-2xl">
        <Image
          src="/main/expertise/experiencias.jpg"
          alt="Experiência e atuação profissional em odontologia"
          className="object-cover rounded-2xl"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </main>
  );
}
