import React, {useState} from 'react';
import Image from "next/image"
import {motion} from "framer-motion"

function OnlineAppointmentDesktop({setOpen}: {setOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
    const [name, setName] = useState<string>("");
    const [department, setDepartment] = useState<string>("");
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
                <form className="pt-[35px]">
                    <div className="relative">
                     <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                        <span className="absolute bg-[#fff] text-[#3E404D]/[0.5] px-[5px] py-[1px] flex gap-[4px] items-center">
                            <Image src="/icons/InfoCircleSm.svg" alt="" width={11} height={11}/>
                            Nume prenume
                        </span>
                    </div>
                </form>
            </div>
            <div>
                ferger
            </div>
        </motion.div>
    );
}

export default OnlineAppointmentDesktop;