import PageContainer from "../../global/page-container";
import Title from "../../global/title";
import BubbleText from "../../global/bubble-text";
import Paragraph from "../../global/ paragraph";
import { recommendations } from "@/app/_constants/main/recommendations";

export default function Recommendations() {
  return (
    <PageContainer className="flex flex-col">
      <header className="w-auto min-w-0">
        <Title text="Minhas recomendações como dentista" />
      </header>

      <section className="w-full min-w-0 grid grid-cols-1 md:grid-cols-2 gap-5">
        {recommendations.map((item, index) => (
          <div
            key={index}
            className={`relative w-full min-w-0 overflow-hidden ${
              item.size === "large"
                ? "h-120 md:row-span-3 md:h-145"
                : "h-120 md:h-70"
            } bg-cover bg-center bg-no-repeat flex flex-col justify-end items-start p-5 rounded-2xl gap-5`}
            style={{ backgroundImage: `url('${item.image}')` }}
          >
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

            <div className="relative z-10 w-full min-w-0 flex flex-col gap-3">
              <BubbleText text={item.title} />
              <Paragraph text={item.description} color="white" />
            </div>
          </div>
        ))}
      </section>
    </PageContainer>
  );
}
