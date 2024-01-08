import React from 'react';
import Image from "next/image"

function Vaccination() {
    return (
        <div className="overflow-auto min-[1400px]:flex min-[1400px]:items-center min-[1400px]:justify-center !my-[100px] ">
            <div className="relative shrink-0 h-[743px] w-[1350px]">
                <img alt="vaccinare" src="/Vaccination.svg" className=" w-full"/>
            </div>
        </div>
    );
}

export default Vaccination;