import { Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
export const metadata = {
  title: "The Wedding of Fitria & Dini",
  description: "The weddings of Fitria & Dini at 23 June 2024",
};

export default function RootLayout({ children }) {
  return (
    <html className={`${openSans.variable} ${playfair.variable}`} lang="en">
      <body>{children}</body>
    </html>
  );
}
