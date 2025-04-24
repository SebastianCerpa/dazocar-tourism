import "./styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="/carousel.js" defer></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
