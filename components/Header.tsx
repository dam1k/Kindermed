import React from "react";
import Call from "./Call";
import Image from "next/image";
import { Button } from "./ui/Button";
import { navLink, navLinks } from "@/utils/data";
import Link from "next/link";

function Header() {
  return (
    <header className="container relative z-[2] flex flex-col items-center gap-[45px] max-[1024px]:!pt-[15px] !pt-[25px]">
      <div className="flex justify-between max-[1024px]:justify-center w-full items-center">
          <div className=" max-[1024px]:hidden ">
            <Call />
          </div>

        <img src="/Logo.svg" alt="kindermed" className="max-[1024px]:h-[45px] min-[1025px]:h-[70px]" />

        <Button className="flex  max-[1024px]:hidden gap-[7px] items-center">
          <img
            src="/icons/Smile.svg"
            alt="kindermed"
            className="w-[16px] h-[16px]"
          />
          Programare Online
        </Button>
      </div>
      <div className="flex max-[1024px]:hidden gap-[65px]">
        {navLinks.map((link: navLink) => {
          return (
            <Link key={link.href} className="uppercase font-[500] py-[12px] px-[17px] border-[1px] border-[#3E404D]/[0.24] rounded-[14px] flex items-center leading-[105%]" href={link.href}>
                <span>{link.text}</span>
                {link.href === "#team" && <div
                    className="relative text-[#fff] h-[21px] w-[22px] rounded-[8px] ml-[7px] bg-blue text-[12px]">
                    <span className="absolute top-[50%] left-[50%] leading-[105%] translate-x-[-55%] translate-y-[-40%]">13</span>
                </div>}
            </Link>
          );
        })}
      </div>
    </header>
  );
}

export default Header;
