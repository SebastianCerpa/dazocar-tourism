import "./styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <script src="/carousel.js" defer></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
