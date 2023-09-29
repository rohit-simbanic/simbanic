import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeContextProvider from "./context/theme-context";
import ThemeSwitch from "./components/theme-switch";
import HeaderMenu from "./components/header-menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simbanic Website | Homepage",
  description: "site is under development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#FDF8F4] dark:bg-[#0E0421]`}>
        <ThemeContextProvider>
          <HeaderMenu />
          {children}
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
