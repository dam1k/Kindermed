import React from 'react';
import Image from "next/image";
import {schedule} from "@/utils/data";
import {motion} from "framer-motion";

function ScheduleDropdownContent({day}:{day:number}) {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="absolute z-[100] w-[300px] h-[149px] bg-[#fff] left-[-17px] top-[57px] py-[14px] px-[17px] rounded-[22px]">
                <div className="flex justify-between items-center mb-[12px]">
                    <div className="flex items-center gap-[3px]">
                        <Image src="/icons/ArrowBlue.svg" width={20} height={20} alt=""/>
                        <h3 className="text-[#00AAF1] text-[18px] leading-[145%]">
                            Astăzi
                        </h3>
                    </div>
                    <p className="text-[#00AAF1] text-[18px] leading-[145%]">
                        {day === 0 ? schedule.sun : day === 6 ? schedule.sat : schedule.monToFri}
                    </p>
                </div>

                <div className="flex justify-between items-center mb-[7px]">
                    <h3 className="uppercase leading-[145%]">
                        Luni-vineri
                    </h3>
                    <p className="leading-[145%]">
                        {schedule.monToFri}
                    </p>
                </div>

                <div className="flex justify-between items-center mb-[7px]">
                    <h3 className="uppercase leading-[145%]">
                        Sâmbătă
                    </h3>
                    <p className="leading-[145%]">
                        {schedule.sat}
                    </p>
                </div>

                <div className="flex justify-between items-center">
                    <h3 className="text-[#3E404D]/[0.5] uppercase leading-[145%]">
                        Duminică
                    </h3>
                    <p className="text-[#3E404D]/[0.5] leading-[145%]">
                        {schedule.sun}
                    </p>
                </div>
        </motion.div>);
}

export default ScheduleDropdownContent;