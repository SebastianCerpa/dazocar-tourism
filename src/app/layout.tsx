import "./styles/globals.css";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning className={nunitoSans.className}>
      <head>
        <script src="/carousel.js" defer></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
