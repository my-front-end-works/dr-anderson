import { FaArrowRight } from "react-icons/fa";

export default function Button({
  text = "texto vazio",
  arrow = true,
  link = "",
  color = 'blue'
}) {
  return (
    <button
      className={` w-auto rounded-4xl ${color !== "blue" ? "bg-white text-black" : "bg-blue-400 text-white"}  px-5 py-2 flex flex-row justify-center items-center gap-5 text-xl shadow`}
    >
      {text}
      {arrow ? (
        <span>
          <FaArrowRight />
        </span>
      ) : (
        ""
      )}
    </button>
  );
}
