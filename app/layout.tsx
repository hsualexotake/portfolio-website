import "./globals.css";
import { Inter, Plus_Jakarta_Sans, Roboto_Mono } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
// import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"], weight: ['400', '500', '600'] });
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display'
});
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ['400', '500', '600'],
  variable: '--font-mono'
});

export const metadata = {
  title: "Alex Hsu | Portfolio",

  description: "Alex is a Computer Science major at New York University",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark !scroll-smooth">
      <body
        className={`${inter.className} ${plusJakarta.variable} ${robotoMono.variable} bg-stone-950 text-white`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            {/* <ThemeSwitch /> */}
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}