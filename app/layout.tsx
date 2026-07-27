import type { Metadata } from "next";
import localFont from "next/font/local";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";

const bebasNeue = localFont({
  src: [
    {
      path: "../.vinext/fonts/bebas-neue-65ca9caa7bbf/bebas-neue-995908a0.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../.vinext/fonts/bebas-neue-65ca9caa7bbf/bebas-neue-768b5303.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-bebas-neue",
  display: "swap",
});

const geistMono = localFont({
  src: [
    {
      path: "../.vinext/fonts/geist-mono-00e989178794/geist-mono-013b2f2f.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../.vinext/fonts/geist-mono-00e989178794/geist-mono-44745446.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SOS Pipe — Seu momento, do seu jeito",
  description:
    "Curadoria de acessórios com design, qualidade e personalidade. Descubra a seleção SOS Pipe.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/assets/sos-pipe-logo-official-v2.png",
    shortcut: "/assets/sos-pipe-logo-official-v2.png",
    apple: "/assets/sos-pipe-logo-official-v2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${bebasNeue.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
