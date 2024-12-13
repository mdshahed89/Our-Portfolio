"use client";

import { useState } from "react";

const NettsideForm = () => {
  const [filePreviews, setFilePreviews] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);
  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const previews = files.map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
    }));
    setFilePreviews(previews);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const budget = form.budget.value;
    const pages = form.pages.value;
    const description = form.description.value;

    const formData = {
      firstName,
      lastName,
      email,
      phone,
      budget,
      pages,
      vlag: selectedValues,
      description,
      image: filePreviews,
    };

    console.log(formData);
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
                <option value="8000-150000">8000 - 150000kr</option>
                <option value="160000-250000">160000 - 250000kr</option>
              </select>
            </div>

            <div className="flex flex-col">
              <select
                id="pages"
                name="pages"
                className="rounded-full bg-transparent border border-[#7BDCB5] outline-none focus:border-dashed p-2 mt-1"
                required
              >
                <option value="1">1</option>
                <option value="1-5">1-5</option>
                <option value="5+">5+</option>
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

            <div>
              <h3 className="text-lg font-semibold mb-2">
                Hvis du har bilder eller logo kan du laste de opp her
              </h3>
              <div>
                <div className="border  border-dashed border-[#7BDCB5] rounded-lg p-4 flex flex-col items-center gap-3">
                  {filePreviews.length > 0 ? (
                    <div className="">
                      {filePreviews.map((file, index) => (
                        <div key={index} className="relative  rounded-lg p-2">
                          <img
                            src={file.url}
                            alt={file.name}
                            className="w-full h-32 object-cover rounded-md"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center  flex-col gap-5 justify-center">
                      <div className="text-center text-gray-500">
                        Dra og slipp filer her, eller
                      </div>
                      <button
                        type="button"
                        className="bg-[#035635]  text-white py-2 px-4 rounded-full"
                        onClick={() =>
                          document.getElementById("file-input").click()
                        }
                      >
                        Velg filer
                      </button>
                      <input
                        id="file-input"
                        type="file"
                        multiple
                        className="hidden"
                        onChange={handleFileUpload}
                        required
                      />
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Max. file size: 2 MB.
                </p>
              </div>
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
              className="bg-[#035635] px-3 py-1  rounded-full text-white"
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
