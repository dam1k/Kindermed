import React from 'react';
import {motion} from "framer-motion";
import Image from "next/image";
import {phoneNumber, phoneNumbers} from "@/utils/data";
import Link from "next/link"
function CallDropdownContent({setOpen}:{setOpen:React.Dispatch<React.SetStateAction<boolean>>}) {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            onMouseLeave={() => setOpen(false)}
            className="absolute w-[300px] flex flex-col gap-[7px] bg-[#fff] left-[-17px] top-[57px] py-[14px] px-[17px] rounded-[22px]">
            {phoneNumbers.map((number:phoneNumber, i) => {
                return <a href={`${number?.viber ? `viber://chat?number=%2B${number.viber}` : `tel:${number.phone}`}`} key={i} className="leading-[145%]">
                    {number?.viber && <span className="uppercase pr-[10px]">Viber</span>}
                    <span>{number.phone}</span>
                </a>
            })}
        </motion.div>
    );
}

export default CallDropdownContent;