'use client'

import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import {busDirections, busDirection} from "@/utils/data";
import Link from "next/link"


function Footer() {
    return (
        <div
            className="text-[#fff] !pt-[125px] bg-[#161616] container !pr-0 !pb-[125px] grid grid-cols-2 gap-x-[25px] gap-y-[85px]">
            <div>
                <div className="!text-[#fff] flex gap-[146px]">
                    <p className="uppercase !text-[#fff]/[0.65] mt-[10px] ml-[3px] leading-[105%]">
                        Blog
                    </p>
                    <h2 className="uppercase text-[35px] leading-[140%] !text-[#fff] tracking-[-0.35px]">
                        Echipa noastră este la dispoziția
                    </h2>
                </div>
                <h2 className="uppercase text-[35px] leading-[140%] !text-[#fff] tracking-[-0.35px]">
                    dvs. pentru a oferi asistență și consultații
                    {/*</h2>*/}
                    {/*<h2 className="uppercase text-[35px] leading-[140%] !text-[#fff] tracking-[-0.35px]">*/}
                    medicale la doar un apel distanță
                </h2>
            </div>
            <div/>
            <div className="pl-[250px]">
                <iframe className="!rounded-[23px] !overflow-hidden"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10880.805747584376!2d28.8318375!3d47.0166509!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97d5c884a1399%3A0x85ad0ab5ad7e580a!2sKinderMed!5e0!3m2!1sen!2s!4v1699746089643!5m2!1sen!2s"
                        width="500" height="300" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className="flex flex-col gap-[50px]">
                    <div className="pl-[17px] pt-[17px]">
                        <p className="text-[20px] leading-[145%] text-[#fff] ">
                            Str. Vasile Alecsandri 87
                        </p>
                        <p className="text-[18px] leading-[145%] text-[#fff]/[0.5]">
                            Chișinău, MD 2012
                        </p>
                    </div>
                    <div className="flex gap-[10px]">
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <div className="flex px-[17px] py-[12px] gap-[10px] items-center border-[1px] rounded-[15px] !border-[#fff]/[0.4]">
                                    <div className="flex items-center gap-[6px]">
                                        <Image src="/icons/Bus.svg" width={17} height={17} alt="" />
                                        <p className="!text-[#fff]">Troleibuze</p>
                                    </div>
                                    <Image src="/icons/ChevronDownGrey.svg" width={17} height={17} alt="" />
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-[#161616] border-[1px] border-[#fff]/[0.5] px-[17px] py-[12px] rounded-[20px]">
                                {busDirections.map((busDirection:busDirection, i:number) => {
                                    return <DropdownMenuLabel className="p-0 leading-[155%] gap-[6px] flex" key={i}>
                                            <p className="text-[#fff]/[0.5] !font-[400]">
                                                {busDirection.location}:
                                            </p>
                                            <p className="text-[#fff] !font-[400]">
                                                 {busDirection.routes.join(", ")}
                                            </p>
                                    </DropdownMenuLabel>
                                })}
                            </DropdownMenuContent>
                        </DropdownMenu>

                            <Link className="flex px-[17px] py-[12px] gap-[10px] items-center border-[1px] rounded-[15px] !border-[#fff]/[0.4] !text-[#fff]"
                                  href="https://www.waze.com/live-map/directions/kindermed-str.-vasile-alecsandri-87-chisinau?to=place.w.18874838.188944990.8523753"
                                  target="_blank">
                                <Image src="/icons/Globe.svg" width={17} height={17} alt="waze"/>
                                Waze
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;