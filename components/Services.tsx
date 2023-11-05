'use client'

import React, {useState} from "react";
import {services, service} from "@/utils/data"
import {Button} from "@/components/ui/Button"

const initialServices = services.slice(0, 5);
const showAllServices = services.slice(5);
const Services = () => {
    const [showAll, setShowAll] = useState<boolean>(false);
  return (
    <div className="mt-[500px] !pb-[85px] mb-[125px] relative">
      <img
        src="/Services.jpg"
        className="object-cover absolute top-0 left-0 z-[0] w-full h-full"
        alt=""
      />
      <div className="bg-blue/[0.85] absolute top-0 z-[1] left-0 w-full h-full" />
      <div className="container grid grid-cols-2 relative z-[2] !pt-[125px] gap-y-[40px] gap-x-[25px]">
        <div>
          <div className="flex gap-[86px]">
            <p className="uppercase text-[#fff]/[0.65] mt-[10px] leading-[105%]">
              Serviciile noastre
            </p>
            <h2 className="uppercase text-[35px] text-[#fff] leading-[140%] tracking-[-0.35px]">
              oferim Soluții complete și
            </h2>
          </div>
          <h2 className="uppercase text-[35px] text-[#fff] leading-[140%] tracking-[-0.35px]">
            personalizate pentru sănătatea dvs.
          </h2>
        </div>
          <p className="leading-[23px] text-[#fff] w-[500px]">
              Clinica Kindermed este dotata cu echipament modern,
              care permite aplicarea tratamentelor în conformitate cu practicile internaționale.
          </p>
          <div className="flex pl-[250px] py-[20px]">
              <p className="w-[250px] text-[#fff]/[0.65] leading-[145%]">
                  Numărul
              </p>
              <p className="text-[#fff]/[0.65] leading-[145%]">
                  Denumirea serviciului
              </p>
          </div>
          <p className="text-[#fff]/[0.65] py-[20px] leading-[145%]">
              Detalii despre serviciu
          </p>
      </div>

        <ul className="relative z-[2] container">
            {!showAll && initialServices.map((service: service, i:number) => {
                return <li className={`grid grid-cols-2 relative gap-[25px] border-[#fff] py-[20px] pt-[20px] ${i === 0 ? "border-t-[1px]" : ""}`} key={service.id}>
                    {/*{i !== services.slice(0,5).length - 1 && <div className="absolute left-[250px] bottom-0 h-[1px] bg-white w-[calc(100%-250px)]"/>}*/}
                    <div className="absolute left-[250px] bottom-0 h-[1px] bg-white w-[calc(100%-250px)]"/>
                    <div className="flex pl-[250px]">
                            <span className="w-[250px] text-[24px] leading-[105%] text-[#fff]/[0.5]">{`${service.id <= 9 ? "0" : ""}${service.id}`}</span>
                            <h2 className="text-[24px] text-[#fff] leading-[125%] break-words uppercase">{service.name}</h2>
                    </div>
                    <p className="w-[400px] text-[#fff]/[0.85]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, cumque esse itaque quas quidem quos.</p>
                </li>
            })}
            {!showAll && <li className="py-[20px]">
                <div className="flex pl-[250px]">
                    {!showAll && <span className="w-[250px] text-[24px] leading-[105%] text-[#fff]/[0.5]">
                        {`+${showAllServices.length}`}
                    </span>}
                    <Button className="uppercase"
                            variant="transparentWhite"
                            onClick={() => setShowAll((prev: boolean) => !prev)}>
                        {!showAll ? "Vezi toate serviciile" : "Ascunde serviciile"}
                    </Button>
                </div>
            </li>}

            {showAll && showAllServices.map((service: service, i:number) => {
                return <li className={`grid grid-cols-2 relative gap-[25px] border-[#fff] py-[20px] pt-[20px] ${i === 0 ? "border-t-[1px]" : ""}`} key={i}>
                    <div className="absolute left-[250px] bottom-0 h-[1px] bg-white w-[calc(100%-250px)]"/>
                    <div className="flex ml-[250px]">
                        <span className="w-[250px] text-[24px] leading-[105%] text-[#fff]/[0.5]">{`${service.id <= 9 ? "0" : ""}${service.id}`}</span>
                        <h2 className="text-[24px] text-[#fff] leading-[125%] break-words uppercase">{service.name}</h2>
                    </div>
                    <p className="w-[400px] text-[#fff]/[0.85]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, cumque esse itaque quas quidem quos.</p>
                </li>
            })}
            {showAll && <li className="py-[20px]">
                <div className="flex pl-[250px]">
                    {!showAll && <span className="w-[250px] text-[24px] leading-[105%] text-[#fff]/[0.5]">
                        {`+${showAllServices.length}`}
                    </span>}
                    <Button className="uppercase"
                            variant="transparentWhite"
                            onClick={() => setShowAll((prev: boolean) => !prev)}>
                        {!showAll ? "Vezi toate serviciile" : "Ascunde serviciile"}
                    </Button>
                </div>
            </li>}
        </ul>
    </div>
  );
};

export default Services;
