import React, {useEffect, useState, useRef} from 'react';
import Image from "next/image"
import {motion} from "framer-motion"
import {generateAppointmentDates} from "@/utils/helpers/generateAppointmentDates";
import {country_prefixes} from "@/utils/data";
import {services, service} from "@/utils/data";
import {Button} from "@/components/ui/Button";

function OnlineAppointmentDesktop({setOpen}: {setOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
    const [name, setName] = useState<string>("");
    const [countryPrefix, setCountryPrefix] = useState<string>("+373");
    const [phone, setPhone] = useState<string>("");
    const [department, setDepartment] = useState<string>(services[0].name);
    const [date, setDate] = useState<string>("");
    const [inputFocused, setInputFocused] = useState<boolean>(false);
    const [activeDepartment, setActiveDepartment] = useState<service>(services[0]);

    const formRef = useRef<HTMLDivElement>(null);
    const infoBoxRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLDivElement>(null);

    function handleOverlayClick(e:React.MouseEvent<HTMLDivElement>) {
        if(inputRef.current) {
            //@ts-ignore
            if(e.target !== inputRef.current && !inputRef.current.contains(e.target)) {
                setInputFocused(false);
            }

           if(formRef.current && infoBoxRef.current) {
               //@ts-ignore
               if(e.target !== formRef.current && !formRef.current.contains(e.target) &&
                   //@ts-ignore
                   e.target !== infoBoxRef.current && !infoBoxRef.current.contains(e.target)) {
                   setOpen(false);
                   document.body.style.overflowY = "scroll"
                   document.body.style.overflowX = "hidden"
               }
           }
        }
    }

    useEffect(() => {
        const foundDepartment = services.find((service: service) => service.name === department);
       if(foundDepartment) {
           setActiveDepartment(foundDepartment);
       }
    }, [department])

    function handleClose(e:React.MouseEvent) {
        e.preventDefault();
        setOpen(false)
        document.body.style.overflowY = "scroll"
        document.body.style.overflowX = "hidden"
    }

    return (
        <motion.div onClick={handleOverlayClick}
                    className="overflow-y-scroll max-[815px]:hidden overflow-x-hidden h-screen pb-[159px] bg-blur items-start px-[150px] min-[1600px]:px-[285px] flexible-grid gap-[15px] pt-[159px] fixed top-0 left-0 w-screen z-[10000]"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
            <div className="p-[35px] bg-[#fff] max-[1350px]:col-span-2 rounded-[40px]" ref={formRef}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[8px]">
                        <Image src="/icons/ArrowBlue.svg" width={21} height={21} alt=""/>
                        <h3 className="text-[20px] uppercase">Programare online</h3>
                    </div>
                    <button className="!bg-[#3E404D]/[0.08] rounded-[10px] w-[27px] h-[27px] flex items-center justify-center"
                            onClick={handleClose}>
                        <Image src="/icons/TimesBlack.svg" alt="" width={17} height={17}/>
                    </button>
                </div>
                <form className="pt-[35px] flex flex-col gap-[17px]">
                    <div className="flex gap-[12px]">
                        <div className="relative flex-1">
                            <span className="text-[12px] leading-[12.6px] top-[-6px] left-[12px] pointer-events-none absolute bg-[#fff] text-[#3E404D]/[0.5] px-[5px] flex gap-[4px] items-center">
                                <Image src="/icons/InfoCircleSm.svg" alt="" width={11} height={11}/>
                                Nume prenume
                            </span>
                            <input type="text"
                                   value={name}
                                   placeholder="ex. Anton Mihai"
                                   className="w-full transition-all border-[1px] border-[#3E404D]/[0.24] focus:border-[#00AAF1] rounded-[17px] outline-0 pt-4 pb-[15px] px-[17px] leading-[16.8px] h-[48px] placeholder:text-[#3E404D]/[0.5]"
                                   onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="relative flex-1 flex items-center justify-center">
                            <span className="text-[12px] leading-[12.6px] top-[-6px] left-[12px] pointer-events-none absolute bg-[#fff] z-[100] text-[#3E404D]/[0.5] px-[5px] flex gap-[4px] items-center">
                                <Image src="/icons/InfoCircleSm.svg" alt="" width={11} height={11}/>
                                Telefon mobil
                            </span>
                            <div ref={inputRef}
                                 onClick={() => setInputFocused(true)}
                                 className={`${inputFocused ? "border-[#00AAF1]" : "border-[#3E404D]/[0.24]"} transition-all border-[1px] relative flex gap-[6px] items-center justify-center w-full h-[48px] rounded-[17px] pt-4 pb-[15px] px-[17px] leading-[16.8px]`}>
                                    <div className="prefix shrink-0">
                                        <select
                                            className="leading-[16.8px] pt-4 bg-transparent pb-[15px] prefix_select outline-0"
                                            value={countryPrefix}
                                            onChange={(e) => setCountryPrefix(e.target.value)}>
                                                {Object.values(country_prefixes).map((prefix:string, i:number) => {
                                                    return <option className=" cursor-pointer leading-[105%]" key={prefix + Object.keys(country_prefixes)[i]} value={prefix}>{prefix}</option>
                                                })}
                                        </select>
                                    </div>
                                <input value={phone} placeholder="00 000 000" type="tel" className="phoneNumber placeholder:text-[#3E404D]/[0.5] outline-0 bg-transparent" onChange={(e) => setPhone(e.target.value)}/>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex-1">
                            <span className="text-[12px] leading-[12.6px] top-[-6px] left-[12px] pointer-events-none absolute bg-[#fff] text-[#3E404D]/[0.5] px-[5px] flex gap-[4px] items-center">
                                <Image src="/icons/InfoCircleSm.svg" alt="" width={11} height={11}/>
                                Departament
                            </span>
                        <div className="department shrink-0">
                            <select
                                className="w-full transition-all focus:border-[#00AAF1] rounded-[17px] border-[#3E404D]/[0.24] px-[17px] h-[48px] border-[1px] leading-[16.8px] pt-4 bg-transparent pb-[15px] departmentSelect outline-0"
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}>
                                {services.map((service:service, i:number) => {
                                    return <option className="cursor-pointer leading-[105%]" key={i} value={service.name}>{service.name}</option>
                                })}
                            </select>
                        </div>
                    </div>

                    <div className="relative flex-1">
                            <span className="text-[12px] leading-[12.6px] top-[-6px] left-[12px] pointer-events-none absolute bg-[#fff] text-[#3E404D]/[0.5] px-[5px] flex gap-[4px] items-center">
                                <Image src="/icons/InfoCircleSm.svg" alt="" width={11} height={11}/>
                                Data consultației
                            </span>
                        <div className="date shrink-0">
                            <select
                                className="w-full transition-all focus:border-[#00AAF1] rounded-[17px] border-[#3E404D]/[0.24] px-[17px] h-[48px] border-[1px] leading-[16.8px] pt-4 bg-transparent pb-[15px] departmentSelect outline-0"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}>
                                {generateAppointmentDates(30)?.map((date:string, i:number) => {
                                    return <option className="cursor-pointer leading-[105%]" key={i} value={date}>{date}</option>
                                })}
                            </select>
                        </div>
                    </div>

                    <Button className="h-[55px] flex gap-[6px] leading-[16.8px] rounded-[19px] items-center bg-[#00AAF1] pt-[16px] pb-[15px] text-white"
                    onClick={handleClose}>
                        Programează-te online
                        <Image src="/icons/Send.svg" width={15} height={15} alt=""/>
                    </Button>
                </form>
            </div>
            <div ref={infoBoxRef} className="max-[1350px]:col-span-2 rounded-[50px] flex flex-col gap-[25px] p-[35px] bg-[#fff]">
                {/*<Image src=""/>*/}
                    <div className="bg-[#E7E9EC] rounded-[30px] h-[400px] w-full" />
                <div className="">
                    <p className="mb-[12px] text-[20px] leading-[28px]">
                        {`Despre ${department}`}
                    </p>
                    <p className="text-[#3E404D]/[0.8] leading-[24.8px]">
                        {activeDepartment?.shortDesc}
                    </p>
                </div>
                <Button className="border-[1px] border-[#3E404D]/[0.24] rounded-[19px] leading-[16.8px] h-[50px] bg-white py-[16.5px] text-black">
                    Citește mai mult
                </Button>

            </div>
        </motion.div>
    );
}

export default OnlineAppointmentDesktop;