import "./globals.css";
import localFont from "next/font/local";

const Sans = localFont({
  // src: "./fonts/GeistVF.woff",
  src: "./fonts/DMSans-VariableFont_opsz,wght.ttf",
  // variable: "--font-geist-sans",
  weight: "400, 600",
});

export const metadata = {
  title: "Contxt GRC Advisors, LLC.",
  description: "Your Experience, Our Expertise",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={Sans.className}>
      <body>{children}</body>
    </html>
  );
}
