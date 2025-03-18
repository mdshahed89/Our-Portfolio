"use client";
import { useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import BotIcon1 from "@/assets/BotIcon1.png";
import BotIcon2 from "@/assets/BotIcon2.png";
import BotIcon3 from "@/assets/BotIcon3.png";
import Image from "next/image";
import toast from "react-hot-toast";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hei! Hvordan kan jeg hjelpe deg?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [email, setEmail] = useState("");
  const [emailSet, setEmailSet] = useState(false);

  useEffect(() => {
    const hasPopupBeenShown = sessionStorage.getItem("popupShown");

    if (!hasPopupBeenShown) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem("popupShown", "true"); 
      }, 5000);

      return () => clearTimeout(timer); 
    }
  }, []);

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("userEmail");
    if (storedEmail) {
      setEmail(storedEmail);
      setEmailSet(true);
    }
  }, []);

  const handleSetEmail = () => {
    const trimmedEmail = email.trim();
    if (trimmedEmail === "") {
      toast.error("Vennligst skriv inn en e-postadresse.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      toast.error("Vennligst skriv inn en gyldig e-postadresse.");
      return;
    }

    sessionStorage.setItem("userEmail", email);
    setEmailSet(true);
  };


  const submitMessages = async (e) => {
    e.preventDefault()
    if (!email || messages.length === 0) {
      console.error("Email and messages are required!");
      return;
    }

    if (!input.trim()) return;
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    const lastMessage = input; 
    const chatHistory = messages.map(msg => msg.text); 
    setInput("");
  
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/send-messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          message: lastMessage, 
          chatHistory, 
        }),
      });
  
      const result = await response.json();
      if (response.ok) {
        
        // console.log("Message sent successfully:", result);
      } else {
        console.error("Error sending message:", result.error);
        toast.error("Failed to sent message. try later")
      }
    } catch (error) {
      console.error("Request failed:", error);
      toast.error("Failed to sent message. try later")
    }
  };
  

  return (
    <div className="fixed bottom-3 md:bottom-5 right-3 md:right-5 z-50">

{showPopup && !isOpen && (
        <div className="fixed bottom-5 right-5 bg-white p-4 rounded-lg shadow-lg border border-gray-300 z-50">
          <div className=" flex justify-end ">
          <div
              onClick={() => setShowPopup(false)}
              className="  cursor-pointer "
            >
              <RxCross1 />
            </div>
          </div>
          <p className="text-lg text-gray-700">Hei! Hvis du trenger hjelp, send oss en melding.</p>
          <div className=" flex justify-end ">
          <button
          onClick={() => setIsOpen(true)}
          className="bg-green-600 mt-2 text-[1.5rem] text-white p-3 rounded-full shadow-lg"
        >
          <RiMessage2Fill />
        </button>
          </div>
        
        </div>
      )}

      {!isOpen && !showPopup && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-600 text-[2rem] text-white p-5 rounded-full shadow-lg"
        >
          <RiMessage2Fill />
        </button>
      )}
      {isOpen && (
        <div className=" w-[20rem] md:w-[25rem] bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-green-600 text-white pl-3 pr-4 py-4 flex justify-between items-center">
            {/* <span>Chatbot</span> */}
            <div className=" flex items-center ">
              <div className=" w-[3rem] h-[3rem] rounded-full z-50 ">
                <Image
                  src={BotIcon1}
                  alt="Bot Icon 1"
                  className=" w-full h-full object-fill rounded-full "
                />
              </div>
              <div className=" w-[3rem] h-[3rem] rounded-full -ml-2 z-40 ">
                <Image
                  src={BotIcon2}
                  alt="Bot Icon 1"
                  className=" w-full h-full object-contain rounded-full "
                />
              </div>
              <div className=" w-[3rem] h-[3rem] rounded-full -ml-2 z-30 ">
                <Image
                  src={BotIcon3}
                  alt="Bot Icon 1"
                  className=" w-full h-full object-contain rounded-full "
                />
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className=" text-[1.2rem] "
            >
              <RxCross1 />
            </button>
          </div>
          <div className=" text-sm pt-2 pb-4 px-2 text-center max-w-[20rem] mx-auto text-[#3f3f3f] ">
            <p>
              Vi svarer innen 1 time. Meldingen din sendes til vår Gmail, og vi
              tar kontakt snart!
            </p>
          </div>

          {emailSet ? (
            <form onSubmit={submitMessages}>
              {/* Chat Body */}
              <div className="p-3 h-[20rem] md:h-[25rem] overflow-y-auto">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`mb-2 text-sm ${
                      msg.sender === "user" ? "text-right" : "text-left"
                    }`}
                  >
                    <span
                      className={`inline-block py-2 px-4 rounded-2xl ${
                        msg.sender === "user"
                          ? "bg-green-500 text-white rounded-br-none "
                          : "bg-gray-200 text-black rounded-bl-none"
                      }`}
                    >
                      {msg.text}
                    </span>
                  </div>
                ))}
              </div>
              {/* Input Field */}
              <div className="  flex py-3 px-4 border-t ">
                <div className=" relative w-full ">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="w-full py-2 pl-3 pr-12 border-2 outline-none rounded-full border-green-500 "
                  placeholder="Skriv inn en melding..."
                />
                <div className=" absolute top-0 right-2 h-full flex items-center ">
                <button
                  className={` ${
                    input.length > 0 ? "opacity-100" : "opacity-50"
                  } bg-green-600 text-white w-8 h-8  text-[1.4rem] flex items-center justify-center rounded-full ml-2`}
                >
                  <IoIosSend />
                </button>
                </div>
                </div>
                
              </div>
            </form>
          ) : (
            <div className="p-3 h-[25rem] flex items-end w-full text-center">
              <div className=" flex-1 ">
              <p className="mb-3 text-gray-700">
              Vennligst oppgi e-posten din for å begynne å chatte
              </p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-2 px-4 border-2 rounded-full border-green-500  outline-none"
                placeholder="Vennligst oppgi e-posten din..."
              />
              <button
                onClick={handleSetEmail}
                className="mt-3 w-full bg-green-600 text-white py-2 rounded-md"
              >
                Start Chat
              </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
