import React from "react";
import Call from "./Call";
import Image from "next/image";
import { Button } from "./ui/Button";
import { navLink, navLinks } from "@/app/utils/data";
import Link from "next/link";

function Header() {
  return (
    <header className="container flex flex-col items-center gap-[45px] !pt-[25px]">
      <div className="flex justify-between w-full items-center">
        <Call />

        <Image src="/Logo.png" alt="kindermed" width={152.5} height={50} />

        <Button className="flex gap-[7px] items-center">
          <Image
            src="/icons/Smile.svg"
            alt="kindermed"
            width={16}
            height={16}
          />
          Programare Online
        </Button>
      </div>
      <div className="flex gap-[65px]">
        {navLinks.map((link: navLink) => {
          return (
            <Link className="leading-[185%]" href={link.href}>
              {link.text}
            </Link>
          );
        })}
      </div>
    </header>
  );
}

export default Header;
