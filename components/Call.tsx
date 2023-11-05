import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

function Call() {
  return (
    <div className="flex gap-[7px] tracking-[0.12px]">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex gap-[7px] items-center">
            <Image src="/icons/DoctorIcon.svg" width={34} height={34} alt="" />
            <div className="flex flex-col h-[34px] justify-center items-start text-black gap-[3px]">
              <p className="text-[12px] leading-[105%]">Apelează-ne</p>
              <a href="tel:+37322111061" className="leading-[105%]">
                +373 22 111 061
              </a>
            </div>
            <Image src="/icons/ChevronDown.svg" width={17} height={17} alt="" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Call;
