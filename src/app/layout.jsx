import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "./_components/header/header";
import Footer from "./_components/footer/footer";

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
      <body className="w-full h-auto flex flex-col">
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
