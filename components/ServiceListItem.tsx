import React from 'react';
import {service} from "@/utils/data";

function ServiceListItem({service, i, grey}:{service:service, i:number, grey?: boolean}) {
    return (
        <li className={`${grey ? "bg-[#E7E9EC] !text-black" : ""} max-[1024px]:grid-cols-1 lg:grid max-[1400px]:py-[15px] grid-cols-2 relative gap-[25px] border-[#fff] py-[20px] pt-[20px] ${service.id === 1 ? "border-t-[1px]" : ""}`}>
            <div className="absolute left-[250px] bottom-0 h-[1px] bg-white max-[1400px]:left-0 max-[1400px]:w-full w-[calc(100%-250px)]"/>
            <div className="flex ml-0 min-[1401px]:ml-[250px] max-[1400px]:items-center serviceTitle">
                                <span
                                    className={`w-[250px] max-[1400px]:text-[16px] max-[1700px]:w-[100px] min-[1025px]:text-[24px] leading-[105%] ${grey ? " text-black" : "text-[#fff]/[0.5]"}`}>{`${service.id <= 9 ? "0" : ""}${service.id}`}</span>
                <h2 className={`${grey ? " text-black" : "text-[#fff]"} max-[1400px]:text-[16px] min-[1401px]:text-[24px] text-[#fff] leading-[125%] break-words uppercase`}>{service.name}</h2>
            </div>
            <p className={`w-[400px] serviceDesc ${grey ? " text-black/[0.85]" : "text-[#fff]/[0.85]"}`}>
                {service.shortDesc}
            </p>
        </li>
    );
}

export default ServiceListItem;