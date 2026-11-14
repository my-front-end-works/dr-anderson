export default function BubbleText({ text = "" }) {
  return (
    <main className="w-[100%] md:w-[60%] px-5 py-2 bg-white rounded-3xl text-black text-center shadow-2xl">
      <h1>{text}</h1>
    </main>
  );
}
