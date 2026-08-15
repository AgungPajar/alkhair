import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Rumah Qur’ani Al-Khair Cerdiq | Membangun Generasi Qur'ani",
  description: "Lembaga pendidikan Islam dan TPQ terpercaya untuk mencetak generasi penghafal Al-Qur'an. Program tahsin, tahfizh, dan diniyah untuk anak.",
  keywords: ["TPQ", "Rumah Qur'ani", "Tahfizh Anak", "Belajar Al-Qur'an", "Gowa", "Pendidikan Islam"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.className} h-full antialiased scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-gray-50" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
