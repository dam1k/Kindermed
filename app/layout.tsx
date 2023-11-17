import type { Metadata } from "next";
import { Rubik as FontSans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const rubik = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Kindermed",
  description: "Kindermed - clinica pentru copii",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
      {/*<Provider store={store}>*/}
          <Header />
          {children}
      {/*</Provider>*/}
      </body>
    </html>
  );
}
