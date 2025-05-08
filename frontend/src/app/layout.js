// import CustomChatButton, { Messanger } from "@/components/BookNowModal";
// const Messanger = dynamic(() => import("../components/BookNowModal"));
import CookieBanner from "../components/CookieBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTopButton from "../components/ScrollToTopButton";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import Chatbot from "@/components/CustomChatbot";

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
  return (
    <html lang="no" className=" scroll-smooth  ">
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

        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-TKS2L7Z5');`,
          }}
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Sidesone",
            url: "https://sidesone.no",
            logo: "https://sidesone.no/logo.png",
            description: metadata.description,
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+47 13 65 07",
              contactType: "customer service",
              areaServed: "NO",
              availableLanguage: ["Norwegian", "English"],
            },
            sameAs: [
              "https://www.facebook.com/groups/sidesone/",
              "https://www.instagram.com/sidesoneas/",
            ],
          })}
        </script>
      </head>

      <body className={` antialiased font-averta  `}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TKS2L7Z5"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <div className="">
          <Header />
        </div>
        <main className="min-h-[calc(100vh-304px)] ">{children}</main>
        <CookieBanner />
        <div className="bg-[#035635]">
          <Footer />
          <Toaster />
        </div>

        <Chatbot />
      </body>
    </html>
  );
}

{
  /* <ScrollToTopButton /> */
}
{
  /* <CustomChatButton /> */
}
{
  /* <Script
        strategy="afterInteractive"
        src="https://embed.tawk.to/67d0cb645481cc190de701fe/1im3pl0fh"
        charset="UTF-8"
        crossOrigin="anonymous"
      /> */
}
{
  /* <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4XZJ5XGEWM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-4XZJ5XGEWM');
  `}
        </Script> */
}
