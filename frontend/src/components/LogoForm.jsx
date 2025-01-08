"use client";
import toast from "react-hot-toast";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LogoForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const pathName = usePathname();
  const path = pathName === "/logo" ? "Logo" : "";
  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const description = form.description.value;

    const formData = {
      path,
      firstName,
      lastName,
      email,
      phone,
      description,
    };

    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/send-logo-email`,
      formData
    );
    if (data === "Email sent successfully!") {
      toast.success("E-post sendt!");
      setIsLoading(false);
      form.reset();
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="space-y-10">
          <div className="grid grid-cols-1 items-end md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-xl mb-1">
                Navn <small className="text-red-500 text-sm">(Påkrevd)</small>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="rounded-full bg-transparent border border-[#7BDCB5] outline-none focus:border-dashed p-2 mt-1"
                required
              />
              <label
                htmlFor="firstName"
                className="text-sm pl-2 text-gray-500 mt-1"
              >
                Navn
              </label>
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                id="extra"
                name="lastName"
                className="rounded-full bg-transparent border border-[#7BDCB5] outline-none focus:border-dashed p-2 mt-1"
              />
              <label
                htmlFor="firstName"
                className="text-sm text-gray-500 pl-2 mt-1"
              >
                Etternavn
              </label>
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-xl mb-1">
                E-post <small className="text-red-500 text-sm">(Påkrevd)</small>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="rounded-full bg-transparent border border-[#7BDCB5] outline-none focus:border-dashed p-2 mt-1"
                required
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-xl mb-1">
                Telefon{" "}
                <small className="text-red-500 text-sm">(Påkrevd)</small>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="rounded-full bg-transparent border border-[#7BDCB5] outline-none focus:border-dashed p-2 mt-1"
                required
              />
            </div>
          </div>

          <div className="">
            <div className="flex flex-col w-full">
              <label htmlFor="description" className="text-xl mb-1">
                Beskriv hvordan du ønsker at Logoen din skal være
              </label>
              <textarea
                id="description"
                name="description"
                rows={10}
                className="rounded-lg w-full bg-transparent border border-[#7BDCB5] outline-none focus:border-dashed p-2 mt-1"
                required
              ></textarea>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <button
              type="submit"
              className="bg-[#035635] px-10 py-2 transition-all duration-300 ease-in-out active:scale-95 text-xl font-medium  rounded-full text-white"
            >
              Send inn
            </button>
            <div>
              {isLoading && (
                <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-double border-4 border-r-0 border-l-0 border-b-green-400 border-t-green-700"></div>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogoForm;
