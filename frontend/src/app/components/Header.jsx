"use client";
import Tooltip from "@mui/material/Tooltip";
import { FaChevronDown, FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { usePathname } from "next/navigation";
const Header = () => {
  const pathName = usePathname();
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

  if (
    pathName.includes("adminpanel") ||
    pathName.includes("login") ||
    pathName.includes("reset-password")
  ) {
    return;
  }

  return (
    <div
      className={`fixed px-3 h-[112px] py-4 lg:px-0 top-0 w-full ${
        scrolled ? "bg-[#035635] shadow-xl" : "bg-[#035635]"
      } z-50`}
    >
      <header className="text-white px-5 py-5 flex max-w-[1400px] mx-auto justify-between items-center">
        <Link href={"/"}>
          <Image
            loading="lazy"
            placeholder="blur"
            src="/logo.png"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA..."
            alt="Logo"
            height={221}
            width={221}
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
                        Logo
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
          </ul>
        </nav>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 lg:hidden h-full bg-[#035635] text-white p-5 transition-all duration-300 ${
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
            <Link href={"/nettside"}>
              <div
                className={`flex items-center pb-2 hover:text-[#17DB4F] cursor-pointer ${
                  pathName === "/nettside" && "text-[#17DB4F]"
                }
                `}
                onClick={() => toggleDropdown(0)}
              >
                Nettside
                <FaChevronDown
                  className={`ml-2 text-sm transition-transform duration-300 ${
                    dropdownOpen === 0 ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </Link>
            <ul
              className={`flex flex-col pl-2 mt-2 transition-all duration-200 ease-in-out ${
                dropdownOpen === 0 ? "block" : "hidden"
              }`}
            >
              <li>
                <Link
                  onClick={() => setMenuOpen(false)}
                  href="/nettside"
                  className="block py-2 hover:bg-green-100"
                >
                  Nettside
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setMenuOpen(false)}
                  href="/nettbuttik"
                  className={`block py-2 hover:bg-green-100 hover:text-[#17DB4F] cursor-pointer ${
                    pathName === "/nettbuttik" && "text-[#17DB4F]"
                  }
                  `}
                >
                  Nettbutikk
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setMenuOpen(false)}
                  href="/webapplikasjon"
                  className={`block py-2 hover:bg-green-100 hover:text-[#17DB4F] cursor-pointer ${
                    pathName === "/webapplikasjon" && "text-[#17DB4F]"
                  }
                  `}
                >
                  Webapplikasjon
                </Link>
              </li>
            </ul>
          </li>

          {/* Dropdown 2 */}
          <li className="relative group">
            <Link href="/digitale-tjenester">
              <div
                className={`flex items-center pb-2 hover:text-[#17DB4F] cursor-pointer ${
                  pathName === "/digitale-tjenester" && "text-[#17DB4F]"
                }
              `}
                onClick={() => toggleDropdown(1)}
              >
                Digitale Tjenester
                <FaChevronDown
                  className={`ml-2 text-sm transition-transform duration-300 ${
                    dropdownOpen === 1 ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </Link>
            <ul
              className={`flex flex-col pl-2 mt-2 transition-all duration-200 ease-in-out ${
                dropdownOpen === 1 ? "block" : "hidden"
              }`}
            >
              <li>
                <Link
                  href="/seo"
                  className={`flex items-center pb-2 hover:text-[#17DB4F] cursor-pointer ${
                    pathName === "/seo" && "text-[#17DB4F]"
                  }
                  `}
                >
                  Seo
                </Link>
              </li>
              <li>
                <Link
                  href="/logo"
                  className={`flex items-center pb-2 hover:text-[#17DB4F] cursor-pointer ${
                    pathName === "/logo" && "text-[#17DB4F]"
                  }
                  `}
                >
                  Logo
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setMenuOpen(false)}
                  href="/markedsforing"
                  className={`flex items-center pb-2 hover:text-[#17DB4F] cursor-pointer ${
                    pathName === "/seo" && "text-[#17DB4F]"
                  }
                  `}
                >
                  Markedsføring
                </Link>
              </li>
            </ul>
          </li>

          {/* Other Links */}
          <li className="relative group">
            <Link
              href="/om-oss"
              onClick={() => setMenuOpen(false)}
              className="flex items-center pb-2 hover:text-[#17DB4F]"
            >
              Hvem er vi?
            </Link>
          </li>
          <li className="relative group">
            <Link
              href="/referanser"
              onClick={() => setMenuOpen(false)}
              className="flex items-center pb-2 hover:text-[#17DB4F]"
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
