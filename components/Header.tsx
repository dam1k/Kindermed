"use client";

import React, { useState, useEffect } from "react";
import {useRouter, usePathname} from "next/navigation";
import Call from "./Call";
import Image from "next/image";
import { Button } from "./ui/Button";
import { navLink, navLinks, schedule } from "@/utils/data";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ScheduleDropdownContent from "@/components/ScheduleDropdownContent";
import CallDropdownContent from "@/components/CallDropdownContent";
import MobileMenu from "../components/MobileMenu";
import OnlineAppointmentDesktop from "@/components/OnlineAppointmentDesktop";
import OnlineAppointmentMobile from "@/components/OnlineAppointmentMobile";


function Header() {
  const [activeLink, setActiveLink] = useState("");
  const [domLoaded, setDomLoaded] = useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(0);

  const router = useRouter();
  const pathname = usePathname()

  const [showScheduleDropdown, setShowScheduleDropdown] =
    useState<boolean>(false);
  const [showCallDropdown, setShowCallDropdown] = useState<boolean>(false);
  const [showAppointment, setShowAppointment] = useState<boolean>(false);
  const [day, setDay] = useState<number>(0);
  const [working, setWorking] = useState<boolean>(true);

  useEffect(() => {
    setWidth(window.innerWidth);
    const date = new Date();
    const today = date.getDay();
    const hours = date.getHours();
    const minutes = date.getMinutes() + date.getHours() * 60;
    const starting = 8 * 60 + 30
    const closing = 18 * 60 + 30
    setDay(today);
    if (today === 0) {
      setWorking(false);
    } else if (today === 6) {
      if (hours >= 9 && hours <= 18) {
        setWorking(true);
      } else {
        setWorking(false);
      }
    } else {
      if(minutes > starting && minutes < closing) {
        setWorking(true);
      } else {
        setWorking(false);
      }
    }
    setDomLoaded(true);

    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () =>
        window.removeEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    if(width > 1400) {
      setShowMobileMenu(false);
      document.body.style.overflowY = "scroll"
    }
  }, [width]);


  useEffect(() => {
    // setShowMobileMenu(false);
    // document.body.style.overflowY = "scroll"

    if(pathname.length > 1) {
      setActiveLink(pathname);
    }
    else {
      setActiveLink("/");
    }
  }, [pathname]);

  // useEffect(() => {
  //   if(width <= 1400) {
  //     if (showMobileMenu) {
  //       document.body.style.overflow = "hidden";
  //       // document.body.style.height = "100vh"
  //     } else {
  //       document.body.style.overflow = "scroll";
  //     }
  //   }
  // }, [width, showMobileMenu]);

  function handleMobileMenuBtnClick() {
    document.body.style.overflow = "hidden";
     setShowMobileMenu(true)
  }

  function handleLinkClick(href:string) {
    if(href.startsWith("#")) {
      router.push(`/${href}`);
      setActiveLink("");
      // console.log(href)
      // const el = document.querySelector(href);
      // setTimeout(() => {
      //   if(el) {
      //     el.scrollTo(0, 0);
      //   }
      // }, 300);
    } else {
      router.push(href);
      setActiveLink(href);
    }
  }

  return (
    <>
        <header
          className="relative z-[3] max-[1024px]:!px-[10px] container h-[60px] min-[1401px]:h-[250px] flex flex-col items-center gap-[45px] max-[1400px]:!pt-[19px] !pt-[25px]"
        >
          <div className="flex justify-between max-[1400px] w-full items-center">
            <div className="min-[1401px]:flex-1 flex items-center min-[1401px]:gap-[35px]">
              <div className="flex gap-[8px]">
                <Link
                  target="_blank"
                  className="p-[11px] rounded-[15px] border-[1px] border-[#3E404D]/[0.24]"
                  href="https://www.instagram.com/kindermedmd/"
                >
                  <Image
                    src="/icons/InstagramGrey.svg"
                    alt=""
                    width={17}
                    height={17}
                  />
                </Link>
                <Link
                  target="_blank"
                  className="p-[11px] rounded-[15px] border-[1px] border-[#3E404D]/[0.24]"
                  href="https://www.facebook.com/KinderMedMD/"
                >
                  <Image
                    src="/icons/FacebookGrey.svg"
                    alt=""
                    width={17}
                    height={17}
                  />
                </Link>
              </div>
              {domLoaded && (
                <div
                  className="relative"
                  onMouseEnter={() => setShowScheduleDropdown(true)}
                  onMouseLeave={() => setShowScheduleDropdown(false)}
                >
                  <div className="max-[1400px]:hidden cursor-pointer flex items-center">
                    <Image
                      src="/icons/Calendar.svg"
                      width={28}
                      height={28}
                      alt=""
                    />
                    <div className="ml-[10px] mr-[7px] flex flex-col gap-[3px]">
                      <div className="flex gap-[5px] items-center">
                        <p className="text-[12px] leading-[105%]">
                          {day === 0 ? "Închis" : "Astăzi lucrăm"}
                        </p>
                        <div
                          className={`animate-dot w-[7px] h-[7px] ${
                            working ? "bg-[#36D938]" : "bg-[#FF1469]"
                          } rounded-[50%]`}
                        />
                      </div>
                      <div className="leading-[105%]">
                        {day === 0
                          ? schedule.sun
                          : day === 6
                            ? schedule.sat
                            : schedule.monToFri}
                      </div>
                    </div>
                      <Image
                        src="/icons/ChevronDown.svg"
                        width={17}
                        height={17}
                        alt=""
                        className={`transition-all ${showScheduleDropdown ? "rotate-180" : 'rotate-0'}`}
                      />
                  </div>
                  <AnimatePresence>
                    {showScheduleDropdown && (
                      <ScheduleDropdownContent day={day} />
                    )}
                  </AnimatePresence>
                </div>
              )}
              <Link
                target="_blank"
                href="https://www.google.com/maps/place/KinderMed/@47.0166545,28.8292626,17z/data=!3m1!4b1!4m6!3m5!1s0x40c97d5c884a1399:0x85ad0ab5ad7e580a!8m2!3d47.0166509!4d28.8318375!16s%2Fg%2F11hdyjkcmy?entry=ttu"
              >
                <div className="max-[1400px]:hidden cursor-pointer flex items-center gap-[10px]">
                  <Image
                    src="/icons/Address.svg"
                    width={28}
                    height={28}
                    alt=""
                  />
                  <div className="flex flex-col gap-[3px]">
                    <p className="text-[12px] leading-[105%]">Adresa:</p>
                    <p className="leading-[105%]">Str. Vasile Alecsandri 87</p>
                  </div>
                </div>
              </Link>
            </div>

            <Link
                onClick={() => setActiveLink("")}
              href="/"
              className="max-[1400px]:flex-1 max-[1400px]:flex max-[1400px]:justify-center"
            >
              <img
                src="/Logo.svg"
                alt="kindermed"
                className="max-[1400px]:h-[41px] min-[1401px]:h-[65px]"
              />
            </Link>

            <div className="flex gap-[8px]">
              <a href="tel:+37322111061"
                 className="border-[1px] bg-[transparent] border-[#00AAF1] min-[1401px]:hidden h-[41px] w-[41px] z-[10] flex rounded-[15px] items-center justify-center"
              >
                <Image
                    src="/icons/PhoneSm.svg"
                    width={17}
                    height={17}
                    alt=""
                />
              </a>
              <button
                className="bg-[#00AAF1] min-[1401px]:hidden h-[41px] w-[41px] z-[10] flex rounded-[15px] items-center justify-center"
                onClick={() => setShowMobileMenu(true)}
              >
                <Image
                  src="/icons/Menu.svg"
                  width={19}
                  height={19}
                  alt=""
                  onClick={handleMobileMenuBtnClick}
                />
              </button>
            </div>

            <div className="flex-1 gap-[35px] flex justify-end max-[1400px]:hidden">
              <div
                className="relative"
                onMouseEnter={() => setShowCallDropdown(true)}
                onMouseLeave={() => setShowCallDropdown(false)}
              >
                <div className="flex cursor-pointer items-center">
                  <Image
                    src="/icons/PhoneBlue.svg"
                    width={28}
                    height={28}
                    alt=""
                  />
                  <div className="ml-[10px] mr-[7px] flex flex-col justify-center items-start text-black gap-[3px]">
                    <p className="text-[12px] leading-[105%]">Apelează-ne</p>
                    <a href="tel:+37322111061" className="leading-[105%]">
                      +373 22 111 061
                    </a>
                  </div>
                  <Image
                    src="/icons/ChevronDown.svg"
                    width={17}
                    height={17}
                    alt=""
                    className={`transition-all ${showCallDropdown ? "rotate-180" : 'rotate-0'}`}
                  />
                </div>
                <AnimatePresence>
                  {showCallDropdown && <CallDropdownContent />}
                </AnimatePresence>
              </div>
              <Button
                className="flex  max-[1350px]:hidden gap-[7px] items-center"
                onClick={() => {
                  document.body.style.overflowY = "hidden"
                  setShowAppointment(true)}
                }
              >
                <Image
                  src="/icons/Smile.svg"
                  alt="kindermed"
                  width={16}
                  height={16}
                  className="w-[16px] h-[16px]"
                />
                Programare Online
              </Button>
            </div>
          </div>
          <ul className="flex max-[1400px]:hidden h-[44px] gap-[15px]">
            {navLinks.map((link: navLink) => {
              return (
                <li
                  key={link.href}
                  className={`relative z-[3] ${link.href === activeLink ? "bg-[#00AAF1] text-[#fff] !border-transparent" : ""} transition-all cursor-pointer font-[500] text-[18px] py-[10.5px] px-[17px] border-[1px] border-[#3E404D]/[0.24] rounded-[57px] flex items-center leading-[105%]`}
                  onClick={() => handleLinkClick(link.href)}
                >
                  <span>{link.text}</span>
                  {/*{link.href === "#team" && (*/}
                  {/*  <div className="relative text-[#fff] h-[21px] w-[22px] rounded-[8px] ml-[8px] bg-blue text-[12px]">*/}
                      {/*<span className="absolute top-[50%] left-[50%] leading-[105%] translate-x-[-50%] translate-y-[-50%]">*/}
                      {/*  13*/}
                      {/*</span>*/}
                  {/*  </div>*/}
                  {/*)}*/}
                </li>
              );
            })}
          </ul>
        </header>
      <AnimatePresence>
        {showMobileMenu && (
          <MobileMenu working={working} handleLinkClick={handleLinkClick} day={day} setAppointmentOpen={setShowAppointment} setMenuOpen={setShowMobileMenu} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showAppointment && width >= 815 && (
          <OnlineAppointmentDesktop setOpen={setShowAppointment} />
        )}

        {showAppointment && width < 815 && (
            <OnlineAppointmentMobile setOpen={setShowAppointment} />
        )}
      </AnimatePresence>
      </>
  );
}

export default Header;
