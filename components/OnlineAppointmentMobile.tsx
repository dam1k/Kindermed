import React, {useRef, useState} from 'react';
import {motion} from "framer-motion"
import Image from "next/image";

function OnlineAppointmentMobile({setOpen}: {setOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
    const menuRef = useRef<HTMLDivElement>(null);

    function handleClose() {
        setOpen(false)
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

    return (
        <motion.div className="min-[1401px]:hidden fixed top-0 left-0 h-screen w-screen bg-[rgba(26, 26, 32, 0.37)] backdrop-blur-[17.5px] z-[1000]"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    onClick={handleOverlayClick}>
            <div ref={menuRef} className="fixed overflow-scroll bg-[#FFFFFF] h-[75vh] bottom-0 left-0 w-screen p-[15px] rounded-tr-[25px] rounded-tl-[25px]">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[8px] px-[5px] pt-[5px]">
                        <Image src="/icons/ArrowBlue.svg" width={21} height={21} alt=""/>
                        <h3 className="text-[18px] leading-[18.9px] uppercase">Programare online</h3>
                    </div>
                    <button className="!bg-[#3E404D]/[0.08] rounded-[10px] w-[25px] h-[25px] flex items-center justify-center"
                            onClick={handleClose}>
                        <Image src="/icons/Times.svg" alt="" width={15} height={15}/>
                    </button>
                </div>
            </div>
        </motion.div>
    );
}


export default OnlineAppointmentMobile;