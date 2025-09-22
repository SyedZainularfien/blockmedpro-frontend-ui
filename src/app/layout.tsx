import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import ScrollToTop from "@/components/scrollToTop/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Block Med Pro",
  description: "Block Med Pro Frontend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-[2560px] mx-auto overflow-x-hidden">
          <Header />
          {children}
          <ScrollToTop />
          <ToastContainer />
          <Footer />
        </div>
      </body>
    </html>
  );
}
