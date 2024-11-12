import type { Metadata } from "next";
import { Open_Sans } from "next/font/google"; 
import localFont from "next/font/local"; // لاستيراد الخطوط المحلية
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import { footerData } from "./data/footerData";
import Footer from "@/components/Footer/Footer";

const open_Sans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

// تحميل خط Podcast محليًا
const podcastFont = localFont({
  src: "./fonts/Podcast.ttf", // مسار ملف الخط
  variable: "--font-podcast",
});

export const metadata: Metadata = {
  title: "Enjoy in the best way!",
  description: "Enjoy our services for your trip anytime",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${open_Sans.variable} ${podcastFont.variable} antialiased`}>
        <NavBar />
        {children}
        <Footer footerData={footerData} /> 
      </body>
    </html>
  );
}
