"use client";
import Tooltip from "@mui/material/Tooltip";
import { FaChevronDown, FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [isTooltipOpen1, setIsTooltipOpen1] = useState(false);
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

  return (
    <div
      className={`fixed px-5 h-[80px] lg:px-0 top-0 w-full ${
        scrolled ? "bg-[#035635] shadow-xl" : "bg-[#035635]"
      } z-50`}
    >
      <header className="text-white py-5 flex max-w-[1280px] mx-auto justify-between items-center">
        <Link href={"/"}>
          <Image
            src="/logo.png"
            alt="Logo"
            height={200}
            width={200}
            className="object-contain"
          />
        </Link>
        <div className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars className="text-2xl cursor-pointer" />
        </div>

        <nav
          className={`lg:flex lg:items-center hidden ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex items-center pt-2 space-x-8">
            <li className="relative group">
              <Tooltip
                title={
                  <div className="space-y-2  py-2">
                    <MenuItem>
                      <Link className="" href="#">
                        Nettside
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href="#">Nettbutikk</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href="#">Webapplikasjon</Link>
                    </MenuItem>
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
                <div className="flex items-center text-xl font-semibold pb-2 hover:text-green-300 cursor-pointer">
                  Nettside
                  <FaChevronDown
                    className={`ml-2 text-sm transition-transform duration-300 ${
                      isTooltipOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-green-300 transition-all duration-300 group-hover:w-full"></span>
                </div>
              </Tooltip>
            </li>

            <li className="relative group">
              <Tooltip
                title={
                  <div className="space-y-2 text-xl font-medium py-2">
                    <MenuItem>
                      <Link href="#">Nettside</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href="#">Nettbutikk</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href="#">Webapplikasjon</Link>
                    </MenuItem>
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
                <div className="flex text-xl font-semibold items-center pb-2 hover:text-green-300 cursor-pointer">
                  Digitale Tjenester
                  <FaChevronDown
                    className={`ml-2 text-sm transition-transform duration-300 ${
                      isTooltipOpen1 ? "rotate-180" : "rotate-0"
                    }`}
                  />
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-green-300 transition-all duration-300 group-hover:w-full"></span>
                </div>
              </Tooltip>
            </li>

            <li className="relative group">
              <div className="flex text-xl font-semibold items-center pb-2 hover:text-green-300 cursor-pointer">
                <Link href="/om-oss"> Hvem er vi?</Link>
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-green-300 transition-all duration-300 group-hover:w-full"></span>
              </div>
            </li>
            <li className="relative group">
              <div className="flex text-xl font-semibold items-center pb-2 hover:text-green-300 cursor-pointer">
                <Link href="/referanser"> Prosjekter</Link>
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-green-300 transition-all duration-300 group-hover:w-full"></span>
              </div>
            </li>
          </ul>
        </nav>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#035635] text-white p-5 transition-all duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <button onClick={() => setMenuOpen(false)}>
            <RxCross2 className="text-2xl cursor-pointer" />
          </button>
        </div>
        <ul className="flex flex-col mt-7 space-y-8">
          {/* Dropdown 1 */}
          <li className="relative group">
            <div
              className="flex items-center pb-2 hover:text-green-300 cursor-pointer"
              onClick={() => toggleDropdown(0)}
            >
              Nettside
              <FaChevronDown
                className={`ml-2 text-sm transition-transform duration-300 ${
                  dropdownOpen === 0 ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            <ul
              className={`flex flex-col mt-2 transition-all duration-200 ease-in-out ${
                dropdownOpen === 0 ? "block" : "hidden"
              }`}
            >
              <li>
                <Link href="#" className="block py-2 hover:bg-green-100">
                  Nettside
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-2 hover:bg-green-100">
                  Nettbutikk
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-2 hover:bg-green-100">
                  Webapplikasjon
                </Link>
              </li>
            </ul>
          </li>

          {/* Dropdown 2 */}
          <li className="relative group">
            <div
              className="flex items-center pb-2 hover:text-green-300 cursor-pointer"
              onClick={() => toggleDropdown(1)}
            >
              Digitale Tjenester
              <FaChevronDown
                className={`ml-2 text-sm transition-transform duration-300 ${
                  dropdownOpen === 1 ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            <ul
              className={`flex flex-col mt-2 transition-all duration-200 ease-in-out ${
                dropdownOpen === 1 ? "block" : "hidden"
              }`}
            >
              <li>
                <Link href="#" className="block py-2 hover:bg-green-100">
                  Seo
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-2 hover:bg-green-100">
                  Logo
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-2 hover:bg-green-100">
                  Webapplikasjon
                </Link>
              </li>
            </ul>
          </li>

          {/* Other Links */}
          <li className="relative group">
            <Link
              href="#"
              className="flex items-center pb-2 hover:text-green-300"
            >
              Hvem er vi?
            </Link>
          </li>
          <li className="relative group">
            <Link
              href="/referanser"
              className="flex items-center pb-2 hover:text-green-300"
            >
              Prosjekter
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
