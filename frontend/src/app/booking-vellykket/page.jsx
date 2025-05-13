"use client";

import React, { useEffect, useState } from "react";
import Thank1 from "@/assets/Thank1.png";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

const Page = () => {

  const searchParams = useSearchParams();
  const [formattedDateTime, setFormattedDateTime] = useState(null);

  useEffect(() => {
    const query = searchParams.get('query'); // Get the 'query' parameter from the URL
    if (query) {
      const dateObj = new Date(query);
      
      const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      };
      const formattedDate = dateObj.toLocaleDateString('no-NO', options);
      const formattedTime = dateObj.toLocaleTimeString('no-NO', { hour: '2-digit', minute: '2-digit' }); 

      setFormattedDateTime({ date: formattedDate, time: formattedTime });
    }
  }, [searchParams]);

  return (
    <div className="min-h-[100vh] px-3 pt-[170px] flex items-center">
      <motion.div
        className="max-w-[40rem] mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "backOut" }}
        >
          <Image
            src={Thank1}
            alt="Thank msg"
            className="w-[10rem] mx-auto object-contain"
          />
        </motion.div>

        <motion.h2
          className="text-[2.5rem] leading-tight text-[#131313] font-semibold mt-[3rem] mb-[.5rem] "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Takk for at du har bestilt et møte!
        </motion.h2>

        <motion.p
          className="text-lg text-[#6b6b6b]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Takk for at du har bestilt et møte med oss. Vi ser frem til å ha et møte med deg på den valgte datoen og tidspunktet. <strong>{formattedDateTime ? `${formattedDateTime.date} kl. ${formattedDateTime.time}` : "Ikke spesifisert"}</strong>.
        </motion.p>

        <motion.div
        initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className=" mt-[2rem] "
        >
            <Link
          href={`/`}
          className=" px-10 py-2 rounded-full bg-[#035635] border-2 hover:bg-transparent hover:text-[#000] transition-colors duration-300 ease-in-out border-[#035635] text-[#fff] "
        >
          Tilbake til Hjem
        </Link>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-4 pt-[3rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h4 className="text-[1.6rem]">Følg oss</h4>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.facebook.com/groups/sidesone/"
              rel="nofollow"
              target="_blank"
              className="p-2 rounded-full border-2 border-[#17DB50] text-[#17DB50] text-[1.4rem]"
            >
              <FaFacebookF />
              <span className="sr-only">Bli med på Facebook</span>
            </Link>
            <Link
              target="_blank"
              rel="nofollow"
              href="https://www.instagram.com/sidesoneas?igsh=MTJ4Z2ZoNGc3Mjg3eQ%3D%3D&utm_source=qr"
              className="p-2 rounded-full border-2 border-[#17DB50] text-[#17DB50] text-[1.5rem]"
            >
              <FaInstagram />
              <span className="sr-only">Bli med på Instagram</span>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page;
