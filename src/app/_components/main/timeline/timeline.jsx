"use client";

import { contentTimeline, timeline } from "@/app/_constants/main/timeline";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Timeline() {
  const [index, setIndex] = useState(6);
  const [year, setYear] = useState(2026)

  const progress = (index / (timeline.length - 1)) * 100;
  useEffect(()=>(console.log(contentTimeline[year])),[year, index])
  return (
    <main className="w-full h-auto pl-100 pe-100 py-70 flex flex-col gap-10 bg-blue-500 justify-center">
      <h1 className="w-1/2 text-5xl text-white">Minha história ao decorrer dos anos de formação.</h1>
      <div className="w-full flex flex-col gap-2">
        <div className="relative w-full h-3 flex items-center">
          <hr
            className="absolute left-0 border-0 h-0.5 bg-white transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
          <div
            className="absolute w-2 h-2 bg-white rounded-full transition-all duration-500"
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
      <div className="w-full h-full grid grid-cols-3 text-white gap-5 justify-center">
        <div className="relative w-full h-50">
          <Image
            src={contentTimeline[year].image}
            fill
            className="object-cover rounded-2xl"
            alt="image"
          />
        </div>
        <div className="w-full h-full flex flex-row gap-5 justify-center items-start">
          <h1 className="text-6xl">{year}</h1>
          <div className="flex flex-col gap-5">
            <h2 className="text-white">{contentTimeline[year].text}</h2>
            <h3 className="text-white">{contentTimeline[year].text}</h3>
          </div>
        </div>
        <div className="w-full h-auto flex justify-center items-center ">
          <div className="relative w-70 h-45">
            <Image
              src={contentTimeline[year].subImage}
              fill
              className="object-cover rounded-2xl"
              alt="image"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
