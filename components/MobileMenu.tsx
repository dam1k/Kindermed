import React, {useState, useRef} from 'react';
import Image from "next/image"
import {navLink, navLinks, schedule} from "@/utils/data";
import Link from "next/link";
import {AnimatePresence, motion} from "framer-motion"
import {Button} from "@/components/ui/Button";

const variants = {
    open: {
        opacity: 1,
        height: "auto",
        marginTop: 10,
    },
    collapsed: {
        opacity: 0,
        height: 0,
        marginTop: 0,
    },
};

interface IMobileMenuProps {
    working:boolean;
    day:number;
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setAppointmentOpen: React.Dispatch<React.SetStateAction<boolean>>
}
function MobileMenu({working, day, setMenuOpen, setAppointmentOpen}:IMobileMenuProps) {
    const [showSchedule, setShowSchedule] = useState<boolean>(false);

    const menuRef = useRef<HTMLDivElement>(null);

    function handleClose() {
        setMenuOpen(false)
        document.body.style.overflow = "scroll"
    }
    function handleOverlayClick(e:React.MouseEvent<HTMLDivElement>) {
        if(menuRef.current) {
                //@ts-ignore
                if(e.target !== menuRef.current && !menuRef.current.contains(e.target)) {
                    handleClose();
                }
        }
    }

    function handleAppointmentBtn() {
        setMenuOpen(false);
        setAppointmentOpen(true);
    }

    return (
        <motion.div className="min-[1401px]:hidden fixed top-0 left-0 h-screen w-screen bg-[rgba(26, 26, 32, 0.37)] backdrop-blur-[17.5px] z-[1000]"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    onClick={handleOverlayClick}
        key="menu_overlay">
            <div ref={menuRef} className="fixed overflow-scroll bg-[#FFFFFF] h-[75vh] bottom-0 left-0 w-screen p-[15px] rounded-tr-[25px] rounded-tl-[25px]">
                <div className="flex items-center justify-between px-[5px] pt-[5px]">
                    <h3 className="text-[18px] leading-[18.9px] uppercase">Navigare</h3>
                    <button className="!bg-[#3E404D]/[0.08] rounded-[10px] w-[25px] h-[25px] flex items-center justify-center"
                    onClick={handleClose}>
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
                                    className="flex items-center justify-center text-[#fff] h-[17px] w-[17px] rounded-[7px] ml-[8px] bg-blue">
                                <span
                                    className="!text-[10px] leading-[9px]">13</span>
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
                        {/*<Image*/}
                        {/*    src="/icons/ChevronDown.svg"*/}
                        {/*    width={17}*/}
                        {/*    height={17}*/}
                        {/*    alt=""*/}
                        {/*/>*/}
                    </div>
                </div>
                <div className="mt-[17px] !bg-[#686A74]/[0.1] rounded-[24px] p-[15px]">
                    <div className="cursor-pointer flex items-center justify-between" onClick={() => setShowSchedule((prev) => !prev)}>
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
                                            working ? "bg-[#36D938]" : "bg-[#FF1469]"
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

                    <AnimatePresence mode="wait" initial={false}>
                        {showSchedule && <motion.div
                            variants={variants}
                            key="schedule"
                            initial="collapsed"
                            animate="open"
                            // transition={{duration: 0.2}}
                            exit="collapsed"
                            className="bg-[#fff] px-[15px] rounded-[22px]">
                            <div className="pt-[12px] flex justify-between items-center mb-[8px]">
                                <div className="flex items-center gap-[3px]">
                                    <Image src="/icons/ArrowBlue.svg" width={20} height={20} alt=""/>
                                    <h3 className="text-[#00AAF1] text-[16px] leading-[23.2px]">
                                        Astăzi
                                    </h3>
                                </div>
                                <p className="text-[#00AAF1] text-[16px] leading-[23.2px]">
                                    {day === 0 ? schedule.sun : day === 6 ? schedule.sat : schedule.monToFri}
                                </p>
                            </div>

                            <div className="flex justify-between items-center mb-[5px]">
                                <h3 className="uppercase text-[12px] leading-[17.4px]">
                                    Luni-vineri
                                </h3>
                                <p className="text-[12px] leading-[17.4px]">
                                    {schedule.monToFri}
                                </p>
                            </div>

                            <div className="flex justify-between items-center mb-[5px]">
                                <h3 className="uppercase text-[12px] leading-[17.4px]">
                                    Sâmbătă
                                </h3>
                                <p className="text-[12px] leading-[17.4px]">
                                    {schedule.sat}
                                </p>
                            </div>

                            <div className="flex pb-[12px] justify-between items-center">
                                <h3 className="text-[#3E404D]/[0.5] uppercase text-[12px] leading-[17.4px]">
                                    Duminică
                                </h3>
                                <p className="text-[#3E404D]/[0.5] text-[12px] leading-[17.4px]">
                                    {schedule.sun}
                                </p>
                            </div>
                        </motion.div>}
                    </AnimatePresence>




                    <div className="flex mt-[15px] gap-[10px] justify-between">
                        <Button className="flex flex-1 max-w-[230px] gap-[7px] items-center"
                        onClick={handleAppointmentBtn}>
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