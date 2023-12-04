"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  busDirections,
  busDirection,
  phoneNumbers,
  contacts,
  contact,
  phoneNumber,
  footerLinks,
  navLink,
} from "@/utils/data";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import BusRoutesDropdownContent from "@/components/BusRoutesDropdownContent";
import {AnimatePresence} from "framer-motion";
import OnlineAppointmentDesktop from "@/components/OnlineAppointmentDesktop";
import OnlineAppointmentMobile from "@/components/OnlineAppointmentMobile";

function Footer() {
  const [width, setWidth] = useState<number>(0);
  const [showBusRoutesDropdown, setShowBusRoutesDropdown] = useState<boolean>(false);
  const [showAppointment, setShowAppointment] = useState<boolean>(false);

  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () =>
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  
  return (
    <>
      <div id="footer" className="bg-[#161616]">
        <div className="text-[#fff] !pt-[100px] lg:!pt-[125px] max-[1023px]:px-[10px] container !pb-[100px] lg:!pb-[125px] grid-cols-1 grid min-[1400px]:grid-cols-2 gap-x-[25px] gap-y-[40px] min-[1400px]:gap-y-[85px]">
            <div className="relative !text-[#fff]">
              <p className="inline absolute top-0 left-0 text-[12px] min-[1025px]:text-[16px] uppercase !text-[#fff]/[0.65] mt-[5px] lg:mt-[10px] ml-[1px] lg:ml-[3px] leading-[105%]">
                Detalii
              </p>
              <h2 className="inline ml-[100px] min-[1024px]:ml-[150px] min-[1600px]:ml-[250px] uppercase text-[20px] min-[1025px]:text-[35px] leading-[140%] !text-[#fff] tracking-[-0.35px]">
                Echipa noastră este la dispoziția Informează-te despre dvs. pentru a oferi asistență și consultații medicale la doar un
                apel distanță
              </h2>
            </div>
            {/*<h2 className="uppercase text-[20px] lg:text-[35px] leading-[140%] !text-[#fff] tracking-[-0.35px]">*/}
            {/*  dvs. pentru a oferi asistență și consultații medicale la doar un*/}
            {/*  apel distanță*/}
            {/*</h2>*/}
          <div className="max-[1024px]:hidden" />
          <div className="ml-0 min-[1024px]:ml-[150px] min-[1600px]:ml-[250px]">
            <iframe
              className="!rounded-[23px] !overflow-hidden"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10880.805747584376!2d28.8318375!3d47.0166509!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97d5c884a1399%3A0x85ad0ab5ad7e580a!2sKinderMed!5e0!3m2!1sen!2s!4v1699746089643!5m2!1sen!2s"
              width={width < 1024 ? "100%" : 500}
              height={width < 1024 ? 215 : 300}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="pt-[12px] lg:pl-[17px] lg:pt-[17px] flex flex-col gap-[50px]">
              <div>
                <p className="text-[14px] lg:text-[20px] leading-[145%] text-[#fff] ">
                  Str. Vasile Alecsandri 87
                </p>
                <p className="text-[12px] lg:text-[18px] leading-[145%] text-[#fff]/[0.5]">
                  Chișinău, MD 2012
                </p>
              </div>
              <div className="flex gap-[10px]">
                {/*<DropdownMenu>*/}
                  {/*<DropdownMenuTrigger>*/}
                <div  className="relative"
                      onMouseEnter={() => setShowBusRoutesDropdown(true)}
                      onMouseLeave={() => setShowBusRoutesDropdown(false)}>
                    <div className="cursor-pointer leading-[105%] flex px-[17px] py-[12px] gap-[10px] items-center border-[1px] rounded-[15px] !border-[#fff]/[0.4]">
                      <div className="flex items-center gap-[6px]">
                        <Image
                          src="/icons/Bus.svg"
                          width={17}
                          height={17}
                          alt=""
                        />
                        <p className="!text-[#fff]">Troleibuze</p>
                      </div>
                      <Image
                        src="/icons/ChevronDownGrey.svg"
                        width={17}
                        height={17}
                        alt=""
                      />
                    </div>
                  <AnimatePresence>
                   {showBusRoutesDropdown && <BusRoutesDropdownContent/>}
                  </AnimatePresence>
                </div>
                  {/*</DropdownMenuTrigger>*/}
                  {/*<DropdownMenuContent className="bg-[#2B2B2B] flex flex-col gap-[7px] !mt-[14px] !border-0 px-[17px] py-[13px] rounded-[20px]">*/}
                  {/*  {busDirections.map(*/}
                  {/*    (busDirection: busDirection, i: number) => {*/}
                  {/*      return (*/}
                  {/*        <DropdownMenuLabel*/}
                  {/*          className="p-0 justify-between flex"*/}
                  {/*          key={i}*/}
                  {/*        >*/}
                  {/*          <p className="text-[#fff]/[0.5] w-[225px] leading-[23.2px] uppercase !font-[400]">*/}
                  {/*            {busDirection.location}:*/}
                  {/*          </p>*/}
                  {/*          <p className="text-[#fff] !font-[400] leading-[23.2px] w-[110px] text-right">*/}
                  {/*            {busDirection.routes.join(", ")}*/}
                  {/*          </p>*/}
                  {/*        </DropdownMenuLabel>*/}
                  {/*      );*/}
                  {/*    },*/}
                  {/*  )}*/}
                  {/*</DropdownMenuContent>*/}
                {/*</DropdownMenu>*/}

                <Link
                  className="leading-[105%] flex px-[17px] py-[12px] gap-[10px] items-center border-[1px] rounded-[15px] !border-[#fff]/[0.4] !text-[#fff]"
                  href="https://www.waze.com/live-map/directions/kindermed-str.-vasile-alecsandri-87-chisinau?to=place.w.18874838.188944990.8523753"
                  target="_blank"
                >
                  <Image
                    src="/icons/Globe.svg"
                    width={17}
                    height={17}
                    alt="waze"
                  />
                  Waze
                </Link>
              </div>
            </div>
          </div>

          <div className="grid min-[1024px]:ml-[150px] min-[1399px]:ml-0 grid-cols-1 min-[1450px]:grid-cols-2 gap-[12px] max-[1450px]:gap-y-[50px]">
            <div className="flex flex-col gap-[85px] min-[1451px]:gap-[75px] max-[1024px]:pt-[45px]">
              <div>
                <div className="flex gap-[8px]">
                  <img
                    alt=""
                    src="/icons/ArrowNarrow.svg"
                    className="w-[21px] h-[21px]"
                  />
                  <h3 className="uppercase text-[16px] !text-[#fff] min-[1024px]:text-[20px] leading-[21px]">
                    Programează-te online
                  </h3>
                </div>
                <p className="text-[#fff]/[0.5] w-[315px] mt-[17px] leading-[145%]">
                  Lăsați-ne datele Dvs. de contact, iar noi vom reveni cu un
                  apel/mesaj!
                </p>
                <Button onClick={() => {
                  document.body.style.overflowY = "hidden"
                  setShowAppointment(true)}}
                        className="bg-[#fff] mt-[30px] flex gap-[6px] items-center leading-[105%]">
                  <img
                    alt=""
                    src="/icons/SmileBlack.svg"
                    className="w-[17px] h-[17px]"
                  />
                  <span className="!text-black">Programare Online</span>
                </Button>
              </div>
              <div>
                <div className="flex gap-[8px]">
                  <img
                    alt=""
                    src="/icons/ArrowNarrow.svg"
                  />
                  <h3 className="uppercase !text-[#fff] text-[16px] min-[1025px]:text-[20px] leading-[16.8px] min-[1025px]:leading-[21px]">
                    Contacte
                  </h3>
                </div>
                <div className="flex mt-[12px] min-[1025px]:mt-[20px] gap-[8px] flex-wrap content-start items-start">
                  {contacts.map((contact: contact) => {
                    return (
                      <Link
                        className="leading-[105%] flex px-[17px] py-[12px] gap-[10px] items-center border-[1px] rounded-[15px] !border-[#fff]/[0.4] !text-[#fff]"
                        target="_blank"
                        href={contact.href}
                        key={contact.href}
                      >
                        <img
                          alt=""
                          className="w-[17px] h-[17px]"
                          src={contact.icon}
                        />
                        {contact.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex gap-[8px]">
                <img
                  alt=""
                  src="/icons/ArrowNarrow.svg"
                  className="w-[21px] h-[21px]"
                />
                <h3 className="uppercase !text-[#fff] text-[16px] min-[1025px]:text-[20px] leading-[16.8px] min-[1025px]:leading-[21px]">
                  Telefoane de contact
                </h3>
              </div>
              <div className="min-[1025px]:w-[400px] min-[1450px]:w-full flex mt-[12px] min-[1025px]:mt-[20px] gap-[8px] flex-wrap content-start items-start">
                {phoneNumbers.map((phoneNumber: phoneNumber, i: number) => {
                  return (
                    <Link
                      key={phoneNumber.phone}
                      href={
                        i === 3 && phoneNumber.viber
                          ? `viber://chat?number=%2B${phoneNumber.viber}`
                          : `tel:${phoneNumber.href}`
                      }
                      className="leading-[105%] flex px-[17px] py-[12px] gap-[10px] items-center border-[1px] rounded-[15px] !border-[#fff]/[0.4] !text-[#fff]"
                    >
                      <img
                          className="w-[17px] h-[17px]"
                        alt=""
                        src={i === 3 ? "/icons/Viber.svg" : "/icons/Phone.svg"}
                      />
                      {phoneNumber.phone}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="max-[1024px]:hidden" />
          <div className="min-[1024px]:ml-[150px] min-[1399px]:ml-0 max-[1023px]:hidden w-[430px] flex gap-x-[55px] gap-y-[25px] flex-wrap content-start items-start">
            {footerLinks.map((link: navLink) => {
              return (
                <Link
                  key={link.href}
                  className="text-[#fff] flex items-center gap-[5px] leading-[105%]"
                  href={link.href}
                >
                  <span>{link.text}</span>
                  <Image
                    width={17}
                    height={17}
                    alt=""
                    src="/icons/ArrowTop.svg"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="max-[1024px] bg-[#121212] text-[12px] min-[1024px]:text-[16px] gap-[15px] px-[25px] border-t-[1px] border-[#fff]/[0.05] py-[45px] flex-col flex items-center">
        <p className="min-[1024px]:w-[515px] text-center leading-[145%] !text-[#fff]/[0.15]">
          Copyright © 2023, S.R.L. “MIDLTON”. Toate drepturile sunt rezervate.{" "}
          <br />
          Adresa juridică: mun.Chișinău, bd. Dacia, 9/1, ap.35 <br />
          Adresa fizică: mun. Chișinău, str. Vasile Alecsandri, 87
        </p>
        <Link
          target="_blank"
          className="!text-[#fff]/[0.15] leading-[105%] flex gap-[10px] items-center"
          href="https://dreamsite.md"
        >
          Developed by
          <img
              className="shrink-0 h-[29px] w-[12.65px]"
            src="/icons/DreamSiteLogo.svg"
            alt=""
          />
        </Link>
      </div>
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

export default Footer;
