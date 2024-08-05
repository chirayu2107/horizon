import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif as IBM_Plex_SerifFont } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const IBM_Plex_Serif = Inter ({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable:'--font-ibm-plex-serif'
})

export const metadata: Metadata = {
  title: "PrimePay",
  description: "Modern Banking Platform",
  icons:{
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'${inter.variable} ${ibmPlexSerif.}'}>{children}</body>
    </html>
  );
}
