import Image from "next/image";

const Tools = () => {
  return (
    <div className="grid lg:grid-cols-5 my-16   max-w-[1280px] mx-auto justify-center lg:justify-between px-5 lg:px-0 gap-5 items-center">
      <div className="flex flex-col  items-center justify-center ">
        <Image src={"/t1.png"} width={80} height={80} alt="Nettsideutvikling" />
        <div className="text-center space-y-2 pt-2">
          <h1 className="text-2xl font-semibold">Nettsideutvikling</h1>
          <p>Lage dynamiske nettsider for din digitale suksesss</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <Image src={"/t2.png"} width={80} height={80} alt="Driftsavtale" />
        <div className="text-center space-y-2 pt-2">
          <h1 className="text-2xl font-semibold">Driftsavtale</h1>
          <p>Stabile og pålitelige driftsavtaler som sikrer nettsiden din.</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <Image src={"/t3.png"} width={80} height={80} alt="Responsive design" />
        <div className="text-center space-y-2 pt-2">
          <h1 className="text-2xl font-semibold">Responsive design</h1>
          <p>
            Responsivt design for best mulig brukeropplevelse på alle enheter.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <Image src={"/t4.png"} width={80} height={80} alt="Vedlikehold" />
        <div className="text-center space-y-2 pt-2">
          <h1 className="text-2xl font-semibold">Vedlikehold</h1>
          <p>Vedlikehold som sikrer stabilitet og optimal ytelse.</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <Image src={"/t5.png"} width={80} height={80} alt="SEO" />
        <div className="text-center space-y-2 pt-2">
          <h1 className="text-2xl font-semibold">SEO</h1>
          <p>SEO som forbedrer synligheten og rangeringen på nettet.s</p>
        </div>
      </div>
    </div>
  );
};

export default Tools;
