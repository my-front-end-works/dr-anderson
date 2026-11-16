export default function Title({
  text = "",
  color = "black",
  small = false,
  className = "",
}) {
  return (
    <h1
      className={`
        w-full wrap-break-word
        ${small ? "text-2xl md:text-3xl" : "text-3xl md:text-5xl"}
        ${color !== "black" ? "text-white" : "text-black"}
        ${className}
      `}
    >
      {text}
    </h1>
  );
}
