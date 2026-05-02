import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import {BotonFlotante} from "@/app/components/BotonWhatsapp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abogado en Texcoco | Bufete Ortega",
  description:"Despacho jurídico en Texcoco especializado en derecho penal, asesoría legal personalizada y defensa inmediata.",

  openGraph: {
    title: "Abogado en Texcoco | Bufete Ortega",
    description:"Consulta legal inmediata en Texcoco. Especialistas en derecho penal.",
    url: "https://misitio.com",
    siteName: "Bufete Ortega",
    images: [
      {
        url: "/abogado-mazo.jpg",
        width: 1200,
        height: 630,
        alt: "Bufete Ortega despacho jurídico en Texcoco",
      },
    ],
    type: "website",
    locale: "es_MX",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950">
        <Navbar/>
        {children}
        <BotonFlotante/>
        <Footer/>
      </body>
    </html>
  );
}
