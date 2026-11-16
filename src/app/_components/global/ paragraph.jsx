export default function Paragraph({text = 'sem texto', color = 'gray'}){
    return (
      <p
        className={`text-xl ${color === "gray" ? "text-gray-600" : color === "black" ? "text-black " : "text-white "}`}
      >
        {text}
      </p>
    );
}