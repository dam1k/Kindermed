import React from 'react';

function Vaccination() {
    return (
        <>
            <h1 className="text-center px-4 min-[1400px]:text-[55px] text-[30px] min-[1400px]:leading-[77px] mt-[75px]">În curând!</h1>
            <div className="overflow-auto min-[1400px]:flex min-[1400px]:items-center min-[1400px]:justify-center !mt-[42px] !mb-[125px]">
                <div className="relative shrink-0 h-[743px] w-[1350px]">
                    <img alt="vaccinare" src="/Vaccination.svg" className=" w-full"/>
                </div>
            </div>
        </>
    );
}

export default Vaccination;