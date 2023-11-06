import React from 'react';
import {service} from "@/utils/data";

function ServiceListItem({service, i}:{service:service, i:number}) {
    return (
        <li className={`grid grid-cols-2 relative gap-[25px] border-[#fff] py-[20px] pt-[20px] ${service.id === 1 ? "border-t-[1px]" : ""}`}>
            <div className="absolute left-[250px] bottom-0 h-[1px] bg-white w-[calc(100%-250px)]"/>
            <div className="flex ml-[250px]">
                                <span
                                    className="w-[250px] text-[24px] leading-[105%] text-[#fff]/[0.5]">{`${service.id <= 9 ? "0" : ""}${service.id}`}</span>
                <h2 className="text-[24px] text-[#fff] leading-[125%] break-words uppercase">{service.name}</h2>
            </div>
            <p className="w-[400px] text-[#fff]/[0.85]">Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Aspernatur, cumque esse itaque quas quidem quos.</p>
        </li>
    );
}

export default ServiceListItem;