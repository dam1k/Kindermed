import React from 'react';
import {motion} from "framer-motion";
import Image from "next/image";
import {phoneNumber, phoneNumbers} from "@/utils/data";
import Link from "next/link"
import {cn} from "@/lib/utils"
function CallDropdownContent({className}:{className?:string}) {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className={cn("grey-boxshadow absolute text-sm min-[1401px]:text-base z-[100] w-[300px] flex flex-col gap-[7px] bg-[#fff] left-[-17px] top-[57px] py-[10px] px-[12px] min-[1401px]:py-[14px] min-[1401px]:px-[17px] rounded-[22px]", className ? className : "")}>
            {phoneNumbers.map((number:phoneNumber, i) => {
                return <a href={`${number?.viber ? `viber://chat?number=%2B${number.viber}` : `tel:${number.phone}`}`} key={i} className="leading-[145%]">
                    {number?.viber && <span className="uppercase pr-[10px]">Viber</span>}
                    <span>{number.phone}</span>
                </a>
            })}
            <a href="mailto:info.kindermed@gmail.com" className="text-[#3E404D]/[0.5] leading-[145%]">
                 <span className="uppercase pr-[10px]">Email</span>
                <span>info.kindermed@gmail.com</span>
            </a>
        </motion.div>
    );
}

export default CallDropdownContent;