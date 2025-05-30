"use client";
import { uploadFile } from "@/AuthProvider/imageUpload";
import axios from "axios";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import toast from "react-hot-toast";
import { FaCheck } from "react-icons/fa";

const NettsideForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [filePreviews, setFilePreviews] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);
  const maxSize = 10 * 1024 * 1024; // 10 MB
  const router = useRouter()

  const pathName = usePathname();
  const path =
    pathName === "/nettside"
      ? "Nettside"
      : pathName === "/nettbuttik"
      ? "Nettbuttik"
      : "Webapplikasjon";

  const options = [
    { name: "Jeg trenger Domene" },
    { name: "Jeg trenger Logo" },
    { name: "Drift og vedlikehold" },
    { name: "SEO" },
    ...(pathName === "/nettbuttik" ? [{ name: "Kobling mot leverandør" }] : []),
  ];

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const validFiles = [];
    const previews = [];

    files.forEach((file) => {
      if (file.size <= maxSize) {
        previews.push({
          name: file.name,
          url: URL.createObjectURL(file),
        });
        validFiles.push(file);
      } else {
        setErrors((prev) => ({
          ...prev,
          file: `File size of ${file.name} exceeds 10 MB.`,
        }));
      }
    });

    setFilePreviews((prev) => [...prev, ...previews]);
    setSelectedFiles((prev) => [...prev, ...validFiles]);
  };

  const handleRemoveFile = (index) => {
    setFilePreviews((prev) => prev.filter((_, i) => i !== index));
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleChange = (value) => {
    setSelectedValues((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const firma = form.firma.value;
    const budget = form.budget.value;
    const pages = form.pages.value;
    const description = form.description.value;

    const newErrors = {};
    // if (!selectedFiles.length)
    //   newErrors.file = "At least one file is required.";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    try {
      // if (!Array.isArray(selectedFiles) || selectedFiles.length === 0) {
      //   console.log("No file selected or invalid file input");
      // return
      // }

      // const uploadedFileURLs = await Promise.all(
      //   selectedFiles.map((file) => uploadFile(file))
      // );

      const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });
      };
  
      const base64Images = await Promise.all(
        selectedFiles.map((file) => convertToBase64(file))
      );
  
      // console.log("Base64 Encoded Images:", base64Images);

      // return;

      const formData = {
        path,
        firstName,
        lastName,
        email,
        phone,
        firma,
        budget,
        pages,
        vlag: selectedValues,
        description,
        images: base64Images,
      };

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/send-email`,
        formData
      );

      if (data === "Email sent successfully!") {
        // toast.success("E-post sendt!");
        router.push(`/foresporselsuksess?query=${path}`)
        form.reset();
        setSelectedFiles([]);
        setFilePreviews([]);
        setSelectedValues([]);
        setErrors({});
      }
    } catch (error) {
      console.error(error);
      toast.error("Noe gikk galt, prøv igjen.");
    } finally {
      setIsLoading(false);
    }
  };

  // console.log(path);
  

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
          <div>
            <div className="flex flex-col">
              <label htmlFor="firma" className="text-xl mb-1">
                Firma
              </label>
              <input
                type="text"
                id="firma"
                name="firma"
                className="rounded-full bg-transparent border border-[#7BDCB5] outline-none focus:border-dashed p-2 mt-1"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 items-end md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="budget" className="text-xl mb-1">
                Budsjett{" "}
                <small className="text-red-500 text-sm">(Påkrevd)</small>
              </label>
              <select
                id="budget"
                name="budget"
                className="rounded-full bg-transparent border border-[#7BDCB5] outline-none focus:border-dashed p-2 mt-1"
                required
              >
                {pathName === "/nettside" ? (
                  <>
                    <option value="8000 - 15000kr">8000 - 15000kr</option>
                    <option value="15000 - 25000kr">15000 - 25000kr</option>
                    <option value="25000 - 35000kr">25000 - 35000kr</option>
                    <option value="jet vet ikke">Jeg vet ikke</option>
                  </>
                ) : pathName === "/nettbuttik" ? (
                  <>
                    <option value="15000kr - 25000kr">15000kr - 25000kr</option>
                    <option value="25000 - 35000kr">25000 - 35000kr</option>
                    <option value="35000kr - 50000kr">35000kr - 50000kr</option>
                    {/* <option value="50,000+ kr">50,000+</option> */}
                    <option value="jet vet ikke">Jeg vet ikke</option>
                  </>
                ) : (
                  <>
                    {" "}
                    <option value="30 000kr - 75 0000kr">
                      30 000kr - 75 0000kr
                    </option>
                    <option value="75 000 - 125 000kr">
                      75 000 - 125 000kr
                    </option>
                    <option value="1,25,000+">125 000+</option>
                    <option value="I don't know">Jeg vet ikke</option>
                  </>
                )}
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="budget" className="text-xl mb-1">
                {pathName === "/nettbuttik"
                  ? "Antall produkter"
                  : "Antall sider"}
              </label>
              <select
                id="pages"
                name="pages"
                className="rounded-full bg-transparent border border-[#7BDCB5] outline-none focus:border-dashed p-2 mt-1"
                required
              >
                {pathName === "/nettside" ? (
                  <>
                    <option value="1">1</option>
                    <option value="1 - 5">1 - 5</option>
                    <option value="10 +">10 +</option>
                    <option value="jet vet ikke">Jeg vet ikke</option>
                  </>
                ) : pathName === "/nettbuttik" ? (
                  <>
                    <option value="1 - 10"> 1 - 10</option>
                    <option value="10 - 20">10 - 20</option>
                    <option value="20 - 50">20 - 50</option>
                    <option value="50+">50+</option>
                    <option value="jet vet ikke">Jeg vet ikke</option>
                  </>
                ) : (
                  <>
                    <option value="5-10">5-10</option>
                    <option value="10+">10+</option>
                    <option value="jet vet ikke">Jeg vet ikke</option>
                  </>
                )}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
            <div>
              <h4 className="text-lg font-medium mb-2">Valg</h4>
              <div className="flex flex-col gap-4">
                {options.map((option) => (
                  <div key={option.name} className="flex items-center gap-2">
                    {/* Hidden Checkbox */}
                    <input
                      type="checkbox"
                      id={option.name}
                      checked={selectedValues.includes(option.name)}
                      onChange={() => handleChange(option.name)}
                      className="hidden"
                    />
                    {/* Custom Label */}
                    <label
                      htmlFor={option.name}
                      className="flex items-center cursor-pointer gap-2 text-gray-800"
                    >
                      {/* Custom Checkbox */}
                      <span
                        className={`w-6 h-6 flex border-green-400 items-center justify-center border-2 rounded-md transition-all ${
                          selectedValues.includes(option.name)
                            ? "bg-green-400 border-green-400 text-white"
                            : "bg-white border-gray-300"
                        }`}
                      >
                        {selectedValues.includes(option.name) && <FaCheck />}
                      </span>
                      {option.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="">
              <h4 className="text-lg font-medium mb-2">
                Hvis du har bilder eller logo kan du laste de opp her
              </h4>
              <div className="border border-dashed border-[#7BDCB5] rounded-lg p-4 flex flex-col items-center gap-3">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
                  {filePreviews.map((filePreview, index) => (
                    <div
                      key={index}
                      className="relative rounded-lg overflow-hidden w-full h-32"
                    >
                      <Image
                        loading="lazy"
                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjYmRkZmYiLz48L3N2Zz4="
                        placeholder="blur"
                        src={filePreview.url}
                        alt={filePreview.name}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover rounded-md"
                      />
                      <button
                        type="button"
                        className="absolute top-1 right-1 bg-white text-red-500 rounded-full p-1 shadow-md"
                        onClick={() => handleRemoveFile(index)}
                      >
                        <RxCross2 className="text-lg" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-5 items-center justify-center w-full mt-4">
                  <div className="text-center text-gray-500">
                    Dra og slipp filer her, eller
                  </div>
                  <button
                    type="button"
                    className="bg-[#035635] text-white py-2 px-4 rounded-full"
                    onClick={() =>
                      document.getElementById("file-input").click()
                    }
                  >
                    Velg filer
                  </button>
                  <input
                    id="file-input"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    multiple
                    onChange={handleFileUpload}
                  />
                </div>
              </div>
              {errors.file && (
                <span className="text-red-500 text-sm">{errors.file}</span>
              )}
              <p className="text-sm text-gray-500 mt-2">
                Max. file size: 5 MB.
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col w-full">
              <label htmlFor="description" className="text-xl mb-1">
              Beskriv hva du trenger hjelp med
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

export default NettsideForm;

export const LogoForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const pathName = usePathname();
  const router = useRouter()
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
      // toast.success("E-post sendt!");
      router.push("/grafisk-suksess")
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
