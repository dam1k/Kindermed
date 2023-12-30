import React from 'react';
import Image from "next/image";

const packagesIcons = [
    {
        src: "/Women.png",
        sizes: [50, 82],
    },
    {
        src: "/Gynecology.png",
        sizes: [116, 79],
    },
    {
        src: "/Stetoscop.svg",
        sizes: [80, 82],
    },
    {
        src: "/Pulse.svg",
        sizes: [175, 90],
    },
];
function Package({pachet, i}:{pachet:any, i:number}) {
    return (
      <div className="justify-self-center">
        {packagesIcons[i]?.src &&
          <Image
            src={packagesIcons[i].src}
            width={packagesIcons[i].sizes[0]}
            height={packagesIcons[i].sizes[1]}
            alt=""
          />
        }
        <h1 className="uppercase my-[25px] text-[20px] min-[1025px]:text-[30px] font-medium leading-[140%]">
          {pachet.name}
        </h1>

        <div className="flex flex-col gap-[22px]">
          {pachet.specialists && (
            <div className="flex">
              <div className="w-[145px] min-[1025px]:w-[180px]">
                <h1 className="uppercase min-[1025px]:text-[20px]">
                  Specialiști
                </h1>
                {pachet.specialistsDesc &&
                  pachet.specialistsDesc.map((desc: string, i: number) => {
                    return (
                      <p className="text-[14px] text-black/[0.65]" key={i}>
                        {desc}
                      </p>
                    );
                  })}
              </div>
              <ul className="list-disc text-black/[0.65] text-[14px] leading-[150%]">
                {pachet.specialists.map((examination: string, i: number) => {
                  return <li key={i}>{examination}</li>;
                })}
              </ul>
            </div>
          )}
          {pachet.consultations && (
            <div className="flex">
              <div className="w-[145px] min-[1025px]:w-[180px]">
                <h1 className="mb-[3px] uppercase min-[1025px]:text-[20px]">
                  Consultații
                </h1>
                {pachet.consultationsDesc &&
                  pachet.consultationsDesc.map((desc: string, i: number) => {
                    return (
                      <p className="text-[14px] text-black/[0.65]" key={i}>
                        {desc}
                      </p>
                    );
                  })}
              </div>
              <ul className="list-disc text-black/[0.65] text-[14px] leading-[150%]">
                {pachet.consultations.map((consultation: string, i: number) => {
                  return <li key={i}>{consultation}</li>;
                })}
              </ul>
            </div>
          )}
          {pachet.investigations && (
            <div className="flex">
              <div className="w-[145px] min-[1025px]:w-[180px]">
                <h1 className="mb-[3px] uppercase min-[1025px]:text-[20px]">
                  Investigații
                </h1>
                {pachet.investigationsDesc &&
                  pachet.investigationsDesc.map((desc: string, i: number) => {
                    return (
                      <p className="text-[14px] text-black/[0.65]" key={i}>
                        {desc}
                      </p>
                    );
                  })}
              </div>
              <ul className="list-disc text-black/[0.65] text-[14px] leading-[150%]">
                {pachet.investigations.map(
                  (investigation: string, i: number) => {
                    return <li key={i}>{investigation}</li>;
                  },
                )}
              </ul>
            </div>
          )}
          {pachet.examinations && (
            <div className="flex">
              <div className="w-[145px] min-[1025px]:w-[180px]">
                <h1 className="uppercase min-[1025px]:text-[20px] w-[180px]">
                  Examinări
                </h1>
                {pachet.examinationsDesc &&
                  pachet.examinationsDesc.map((desc: string, i: number) => {
                    return (
                      <p className="text-[14px] text-black/[0.65]" key={i}>
                        {desc}
                      </p>
                    );
                  })}
              </div>
              <ul className="list-disc text-black/[0.65] text-[14px] leading-[150%]">
                {pachet.examinations.map((examination: string, i: number) => {
                  return <li key={i}>{examination}</li>;
                })}
              </ul>
            </div>
          )}
          {pachet.prices && (
            <div className="flex gap-[12px] items-start flex-wrap content-start min-[500px]:w-[476px]">
              {pachet.prices.map((packagePrice: string, i: number) => {
                return (
                  <div
                    className="flex gap-[6px] min-[1025px]:gap-[12px] items-start"
                    key={i}
                  >
                    <p className="text-blue min-[1025px]:text-[30px] text-[20px] font-[500] uppercase">
                      {i > 0 &&
                        Array.from(Array(i).keys()).map((_: number) => "*")}
                      {packagePrice} lei
                    </p>
                    {/*<p className="text-[12px] leading-[150%] text-black/[0.65] line-through">*/}
                    {/*  ({packagePrice.oldPrice} lei)*/}
                    {/*</p>*/}
                    {i !== pachet.prices.length - 1 && (
                      <span className="text-blue leading-[150%] font-medium text-[30px]">
                        /
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          )}
          <div>
            {pachet.sale && (
              <h2 className="uppercase text-blue min-[1025px]:text-[30px] text-[20px] font-medium leading-[150%]">
                {pachet.sale}
              </h2>
            )}
            {pachet.saleDesc && (
              <h2 className="text-black/[0.65] text-[14px] leading-[150%]">
                {pachet.saleDesc}
              </h2>
            )}
          </div>
        </div>
      </div>
    );
}

export default Package;