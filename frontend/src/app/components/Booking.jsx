const Booking = () => {
  return (
    <div className=" max-h-[100vh]  mt-16  lg:px-0 grid lg:grid-cols-2 ">
      <div
        className="order-2 lg:order-1 h-[80vh] "
        style={{
          backgroundImage: "url('/coding.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
        }}
      ></div>
      <div className="bg-[#7BDCB5] py-10  order-1  lg:order-2 flex items-center justify-center text-center">
        <div className="space-y-3">
          <h1 className="text-[40px] lg:text-[56px] font-bold">Spørsmål?</h1>
          <h2 className="text-[24px] lg:text-[32px] font-bold">
            Ring oss: +47 13 65 07
          </h2>
          <h2 className="text-[24px] lg:text-[32px] font-bold">
            Mail oss: Kontakt@sidesone.no
          </h2>
          <h2 className="text-[24px] lg:text-[32px] font-bold">Eller</h2>
          <h2 className="text-[24px] lg:text-[32px] font-bold">
            Book en konsultasjon
          </h2>
          <div className="flex justify-center py-5 lg:my-3 mt-6">
            <button className="w-60 bg-black text-white p-3 rounded-full">
              Book Møte
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
