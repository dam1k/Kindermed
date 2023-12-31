import React from 'react';
import {busDirections, busDirection} from "@/utils/data";
import {motion} from "framer-motion"



function BusRoutesDropdownContent() {
    return (
        <motion.div className="absolute top-[50px] left-0 bg-[#2B2B2B] flex flex-col gap-[7px] !mt-[14px] !border-0 px-[17px] py-[13px] rounded-[20px]"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
            {busDirections.map(
                (busDirection: busDirection, i: number) => {
                    return (
                        <div
                            className="p-0 justify-between flex"
                            key={i}
                        >
                            <p className="shrink-0 text-[14px] min-[500px]:text-[16px] text-[#fff]/[0.5] w-[200px] min-[500px]:w-[225px] leading-[23.2px] uppercase !font-[400]">
                                {busDirection.location}:
                            </p>
                            <p className="shrink-0 text-[#fff] !font-[400] text-[14px] min-[500px]:text-[16px] w-[100px] leading-[23.2px] min-[500px]:w-[110px] text-right">
                                {busDirection.routes.join(", ")}
                            </p>
                        </div>
                    );
                },
            )}
        </motion.div>
    );
}

export default BusRoutesDropdownContent;