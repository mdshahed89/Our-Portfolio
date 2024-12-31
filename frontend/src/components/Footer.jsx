"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { MdAddIcCall, MdEmail } from "react-icons/md";
import Logo from "@/assets/logo.png"
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
            src={Logo}
            alt="Sidesone Logo"

            className=" w-auto h-auto object-contain"
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
            className="text-white hover:text-[#17DB4F] transition-all duration-300 ease-in-out active:scale-95 font-semibold text-xl"
            href={"https://www.instagram.com/sidesonenorge/"}
          >
            Instagram
          </Link>
          <Link
            className="text-white hover:text-[#17DB4F] transition-all duration-300 ease-in-out active:scale-95 font-semibold text-xl"
            href={"https://www.facebook.com/groups/sidesone/"}
          >
            Facebook gruppe
          </Link>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-center">
            <Link
              className="text-gray-200 hover:text-[#17DB4F] transition-all duration-300 ease-in-out active:scale-95 font-semibold text-xl"
              href={"/vilkar-og-betingelser"}
            >
              Vilkår og betingelser
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Link
              className="text-gray-200 hover:text-[#17DB4F] transition-all duration-300 ease-in-out active:scale-95 font-semibold text-xl"
              href={"/informasjonskapsler-cookies"}
            >
              Informasjonskapsler (Cookies)
            </Link>
          </div>

          <div className=" flex items-center justify-center">
            <Link
              className="text-gray-200 hover:text-[#17DB4F] transition-all duration-300 ease-in-out active:scale-95 font-semibold text-xl"
              href={"/privacy-policy"}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
