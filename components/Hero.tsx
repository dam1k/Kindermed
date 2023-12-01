import React from "react";
import Image from "next/image";
import { Button } from "./ui/Button";

const Hero = () => {
    // const [width, setWidth] = useState<number>(0);
    //
    // useEffect(() => {
    //     setWidth(window.innerWidth);
    //
    //     window.addEventListener("resize", () => setWidth(window.innerWidth));
    //     return () =>
    //         window.removeEventListener("resize", () => setWidth(window.innerWidth));
    // }, []);

  return (
    <div className="container hero max-[1024px]:px-[10px] relative flex flex-col items-center max-[1024px]:!pt-[215px] !pt-[125px]">
      <Image
        className="absolute z-[1] max-[1024px]:hidden top-[78px] rotate-[35deg] left-[50%] translate-x-[-50%]"
        src="/HeroEllipse.svg"
        width={193}
        height={486}
        alt=""
      />
      <div className="uppercase leading-[140%] flex flex-col items-center text-[55px]">
        <h1 className="max-[1024px]:text-[25px] max-[1024px]:leading-[32.5px]">
          La <span className="text-[#00AAF1]">Kindermed</span> -
        </h1>
        <h1 className="max-[1024px]:text-center max-[1024px]:text-[25px] max-[1024px]:leading-[32.5px]">Atitudinea face diferența</h1>
      </div>
      <p className="max-[1024px]:w-[275px] max-[1024px]:text-[12px] max-[1024px]:leading-[17.4px] text-center w-[500px] max-[1024px]:mt-[10px] mt-[15px]">
        Servicii de asistență medicală de cea mai înaltă calitate, într-o
        ambianță caldă și relaxantă.
      </p>

      <div className="flex  justify-center items-center max-[1024px]:mt-[44px] mt-[85px]">
        <div className="bg-blue z-[4] relative border-[#EBEBEC] max-[1024px]:h-[44px] max-[1024px]:w-[44px] w-[55px] border-[3px]  h-[55px] rounded-[50%]">
          <span className="absolute text-[14px] leading-[82%] text-[#fff] font-[500] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
            +13
          </span>
        </div>
        <img
          src="/icons/DoctorIcon1.png"
          alt=""
          className="max-[1024px]:h-[44px] max-[1024px]:w-[44px] w-[55px] h-[55px] relative ml-[-21px] z-[3] "
        />
        <img
          src="/icons/DoctorIcon2.png"
          alt=""
          className="max-[1024px]:h-[44px] max-[1024px]:w-[44px] w-[55px] h-[55px] ml-[-21px] z-[2]"
        />
        <img
          src="/icons/DoctorIcon3.png"
          alt=""
          className="max-[1024px]:h-[44px] max-[1024px]:w-[44px] w-[55px] h-[55px] ml-[-21px] z-[1]"
        />
        <Button
          className="flex uppercase max-[1024px]:!py-[11.5px] max-[1024px]:!leading-[16.8px]  max-[1024px]:h-[40px] max-[1024px]:px-[25px] max-[1024px]:text-[12px] ml-[-21px] px-[30px]"
          size="lg"
          variant="transparent"
        >
          <span className="translate-y-[1px]">Programare Online</span>
        </Button>
      </div>
      <p className="mt-[10px] max-[1400px]:!pb-[322px] text-[12px] leading-[145%] text-lightGrey">
        Revenim cu un apel/mesaj!
      </p>
    </div>
  );
};

export default Hero;
