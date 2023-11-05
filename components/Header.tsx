import React from "react";
import Call from "./Call";
import Image from "next/image";
import { Button } from "./ui/Button";
import { navLink, navLinks } from "@/utils/data";
import Link from "next/link";

function Header() {
  return (
    <header className="container flex flex-col items-center gap-[45px] !pt-[25px]">
      <div className="flex justify-between w-full items-center">
        <Call />

        <Image src="/Logo.svg" alt="kindermed" width={152.5} height={50} />

        <Button className="flex gap-[7px] items-center">
          <img
            src="/icons/Smile.svg"
            alt="kindermed"
            className="w-[16px] h-[16px]"
          />
          Programare Online
        </Button>
      </div>
      <div className="flex gap-[65px]">
        {navLinks.map((link: navLink) => {
          return (
            <Link key={link.href} className="flex items-center leading-[185%]" href={link.href}>
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
