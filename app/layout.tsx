import "./globals.css";
import { Inter } from "next/font/google";
import ThemeContextProvider from "./context/theme-context";
import ThemeSwitch from "./components/theme-switch";
import HeaderMenu from "./components/header-menu";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#FDF8F4] dark:bg-[#0E0421]`}>
        <div className="bg-[#dbd7fb] hidden sm:block absolute top-[7rem] -z-20 h-[20.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[33.75rem] right-[0rem] dark:bg-[#676394]"></div>
        <ThemeContextProvider>
          <HeaderMenu />
          {children}
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
