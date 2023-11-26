'use client'

import React, {useState, useEffect} from "react";
import Call from "./Call";
import Image from "next/image";
import { Button } from "./ui/Button";
import { navLink, navLinks, schedule } from "@/utils/data";
import Link from "next/link";
import {motion, AnimatePresence} from "framer-motion";
import ScheduleDropdownContent from "@/components/ScheduleDropdownContent";
import CallDropdownContent from "@/components/CallDropdownContent";


function Header() {
    const [showScheduleDropdown, setShowScheduleDropdown] = useState<boolean>(false);
    const [showCallDropdown, setShowCallDropdown] = useState<boolean>(false);
    const [day, setDay] = useState<number>(0);
    const [working, setWorking] = useState<boolean>(false);

    useEffect(() => {
        const date= new Date();
        const today = date.getDay();
        const hours = date.getHours();
        const minutes = date.getMinutes()
        setDay(today);
        if(today === 0) {
            setWorking(false);
        } else if(today === 6) {
            if(hours >= 9 && hours < 18) {
                setWorking(true)
            } else {
                setWorking(false)
            }
        } else {
            if(hours >= 8 && minutes >= 30 && hours <= 18 && minutes < 30) {
                setWorking(true);
            } else {
                setWorking(false);
            }
        }
    }, []);

    // useEffect(() => {
    //     if(showScheduleDropdown) {
    //         document.body.style.overflow = "hidden";
    //     } else {
    //         document.body.style.overflow = "scroll";
    //     }
    // }, [showScheduleDropdown]);

  return (
    <header className="container relative h-[250px] z-[2] flex flex-col items-center gap-[45px] max-[1350px]:!pt-[15px] !pt-[25px]">
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
              <div className="relative">
                  <div className="cursor-pointer flex items-center"
                  onMouseEnter={() => setShowScheduleDropdown(true)}>
                      <Image src="/icons/Calendar.svg" width={28} height={28} alt=""/>
                      <div className="ml-[10px] mr-[7px] flex flex-col gap-[3px]">
                          <div className="flex gap-[5px] items-center">
                              <p className="text-[12px] leading-[105%]">{day === 0 ? "Închis" : "Astăzi lucrăm"}</p>
                              <div className={`animate-dot w-[7px] h-[7px] ${working ? "bg-[#36D938]" : "bg-[#FF1469]"} rounded-[50%]`}/>
                          </div>
                          <div className="leading-[105%]">
                              {day === 0 ? schedule.sun : day === 6 ? schedule.sat : schedule.monToFri}
                          </div>
                      </div>
                      <Image src="/icons/ChevronDown.svg" width={17} height={17} alt=""/>
                      {/*<div className="">*/}
                      {/*    <p className="text-[#00AAF1] text-[18px]">Astăzi</p>*/}
                      {/*</div>*/}
                  </div>
                      <AnimatePresence>
                          {showScheduleDropdown && <ScheduleDropdownContent setOpen={setShowScheduleDropdown} day={day}/>}
                      </AnimatePresence>
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
              <div className="relative"
                   onMouseEnter={() => setShowCallDropdown(true)}>
                  <div className="flex cursor-pointer items-center">
                      <Image src="/icons/PhoneBlue.svg" width={28} height={28} alt="" />
                      <div className="ml-[10px] mr-[7px] flex flex-col justify-center items-start text-black gap-[3px]">
                          <p className="text-[12px] leading-[105%]">Apelează-ne</p>
                          <a href="tel:+37322111061" className="leading-[105%]">
                              +373 22 111 061
                          </a>
                      </div>
                      <Image src="/icons/ChevronDown.svg" width={17} height={17} alt="" />
                  </div>
                  <AnimatePresence>
                    {showCallDropdown && <CallDropdownContent setOpen={setShowCallDropdown}/>}
                  </AnimatePresence>
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
