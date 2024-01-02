 'use client'

import React, {useEffect, useRef, useState} from "react";
import {services, service, lastService, lastServices} from "@/utils/data"
import {Button} from "@/components/ui/Button"
import ServiceListItem from "@/components/ServiceListItem";
import {AnimatePresence, motion} from "framer-motion";
import OnlineAppointmentDesktop from "@/components/OnlineAppointmentDesktop";
import OnlineAppointmentMobile from "@/components/OnlineAppointmentMobile";
import GreyServiceItem from "@/components/GreyServiceItem";
const initialServices = services.slice(0, 5);
const showAllServices = services.slice(5);
import Image from "next/image"

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
    const [showAppointment, setShowAppointment] = useState<boolean>(false);
    const [width, setWidth] = useState<number>(0);
    const [showAll, setShowAll] = useState<boolean>(false);
    const [selectedService, setSelectedService] = useState<service | lastService | null>(null);

    const servicesRef = useRef<HTMLDivElement>(null);

    function handleClick(action: "open" | "close") {
        if (action === "open") {
            setShowAll(true);
            // setTimeout(() => {
            //     if (servicesRef.current) {
            //         servicesRef.current.scrollIntoView({behavior: "smooth", block: "end"})
            //     }
            // }, 300)
        } else {
            if (servicesRef.current) {
                servicesRef.current.scrollIntoView({behavior: "smooth"})
            }
            setTimeout(() => setShowAll(false), 500)
            // setShowAll(false)
        }
    }

    useEffect(() => {
        setWidth(window.innerWidth);

        window.addEventListener("resize", () => setWidth(window.innerWidth));
        return () =>
            window.removeEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    return (
        <div id="services">
             <div ref={servicesRef} className="pb-[35px] min-[1401px]:pb-[85px] relative">
                <Image
                    fill
                    src="/Services.jpg"
                    className="object-cover absolute top-0 left-0 z-[0]"
                    alt=""
                />
                <div className="bg-blue/[0.85] absolute top-0 z-[1] left-0 w-full h-full"/>
                <div
                    className="container max-[1400px]:!px-[10px] grid lg:grid-cols-2 grid-cols-1 relative z-[2] max-[1400px]:!pt-[100px] max-[1400px]:gap-y-[35px] !pt-[125px] gap-y-[40px] gap-x-[25px]">
                    <div className="relative">
                            <p className="absolute left-0 top-0 text-[12px] lg:text-[16px] uppercase text-[#fff]/[0.65] ml-[1px] min-[1025px]:ml-[3px] mt-[5px] min-[1025px]:mt-[10px] leading-[105%]">
                                <span className="max-[1400px]:hidden">Serviciile noastre</span>
                                <span className="min-[1401px]:hidden">Serviciile</span>
                            </p>
                            <h2 className="inline ml-[100px] min-[1025px]:ml-[150px] min-[1400px]:ml-[250px] uppercase min-[1025px]:text-[35px] text-[20px] text-[#fff] leading-[140%] tracking-[-0.35px]">
                                oferim Soluții complete și personalizate pentru sănătatea dvs.
                            </h2>
                    </div>
                    <p className="leading-[23px] text-[#fff] max-[1400px]:text-[14px] max-[1400px]:leading-[20.3px] max-[1400px]:w-full max-[1400px]:pb-[5px] w-[500px]">
                        Clinica Kindermed este dotata cu echipament modern,
                        care permite aplicarea tratamentelor în conformitate cu practicile internaționale.
                    </p>
                    <div className="flex min-[1401px]:ml-[250px] max-[1400px]:!py-[15px] py-[20px]">
                        <p className="max-[1700px]:w-[100px] w-[250px] text-[#fff]/[0.65] leading-[145%]">
                            Numărul
                        </p>
                        <p className="text-[#fff]/[0.65] leading-[145%]">
                            Denumirea serviciului
                        </p>
                    </div>
                    <p className="max-[1400px]:hidden text-[#fff]/[0.65] py-[20px] max-[1400px]:py-[15px] leading-[145%]">
                        Detalii despre serviciu
                    </p>
                </div>

                <ul className="relative z-[2] container max-[1400px]:px-[10px]">
                    {initialServices.map((service: service, i: number) => {
                        return <ServiceListItem  setSelectedService={setSelectedService} setOpen={setShowAppointment} key={service.id} service={service} />
                    })}
                    {!showAll && <li className="max-[1400px]:py-[15px] py-[20px]">
                        <div className="flex max-[1400px]:ml-0 ml-[250px]">
                            {!showAll && <span
                                className="text-[16px] min-[1025px]:text-[24px] max-[1400px]:w-[100px] w-[250px] leading-[105%] text-[#fff]/[0.5]">
                            {`+${showAllServices.length}`}
                        </span>}
                            <Button className="max-[1400px]:hidden uppercase"
                                    variant="transparentWhite"
                                    onClick={() => handleClick("open")}>
                                vezi toate serviciile
                            </Button>
                            <button
                                className="min-[1401px]:hidden uppercase border-0 text-[#fff] outline-0 text-[16px] leading-[20px]"
                                onClick={() => handleClick("open")}>
                                vezi toate serviciile
                            </button>
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
                        className="relative z-[2] max-[1400px]:!px-[10px] container">
                        {showAllServices.map((service: service, i: number) => {
                            return <ServiceListItem  setSelectedService={setSelectedService}  setOpen={setShowAppointment} key={service.id} service={service}/>
                        })}
                        <li className="py-[20px]">
                            <div className="flex max-[1400px]:ml-0 ml-[250px]">
                                {!showAll && <span
                                    className="text-[16px] min-[1401px]:text-[24px] max-[1400px]:!w-[100px] text-[]w-[250px] leading-[105%] text-[#fff]/[0.5]">
                                    {`+${showAllServices.length}`}
                                </span>}
                                <Button className="max-[1400px]:hidden uppercase"
                                        variant="transparentWhite"
                                        onClick={() => handleClick("close")}>
                                    Ascunde serviciile
                                </Button>
                                <button
                                    className="min-[1401px]:hidden uppercase border-0 text-[#fff] outline-0 text-[16px] leading-[20px]"
                                    onClick={() => handleClick("close")}>
                                    Ascunde serviciile
                                </button>
                            </div>
                        </li>
                    </motion.ul>}
                </AnimatePresence>
            </div>
            <div className="!bg-[#E7E9EC]/[0.5]">
                <ul className="relative container z-[2] max-[1400px]:px-[10px] max-[1400px]:!pt-[35px] !pt-[95px] max-[1400px]:!pb-[65px] !pb-[125px]">
                    {lastServices.map((service, i: number) => {
                        return <GreyServiceItem setSelectedService={setSelectedService} setOpen={setShowAppointment} key={i} service={service}/>
                    })}
                </ul>
            </div>
            <AnimatePresence>
                {showAppointment && width >= 815 && selectedService && (
                    <OnlineAppointmentDesktop selectedActiveDepartment={selectedService} selectedDepartment={selectedService.name} setOpen={setShowAppointment} />
                )}

                {showAppointment && width < 815 && selectedService && (

                    <OnlineAppointmentMobile selectedActiveDepartment={selectedService} selectedDepartment={selectedService.name} setOpen={setShowAppointment} />
                )}
            </AnimatePresence>
        </div>
    );
};

export default Services;
