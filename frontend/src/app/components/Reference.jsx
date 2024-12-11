import Link from "next/link";

const Reference = () => {
  return (
    <div className="px-5 max-w-[1400px] mx-auto lg:px-4">
      <div className="">
        <h1 className="text-[25px] lg:text-[56px] py-3 font-semibold">
          Referanser
        </h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        <div className="">
          <div>
            <Link target="_blank" href={`{b.url}`}>
              <figure
                className=" "
                style={{
                  height: "230px",
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <img
                  src={`/r1.png`}
                  alt=""
                  className="object-cover h-full w-full"
                />
              </figure>
            </Link>
          </div>
          <div className="text-center px-5 py-3 space-y-3">
            <h1 className="text-2xl font-semibold">REAL PARTNER AS</h1>
            <div className="min-h-[80px]">
              <p>
                Eiendomsselskapet Real Partner as ble etablert i 1989 og har
                dermed lang historie som tilrettelegger…
              </p>
            </div>
            <Link href={"#"} className="text-lg">
              Se Prosjektet→
            </Link>
          </div>
        </div>
        <div className="">
          <div>
            <Link target="_blank" href={`{b.url}`}>
              <figure
                className=" "
                style={{
                  height: "230px",
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <img
                  src={`/r2.png`}
                  alt=""
                  className="object-cover h-full w-full"
                />
              </figure>
            </Link>
          </div>
          <div className="text-center px-5 py-3 space-y-3">
            <h1 className="text-2xl font-semibold">Konsulenttorget</h1>
            <div className="min-h-[80px]">
              <p>
                InstaCall er et ledende tele-marketing byrå som spesialiserer
                seg på kundeservice, møtebooking og salgsløsninger. Vi
                kombinerer…
              </p>
            </div>
            <Link href={"#"} className="text-lg">
              Se Prosjektet→
            </Link>
          </div>
        </div>
        <div className="">
          <div>
            <Link target="_blank" href={`{b.url}`}>
              <figure
                className=" "
                style={{
                  height: "230px",
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <img
                  src={`/r3.png`}
                  alt=""
                  className="object-cover h-full w-full"
                />
              </figure>
            </Link>
          </div>
          <div className="text-center px-5 py-3 space-y-3 ">
            <h1 className="text-2xl font-semibold">Instacall</h1>
            <div className="min-h-[80px]">
              <p>
                InstaCall er et ledende tele-marketing byrå som spesialiserer
                seg på kundeservice, møtebooking og salgsløsninger. Vi
                kombinerer…
              </p>
            </div>
            <Link href={"#"} className="text-lg">
              Se Prosjektet→
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reference;
