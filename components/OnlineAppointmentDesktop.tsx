import React, {useEffect, useState, useRef} from 'react';
import Image from "next/image"
import {generateAppointmentDates} from "@/utils/helpers/generateAppointmentDates";
import {countries, services, service} from "@/utils/data";
import {Button} from "@/components/ui/Button";
import {motion, AnimatePresence} from "framer-motion"
import {validateEmail, validatePhone} from "@/utils/helpers/validateData";


const variants = {
    open: {
        opacity: 1,
        height: "auto",
        marginTop: 10,
    },
    collapsed: {
        opacity: 0,
        height: 0,
        marginTop: 0,
    },
};

interface IOnlineAppointmentDesktopProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    selectedDepartment?: string;
    selectedActiveDepartment?: service;
}

interface country {
    locale: string;
    prefix:string
}


const allServices = [...services]
function OnlineAppointmentDesktop({setOpen, selectedDepartment, selectedActiveDepartment}: IOnlineAppointmentDesktopProps) {
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
    const [activeDepartment, setActiveDepartment] = useState<service>(selectedActiveDepartment || services[0]);
    const [readMore, setReadMore] = useState<boolean>(false);

    const formRef = useRef<HTMLDivElement>(null);
    const infoBoxRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    function handleClose(e?:React.MouseEvent) {
        if(e) {
            e.preventDefault();
        }
        setOpen(false);
        document.body.style.overflowY = "scroll"
        document.body.style.overflowX = "hidden"
    }

    useEffect(() => {
        const foundDepartment = allServices.find((service: service) => service.name === department);
       if(foundDepartment) {
           setActiveDepartment(foundDepartment);
       }
    }, [department])

    function handleReadMore(e:React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        setReadMore((prev) => !prev);
    }

    useEffect(() => {
        if(!readMore) {
            // setTimeout(() => {
                if(overlayRef.current) {
                    overlayRef.current.scrollTo({top: 0, behavior: "smooth"});
                }
            // }, 300);
        }
    }, [readMore]);

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

            if(formRef.current && infoBoxRef.current) {
                //@ts-ignore
                if(e.target !== formRef.current && !formRef.current.contains(e.target) &&
                    //@ts-ignore
                    e.target !== infoBoxRef.current && !infoBoxRef.current.contains(e.target)) {
                    handleClose()
                }
            }
        }
    }


    return (
        <motion.div onClick={handleOverlayClick}
                    ref={overlayRef}
                    className={`overflow-y-scroll justify-center overflow-x-hidden h-screen pb-[159px] bg-blur items-start px-[50px] min-[850px]:px-[150px] min-[1600px]:px-[250px] flexible-grid gap-[15px] pt-[159px] fixed top-0 left-0 w-screen z-[11]`}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
            <div className="p-[35px] bg-[#fff] min-[1351px]:sticky top-0 max-[1350px]:col-span-2 rounded-[40px]" ref={formRef}>
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
                <form action="https://formsubmit.co/98cbed2eea68331937bda216e2b8837a"
                      method="POST"
                      onSubmit={handleSubmit}
                      className="pt-[35px] flex flex-col gap-[17px]">
                    <input type="hidden" name="_next" value="https://kindermed.md"/>
                    <input type="hidden" name="_subject" value="Programare nouă!"/>
                    <input type="hidden" name="_captcha" value="false"/>
                    <input type="text" name="_honey" style={{display: "none"}}/>
                    <div className="flex gap-[12px]">
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
                                   className={`${nameError ? "border-red" : "border-[#3E404D]/[0.24]"} w-full transition-all border-[1px] border-[#3E404D]/[0.24] focus:border-[#00AAF1] rounded-[17px] outline-0 pt-4 pb-[15px] px-[17px] leading-[16.8px] h-[48px] placeholder:text-[#3E404D]/[0.5]`}
                                   onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="relative flex-1 flex items-center justify-center">
                            <span className="text-[12px] leading-[12.6px] top-[-6px] left-[12px] pointer-events-none absolute bg-[#fff] z-[100] text-[#3E404D]/[0.5] px-[5px] flex gap-[4px] items-center">
                                <Image src="/icons/InfoCircleSm.svg" alt="" width={11} height={11}/>
                                Telefon mobil
                            </span>
                            <div ref={inputRef}
                                 onClick={() => setInputFocused(true)}
                                 className={`${inputFocused ? "border-[#00AAF1]" : phoneError ? "border-red" : "border-[#3E404D]/[0.24]"} transition-all border-[1px] relative flex gap-[6px] items-center justify-center w-full h-[48px] rounded-[17px] pt-4 pb-[15px] px-[17px] leading-[16.8px]`}>
                                    <div className="prefix shrink-0">
                                        <select
                                            name="Țară"
                                            className="leading-[16.8px] pt-4 bg-transparent pb-[15px] prefix_select outline-0"
                                            value={countryPrefix}
                                            onChange={(e) => setCountryPrefix(e.target.value)}>
                                                {countries.map((country:{locale: string; prefix:string }, i:number) => {
                                                    return <option className="cursor-pointer leading-[105%]" key={country.prefix + country.locale} value={country.prefix}>{country.prefix}</option>
                                                })}
                                        </select>
                                    </div>
                                <input value={phone} name="Număr de telefon" placeholder="00 000 000" type="tel" className="phoneNumber placeholder:text-[#3E404D]/[0.5] outline-0 bg-transparent" onChange={(e) => setPhone(e.target.value)}/>
                            </div>
                        </div>
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
                               className={`${emailError ? "border-red" : "border-[#3E404D]/[0.24]"} w-full transition-all border-[1px] border-[#3E404D]/[0.24] focus:border-[#00AAF1] rounded-[17px] outline-0 pt-4 pb-[15px] px-[17px] leading-[16.8px] h-[48px] placeholder:text-[#3E404D]/[0.5]`}
                               onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className="relative flex-1">
                            <span className="text-[12px] leading-[12.6px] top-[-6px] left-[12px] pointer-events-none absolute bg-[#fff] text-[#3E404D]/[0.5] px-[5px] flex gap-[4px] items-center">
                                <Image src="/icons/InfoCircleSm.svg" alt="" width={11} height={11}/>
                                Departament
                            </span>
                        <div className="department shrink-0">
                            <select
                                name="departament"
                                className="w-full transition-all focus:border-[#00AAF1] rounded-[17px] border-[#3E404D]/[0.24] px-[17px] h-[48px] border-[1px] leading-[16.8px] pt-4 bg-transparent pb-[15px] departmentSelect outline-0"
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}>
                                {allServices.map((service:service, i:number) => {
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
                                name="Data"
                                className="w-full transition-all focus:border-[#00AAF1] rounded-[17px] border-[#3E404D]/[0.24] px-[17px] h-[48px] border-[1px] leading-[16.8px] pt-4 bg-transparent pb-[15px] departmentSelect outline-0"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}>
                                {generateAppointmentDates(30)?.map((date:string, i:number) => {
                                    return <option className="cursor-pointer leading-[105%]" key={i} value={date}>{date}</option>
                                })}
                            </select>
                        </div>
                    </div>

                    <Button type="submit" className="h-[55px] flex gap-[6px] leading-[16.8px] rounded-[19px] items-center bg-[#00AAF1] pt-[16px] pb-[15px] text-white">
                        Programează-te online
                        <Image src="/icons/Send.svg" width={15} height={15} alt=""/>
                    </Button>
                </form>
            </div>
                <div ref={infoBoxRef} className="max-w-[800px] max-[1350px]:col-span-2 rounded-[50px] flex flex-col gap-[25px] p-[35px] bg-[#fff]">
                    <div className="h-[400px] w-full relative">
                        <Image priority={true} src={activeDepartment?.img || ""} fill alt="" className="rounded-[30px] object-cover w-full h-[400px]" />
                    </div>
                    <div className="">
                        <p className="mb-[12px] text-[20px] leading-[28px]">
                            {`Despre ${department}`}
                        </p>
                        <p className="text-[#3E404D]/[0.8] leading-[24.8px]">
                            {activeDepartment?.shortDesc}
                        </p>

                        {activeDepartment?.longDesc && <AnimatePresence mode="wait" initial={false}>
                            {readMore && <motion.p
                                key="moreInfo"
                                initial="collapsed"
                                animate="open"
                                exit="collapsed"
                                variants={variants}
                                className="overflow-hidden text-[#3E404D]/[0.8] leading-[24.8px]">
                                {activeDepartment?.longDesc}
                            </motion.p>}
                        </AnimatePresence>}
                    </div>
                    {activeDepartment?.longDesc && <Button
                        onClick={handleReadMore}
                        className="border-[1px] border-[#3E404D]/[0.24] rounded-[19px] leading-[16.8px] h-[50px] bg-white py-[16.5px] text-black">
                        {readMore ? "Ascunde" : "Citește mai mult"}
                    </Button>}
                </div>
        </motion.div>
    );
}

export default OnlineAppointmentDesktop;