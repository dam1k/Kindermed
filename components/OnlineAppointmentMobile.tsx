import React, {useRef, useState} from 'react';
import {motion} from "framer-motion"
import Image from "next/image";
import {countries, services, service} from "@/utils/data";
import {generateAppointmentDates} from "@/utils/helpers/generateAppointmentDates";
import {Button} from "@/components/ui/Button";
import {validatePhone, validateEmail} from "@/utils/helpers/validateData";

interface IOnlineAppointmentMobileProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    selectedDepartment?: string;
    selectedActiveDepartment?: service;
}

interface country {
    locale: string;
    prefix:string
}


function OnlineAppointmentMobile({setOpen, selectedDepartment, selectedActiveDepartment}:IOnlineAppointmentMobileProps) {
    const [name, setName] = useState<string>("");
    const [nameError, setNameError] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [emailError, setEmailError] = useState<boolean>(false);
    const [countryPrefix, setCountryPrefix] = useState<string>("+373");
    const [phone, setPhone] = useState<string>("");
    const [phoneError, setPhoneError] = useState<boolean>(false);
    const [department, setDepartment] = useState<string>(selectedDepartment || services[0].name);
    const [date, setDate] = useState<string>("");
    const [inputFocused, setInputFocused] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const inputRef = useRef<HTMLDivElement>(null);

    function handleClose() {
        setOpen(false)
        document.body.style.overflow = "scroll"
    }


    function handleOverlayClick(e:React.MouseEvent<HTMLDivElement>) {
        if(inputRef.current) {
            //@ts-ignore
            if(e.target !== inputRef.current && !inputRef.current.contains(e.target)) {
                setInputFocused(false);
                const foundCountry = countries.find((country: country) => country.prefix === countryPrefix);
                if(foundCountry) {
                    const validPhone = validatePhone(countryPrefix + phone, foundCountry.locale);
                    if(!validPhone && phone.length) {
                        setPhoneError(true);
                    } else {
                        setPhoneError(false);
                    }
                }
            }
        }
        if(menuRef.current) {
            //@ts-ignore
            if(e.target !== menuRef.current && !menuRef.current.contains(e.target)) {
                handleClose();
            }
        }
    }

    function handleSubmit(e: React.FormEvent) {
        const foundCountry = countries.find((country: country) => country.prefix === countryPrefix);
        if(foundCountry) {
            //@ts-ignore
            const validPhone = validatePhone(countryPrefix + phone, foundCountry.locale);
            const validName = name.length;
            const validEmail = validateEmail(email);
            if(validName && validPhone && validEmail) {
               return
            } else {
                e.preventDefault();
                if(!validName) {
                    setNameError(true);
                }
                if(!validPhone) {
                    setPhoneError(true);
                }
                if(!validEmail) {
                    setEmailError(true);
                }
            }
        }
    }



    return (
        <motion.div className="min-[816px]:hidden fixed top-0 left-0 h-screen w-screen bg-[rgba(26, 26, 32, 0.37)] backdrop-blur-[17.5px] z-[1000]"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    onClick={handleOverlayClick}>
            <div ref={menuRef} className="fixed overflow-scroll bg-[#FFFFFF] h-[70vh] bottom-0 left-0 w-screen p-[15px] pb-[50px] rounded-tr-[25px] rounded-tl-[25px]">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[8px] px-[5px] pt-[5px]">
                        <Image src="/icons/ArrowBlue.svg" width={21} height={21} alt=""/>
                        <h3 className="text-[18px] leading-[18.9px] uppercase">Programare online</h3>
                    </div>
                    <button className="!bg-[#3E404D]/[0.08] rounded-[10px] w-[25px] mt-[5px] h-[25px] flex items-center justify-center"
                            onClick={handleClose}>
                        <Image src="/icons/Times.svg" alt="" width={15} height={15}/>
                    </button>
                </div>
                <form
                    action="https://formsubmit.co/98cbed2eea68331937bda216e2b8837a"
                    method="POST"
                    onSubmit={handleSubmit}
                    className="pt-[35px] flex flex-col gap-[17px]">
                    <input type="hidden" name="_next" value="http://localhost:3000"/>
                    <input type="hidden" name="_subject" value="Programare nouă!"/>
                    <input type="hidden" name="_captcha" value="false"/>
                    <input type="text" name="_honey" style={{display: "none"}}/>
                        <div className="relative flex-1">
                            <span className="text-[12px] leading-[12.6px] top-[-6px] left-[12px] pointer-events-none absolute bg-[#fff] text-[#3E404D]/[0.5] px-[5px] flex gap-[4px] items-center">
                                <Image src="/icons/InfoCircleSm.svg" alt="" width={11} height={11}/>
                                Nume prenume
                            </span>
                            <input type="text"
                                   name="Nume"
                                   value={name}
                                   onBlur={() => setNameError(!name.length)}
                                   placeholder="ex. Anton Mihai"
                                   className={`${nameError ? "border-red" : "border-[#3E404D]/[0.24]"} w-full transition-all border-[1px] border-[#3E404D]/[0.24] focus:border-[#00AAF1] rounded-[17px] outline-0 text-[14px] leading-[14.7px] pt-4 pb-[15px] px-[17px] h-[46px] placeholder:text-[#3E404D]/[0.5]`}
                                   onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="relative flex-1">
                                <span className="text-[12px] leading-[12.6px] top-[-6px] left-[12px] pointer-events-none absolute bg-[#fff] text-[#3E404D]/[0.5] px-[5px] flex gap-[4px] items-center">
                                    <Image src="/icons/InfoCircleSm.svg" alt="" width={11} height={11}/>
                                    Email
                                </span>
                            <input type="email"
                                   name="email"
                                   value={email}
                                   onBlur={() => setEmailError(!validateEmail(email))}
                                   placeholder="ex. yourname@gmail.com"
                                   className={`${emailError ? "border-red" : "border-[#3E404D]/[0.24]"} w-full transition-all border-[1px] focus:border-[#00AAF1] rounded-[17px] outline-0 text-[14px] leading-[14.7px] pt-4 pb-[15px] px-[17px] h-[46px] placeholder:text-[#3E404D]/[0.5]`}
                                   onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="relative flex-1 flex items-center justify-center">
                            <span className="text-[12px] leading-[12.6px] top-[-6px] left-[12px] pointer-events-none absolute bg-[#fff] z-[100] text-[#3E404D]/[0.5] px-[5px] flex gap-[4px] items-center">
                                <Image src="/icons/InfoCircleSm.svg" alt="" width={11} height={11}/>
                                Telefon mobil
                            </span>
                            <div ref={inputRef}
                                 onClick={() => setInputFocused(true)}
                                 className={`${inputFocused ? "border-[#00AAF1]" : phoneError ? "border-red" : "border-[#3E404D]/[0.24]"} transition-all border-[1px] relative flex gap-[6px] items-center justify-center w-full h-[46px] rounded-[17px] pt-4 pb-[15px] px-[17px] leading-[16.8px]`}>
                                <div className="prefix shrink-0">
                                    <select
                                        name="Țară"
                                        className="pt-4 bg-transparent text-[14px] leading-[14.7px] pb-[15px] prefix_select outline-0"
                                        value={countryPrefix}
                                        onChange={(e) => setCountryPrefix(e.target.value)}>
                                        {countries.map((country: country, i:number) => {
                                            return <option className=" cursor-pointer leading-[105%]" key={country.prefix + country.locale} value={country.prefix}>{country.prefix}</option>
                                        })}
                                    </select>
                                </div>
                                <input value={phone} name="Număr de telefon" placeholder="00 000 000" type="tel" className="text-[14px] leading-[14.7px] phoneNumber placeholder:text-[#3E404D]/[0.5] outline-0 bg-transparent" onChange={(e) => setPhone(e.target.value)}/>
                            </div>
                        </div>

                    <div className="relative flex-1">
                            <span className="text-[12px] leading-[12.6px] top-[-6px] left-[12px] pointer-events-none absolute bg-[#fff] text-[#3E404D]/[0.5] px-[5px] flex gap-[4px] items-center">
                                <Image src="/icons/InfoCircleSm.svg" alt="" width={11} height={11}/>
                                Departament
                            </span>
                        <div className="department shrink-0">
                            <select
                                name="Departament"
                                className="text-[14px] leading-[14.7px] w-full transition-all focus:border-[#00AAF1] rounded-[17px] border-[#3E404D]/[0.24] px-[17px] h-[46px] border-[1px] pt-4 bg-transparent pb-[15px] departmentSelect outline-0"
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}>
                                {services.map((service:service, i:number) => {
                                    return <option className="cursor-pointer text-[14px] leading-[14.7px]" key={i} value={service.name}>{service.name}</option>
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
                                name="Data"
                                className="w-full transition-all focus:border-[#00AAF1] rounded-[17px] border-[#3E404D]/[0.24] px-[17px] h-[46px] border-[1px] text-[14px] leading-[14.7px] pt-4 bg-transparent pb-[15px] departmentSelect outline-0"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}>
                                {generateAppointmentDates(30)?.map((date:string, i:number) => {
                                    return <option className="cursor-pointer leading-[105%]" key={i} value={date}>{date}</option>
                                })}
                            </select>
                        </div>
                    </div>

                    <Button className="h-[50px] flex gap-[6px] leading-[14.7px] text-[14px] rounded-[19px] items-center bg-[#00AAF1] pt-[16px] pb-[15px] text-white">
                        Programează-te online
                        <Image src="/icons/Send.svg" width={15} height={15} alt=""/>
                    </Button>
                </form>
            </div>
        </motion.div>
    );
}


export default OnlineAppointmentMobile;