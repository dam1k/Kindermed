'use client'

import React, {useEffect, useRef, useState} from "react";
import {services, service, lastServices} from "@/utils/data"
import {Button} from "@/components/ui/Button"
import ServiceListItem from "@/components/ServiceListItem";
import {AnimatePresence, motion} from "framer-motion";

const initialServices = services.slice(0, 5);
const showAllServices = services.slice(5);

const variants = {
    open: {
        opacity: 1,
        height: "auto"
    },
    collapsed: {
        opacity: 0,
        height: 0
    },
};
const Services = () => {
    const [showAll, setShowAll] = useState<boolean>(false);

    const servicesRef = useRef<HTMLDivElement>(null);

    function handleClick(action: "open" | "close") {
       if(action === "open") {
           setShowAll(true);
           setTimeout(() =>  {
               if (servicesRef.current) {
                   servicesRef.current.scrollIntoView({behavior: "smooth", block: "end" })
               }
           }, 300)
       } else {
           if (servicesRef.current) {
               servicesRef.current.scrollIntoView({behavior: "smooth"})
           }
           setTimeout(() => setShowAll(false), 500)
       }
    }

    return (
        <div ref={servicesRef} className="mt-[500px] !pb-[85px] mb-[125px] relative">
            <img
                src="/Services.jpg"
                className="object-cover absolute top-0 left-0 z-[0] w-full h-full"
                alt=""
            />
            <div className="bg-blue/[0.85] absolute top-0 z-[1] left-0 w-full h-full"/>
            <div className="container grid grid-cols-2 relative z-[2] !pt-[125px] gap-y-[40px] gap-x-[25px]">
                <div>
                    <div className="flex gap-[86px]">
                        <p className="uppercase text-[#fff]/[0.65] mt-[10px] leading-[105%]">
                            Serviciile noastre
                        </p>
                        <h2 className="uppercase text-[35px] text-[#fff] leading-[140%] tracking-[-0.35px]">
                            oferim Soluții complete și
                        </h2>
                    </div>
                    <h2 className="uppercase text-[35px] text-[#fff] leading-[140%] tracking-[-0.35px]">
                        personalizate pentru sănătatea dvs.
                    </h2>
                </div>
                <p className="leading-[23px] text-[#fff] w-[500px]">
                    Clinica Kindermed este dotata cu echipament modern,
                    care permite aplicarea tratamentelor în conformitate cu practicile internaționale.
                </p>
                <div className="flex pl-[250px] py-[20px]">
                    <p className="w-[250px] text-[#fff]/[0.65] leading-[145%]">
                        Numărul
                    </p>
                    <p className="text-[#fff]/[0.65] leading-[145%]">
                        Denumirea serviciului
                    </p>
                </div>
                <p className="text-[#fff]/[0.65] py-[20px] leading-[145%]">
                    Detalii despre serviciu
                </p>
            </div>

            <ul className="relative z-[2] container">
                {initialServices.map((service: service, i: number) => {
                    return <ServiceListItem key={service.id} service={service} i={i}/>
                })}
                {!showAll && <li className="py-[20px]">
                    <div className="flex pl-[250px]">
                        {!showAll && <span className="w-[250px] text-[24px] leading-[105%] text-[#fff]/[0.5]">
                        {`+${showAllServices.length}`}
                    </span>}
                        <Button className="uppercase"
                                variant="transparentWhite"
                                onClick={() => handleClick("open")}>
                             Ascunde serviciile
                        </Button>
                    </div>
                </li>}
            </ul>

            <AnimatePresence>
                {showAll && <motion.ul
                    variants={variants}
                    key="allServices"
                    initial="collapsed"
                    animate="open"
                    transition={{duration: 0.2}}
                    exit="collapsed"
                    className="relative z-[2] container">
                    {showAllServices.map((service: service, i: number) => {
                        return <ServiceListItem key={service.id} service={service} i={i}/>
                    })}
                    <li className="py-[20px]">
                        <div className="flex pl-[250px]">
                            {!showAll && <span className="w-[250px] text-[24px] leading-[105%] text-[#fff]/[0.5]">
                        {`+${showAllServices.length}`}
                            </span>}
                            <Button className="uppercase"
                                    variant="transparentWhite"
                                    onClick={() => handleClick("close")}>
                                Ascunde serviciile
                            </Button>
                        </div>
                    </li>
                </motion.ul>}
            </AnimatePresence>
        </div>
    );
};

export default Services;
