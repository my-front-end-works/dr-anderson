import { FaArrowRight } from "react-icons/fa";

export default function Button({
  text = "texto vazio",
  arrow = true,
  link = "",
}) {
  return (
    <button className="bg-blue-500 w-auto rounded-4xl px-5 py-2 text-white flex flex-row justify-center items-center gap-2 text-xl shadow">
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
