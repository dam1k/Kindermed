import React, {useRef, useState, useEffect} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {Button} from "@/components/ui/Button";
import {countries, service} from "@/utils/data";
import Image from "next/image";
import {validatePhone} from "@/utils/helpers/validateData";

interface DepartmentInfoMobile {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    selectedDepartment?: string;
    selectedActiveDepartment?: service;
}


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
function DepartmentInfoMobile({setOpen, selectedDepartment, selectedActiveDepartment}:DepartmentInfoMobile) {
    const infoBoxRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const [readMore, setReadMore] = useState(false);

    function handleClose(e?:React.MouseEvent) {
        if(e) {
            e.preventDefault();
        }
        setOpen(false);
    }

    function handleOverlayClick(e:React.MouseEvent<HTMLDivElement>) {
            if(infoBoxRef.current) {
                //@ts-ignore
                if(e.target !== infoBoxRef.current && !infoBoxRef.current.contains(e.target)) {
                    handleClose()
                }
            }
    }

    function handleReadMore(e:React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        setReadMore((prev) => !prev);
    }

    return (
        <motion.div onClick={handleOverlayClick}
                    ref={overlayRef}
                    className={`h-screen bg-blur items-start fixed top-0 left-0 w-screen z-[11]`}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
        <div ref={infoBoxRef} className="overflow-y-scroll z-[10000] w-full h-[75vh] bottom-0 left-0 fixed rounded-tl-[25px] rounded-tr-[25px] flex flex-col gap-[25px] p-[15px] min-[600px]:p-[25px] bg-white">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-[8px] px-[5px] pt-[7px]">
                    <h3 className="text-[18px] leading-[18.9px] uppercase">{`Despre ${selectedDepartment}`}</h3>
                </div>
                <button className="!bg-[#3E404D]/[0.08] rounded-[10px] mt-[5px] w-[25px] h-[25px] flex items-center justify-center"
                        onClick={handleClose}>
                    <Image src="/icons/Times.svg" alt="" width={15} height={15}/>
                </button>
            </div>
            <Image width={1000} height={500} src={selectedActiveDepartment?.img || ""}  alt="" className="w-full h-[200px] object-cover min-[450px]:h-[250px] min-[600px]:h-[350px] rounded-[20px]" />
            <div className="">
                {/*<p className="mb-[12px] text-[20px] leading-[28px]">*/}
                {/*    {`Despre ${selectedDepartment}`}*/}
                {/*</p>*/}
                <p className="text-[#3E404D]/[0.8] leading-[24.8px]">
                    {selectedActiveDepartment?.shortDesc}
                </p>

                {selectedActiveDepartment?.longDesc && <AnimatePresence mode="wait" initial={false}>
                    {readMore && <motion.p
                        key="moreInfo"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={variants}
                        className="overflow-hidden text-[#3E404D]/[0.8] leading-[24.8px]">
                        {selectedActiveDepartment?.longDesc}
                    </motion.p>}
                </AnimatePresence>}
            </div>
            {selectedActiveDepartment?.longDesc && <Button
                onClick={handleReadMore}
                className="mb-[50px] border-[1px] border-[#3E404D]/[0.24] rounded-[19px] leading-[16.8px] h-[50px] bg-white py-[16.5px] text-black">
                {readMore ? "Ascunde" : "Citește mai mult"}
            </Button>}
        </div>
        </motion.div>
    );
}

export default DepartmentInfoMobile;