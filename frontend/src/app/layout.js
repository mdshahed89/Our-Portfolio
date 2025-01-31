import { Messanger } from "@/components/BookNowModal";
// const Messanger = dynamic(() => import("../components/BookNowModal"));
import CookieBanner from "../components/CookieBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTopButton from "../components/ScrollToTopButton";
import "./globals.css";
import { Toaster } from "react-hot-toast";
export const metadata = {
  metadataBase: new URL("https://sidesone.no"),
  title: "Sidesone - Profesjonelle nettsider, nettbutikker og webapper",
  description:
    "Sidesone utvikler moderne nettsider, nettbutikker og webapplikasjoner med rask lastetid, høy sikkerhet og responsivt design for økt synlighet og vekst.",
  openGraph: {
    title: "Sidesone - Profesjonelle nettsider, nettbutikker og webapper",
    description:
      "Sidesone utvikler moderne nettsider, nettbutikker og webapplikasjoner med rask lastetid, høy sikkerhet og responsivt design for økt synlighet og vekst.",
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
      "Sidesone utvikler moderne nettsider, nettbutikker og webapplikasjoner med rask lastetid, høy sikkerhet og responsivt design for økt synlighet og vekst.",
    images: ["/twitterCard-sidesone.png"],
  },
};

export default function RootLayout({ children }) {
  const pageId = "277983682055245";

  return (
    <html lang="no">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        ></link>
        <link
          rel="preload"
          href="/fonts/averta/AvertaDemoPE-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/averta/AvertaDemoPE-ExtraboldItalic.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Sidesone",
            url: "https://sidesone.no",
            description: metadata.description,
          })}
        </script> */}
        <script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sidesone",
    "url": "https://sidesone.no",
    "logo": "https://sidesone.no/logo.png",
    "description": metadata.description,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+47 13 65 07",
      "contactType": "customer service",
      "areaServed": "NO",
      "availableLanguage": ["Norwegian", "English"]
    },
    "sameAs": [
      "https://www.facebook.com/groups/sidesone/",
      "https://www.instagram.com/sidesoneas/"
    ]
  })}
</script>
      </head>
      <body className={` antialiased font-averta  `}>
        <div className="">
          <Header />
        </div>
        <main className="min-h-[calc(100vh-304px)]">{children}</main>
        <CookieBanner />
        <div className="bg-[#035635]">
          <Footer />
          <Toaster />
          <ScrollToTopButton />
        </div>
         <Messanger pageId={pageId} /> 
      </body>
    </html>
  );
}
