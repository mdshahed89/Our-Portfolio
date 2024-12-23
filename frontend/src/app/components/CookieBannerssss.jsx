"use client";
import React, { useState, useEffect } from "react";
import CookieConsent from "react-cookie-consent";

const CookieBanner = () => {
  const [isClient, setIsClient] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);
  const [expandedIndices, setExpandedIndices] = useState([]);

  const toggleDropdown = (index) => {
    setExpandedIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const dropdownData = [
    {
      title: "Necessary",
      description:
        "Necessary cookies are required to enable the basic features of this site, such as providing secure log-in or adjusting your consent preferences. These cookies do not store any personally identifiable data.",
      content: {
        cookie: "wpEmojiSettingsSupports",
        duration: "session",
        description:
          "WordPress sets this cookie when a user interacts with emojis on a WordPress site. It helps determine if the user's browser can display emojis properly.",
      },
    },
    {
      title: "Performance",
      description:
        "Performance cookies collect information about how visitors use a website, such as which pages they visit most often, and if they get error messages. These cookies do not collect personal data.",
      content: {
        cookie: "performanceCookie",
        duration: "30 days",
        description:
          "This cookie tracks user interactions to help improve the website's performance.",
      },
    },
    {
      title: "Analytics",
      description:
        "Analytics cookies help website owners understand how visitors interact with websites by collecting and reporting information anonymously.",
      content: {
        cookie: "analyticsCookie",
        duration: "1 year",
        description:
          "Tracks user behavior to provide insights into website usage and performance.",
      },
    },
  ];

  const toggleContent = () => {
    setShowFullContent((prev) => !prev);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const handleAccept = () => {
    // Automatically accept cookies and store in local storage
    localStorage.setItem("user-consent", "accepted");
    window.location.reload(); // Reload to remove the banner and proceed
  };

  const handleReject = () => {
    localStorage.setItem("user-consent", "rejected");
    window.location.reload();
  };

  const handleSavePreferences = () => {
    localStorage.setItem("user-consent", "saved");
    window.location.reload();
  };

  return (
    <CookieConsent
      location="center"
      buttonText=" "
      disableStyles
      style={{
        background: "#fff",
        color: "#000",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        padding: "20px",
        maxWidth: "800px",
        maxHeight: "560px",
        overflow: "auto",
        margin: "20px auto",
        position: "fixed",
        left: "0",
        right: "0",
        bottom: "20px",
        zIndex: "1000",
      }}
    >
      <div className="py-3 border-b-2">
        <h3 className="font-bold text-xl">Tilpass samtykkepreferanser</h3>
      </div>
      <div className="h-[350px] overflow-auto">
        <div className="mt-5 border-b-2">
          <p className="pb-1">
            {showFullContent ? (
              <>
                Vi bruker informasjonskapsler for å hjelpe deg med å navigere
                effektivt og utføre visse funksjoner. Du finner detaljert
                informasjon om alle informasjonskapsler under hver
                samtykkekategori nedenfor. Informasjonskapslene som er
                kategorisert som "Nødvendige" lagres i nettleseren din da de er
                avgjørende for å aktivere de grunnleggende funksjonene til
                nettstedet. Vi bruker også tredjeparts informasjonskapsler som
                hjelper oss med å analysere hvordan du bruker denne nettsiden,
                lagre innstillingene dine og gi innhold og annonser som er
                relevante for deg. Disse informasjonskapslene vil kun bli lagret
                i nettleseren din med ditt forhåndssamtykke. Du kan velge å
                aktivere eller deaktivere noen eller alle disse
                informasjonskapslene, men å deaktivere noen av dem kan påvirke
                nettleseropplevelsen din.{" "}
                <button
                  onClick={toggleContent}
                  className="mt-2 text-blue-600 font-bold hover:underline focus:outline-none"
                >
                  Se mindre
                </button>
              </>
            ) : (
              <>
                Vi bruker informasjonskapsler for å hjelpe deg med å navigere
                effektivt og utføre visse funksjoner. Du finner detaljert
                informasjon om alle informasjonskapsler under hver
                samtykkekategori nedenfor. Informasjonskapslene som er
                kategorisert som "Nødvendige" lagres i nettleseren din da de er
                avgjørende for å aktivere de grunnleggende funksjonene til
                nettstedet
                <span
                  onClick={toggleContent}
                  className="cursor-pointer text-blue-600 font-bold hover:underline focus:outline-none"
                >
                  ... Se mer
                </span>
              </>
            )}
          </p>
        </div>
        <div>
          {dropdownData.map((dropdown, index) => (
            <div key={index} className="bg-white p-2 mb-4">
              {/* Dropdown Header */}
              <div
                className="cursor-pointer"
                onClick={() => toggleDropdown(index)}
              >
                <div className="flex justify-between pb-1 items-center">
                  <h3 className="text-lg font-bold text-gray-800">
                    {dropdown.title}
                  </h3>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-4">
                    {dropdown.description}
                  </p>
                </div>
              </div>

              {/* Dropdown Content */}
              {expandedIndices.includes(index) && (
                <div className="mt-4">
                  <div className="bg-gray-100 rounded-md p-4 text-sm text-gray-700 border border-gray-200">
                    <p>
                      <strong>Cookie:</strong> {dropdown.content.cookie}
                    </p>
                    <p className="mt-2">
                      <strong>Varighet:</strong> {dropdown.content.duration}
                    </p>
                    <p className="mt-2">
                      <strong>Beskrivelse:</strong>{" "}
                      {dropdown.content.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between my-5 gap-2">
        <button
          className="bg-white border-2 w-52 p-1 py-2 hover:bg-blue-400 text-blue-400 hover:text-white border-blue-400 rounded"
          onClick={handleAccept} // Accept button automatically accepts
        >
          I understand, I Accept All
        </button>
        <button
          className="hover:bg-white border-2 p-1 py-2 w-60 bg-blue-400 text-white hover:text-blue-400 border-blue-400 rounded"
          onClick={handleSavePreferences}
        >
          Lagre mine preferanser
        </button>

        {/* Reject All Button */}
        <button
          className="bg-white border-2 text-blue-400 p-1 py-2 w-52 hover:bg-blue-400 hover:text-white border-blue-400 rounded"
          onClick={handleReject}
        >
          Avvis alle
        </button>
      </div>
    </CookieConsent>
  );
};

export default CookieBanner;
