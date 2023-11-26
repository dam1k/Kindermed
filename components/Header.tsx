'use client'

import React, {useState, useEffect} from "react";
import Call from "./Call";
import Image from "next/image";
import { Button } from "./ui/Button";
import { navLink, navLinks } from "@/utils/data";
import Link from "next/link";


function Header() {

    const [day, setDay] = useState<number>(0);
    useEffect(() => {
        const today = new Date().getDay();
        setDay(today);
    }, []);

  return (
    <header className="container relative z-[2] flex flex-col items-center gap-[45px] max-[1350px]:!pt-[15px] !pt-[25px]">
      <div className="flex justify-between max-[1350px]:justify-center w-full items-center">
          <div className="flex-1 flex items-center gap-[35px]">
              <div className="flex gap-[8px]">
                  <Link target="_blank" className="p-[11px] rounded-[15px] border-[1px] border-[#3E404D]/[0.24]"
                        href="https://www.instagram.com/kindermedmd/">
                      <Image src="/icons/InstagramGrey.svg" alt="" width={17} height={17}/>
                  </Link>
                  <Link target="_blank" className="p-[11px] rounded-[15px] border-[1px] border-[#3E404D]/[0.24]"
                        href="https://www.facebook.com/KinderMedMD/">
                      <Image src="/icons/FacebookGrey.svg" alt="" width={17} height={17}/>
                  </Link>
              </div>
              <div className="cursor-pointer flex items-center">
                  <Image src="/icons/Calendar.svg" width={28} height={28} alt=""/>
                  <div className="ml-[10px] mr-[7px] flex flex-col gap-[3px]">
                      <div className="flex gap-[5px] items-center">
                          <p className="text-[12px] leading-[105%]">Astăzi lucrăm</p>
                          <div className="w-[7px] h-[7px] bg-[#36D938] rounded-[50%]"/>
                      </div>
                      <div className="leading-[105%]">
                          9:00 - 18:00
                      </div>
                  </div>
                  <Image src="/icons/ChevronDown.svg" width={17} height={17} alt=""/>
                  {/*<div className="">*/}
                  {/*    <p className="text-[#00AAF1] text-[18px]">Astăzi</p>*/}
                  {/*</div>*/}
              </div>
              <Link target="_blank" href="https://www.google.com/maps/place/KinderMed/@47.0166545,28.8292626,17z/data=!3m1!4b1!4m6!3m5!1s0x40c97d5c884a1399:0x85ad0ab5ad7e580a!8m2!3d47.0166509!4d28.8318375!16s%2Fg%2F11hdyjkcmy?entry=ttu">
                  <div className="cursor-pointer flex items-center gap-[10px]">
                      <Image src="/icons/Address.svg" width={28} height={28} alt=""/>
                      <div className="flex flex-col gap-[3px]">
                          <p className="text-[12px] leading-[105%]">Adresa:</p>
                          <p className="leading-[105%]">Str. Vasile Alecsandri 87</p>
                      </div>
                  </div>
              </Link>
          </div>

          <Link href="/">
            <img src="/Logo.svg" alt="kindermed" className="max-[1350px]:h-[45px] min-[1351px]:h-[70px]" />
          </Link>

          <div className="flex-1 gap-[35px] flex justify-end">
              <div className="flex items-center">
                  <Image src="/icons/PhoneBlue.svg" width={28} height={28} alt="" />
                  <div className="ml-[10px] mr-[7px] flex flex-col justify-center items-start text-black gap-[3px]">
                      <p className="text-[12px] leading-[105%]">Apelează-ne</p>
                      <a href="tel:+37322111061" className="leading-[105%]">
                          +373 22 111 061
                      </a>
                  </div>
                  <Image src="/icons/ChevronDown.svg" width={17} height={17} alt="" />
              </div>
            <Button className="flex  max-[1350px]:hidden gap-[7px] items-center">
              <img
                src="/icons/Smile.svg"
                alt="kindermed"
                className="w-[16px] h-[16px]"
              />
              Programare Online
            </Button>
          </div>
      </div>
      <div className="flex max-[1350px]:hidden gap-[65px]">
        {navLinks.map((link: navLink) => {
          return (
            <Link key={link.href} className="uppercase font-[500] py-[12px] px-[17px] border-[1px] border-[#3E404D]/[0.24] rounded-[57px] flex items-center leading-[105%]" href={link.href}>
                <span>{link.text}</span>
                {link.href === "#team" && <div
                    className="relative text-[#fff] h-[21px] w-[22px] rounded-[8px] ml-[8px] bg-blue text-[12px]">
                    <span className="absolute top-[50%] left-[50%] leading-[105%] translate-x-[-50%] translate-y-[-50%]">13</span>
                </div>}
            </Link>
          );
        })}
      </div>
    </header>
  );
}

export default Header;
