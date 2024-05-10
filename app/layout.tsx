import type { Metadata } from "next";
import { Inter,IBM_Plex_Serif} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-intel'});
const ibmPlexSerif =  IBM_Plex_Serif({
  subsets:['latin'],
  weight:['400','700'],
  variable:'--font-ibm-plex-serfi'
}) 


export const metadata: Metadata = {
  title: "Bankio",
  description: "GBankio is a modern banking platform for everyone",
  icons: {
    icon:'/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
    </html>
  );
}
