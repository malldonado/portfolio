"use client";

import { DM_Sans } from 'next/font/google';
import "./globals.css";
import Loading from "@/components/loading/loading";
import { useState } from 'react';
import { metadata } from "./metadata"; // Importe metadata aqui

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000); // Simulates a 2-second loading time

  return (
    <html lang="en">
      <body className={dmSans.className}>
        {/* Renderiza o Loading enquanto estiver carregando */}
        {loading && <Loading />}

        {/* Renderiza o conteúdo da página depois que o carregamento for concluído */}
        {!loading && children}
      </body>
    </html>
  );
}
