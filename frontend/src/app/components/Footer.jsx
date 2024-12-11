import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdAddIcCall, MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="px-5 max-w-[1400px] mx-auto py-10">
      <div className="grid lg:grid-cols-3 gap-5 justify-between ">
        <div className="flex flex-col items-center justify-center gap-5 lg:justify-start">
          <Image
            src="/logo.png"
            alt="Logo"
            height={190}
            width={190}
            className="object-contain"
          />
          <h1 className="flex text-white font-semibold text-xl items-center gap-3">
            <MdEmail size={20} /> Kontakt@sidesone.no
          </h1>
          <h1 className="flex text-white font-semibold text-xl items-center gap-3">
            <MdAddIcCall size={20} /> +47 13 65 07
          </h1>
          <h1 className="text-white font-semibold text-xl">
            Sidesone AS, org.nr. 932 244 721
          </h1>
        </div>
        <div className="flex flex-col  gap-2 items-center">
          <Link className="text-white font-semibold text-xl" href={"#"}>
            Instagram
          </Link>
          <Link className="text-white font-semibold text-xl" href={"#"}>
            Facebook
          </Link>
          <Link className="text-white font-semibold text-xl" href={"#"}>
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
