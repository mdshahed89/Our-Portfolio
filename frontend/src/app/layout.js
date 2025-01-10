
import CookieBanner from "../components/CookieBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTopButton from "../components/ScrollToTopButton";
import "./globals.css";
import { Toaster } from "react-hot-toast";
export const metadata = {
  title: "Sidesone - Profesjonelle nettsider, nettbutikker og webapper",
  description: "Sidesone skaper moderne, brukervennlige nettsider, nettbutikker og skreddersydde webapplikasjoner. Øk synlighet og vekst med rask lastetid, sikkerhet og responsive design.",
  openGraph: {
    title: "Sidesone - Profesjonelle nettsider, nettbutikker og webapper",
    description:
      "Sidesone skaper moderne, brukervennlige nettsider, nettbutikker og skreddersydde webapplikasjoner. Øk synlighet og vekst med rask lastetid, sikkerhet og responsive design.",
    url: "https://sidesone.no/",
    images: [
      {
        url: "/seo-image.png",
        width: 1200,
        height: 630,
        alt: "Sidesone - Web Development Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sidesone - Profesjonelle nettsider, nettbutikker og webapper",
    description:
      "Sidesone skaper moderne, brukervennlige nettsider, nettbutikker og skreddersydde webapplikasjoner. Øk synlighet og vekst med rask lastetid, sikkerhet og responsive design.",
    images: ["/twitterCard-sidesone.png"],
  },
};

export default function RootLayout({ children }) {


  return (
    <html lang="no">
      <head>
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png"></link>
      <link rel="preload" href="/fonts/averta/AvertaDemoPE-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/fonts/averta/AvertaDemoPE-ExtraboldItalic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Sidesone",
            "url": "https://sidesone.no",
            "description": metadata.description,
          })}
        </script>
      </head>
      <body className={` antialiased font-averta  `}>
        <div className="">
          <Header />
        </div>
        <div className="min-h-[calc(100vh-304px)]">{children}</div>
        <CookieBanner />
        <div className="bg-[#035635]">
          <Footer />
          <Toaster />
          <ScrollToTopButton />
        </div>
      </body>
    </html>
  );
}
