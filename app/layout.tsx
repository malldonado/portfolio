import type { Metadata } from "next";
import { DM_Sans } from 'next/font/google';
import "./globals.css";

const dmSans = DM_Sans({
  weight: ['400', '500', '700'], // Pode ajustar os pesos conforme necessário
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Malldonado.dev - Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
