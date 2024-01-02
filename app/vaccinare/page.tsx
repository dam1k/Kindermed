import React from 'react';
import Image from "next/image"

function Vaccination() {
    return (
        <div className="overflow-auto min-[1400px]:flex min-[1400px]:items-center min-[1400px]:justify-center !my-[100px] ">
            <div className="shrink-0 h-[743px] w-[1350px]">
                <Image src="/Vaccination.svg" alt="vaccinare" fill/>
            </div>
        </div>
    );
}

export default Vaccination;