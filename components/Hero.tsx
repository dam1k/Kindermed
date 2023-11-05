import React from "react";
import Image from "next/image";
import { Button } from "./ui/Button";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center pt-[225px]">
      <Image
        className="absolute z-[1] top-[78px] rotate-[35deg] left-[50%] translate-x-[-50%]"
        src="/HeroEllipse.svg"
        width={193}
        height={486}
        alt=""
      />
      <div className="uppercase leading-[140%] flex flex-col items-center text-[55px]">
        <h1>
          La <span className="text-[#00AAF1]">Kindermed</span> -
        </h1>
        <h1>Atitudinea face diferența</h1>
      </div>
      <p className="text-center w-[500px] mt-[15px]">
        Servicii de asistență medicală de cea mai înaltă calitate, într-o
        ambianță caldă și relaxantă.
      </p>
      <div className="flex w-[341px] relative justify-center items-center mt-[85px]">
        <div className="left-[0] absolute">
          <div className="bg-blue z-[4] relative border-[#EBEBEC] w-[55px] border-[3px]  h-[55px] relative rounded-[50%]">
            <span className="absolute text-[14px] leading-[82%] text-[#fff] font-[500] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
              +13
            </span>
          </div>
        </div>
        <Image
          src="/icons/DoctorIcon1.svg"
          width={55}
          height={55}
          alt=""
          className="absolute left-[34px] z-[3] "
        />
        <Image
          src="/icons/DoctorIcon2.svg"
          width={55}
          height={55}
          alt=""
          className="absolute left-[68px] z-[2]"
        />
        <Image
          src="/icons/DoctorIcon3.svg"
          width={55}
          height={55}
          alt=""
          className="absolute left-[102px] z-[1]"
        />
        <Button
          className="flex uppercase absolute left-[136px] px-[30px]"
          size="lg"
          variant="transparent"
        >
          <span className="translate-y-[1px]">Programare Online</span>
        </Button>
        <p className="absolute top-[30px] text-[12px] leading-[145%] text-lightGrey">
          Revenim cu un apel/mesaj!
        </p>
      </div>
    </div>
  );
};

export default Hero;
