import "./globals.css";

export const metadata = {
  title: "Contxt GRC Advisors, LLC.",
  description: "Your Experience, Our Expertise",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
