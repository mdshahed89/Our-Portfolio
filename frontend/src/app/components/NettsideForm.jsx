"use client";
import { uploadFile } from "@/AuthProvider/imageUpload";
import axios from "axios";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import toast from 'react-hot-toast';
const NettsideForm = () => {
  const pathName = usePathname();
  const path =
    pathName === "/nettside"
      ? "Nettside"
      : pathName === "/nettbuttik"
      ? "Nettbuttik"
      : "Webapplikasjon";
  const [filePreview, setFilePreview] = useState("");
  const [selectedValues, setSelectedValues] = useState([]);
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    const maxSize = 2 * 1024 * 1024;

    if (selectedFile) {
      if (selectedFile.size <= maxSize) {
        setFilePreview({
          name: selectedFile.name,
          url: URL.createObjectURL(selectedFile),
        });
        setFile(selectedFile);
        setErrors((prev) => ({ ...prev, file: null }));
      } else {
        setErrors((prev) => ({
          ...prev,
          file: "File size must be less than 2 MB.",
        }));
        setFilePreview(null);
        setFile(null);
      }
    }
  };

  const options = [
    { name: "Jeg trenger Domene" },
    {
      name: "Jeg trenger Logo",
    },
    {
      name: "Drift og vedlikehold",
    },
    {
      name: "SEO",
    },
  ];

  const handleChange = (value) => {
    setSelectedValues((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleClearFile = () => {
    setFilePreview(null);
    setFile(null);
    setErrors((prev) => ({ ...prev, file: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    if (!file) newErrors.file = "Cover Image is required.";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    try {
      const uploadedImageURL = await uploadFile(file);
      console.log(uploadedImageURL);
      if (uploadedImageURL) {
        const formData = {
          path,
          firstName,
          lastName,
          email,
          phone,
          budget,
          firma,
          pages,
          vlag: selectedValues,
          description,
          image: uploadedImageURL,
        };
        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/send-email`,
          formData
        );
        if (data === "Email sent successfully!") {
         toast.success("Email sent successfully!");
          form.reset();
          setFile(null);
          setFilePreview(null);
          setSelectedValues([]);
          setErrors({});
        }
      }
    } catch (error) {
      console.log(error);
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
                Budget <small className="text-red-500 text-sm">(Påkrevd)</small>
              </label>
              <select
                id="budget"
                name="budget"
                className="rounded-full bg-transparent border border-[#7BDCB5] outline-none focus:border-dashed p-2 mt-1"
                required
              >
                {pathName === "/nettside" ? (
                  <>
                    <option value="8,000  - 15,000 kr">
                      8,000 - 15,000 kr
                    </option>
                    <option value="15,000 - 25,000 kr">
                      15,000 kr - 25,000 kr
                    </option>
                    <option value="25,000 - 35,000 kr">
                      25,000 - 35,000 kr
                    </option>
                    <option value="jet vet ikke">jet vet ikke</option>
                  </>
                ) : pathName === "/nettbuttik" ? (
                  <>
                    <option value="15,000 - 25,000 kr">
                      15,000 kr - 25,000 kr
                    </option>
                    <option value="25,000 - 35,000 kr">
                      25,000 - 35,000 kr
                    </option>
                    <option value="35,000 - 50,000 Kr">
                      35,000 - 50,000 KR
                    </option>
                    <option value="50,000+ kr">50,000+</option>
                    <option value="jet vet ikke">jet vet ikke</option>
                  </>
                ) : (
                  <>
                    {" "}
                    <option value="30,000 - 75,000 kr">
                      30,000 - 75,000 kr
                    </option>
                    <option value="75,000 - 1,25,000 kr">
                      75,000 kr - 1,25,000 kr
                    </option>
                    <option value="1,25,000+">1,25,000+ kr</option>
                    <option value="I don't know">jet vet ikke</option>
                  </>
                )}
              </select>
            </div>

            <div className="flex flex-col">
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
                    <option value="jet vet ikke">jet vet ikke</option>
                  </>
                ) : pathName === "/nettbuttik" ? (
                  <>
                    <option value="1 - 10"> 1 - 10</option>
                    <option value="10 - 20">10 - 20</option>
                    <option value="20 - 50">20 - 50</option>
                    <option value="50+">50+</option>
                    <option value="jet vet ikke">jet vet ikke</option>
                  </>
                ) : (
                  <>
                    <option value="5-10">5-10</option>
                    <option value="10+">10+</option>
                    <option value="jet vet ikke">jet vet ikke</option>
                  </>
                )}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Valg</h3>
              <div className="flex flex-col gap-4">
                {options.map((option) => (
                  <div key={option.name} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedValues.includes(option.name)}
                      onChange={() => handleChange(option.name)}
                      className={`w-6 h-6 border ${
                        selectedValues.includes(option.name)
                          ? "bg-[#7BDCB5] border-[#7BDCB5]"
                          : "border-gray-300"
                      } rounded-md`}
                    />
                    <span className="flex items-center gap-2 text-black">
                      {option.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="">
              <h3 className="text-lg font-semibold mb-2">
                Hvis du har bilder eller logo kan du laste de opp her
              </h3>
              <div className="border border-dashed border-[#7BDCB5] rounded-lg p-4 flex flex-col items-center gap-3">
                {filePreview ? (
                  <div>
                    <div className="flex justify-end">
                      <button type="button" onClick={handleClearFile}>
                        <RxCross2 className="text-2xl" />
                      </button>
                    </div>
                    <div className="relative rounded-lg p-2">
                      <Image
                        src={filePreview.url}
                        alt={filePreview.name}
                        width={100}
                        height={100}
                        className="w-full h-32 object-cover rounded-md"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-5 items-center justify-center">
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
                      onChange={handleFileUpload}
                    />
                  </div>
                )}
              </div>
              {errors.file && (
                <span className="text-red-500 text-sm">{errors.file}</span>
              )}
              <p className="text-sm text-gray-500 mt-2">
                Max. file size: 2 MB.
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col w-full">
              <label htmlFor="description" className="text-xl mb-1">
                Beskriv hvordan du ønsker at nettsiden din skal være
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
          <div>
            <button
              type="submit"
              className="bg-[#035635] px-4 py-2 text-xl font-medium  rounded-full text-white"
            >
              Send inn
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NettsideForm;
