"use client";
import { useContext, useEffect, useState } from "react";
import { GrLogout } from "react-icons/gr";
import { AiOutlineBars } from "react-icons/ai";
import { FaUserCog } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { MdDashboardCustomize } from "react-icons/md";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { AuthContext } from "@/AuthProvider/AuthProvider";
import { usePathname } from "next/navigation";
import PageLoading from "./PageLoading";
const Sidebar = () => {
  const pathName = usePathname();
  const { logout } = useContext(AuthContext);
  const [isActive, setActive] = useState(true);
  const [isClientReady, setIsClientReady] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };
  useEffect(() => {
    setIsClientReady(true);
  }, []);

  if (!isClientReady) {
    return <PageLoading />;
  }

  return (
    <div>
      <div className="bg-[#035635] w-full flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link href={"/"}>
              <Image
                loading="lazy"
                placeholder="blur"
                src="/logo.png"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA..."
                alt="Logo"
                height={180}
                width={180}
                className="object-contain"
              />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button text-white p-4 focus:outline-none "
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      <div
        className={`z-10 md:fixed flex flex-col justify-between  overflow-x-hidden bg-[#035635] w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full flex px-4 py-2   items-center mx-auto">
              <Link href={"/"}>
                <Image
                  loading="lazy"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA..."
                  placeholder="blur"
                  src="/logo.png"
                  alt="Logo"
                  height={180}
                  width={180}
                  className="object-contain"
                />
              </Link>
            </div>
          </div>

          <div className="flex flex-col  justify-between flex-1 mt-6">
            <nav>
              <ul className="">
                <li>
                  {" "}
                  <Link
                    href="/adminpanel/manageproject"
                    className={`flex w-full ${
                      pathName === "/adminpanel/manageproject"
                        ? "bg-slate-50  text-[#035635]"
                        : "text-white"
                    }
                       rounded-md items-center px-4 py-2 mt-5  hover:bg-slate-50  hover:text-[#035635] transition-colors duration-300 transform`}
                  >
                    <MdDashboardCustomize className="w-5 h-5 " />
                    <span className="mx-3 font-medium">prosjekt ledelse</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/adminpanel/blogs"
                    className={`flex w-full ${
                      pathName === "/adminpanel/blogs"
                        ? "bg-slate-50  text-[#035635]"
                        : "text-white"
                    }
                       rounded-md items-center px-4 py-2 mt-5  hover:bg-slate-50  hover:text-[#035635] transition-colors duration-300 transform`}
                  >
                    <VscGitPullRequestGoToChanges className="w-5  h-5" />
                    <span className="mx-3 font-medium">Blogg Ledelse</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/adminpanel/book-system"
                    className={`flex w-full ${
                      pathName === "/adminpanel/book-system"
                        ? "bg-slate-50  text-[#035635]"
                        : "text-white"
                    }
                       rounded-md items-center px-4 py-2 mt-5  hover:bg-slate-50  hover:text-[#035635] transition-colors duration-300 transform`}
                  >
                    <VscGitPullRequestGoToChanges className="w-5  h-5" />
                    <span className="mx-3 font-medium">Bestilling Ledelse</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div>
          <hr />
          <Link
            href="/adminpanel"
            className={`flex w-full ${
              pathName === "/adminpanel"
                ? "bg-slate-50  text-[#035635]"
                : "text-white"
            }
               rounded-md items-center px-4 py-2 mt-5  hover:bg-slate-50  hover:text-[#035635] transition-colors duration-300 transform`}
          >
            <FaUserCog className="w-5 h-5 " />
            <span className="mx-3 font-medium">profil</span>
          </Link>
          <button
            onClick={logout}
            className="flex w-full rounded-md items-center px-4 py-2 mt-5 text-white hover:bg-slate-50  hover:text-[#035635] transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-3 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
