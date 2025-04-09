"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Link from "next/link";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    } else if (consent === "accepted") {
      loadAnalytics();
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookieConsent", "accepted", { expires: 365 });
    setIsVisible(false);
    loadAnalytics();
  };

  const handleReject = () => {
    Cookies.set("cookieConsent", "rejected", { expires: 365 });
    setIsVisible(false);
  };

  const loadAnalytics = () => {
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-6DN381H0CN`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-6DN381H0CN");
  };

  return (
    isVisible && (
      <div className=" fixed bottom-16 z-[1000] flex items-center justify-center w-full ">
        <div className=" shadow-[0_0_5px_1px_rgba(128,128,128,0.6)]   bg-white text-black p-4 md:p-6 m-3 sm:m-0 sm:w-[35rem] rounded-md ">
        <h4 className=" text-[1.1rem] md:text-[1.3rem] font-semibold ">
          Vi setter pris på personvernet ditt
        </h4>
        <p className=" text-sm md:text-lg text-gray-500 my-4 ">
          Vi bruker informasjonskapsler for å forbedre nettleseropplevelsen din,
          vise personlig tilpassede annonser eller innhold og analysere
          trafikken vår. Ved å klikke &quot;Godta alle&quot;, samtykker du til
          vår bruk av informasjonskapsler
        </p>
        <div className="flex gap-2">
          <button
            onClick={handleReject}
            className="bg-[#035635] text-[#fff] flex-1 px-4 py-2 rounded"
          >
            Avslå
          </button>
          <button
            onClick={handleAccept}
            className="bg-[#035635] text-[#fff] flex-1 px-4 py-2 rounded"
          >
            Aksepter
          </button>
        </div>
        <div className=" flex mt-4 text-black items-center justify-center gap-5 ">
        <Link
          href={`/vilkar-og-betingelser`}
          className=" border-b border-[#035635] hover:text-[#035635] transition-all duration-300 ease-in-out pb-1 mt-1 "
        >
          Vilkår og betingelser
        </Link>
        <Link
          href={`/informasjonskapsler-cookies`}
          className=" border-b border-[#035635] hover:text-[#035635] transition-all duration-300 ease-in-out pb-1 mt-1 "
        >
          Cookies
        </Link>
        <Link
          href={"/privacy-policy"}
          className=" border-b border-[#035635] hover:text-[#035635] transition-all duration-300 ease-in-out pb-1 mt-1 "
        >
          Personvernpolicy
        </Link>
      </div>
      </div>
      </div>
    )
  );
};

export default CookieBanner;
