import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Inter, Roboto, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
