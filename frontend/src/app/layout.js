import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTopButton from "./components/ScrollToTopButton";
import "./globals.css";
import { Toaster } from "react-hot-toast";
export const metadata = {
  title: "Sidesone",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body className={` antialiased `}>
        <div className="">
          <Header />
        </div>
        <div className="min-h-[calc(100vh-304px)]">{children}</div>
        <div className="bg-[#035635]">
          <Footer></Footer>
          <Toaster />
          <ScrollToTopButton />
        </div>
      </body>
    </html>
  );
}
