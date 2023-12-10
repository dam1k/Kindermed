import React, {useState} from 'react';
import {lastService, service} from "@/utils/data";
import {AnimatePresence, motion} from "framer-motion";

interface  IGreyServiceItemProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    service:lastService;
    setSelectedService:  React.Dispatch<React.SetStateAction<service | lastService | null>>;
}
function GreyServiceItem({service, setOpen, setSelectedService}: IGreyServiceItemProps) {
    const [hovered, setHovered] = useState<boolean>(false);

    function handleServiceClick() {
        setOpen(true);
        setSelectedService(service);
    }

    return (
        <li onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={handleServiceClick}
            className={`cursor-pointer grid min-[1401px]:grid-cols-2 relative max-[1400px]:grid-cols-1 max-[1400px]:gap-y-[15px] min-[1401px]:gap-[25px] border-black max-[1400px]:pt-[15px] min-[1401px]:py-[20px] max-[1400px]:pb-[25px]`}>
            {service.id === 13 && <div
                className="absolute max-[1400px]:left-0 max-[1400px]:w-full left-[250px] bottom-0 h-[1px] bg-black w-[calc(100%-250px)]"/>}
            <AnimatePresence>
                {hovered && <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    className="bg-[#C9CACE]/[0.5] absolute top-0 left-0 min-[1400px]:left-[250px] w-full min-[1400px]:w-[calc(100%-250px)] h-full"/>}
            </AnimatePresence>
            <div
                className="relative z-10 flex max-[1400px]:items-center max-[1400px]:ml-0 ml-[250px] max-[1400px]:col-span-2">
                                <span
                                    className={`text-[16px] min-[1025px]:text-[24px] max-[1400px]:w-[100px] w-[250px] leading-[105%] transition-all ${hovered ? "text-black" : "text-black/[0.5]"} ${hovered ? "translate-x-[20px]" : ""}`}>{`${service.id <= 9 ? "0" : ""}${service.id}`}</span>
                <h2 className={`${hovered ? "text-black" : "text-black/[0.85]"} min-[1401px]:text-[24px] text-[16px] leading-[125%] break-words uppercase`}>{service.name}</h2>
            </div>
            <div
                className="relative z-10 max-[1400px]:pl-[100px] grid grid-cols-2 max-[1700px]:grid-cols-1 min-[1701px]:w-[825px] gap-[25px] ">
                {service.desc.map((p: string, i: number) => {
                    return <p key={i}
                              className={`min-[1401px]:w-[400px] max-[1400px]:w-full ${hovered ? "text-black" : "text-black/[0.85]"}`}>
                        {p}
                    </p>
                })}
            </div>
        </li>
    );
}

export default GreyServiceItem;