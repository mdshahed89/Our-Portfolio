"use client";
import Tooltip from "@mui/material/Tooltip";
import {
  FaChevronDown,
  FaBars,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Logo from "@/assets/logo.png";
import { PageLoading } from "./Tools";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [isTooltipOpen1, setIsTooltipOpen1] = useState(false);
  const [isClientReady, setIsClientReady] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsClientReady(true);
  }, []);

  // const searchParams = useSearchParams();
  // const scrollTarget = searchParams.get("scroll");

  // useEffect(() => {
  //   if (scrollTarget === "reviews") {
  //     document.getElementById("reviews")?.scrollIntoView({ behavior: "smooth" });
  //     router.push("/?scroll=reviewd")
  //   }
  // }, [scrollTarget]);

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (
    pathName.includes("adminpanel") ||
    pathName.includes("login") ||
    pathName.includes("reset-password")
  ) {
    return;
  }

  if (!isClientReady) {
    return <PageLoading />;
  }

  return (
    <header
      className={`fixed h-[112px] z-[1000] py-4 lg:px-0 top-0 w-full ${
        scrolled ? "bg-[#035635] shadow-xl" : "bg-[#035635]"
      } z-50`}
    >
      <div className="text-white px-5 py-5 flex 2xl:max-w-[1400px] max-w-[1200px] mx-auto justify-between items-center">
        <Link href={"/"} className=" w-auto h-auto ">
          <Image
            src={Logo}
            alt="Sidesone - Profesjonelle nettsider, nettbutikker og webapper"
            className="w-[211px] h-[35px] object-contain"
          />
          <span className=" sr-only ">Logo</span>
        </Link>
        <div className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars className="text-2xl cursor-pointer" />
        </div>

        <nav
          className={`lg:flex lg:items-center hidden ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex items-center pt-2 space-x-8 ">
            <li className="relative group">
              <Tooltip
                title={
                  <div className="space-y-3 text-xl font-medium py-2">
                    <Link
                      className={` ${
                        pathName === "/nettside" && "text-[#17DB4F]"
                      }`}
                      href="/nettside"
                    >
                      <MenuItem className="text-lg hover:text-[#17DB4F] font-medium">
                        Nettside
                      </MenuItem>
                    </Link>
                    <Link
                      className={` ${
                        pathName === "/nettbuttik" && "text-[#17DB4F]"
                      }`}
                      href="/nettbuttik"
                    >
                      <MenuItem className="text-lg hover:text-[#17DB4F] font-medium">
                        Nettbutikk
                      </MenuItem>
                    </Link>
                    <Link
                      className={` ${
                        pathName === "/webapplikasjon" && "text-[#17DB4F]"
                      }`}
                      href="/webapplikasjon"
                    >
                      <MenuItem className="text-lg hover:text-[#17DB4F] font-medium">
                        Webapplikasjon
                      </MenuItem>
                    </Link>
                  </div>
                }
                placement="bottom"
                PopperProps={{
                  modifiers: [
                    { name: "offset", options: { offset: [20, -5] } },
                  ],
                }}
                componentsProps={{
                  tooltip: {
                    sx: {
                      padding: "0px",
                      backgroundColor: "#ffffff",
                      color: "#000",
                      borderRadius: "10px",
                      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                      width: "220px",
                      borderBottom: "5px solid green",
                    },
                  },
                }}
                onOpen={() => setIsTooltipOpen(true)}
                onClose={() => setIsTooltipOpen(false)}
              >
                <Link
                  className={`${
                    (pathName === "/nettside" ||
                      pathName === "/nettbuttik" ||
                      pathName === "/webapplikasjon") &&
                    "text-[#17DB4F]"
                  }`}
                  href={"/nettside"}
                >
                  <div className="flex items-center text-xl font-semibold pb-2 hover:text-[#17DB4F] cursor-pointer">
                    Nettside
                    <FaChevronDown
                      className={`ml-2 text-sm transition-transform duration-300 ${
                        isTooltipOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#17DB4F] transition-all duration-300 group-hover:w-full"></span>
                  </div>
                </Link>
              </Tooltip>
            </li>

            <li className="relative group">
              <Tooltip
                title={
                  <div className="space-y-3 text-xl font-medium py-2">
                    <Link
                      className={`${
                        pathName === "/markedsforing" && "text-[#17DB4F]"
                      }`}
                      href="/markedsforing"
                    >
                      <MenuItem className="text-lg hover:text-[#17DB4F] font-medium">
                        Markedsføring
                      </MenuItem>
                    </Link>
                    <Link
                      className={`${pathName === "/seo" && "text-[#17DB4F]"}`}
                      href="/seo"
                    >
                      <MenuItem className="text-lg hover:text-[#17DB4F] font-medium">
                        SEO
                      </MenuItem>
                    </Link>
                    <Link
                      className={` ${pathName === "/logo" && "text-[#17DB4F]"}`}
                      href="/logo"
                    >
                      <MenuItem className="text-lg hover:text-[#17DB4F] font-medium">
                        Grafisk design
                      </MenuItem>
                    </Link>
                    <Link
                      className={` ${pathName === "/ki-chatbot" && "text-[#17DB4F]"}`}
                      href="/ki-chatbot"
                    >
                      <MenuItem className="text-lg hover:text-[#17DB4F] font-medium">
                        Skreddersydd KI-chatbot
                      </MenuItem>
                    </Link>
                  </div>
                }
                placement="bottom"
                PopperProps={{
                  modifiers: [
                    { name: "offset", options: { offset: [20, -5] } },
                  ],
                }}
                componentsProps={{
                  tooltip: {
                    sx: {
                      padding: "0px",
                      backgroundColor: "#ffffff",
                      color: "#000",
                      borderRadius: "10px",
                      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                      width: "220px",
                      borderBottom: "5px solid green",
                    },
                  },
                }}
                onOpen={() => setIsTooltipOpen1(true)}
                onClose={() => setIsTooltipOpen1(false)}
              >
                <div className="flex text-xl font-semibold items-center pb-2 hover:text-[#17DB4F] cursor-pointer">
                  <Link
                    className={`${
                      (pathName === "/digitale-tjenester" ||
                        pathName === "/markedsforing" ||
                        pathName === "/seo" ||
                        pathName === "/logo") &&
                      "text-[#17DB4F]"
                    }`}
                    href={"/digitale-tjenester"}
                  >
                    Digitale Tjenester
                  </Link>
                  <FaChevronDown
                    className={`ml-2 text-sm transition-transform duration-300 ${
                      isTooltipOpen1 ? "rotate-180" : "rotate-0"
                    }`}
                  />
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#17DB4F] transition-all duration-300 group-hover:w-full"></span>
                </div>
              </Tooltip>
            </li>

            <li className="relative group">
              <div className="flex text-xl font-semibold items-center pb-2 hover:text-[#17DB4F] cursor-pointer">
                <Link
                  className={`${pathName === "/om-oss" && "text-[#17DB4F]"}`}
                  href="/om-oss"
                >
                  {" "}
                  Hvem er vi?
                </Link>
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#17DB4F] transition-all duration-300 group-hover:w-full"></span>
              </div>
            </li>
            <li className="relative group">
              <div className="flex text-xl font-semibold items-center pb-2 hover:text-[#17DB4F] cursor-pointer">
                <Link
                  className={`${
                    pathName === "/referanser" && "text-[#17DB4F]"
                  }`}
                  href="/referanser"
                >
                  {" "}
                  Prosjekter
                </Link>
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#17DB4F] transition-all duration-300 group-hover:w-full"></span>
              </div>
            </li>
            <li className="relative group">
              <div className="cursor-pointer pb-2">
                <Link
                  className={`${
                    pathName === "/book-now" && "bg-transparent"
                  } bg-[#20d654] hover:bg-transparent border-2 border-[#20d654] px-6 font-medium text-lg py-2 rounded-full transition-all duration-300 ease-in-out  `}
                  href="/book-now"
                >
                  {" "}
                  Book Møte
                  <span className=" sr-only ">Reserver Din Tid</span>
                </Link>
                {/* <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#17DB4F] transition-all duration-300 group-hover:w-full"></span> */}
              </div>
            </li>
          </ul>
        </nav>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-full lg:hidden  bg-[#035635] text-white p-5 transition-all duration-300 h-[100vh] overflow-y-auto flex flex-col justify-between ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="   ">
          <div className="flex justify-end">
            <button onClick={() => setMenuOpen(false)}>
              <RxCross2 className="text-[2rem] cursor-pointer" />
            </button>
          </div>
          <ul className="flex flex-col mt-7 space-y-6 ">
            {/* Dropdown 1 */}
            <li className="relative group border-b border-[#17DB4F] py-2 ">
              <div>
                <div
                  className={`flex items-center justify-between pb-2 hover:text-[#17DB4F] cursor-pointer text-[2rem]  ${
                    pathName === "/nettside" && "text-[#17DB4F]"
                  }
                `}
                >
                  <Link
                    href="/nettside"
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                  >
                    Nettside
                    <span className=" sr-only ">
                      {" "}
                      Spennende prosjekter venter
                    </span>
                  </Link>
                  <MdOutlineKeyboardArrowDown
                    onClick={() => toggleDropdown(0)}
                    className={`ml-2  transition-transform duration-300 ${
                      dropdownOpen === 0 ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
              </div>
              <ul
                className={`flex flex-col gap-2 border-l-2 border-[#17DB4F] text-[1.5rem] pl-4 mt-2 transition-all duration-200 ease-in-out ${
                  dropdownOpen === 0 ? "block" : "hidden"
                }`}
              >
                <li>
                  <Link
                    onClick={() => {
                      setMenuOpen(false);
                      toggleDropdown(null);
                    }}
                    href="/nettside"
                    className={`block py-2  hover:text-[#17DB4F] cursor-pointer ${
                      pathName === "/nettside" && "text-[#17DB4F]"
                    }
                  `}
                  >
                    Nettside
                    <span className=" sr-only "> Enkel, moderne nettside</span>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      setMenuOpen(false);
                      toggleDropdown(null);
                    }}
                    href="/nettbuttik"
                    className={`block py-2  hover:text-[#17DB4F] cursor-pointer ${
                      pathName === "/nettbuttik" && "text-[#17DB4F]"
                    }
                  `}
                  >
                    Nettbutikk
                    <span className=" sr-only "> Skap en digital butikk</span>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      setMenuOpen(false);
                      toggleDropdown(null);
                    }}
                    href="/webapplikasjon"
                    className={`block py-2  hover:text-[#17DB4F] cursor-pointer ${
                      pathName === "/webapplikasjon" && "text-[#17DB4F]"
                    }
                  `}
                  >
                    Webapplikasjon
                    <span className=" sr-only ">
                      {" "}
                      Nettapplikasjoner som fungerer
                    </span>
                  </Link>
                </li>
              </ul>
            </li>

            {/* Dropdown 2 */}
            <li className="relative group border-b border-[#17DB4F] py-2">
              <div>
                <div
                  className={`flex items-center justify-between pb-2 hover:text-[#17DB4F] cursor-pointer text-[2rem] ${
                    pathName === "/digitale-tjenester" && "text-[#17DB4F]"
                  }
              `}
                >
                  <Link
                    href="/digitale-tjenester"
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                  >
                    Digitale Tjenester
                    <span className=" sr-only "> Tjenester på nett</span>
                  </Link>
                  <MdOutlineKeyboardArrowDown
                    onClick={() => toggleDropdown(1)}
                    className={`ml-2 transition-transform duration-300 ${
                      dropdownOpen === 1 ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
              </div>
              <ul
                className={`flex flex-col gap-2 text-[1.5rem] border-l-2 border-[#17DB4F] pl-4 mt-2 transition-all duration-200 ease-in-out ${
                  dropdownOpen === 1 ? "block" : "hidden"
                }`}
              >
                <li>
                  <Link
                    onClick={() => {
                      setMenuOpen(false);
                      toggleDropdown(null);
                    }}
                    href="/seo"
                    className={`flex items-center pb-2 hover:text-[#17DB4F] cursor-pointer ${
                      pathName === "/seo" && "text-[#17DB4F]"
                    }
                  `}
                  >
                    SEO<span className=" sr-only "> Sikre høy rangering</span>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      setMenuOpen(false);
                      toggleDropdown(null);
                    }}
                    href="/logo"
                    className={`flex items-center pb-2 hover:text-[#17DB4F] cursor-pointer ${
                      pathName === "/logo" && "text-[#17DB4F]"
                    }
                  `}
                  >
                    Grafisk design{" "}
                    <span className=" sr-only ">
                      {" "}
                      Estetisk grafikk og design
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      setMenuOpen(false);
                      toggleDropdown(null);
                    }}
                    href="/markedsforing"
                    className={`flex items-center pb-2 hover:text-[#17DB4F] cursor-pointer ${
                      pathName === "/markedsforing" && "text-[#17DB4F]"
                    }
                  `}
                  >
                    Markedsføring
                    <span className=" sr-only "> Fremme din merkevare</span>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      setMenuOpen(false);
                      toggleDropdown(null);
                    }}
                    href="/ki-chatbot"
                    className={`flex items-center pb-2 hover:text-[#17DB4F] cursor-pointer ${
                      pathName === "/ki-chatbot" && "text-[#17DB4F]"
                    }
                  `}
                  >
                    Skreddersydd KI-chatbot{" "}
                    <span className=" sr-only ">
                      {" "}
                      Spennende prosjekter venter
                    </span>
                  </Link>
                </li>
              </ul>
            </li>

            {/* Other Links */}
            <li className="relative group border-b border-[#17DB4F] py-2">
              <Link
                href="/om-oss"
                onClick={() => setMenuOpen(false)}
                className={`flex items-center pb-2 hover:text-[#17DB4F] text-[2rem]  ${
                  pathName === "/om-oss" && "text-[#17DB4F]"
                }`}
              >
                Hvem er vi? <span className=" sr-only "> Vi er SideStone</span>
              </Link>
            </li>
            <li className="relative group border-b border-[#17DB4F] py-2">
              <Link
                href="/referanser"
                onClick={() => setMenuOpen(false)}
                className={`flex items-center pb-2 hover:text-[#17DB4F] text-[2rem]  ${
                  pathName === "/referanser" && "text-[#17DB4F]"
                } `}
              >
                Prosjekter{" "}
                <span className=" sr-only "> Spennende prosjekter venter</span>
              </Link>
            </li>
            <li className="relative group pt-[2rem] ">
              <Link
                href="/book-now"
                onClick={() => setMenuOpen(false)}
                className={` ${
                  pathName === "/book-now" && "bg-transparent"
                } flex items-center justify-center  bg-[#17DB4F] border-2 py-1 px-7 w-full text-[1.3rem] text-center rounded-full  border-[#17DB4F] hover:bg-transparent transition-colors duration-300 ease-in-out `}
              >
                Book Møte
                <span className=" sr-only ">Book En Samtale</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className=" flex flex-col items-center gap-4 pt-[3rem] ">
          <h4 className=" text-[1.6rem] ">Følg oss</h4>
          <div className=" flex items-center gap-4 ">
            <Link
              onClick={() => setMenuOpen(false)}
              href={"https://www.facebook.com/groups/sidesone/"}
              rel="nofollow"
              target="_blank"
              className=" p-2 rounded-full border-2 border-[#17DB50] text-[#fff] text-[1.5rem] "
            >
              <FaFacebookF />
              <span className=" sr-only ">Bli med på Facebook</span>
            </Link>
            <Link
              onClick={() => setMenuOpen(false)}
              target="_blank"
              rel="nofollow"
              href={"https://www.instagram.com/sidesoneas?igsh=MTJ4Z2ZoNGc3Mjg3eQ%3D%3D&utm_source=qr"}
              className=" p-2 rounded-full border-2 border-[#17DB50] text-[#fff] text-[1.5rem] "
            >
              <FaInstagram />
              <span className=" sr-only ">Bli med på Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
