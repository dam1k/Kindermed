import React, {useEffect, useState, useRef} from 'react';
import Image from "next/image"
import {motion} from "framer-motion"
import {generateAppointmentDates} from "@/utils/helpers/generateAppointmentDates";
import {country_prefixes} from "@/utils/data";

function OnlineAppointmentDesktop({setOpen}: {setOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
    const [name, setName] = useState<string>("");
    const [countryPrefix, setCountryPrefix] = useState<string>("+373");
    const [phone, setPhone] = useState<string>("");
    const [department, setDepartment] = useState<string>("");
    const [date, setDate] = useState<string>("");

    const prefixSelectRef = useRef<HTMLSelectElement>(null);

    return (
        <motion.div className="bg-blur items-start px-[285px] flexible-grid gap-[15px] pt-[159px] fixed top-0 left-0 w-screen h-screen z-[10000]">
            <div className="p-[35px] bg-[#fff] rounded-[40px]">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[8px]">
                        <Image src="/icons/ArrowBlue.svg" width={21} height={21} alt=""/>
                        <h3 className="text-[20px] uppercase">Programare online</h3>
                    </div>
                    <button className="!bg-[#3E404D]/[0.08] rounded-[10px] w-[27px] h-[27px] flex items-center justify-center"
                            onClick={() => setOpen(false)}>
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
                                   className="w-full border-[1px] border-[#3E404D]/[0.24] focus:border-[#00AAF1] rounded-[17px] outline-0 pt-4 pb-[15px] px-[17px] leading-[16.8px] h-[48px] placeholder:text-[#3E404D]/[0.5]"
                                   onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="relative flex-1 flex items-center justify-center">
                            <span className="text-[12px] leading-[12.6px] top-[-6px] left-[12px] pointer-events-none absolute bg-[#fff] text-[#3E404D]/[0.5] px-[5px] flex gap-[4px] items-center">
                                <Image src="/icons/InfoCircleSm.svg" alt="" width={11} height={11}/>
                                Nume prenume
                            </span>
                            <div className="relative flex gap-[6px] items-center justify-center w-full border-[1px] border-[#00AAF1] h-[48px] rounded-[17px] pt-4 pb-[15px] px-[17px] leading-[16.8px]">
                                <input className="absolute top-0 left-0 rounded-[17px] w-full h-full" value="" />
                                {/*<div className="flex ">*/}
                                    <div className="prefix shrink-0">
                                        <select
                                            ref={prefixSelectRef}
                                            className="leading-[16.8px] pt-4 bg-transparent pb-[15px] prefix_select outline-0"
                                            value={countryPrefix}
                                            onChange={(e) => setCountryPrefix(e.target.value)}>
                                                {Object.values(country_prefixes).map((prefix:string, i:number) => {
                                                    return <option className="cursor-pointer leading-[105%]" key={prefix + Object.keys(country_prefixes)[i]} value={prefix}>{prefix}</option>
                                                })}
                                        </select>
                                    </div>
                                <input value={phone} placeholder="00 000 000" type="tel" className="phoneNumber placeholder:text-[#3E404D]/[0.5] outline-0 bg-transparent" onChange={(e) => setPhone(e.target.value)}/>
                            </div>
                            {/*<input type="text"*/}
                            {/*       value={name}*/}
                            {/*       placeholder="ex. Anton Mihai"*/}
                            {/*       className="w-full border-[1px] border-[#00AAF1] rounded-[17px] outline-0 pt-4 pb-[15px] px-[17px] leading-[16.8px] h-[48px] placeholder:text-[#3E404D]/[0.5]"*/}
                            {/*       onChange={(e) => setName(e.target.value)}/>*/}
                        </div>
                    </div>

                    <div className="relative flex-1">
                            <span className="text-[12px] leading-[12.6px] top-[-6px] left-[12px] pointer-events-none absolute bg-[#fff] text-[#3E404D]/[0.5] px-[5px] flex gap-[4px] items-center">
                                <Image src="/icons/InfoCircleSm.svg" alt="" width={11} height={11}/>
                                Nume prenume
                            </span>
                        <input type="text"
                               value={name}
                               placeholder="ex. Anton Mihai"
                               className="w-full border-[1px] border-[#00AAF1] rounded-[17px] outline-0 pt-4 pb-[15px] px-[17px] leading-[16.8px] h-[48px] placeholder:text-[#3E404D]/[0.5]"
                               onChange={(e) => setName(e.target.value)}/>
                    </div>-*****

                </form>
            </div>
            <div className="rounded-[40px]">
                ferger
            </div>
        </motion.div>
    );
}

export default OnlineAppointmentDesktop;