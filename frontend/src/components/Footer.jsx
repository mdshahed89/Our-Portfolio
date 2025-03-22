"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  MdAddIcCall,
  MdEmail,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import Logo from "@/assets/logo.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
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
    <footer className="px-3 2xl:max-w-[1400px] max-w-[1200px] mx-auto py-16 ">
      <div className=" hidden lg:grid grid-cols-2 lg:grid-cols-4 gap-5  ">
        <div className=" text-[#fff] flex  ">
          <div className=" flex flex-col gap-8 ">
            <h3 className=" text-[1.5rem] font-medium relative before:absolute before:h-1 before:-bottom-2 before:w-12 before:bg-[#fff]   ">
              Konakt
            </h3>
            <div className=" flex flex-col gap-3 text-lg ">
              <p className="">Kontakt@sidesone.no</p>
              <p className="">+47 13 65 07</p>
            </div>
          </div>
        </div>
        <div className=" text-[#fff] flex justify-end lg:justify-start  ">
          <div className=" flex flex-col gap-8 ">
            <div className=" text-[1.5rem] font-medium  relative before:absolute before:h-1 before:-bottom-2 before:w-12 before:bg-[#fff]   ">
              Tjenester
            </div>
            <div className=" flex flex-col gap-3 text-lg ">
              <Link
                href={`/nettside`}
                className=" hover:text-[#17DB4F] cursor-pointer transition-colors duration-300 ease-in-out "
              >
                Nettside
              </Link>
              <Link
                href={`nettbuttik`}
                className=" hover:text-[#17DB4F] cursor-pointer transition-colors duration-300 ease-in-out "
              >
                Nettbutikk
              </Link>
              <Link
                href={`/webapplikasjon`}
                className=" hover:text-[#17DB4F] cursor-pointer transition-colors duration-300 ease-in-out "
              >
                Webapp
              </Link>
              <Link
                href={`/seo`}
                className=" hover:text-[#17DB4F] cursor-pointer transition-colors duration-300 ease-in-out "
              >
                SEO
              </Link>
              <Link
                href={`/markedsforing`}
                className=" hover:text-[#17DB4F] cursor-pointer transition-colors duration-300 ease-in-out "
              >
                Markedsføring
              </Link>
              <Link
                href={`/logo`}
                className=" hover:text-[#17DB4F] cursor-pointer transition-colors duration-300 ease-in-out "
              >
                Grafisk design
              </Link>
            </div>
          </div>
        </div>
        <div className=" text-[#fff] flex  md:mt-0 mt-5 ">
          <div className=" flex flex-col gap-8 ">
            <div className=" text-[1.5rem] font-medium  relative before:absolute before:h-1 before:-bottom-2 before:w-12 before:bg-[#fff]   ">
              Snarveier
            </div>
            <div className=" flex flex-col gap-3 text-lg ">
              <Link
                href={`/referanser`}
                className=" hover:text-[#17DB4F] cursor-pointer transition-colors duration-300 ease-in-out "
              >
                Blogg
              </Link>
              <Link
                href={`/om-oss`}
                className=" hover:text-[#17DB4F] cursor-pointer transition-colors duration-300 ease-in-out "
              >
                Om Oss
              </Link>
              <Link
                href={"https://www.facebook.com/groups/sidesone/"}
                rel="nofollow"
                target="_blank"
                className=" hover:text-[#17DB4F] cursor-pointer transition-colors duration-300 ease-in-out "
              >
                Facebook Gruppe
              </Link>
            </div>
          </div>
        </div>
        <div className=" text-[#fff] flex flex-col items-end gap-5 lg:justify-start  md:mt-0 mt-5 ">
          <div className=" flex flex-col gap-3  ">
            {/* <div className=" border border-[#fff] w-[14rem] py-2 text-center cursor-pointer ">
              Abonner på nyhetsbrev
            </div> */}
            <Newsletter />
            <Link
              href={"/book-now"}
              className=" border border-[#fff] w-[14rem] py-2 text-center cursor-pointer "
            >
              Book møte
            </Link>
          </div>
        </div>

        {/* <div className=" flex items-center justify-center">
            <Link
              className="text-gray-200 hover:text-[#17DB4F] transition-all duration-300 ease-in-out active:scale-95 text-xl"
              href={"/privacy-policy"}
            >
              Personvernpolicy
            </Link>
          </div> */}
      </div>

      <div className=" lg:hidden block ">
        <div className=" flex flex-col gap-3 text-[#fff]  ">
          {/* <div className=" border border-[#fff] w-full py-2 text-center cursor-pointer ">
            Abonner på nyhetsbrev
          </div> */}
          <Newsletter />
          <Link
            href={"/book-now"}
            className=" border border-[#fff] w-full py-2 text-center cursor-pointer "
          >
            Book møte
          </Link>
        </div>
        <ResponsiveMenu />
      </div>

      <div className=" mt-[3rem] pb-[2rem] border-b border-[#197533] ">
        <Image
          src={Logo}
          alt="Sidesone"
          className=" w-[12rem] h-auto object-contain"
        />
      </div>

      <div className=" mt-[1rem] flex items-start justify-between ">
        <div className=" flex md:items-center gap-8 md:gap-5 md:flex-row flex-col text-[#fff] ">
          <p className=" ">Sidesone AS, org.nr. 934 145 488</p>
          <div className=" hidden md:flex items-center gap-5 ">
            <Link
              href={`/vilkar-og-betingelser`}
              className=" border-b border-[#1e8b3d] pb-1 mt-1 "
            >
              Vilkår og betingelser
            </Link>
            <Link
              href={`/informasjonskapsler-cookies`}
              className=" border-b border-[#1e8b3d] pb-1 mt-1 "
            >
              Cookies
            </Link>
            <Link
              href={"/privacy-policy"}
              className=" border-b border-[#1e8b3d] pb-1 mt-1 "
            >
              Personvernpolicy
            </Link>
          </div>
        </div>
        <div className=" flex items-center h-auto gap-4 ">
          <Link
            onClick={() => setMenuOpen(false)}
            href={"https://www.facebook.com/groups/sidesone/"}
            rel="nofollow"
            target="_blank"
            className=" p-2 rounded-full border-2 border-[#219642] hover:border-[#17DB50] transition-colors duration-300 ease-in-out text-[#fff] text-[1.3rem] "
          >
            <FaFacebookF />
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            target="_blank"
            rel="nofollow"
            href={"https://www.instagram.com/sidesonenorge/"}
            className=" p-2 rounded-full border-2 border-[#219642] hover:border-[#17DB50] transition-colors duration-300 ease-in-out text-[#fff] text-[1.3rem] "
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
      <div className=" flex text-[#fff] md:hidden items-center gap-5 ">
        <Link
          href={`/vilkar-og-betingelser`}
          className=" border-b border-[#1e8b3d] pb-1 mt-1 "
        >
          Vilkår og betingelser
        </Link>
        <Link
          href={`/informasjonskapsler-cookies`}
          className=" border-b border-[#1e8b3d] pb-1 mt-1 "
        >
          Cookies
        </Link>
        <Link
          href={"/privacy-policy"}
          className=" border-b border-[#1e8b3d] pb-1 mt-1 "
        >
          Personvernpolicy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

import { FiMinus, FiPlus } from "react-icons/fi";
import { Newsletter } from "@/modals/Modal";

const ResponsiveMenu = () => {
  const pathName = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <div>
      <ul className="flex flex-col mt-7 space-y-6 text-[#fff] ">
        {/* Dropdown 1 */}
        <li className="relative group border-b border-[#17DB4F] py-2 ">
          <div>
            <div
              className={`flex items-center justify-between pb-2 text-[1.5rem]  
                `}
              onClick={() => toggleDropdown(0)}
            >
              Tjenester
              {dropdownOpen === 0 ? (
                <FiMinus className="ml-2 rotate-180 transition-all duration-300 " />
              ) : (
                <FiPlus className="ml-2 transition-transform duration-300" />
              )}
            </div>
          </div>
          <ul
            className={`flex flex-col gap-2 border-l-2 border-[#17DB4F] text-[1.3rem] pl-4 mt-2 transition-all duration-200 ease-in-out ${
              dropdownOpen === 0 ? "block" : "hidden"
            }`}
          >
            <li>
              <Link
                href="/nettside"
                className={`block py-2  hover:text-[#17DB4F] cursor-pointer ${
                  pathName === "/nettside" && "text-[#17DB4F]"
                }
                  `}
              >
                Nettside
              </Link>
            </li>
            <li>
              <Link
                href="/nettbuttik"
                className={`block py-2  hover:text-[#17DB4F] cursor-pointer ${
                  pathName === "/nettbuttik" && "text-[#17DB4F]"
                }
                  `}
              >
                Nettbutikk
              </Link>
            </li>
            <li>
              <Link
                href="/webapplikasjon"
                className={`block py-2  hover:text-[#17DB4F] cursor-pointer ${
                  pathName === "/webapplikasjon" && "text-[#17DB4F]"
                }
                  `}
              >
                Webapp
              </Link>
            </li>
            <li>
              <Link
                href="/seo"
                className={`block py-2  hover:text-[#17DB4F] cursor-pointer ${
                  pathName === "/seo" && "text-[#17DB4F]"
                }
                  `}
              >
                SEO
              </Link>
            </li>
            <li>
              <Link
                href="/markedsforing"
                className={`block py-2  hover:text-[#17DB4F] cursor-pointer ${
                  pathName === "/markedsforing" && "text-[#17DB4F]"
                }
                  `}
              >
                Markedsføring
              </Link>
            </li>
            <li>
              <Link
                href="/logo"
                className={`block py-2  hover:text-[#17DB4F] cursor-pointer ${
                  pathName === "/logo" && "text-[#17DB4F]"
                }
                  `}
              >
                Grafisk design
              </Link>
            </li>
          </ul>
        </li>

        {/* Dropdown 2 */}
        <li className="relative group border-b border-[#17DB4F] py-2">
          <div>
            <div
              className={`flex items-center justify-between pb-2 text-[1.5rem] 
              `}
              onClick={() => toggleDropdown(1)}
            >
              Snarveier
              {dropdownOpen === 1 ? (
                <FiMinus className="ml-2 rotate-180 transition-all duration-300 " />
              ) : (
                <FiPlus className="ml-2 transition-transform duration-300" />
              )}
            </div>
          </div>
          <ul
            className={`flex flex-col gap-2 text-[1.3rem] border-l-2 border-[#17DB4F] pl-4 mt-2 transition-all duration-200 ease-in-out ${
              dropdownOpen === 1 ? "block" : "hidden"
            }`}
          >
            <li>
              <Link
                href="/referanser"
                className={`flex items-center pb-2 hover:text-[#17DB4F] cursor-pointer ${
                  pathName === "/referanser" && "text-[#17DB4F]"
                }
                  `}
              >
                Blogg
              </Link>
            </li>
            <li>
              <Link
                href="/om-oss"
                className={`flex items-center pb-2 hover:text-[#17DB4F] cursor-pointer ${
                  pathName === "/om-oss" && "text-[#17DB4F]"
                }
                  `}
              >
                Om Oss
              </Link>
            </li>
            <li>
              <Link
                href={"https://www.facebook.com/groups/sidesone/"}
                rel="nofollow"
                target="_blank"
                className={`flex items-center pb-2 hover:text-[#17DB4F] cursor-pointer
                  `}
              >
                Facebook Gruppe
              </Link>
            </li>
          </ul>
        </li>

        {/* Other Links */}
        <li className="relative group border-b border-[#17DB4F] py-2">
          <Link
            href="/om-oss"
            className={`flex items-center pb-2 hover:text-[#17DB4F] text-[1.5rem]  ${
              pathName === "/om-oss" && "text-[#17DB4F]"
            }`}
          >
            Hvem er vi?
          </Link>
        </li>
        <li className="relative group border-b border-[#17DB4F] py-2">
          <Link
            href="/referanser"
            className={`flex items-center pb-2 hover:text-[#17DB4F] text-[1.5rem]  ${
              pathName === "/referanser" && "text-[#17DB4F]"
            } `}
          >
            Prosjekter
          </Link>
        </li>
      </ul>
    </div>
  );
};
