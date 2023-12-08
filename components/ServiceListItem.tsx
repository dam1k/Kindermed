import React, {useState} from 'react';
import {service} from "@/utils/data";
import {motion, AnimatePresence} from "framer-motion"

interface  IServiceListItemProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    service:service;
    grey?: boolean;
    width: number;
    showAppointment: boolean;
    setSelectedService:  React.Dispatch<React.SetStateAction<service | null>>;
}
function ServiceListItem({setOpen, setSelectedService, service, grey, width, showAppointment}:IServiceListItemProps) {
    const [hovered, setHovered] = useState<boolean>(false);

    function handleServiceClick() {
        setOpen(true);
        setSelectedService(service);
    }
    return (
        <>
            <li className={`${grey ? "bg-[#E7E9EC] !text-black" : ""} transition-all duration-200 cursor-pointer max-[1024px]:grid-cols-1 lg:grid max-[1400px]:py-[15px] grid-cols-2 relative gap-[25px] border-[#fff] py-[20px] pt-[20px] 
            ${service.id === 1 ? "border-t-[1px]" : ""}`}
                onClick={handleServiceClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
                <div className="absolute left-[250px] bottom-0 h-[1px] bg-white max-[1400px]:left-0 max-[1400px]:w-full w-[calc(100%-250px)]"/>
                <AnimatePresence>
                 {hovered && <motion.div
                     initial={{opacity: 0}}
                     animate={{opacity: 1}}
                     exit={{opacity: 0}}
                     className="bg-[#fff] absolute top-0 left-0 min-[1400px]:left-[250px] w-full min-[1400px]:w-[calc(100%-250px)] h-full"/>}
                </AnimatePresence>
                <div className="flex relative z-10 ml-0 min-[1401px]:ml-[250px] max-[1400px]:items-center serviceTitle">
                                    <span
                                        className={`w-[250px] transition-all duration-200 max-[1400px]:text-[16px] max-[1700px]:w-[100px] min-[1025px]:text-[24px] leading-[105%] ${hovered ? "translate-x-[20px]" : ""} ${(grey || hovered) ? " text-black" : "text-[#fff]/[0.5]"}`}>
                                        {`${service.id <= 9 ? "0" : ""}${service.id}`}
                                    </span>
                    <h2 className={`${grey || hovered ? " text-black" : "text-[#fff]"} max-[1400px]:text-[16px] min-[1401px]:text-[24px] text-[#fff] leading-[125%] break-words uppercase`}>
                        {service.name}
                    </h2>
                </div>
                <p className={`w-[400px] serviceDesc ${grey ? "text-black/[0.85]" : hovered ? "text-black/[0.75]" : "text-[#fff]/[0.85]"} relative z-10`}>
                    {service.shortDesc}
                </p>
            </li>
        </>
    );
}

export default ServiceListItem;