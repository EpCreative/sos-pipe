import type { Metadata } from "next";
import { Bebas_Neue, Geist_Mono } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sos-pipe.vercel.app"),
  title: "SOS Pipe — Seu momento, do seu jeito",
  description:
    "Curadoria de acessórios com design, qualidade e personalidade. Descubra a seleção SOS Pipe.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "SOS Pipe",
    title: "SOS Pipe — Seu momento, do seu jeito",
    description:
      "Curadoria de acessórios com design, qualidade e personalidade. Descubra a seleção SOS Pipe.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "SOS Pipe — Seu momento, do seu jeito",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOS Pipe — Seu momento, do seu jeito",
    description:
      "Curadoria de acessórios com design, qualidade e personalidade. Descubra a seleção SOS Pipe.",
    images: ["/og.png"],
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
