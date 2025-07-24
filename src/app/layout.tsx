import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderPublic from "../components/layout/header/header-public";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anuncios Clasificados en Perú | tu-aviso.pe, tu espacio para publicar y encontrar",
  description:
    "Explora los últimos anuncios clasificados en tu-aviso.pe. Publica gratis, compra y vende productos, servicios, inmuebles, vehículos y más en todo el Perú.",
  keywords: [
    "tu-aviso",
    "tuaviso",
    "clasificados Perú",
    "anuncios clasificados",
    "anuncios gratis Perú",
    "anuncios gratis",
    "anuncios gratis en Perú",
    "tu-aviso.pe",
    "anuncios clasificados Perú",
    "compra y venta Perú",
    "publicar anuncios gratis",
    "anuncios de servicios",
    "anuncios de trabajo",
    "productos usados Perú",
    "clasificados online",
    "anuncios Lima",
    "anuncios publicados",
    "comprar y vender Perú",
    "anuncios inmobiliarios",
    "anuncios de vehículos",
    "anuncios de empleo",
    "anuncios de mascotas",
    "anuncios de tecnología",
    "empleo en Perú",
    "comprar en Perú",
    "vender en Perú",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderPublic />
          {children}
      </body>
    </html>
  );
}
