export default function Title({ text = "", color = "black", small = false }) {
  return (
    <main
      className={`${small ? "text-3xl" : "text-6xl"} ${color != "black" ? "text-white" : "text-black"}`}
    >
      {text}
    </main>
  );
}
