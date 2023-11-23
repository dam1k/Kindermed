"use client";

import React, { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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

function Footer() {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () =>
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  // const router = useRouter();
  return (
    <>
      <div className="bg-[#161616]">
        <div className="text-[#fff] !pt-[100px] lg:!pt-[125px] max-[1023px]:px-[10px] container !pb-[100px] lg:!pb-[125px] grid-cols-1 grid min-[1400px]:grid-cols-2 gap-x-[25px] gap-y-[40px] min-[1400px]:gap-y-[85px]">
          <div>
            <div className="!text-[#fff] flex max-[1599px]:gap-[86px] min-[1600px]:gap-[186px]">
              <p className="uppercase !text-[#fff]/[0.65] mt-[5px] lg:mt-[10px] ml-[1px] lg:ml-[3px] leading-[105%]">
                Detalii
              </p>
              <h2 className="uppercase text-[20px] lg:text-[35px] leading-[140%] !text-[#fff] tracking-[-0.35px]">
                Echipa noastră este la dispoziția Informează-te despre
              </h2>
            </div>
            <h2 className="uppercase text-[20px] lg:text-[35px] leading-[140%] !text-[#fff] tracking-[-0.35px]">
              dvs. pentru a oferi asistență și consultații medicale la doar un
              apel distanță
            </h2>
          </div>
          <div className="max-[1024px]:hidden" />
          <div className="max-[1023px]:pl-[0] max-[1599px]:pl-[150px] min-[1600px]:pl-[250px]">
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
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <div className="leading-[105%] flex px-[17px] py-[12px] gap-[10px] items-center border-[1px] rounded-[15px] !border-[#fff]/[0.4]">
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
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-[#2B2B2B] flex flex-col gap-[7px] !mt-[14px] !border-0 px-[17px] py-[13px] rounded-[20px]">
                    {busDirections.map(
                      (busDirection: busDirection, i: number) => {
                        return (
                          <DropdownMenuLabel
                            className="p-0 justify-between flex"
                            key={i}
                          >
                            <p className="text-[#fff]/[0.5] w-[225px] leading-[23.2px] uppercase !font-[400]">
                              {busDirection.location}:
                            </p>
                            <p className="text-[#fff] !font-[400] leading-[23.2px] w-[110px] text-right">
                              {busDirection.routes.join(", ")}
                            </p>
                          </DropdownMenuLabel>
                        );
                      },
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>

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

          <div className="grid grid-cols-1 min-[1450px]:grid-cols-2 gap-[12px] max-[1450px]:gap-y-[50px]">
            <div className="flex flex-col gap-[85px] min-[1451px]:gap-[75px] max-[1024px]:pt-[45px]">
              <div>
                <div className="flex gap-[8px]">
                  <Image
                    width={21}
                    height={21}
                    alt=""
                    src="/icons/ArrowNarrow.svg"
                  />
                  <h3 className="uppercase !text-[#fff] text-[20px] leading-[21px]">
                    Programează-te online
                  </h3>
                </div>
                <p className="text-[#fff]/[0.5] w-[315px] mt-[17px] leading-[145%]">
                  Lăsați-ne datele Dvs. de contact, iar noi vom reveni cu un
                  apel/mesaj!
                </p>
                <Button className="bg-[#fff] mt-[30px] flex gap-[6px] items-center leading-[105%]">
                  <Image
                    width={17}
                    height={17}
                    alt=""
                    src="/icons/SmileBlack.svg"
                  />
                  <span className="!text-black">Programare Online</span>
                </Button>
              </div>
              <div>
                <div className="flex gap-[8px]">
                  <Image
                    width={21}
                    height={21}
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
                        <Image
                          alt=""
                          width={17}
                          height={17}
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
                <Image
                  width={21}
                  height={21}
                  alt=""
                  src="/icons/ArrowNarrow.svg"
                />
                <h3 className="uppercase !text-[#fff] text-[16px] min-[1025px]:text-[20px] leading-[16.8px] min-[1025px]:leading-[21px]">
                  Telefoane de contact
                </h3>
              </div>
              <div className="max-[1024px]:w-full w-[400px] flex mt-[12px] min-[1025px]:mt-[20px] gap-[8px] flex-wrap content-start items-start">
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
                      <Image
                        width={17}
                        height={17}
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
          <div className="max-[1023px]:hidden w-[430px] flex gap-x-[55px] gap-y-[25px] flex-wrap content-start items-start">
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
      <div className="max-[1024px]:hidden bg-[#121212] gap-[15px] py-[45px] flex-col flex items-center">
        <p className="w-[515px] leading-[23.2px] text-center !text-[#fff]/[0.15]">
          Copyright © 2023, S.R.L. “MIDLTON”. Toate drepturile sunt rezervate.{" "}
          <br />
          Adresa juridică: mun.Chișinău, bd. Dacia, 9/1, ap.35 <br />
          Adresa fizică: mun. Chișinău, str. Vasile Alecsandri, 87
        </p>
        <Link
          target="_blank"
          className="!text-[#fff]/[0.15] flex gap-[10px] items-center"
          href="https://dreamsite.md"
        >
          Developed by
          <Image
            width={12.65}
            height={29}
            src="/icons/DreamSiteLogo.svg"
            alt=""
          />
        </Link>
      </div>
    </>
  );
}

export default Footer;
