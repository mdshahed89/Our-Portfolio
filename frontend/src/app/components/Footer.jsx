"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { MdAddIcCall, MdEmail } from "react-icons/md";
const Footer = () => {
  const pathName = usePathname();
  if (
    pathName.includes("adminpanel") ||
    pathName.includes("login") ||
    pathName.includes("reset-password")
  ) {
    return;
  }
  return (
    <footer className="px-3 lg:px-0 max-w-[1400px] mx-auto py-16">
      <div className="grid lg:grid-cols-3 gap-5 justify-center lg:justify-between ">
        <div className="flex flex-col items-center lg:items-start justify-center gap-5 lg:justify-start">
          <Image
            loading="lazy"
            placeholder="blur"
            src="/logo.png"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA..."
            alt="Logo"
            height={190}
            width={190}
            className="object-contain"
          />
          <h2 className="flex text-white font-semibold text-xl items-center gap-3">
            <MdEmail size={20} /> Kontakt@sidesone.no
          </h2>
          <h2 className="flex text-white font-semibold text-xl items-center gap-3">
            <MdAddIcCall size={20} /> +47 13 65 07
          </h2>
          <h2 className="text-white font-semibold text-xl">
            Sidesone AS, org.nr. 932 244 721
          </h2>
        </div>
        <div className="flex flex-col  gap-2 items-center">
          <Link
            className="text-white transition-all duration-300 ease-in-out active:scale-95 font-semibold text-xl"
            href={"#"}
          >
            Instagram
          </Link>
          <Link
            className="text-white transition-all duration-300 ease-in-out active:scale-95 font-semibold text-xl"
            href={"#"}
          >
            Facebook
          </Link>
          <Link
            className="text-white transition-all duration-300 ease-in-out active:scale-95 font-semibold text-xl"
            href={"#"}
          >
            gruppe
          </Link>
        </div>
        <div>
          <p className="text-white font-semibold text-center text-xl">
            Vilkår og betingelser <br /> Informasjonskapsler (Cookies)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
