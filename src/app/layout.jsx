import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfairFont = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Dentista Anderson",
  description: "Desenvolvido por André Luiz",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${interFont.variable} ${playfairFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
