import React from 'react';
import Image from "next/image"
import {navLink, navLinks, schedule} from "@/utils/data";
import Link from "next/link";
import {motion} from "framer-motion"
import {Button} from "@/components/ui/Button";

function MobileMenu({working, day, setOpen}: {working:boolean; day:number; setOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
    return (
        <motion.div className="fixed top-0 left-0 h-screen w-screen bg-[rgba(26, 26, 32, 0.37)] backdrop-blur-[17.5px] z-[1000]"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
        key="menu_overlay">
            <div className="fixed bg-[#FFFFFF] h-[50vh] bottom-0 left-0 w-screen p-[15px] rounded-tr-[25px] rounded-tl-[25px]">
                <div className="flex items-center justify-between">
                    <h3 className="text-[18px] leading-[18.9px] uppercase">Navigare</h3>
                    <button className="bg-[#3E404D]/[0.08] rounded-[10px] w-[25px] h-[25px] bg-[#3e404d] flex items-center justify-center"
                    onClick={() => setOpen(false)}>
                        <Image src="/icons/Times.svg" alt="" width={15} height={15}/>
                    </button>
                </div>
                <div className="mt-[20px] flex items-start self-stretch flex-wrap gap-[8px]">
                    {navLinks.map((link: navLink) => {
                        return (
                            <Link key={link.href}
                                  className="uppercase text-[14px] font-[500] py-[10px] px-[17px] border-[1px] border-[#3E404D]/[0.24] rounded-[57px] flex items-center leading-[105%]"
                                  href={link.href}>
                                <span>{link.text}</span>
                                {link.href === "#team" && <div
                                    className="relative text-[#fff] h-[17px] w-[17px] rounded-[7px] ml-[8px] bg-blue">
                                <span
                                    className="absolute top-[50%] left-[50%] leading-[9px] !text-[10px] translate-x-[-50%] translate-y-[-50%]">13</span>
                                </div>}
                            </Link>
                        );
                    })}
                </div>
                <div className="mt-[35px] flex gap-[35px]">
                    <div className="flex flex-col gap-[3px]">
                        <p className="text-[12px] leading-[105%]">Adresa:</p>
                        <p className="text-[14px] leading-[105%]">
                            Str. Vasile Alecsandri 87
                        </p>
                    </div>
                    <div className="flex cursor-pointer items-center">
                        <div className="ml-[10px] mr-[7px] flex flex-col justify-center items-start text-black gap-[3px]">
                            <p className="text-[12px] leading-[105%]">Apelează-ne</p>
                            <a href="tel:+37322111061" className="text-[14px] leading-[105%]">
                                +373 22 111 061
                            </a>
                        </div>
                        <Image
                            src="/icons/ChevronDown.svg"
                            width={17}
                            height={17}
                            alt=""
                        />
                    </div>
                </div>
                <div className="mt-[17px] !bg-[#686A74]/[0.1] rounded-[24px] p-[15px]">
                    <div className="cursor-pointer flex items-center justify-between">
                        <div className="flex items-center">
                            <Image
                                src="/icons/Calendar.svg"
                                width={28}
                                height={28}
                                alt=""
                            />
                            <div className="ml-[10px] flex flex-col gap-[3px]">
                                <div className="flex gap-[5px] items-center">
                                    <p className="text-[12px] leading-[105%]">
                                        {day === 0 ? "Închis" : "Astăzi lucrăm"}
                                    </p>
                                    <div
                                        className={`animate-dot w-[7px] h-[7px] ${
                                            working ? "bg-[#FF1469]" : "bg-[#36D938]"
                                        } rounded-[50%]`}
                                    />
                                </div>
                                <div className="text-[14px] leading-[105%]">
                                    {day === 0
                                        ? schedule.sun
                                        : day === 6
                                            ? schedule.sat
                                            : schedule.monToFri}
                                </div>
                            </div>
                        </div>
                        <Image
                            src="/icons/ChevronDown.svg"
                            width={17}
                            height={17}
                            alt=""
                        />
                    </div>

                    <div className="mt-[15px] flex gap-[10px] justify-between">
                        <Button className="flex flex-1 max-w-[230px] gap-[7px] items-center">
                            <img
                                src="/icons/Smile.svg"
                                alt="kindermed"
                                className="w-[16px] h-[16px]"
                            />
                            Programare Online
                        </Button>
                        <div className="flex gap-[8px]">
                            <Link
                                target="_blank"
                                className="w-[41px] h-[41px] flex items-center justify-center rounded-[15px] bg-[#686A74]/[0.1]"
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
                                className="w-[41px] h-[41px] flex items-center justify-center rounded-[15px] bg-[#686A74]/[0.1]"
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
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default MobileMenu;