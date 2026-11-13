"use client";

import { contentTimeline, timeline } from "@/app/_constants/main/timeline";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Timeline() {
  const [index, setIndex] = useState(6);
  const [year, setYear] = useState(2026);

  const progress = (index / (timeline.length - 1)) * 100;

  return (
    <main className="w-full h-auto p-10 xl:px-100 xl:py-50 flex flex-col gap-10 bg-blue-500">
      <h1 className="w-full text-4xl md:text-5xl text-white">
        Minha história ao decorrer dos anos de formação.
      </h1>
      <div className="w-full flex flex-col gap-2">
        <div className="relative w-full h-auto flex items-center">
          <hr
            className="absolute left-0 border-0 h-0.5 bg-white transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
          <div
            className="absolute w-4 h-4 md:w-2 md:h-2 bg-white rounded-full transition-all duration-500"
            style={{
              left: `${progress}%`,
              transform: "translateX(-50%)",
            }}
          />
        </div>
        <div className="w-full flex justify-between">
          {timeline.map((value, idx) => (
            <h1
              key={idx}
              onClick={() => {
                setIndex(idx);
                setYear(value);
              }}
              className={`cursor-pointer transition-colors text-white`}
            >
              {value}
            </h1>
          ))}
        </div>
      </div>
      <div className="w-full h-auto grid grid-rows-3 sm:grid-rows-1 md:grid-cols-3 xl:grid-rows-1 text-white gap-5">
        <div className="relative w-full h-64 md:h-72 xl:h-80">
          <Image
            src={contentTimeline[year].image}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover rounded-2xl"
            alt="Imagem da trajetória"
          />
        </div>
        <div className="w-full h-auto flex flex-col gap-5 ">
          <h1 className="text-6xl">{year}</h1>
          <div className="flex flex-col gap-5">
            <h2 className="text-white">{contentTimeline[year].text}</h2>
            <h3 className="text-white">{contentTimeline[year].text}</h3>
            <h4 className="text-white">{contentTimeline[year].text}</h4>
          </div>
        </div>
        <div className="w-full h-auto flex justify-center items-center ">
          <div className="relative w-full h-64 md:h-72 xl:h-80 md:col-span-2 xl:col-span-1">
            <Image
              src={contentTimeline[year].subImage}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover rounded-2xl"
              alt="Imagem complementar da trajetória"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
