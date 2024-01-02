'use client'

import React, {useState, useEffect} from "react";
import Image from "next/image";
import { Button } from "./ui/Button";
import {AnimatePresence} from "framer-motion";
import OnlineAppointmentDesktop from "@/components/OnlineAppointmentDesktop";
import OnlineAppointmentMobile from "@/components/OnlineAppointmentMobile";
import {useAppointmentModal} from "@/hooks/useAppointmentModal";

const Hero = () => {
  const [showAppointment, setShowAppointment] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
      setWidth(window.innerWidth);

      window.addEventListener("resize", () => setWidth(window.innerWidth));
      return () =>
          window.removeEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
      <div className="relative z-[11]">
        <div className="container hero max-[1024px]:px-[10px] relative flex flex-col items-center justify-center">
          <div className="flex relative flex-col items-center justify-center translate-y-[-30px] min-[1401px]:translate-y-[-125px]">
            <Image
              className="absolute max-[1024px]:hidden z-[1] top-[-100px] rotate-[35deg] left-[50%] translate-x-[-50%]"
              src="/HeroEllipse.svg"
              width={193}
              height={486}
              alt=""
            />
            <div className="uppercase leading-[140%] flex flex-col items-center text-[55px]">
              <h1 className="max-[1024px]:text-[25px] max-[1024px]:leading-[32.5px]">
                La <span className="text-[#00AAF1]">Kindermed</span> -
              </h1>
              <h1 className="max-[1024px]:text-center max-[1024px]:text-[25px] max-[1024px]:leading-[32.5px]">
                Atitudinea face diferența
              </h1>
            </div>
            <p className="max-[1024px]:w-[275px] max-[1024px]:text-[12px] max-[1024px]:leading-[17.4px] text-center w-[500px] max-[1024px]:mt-[10px] mt-[15px]">
              Servicii de asistență medicală de cea mai înaltă calitate, într-o
              ambianță caldă și relaxantă.
            </p>

            <div className="flex  justify-center items-center max-[1024px]:mt-[44px] mt-[85px]">
              {/*<div className="bg-blue z-[4] relative border-[#EBEBEC] max-[1024px]:h-[44px] max-[1024px]:w-[44px] w-[55px] border-[3px]  h-[55px] rounded-[50%]">*/}
                {/*<span className="absolute text-[14px] leading-[82%] text-[#fff] font-[500] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">*/}
                {/*  +13*/}
                {/*</span>*/}
              {/*</div>*/}
              <Image
                src="/icons/DoctorIcon1.svg"
                alt=""
                width={width > 1024 ? 55 : 44}
                height={width > 1024 ? 55 : 44}
                className="relative z-[3] "
              />
              <Image
                  width={width > 1024 ? 55 : 44}
                  height={width > 1024 ? 55 : 44}
                src="/icons/DoctorIcon2.svg"
                alt=""
                className="ml-[-21px] z-[2]"
              />
              <Image
                  width={width > 1024 ? 55 : 44}
                  height={width > 1024 ? 55 : 44}
                src="/icons/DoctorIcon3.svg"
                alt=""
                className="ml-[-21px] z-[1]"
              />
              <Button
                className="flex uppercase max-[1024px]:!py-[11.5px] max-[1024px]:!leading-[16.8px]  max-[1024px]:h-[40px] max-[1024px]:px-[25px] max-[1024px]:text-[12px] ml-[-21px] px-[30px]"
                size="lg"
                variant="transparent"
                onClick={() => {
                  document.body.style.overflowY = "hidden"
                  setShowAppointment(true);
                }
                }
              >
                <span className="translate-y-[1px]">Programare Online</span>
              </Button>
            </div>
            <p className="mt-[10px] text-[12px] leading-[145%] text-lightGrey">
              Revenim cu un apel/mesaj!
            </p>
          </div>
        </div>
            <AnimatePresence>
              {showAppointment && width >= 815 && (
                  <OnlineAppointmentDesktop setOpen={setShowAppointment} />
              )}

              {showAppointment && width < 815 && (
                  <OnlineAppointmentMobile setOpen={setShowAppointment} />
              )}
            </AnimatePresence>
        </div>
  );
};

export default Hero;
