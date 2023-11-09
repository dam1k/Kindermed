'use client'

import React, {useRef, useState, useEffect} from 'react';
import Image from "next/image"
import {Button} from "@/components/ui/Button";
import {team} from "@/utils/data"
import Link from "next/link"
import {useRouter} from "next/navigation"


function Team() {
    const [currentScrollAmount, setCurrentScrollAmount] = useState<number>(405);
    const [currentSlide, setCurrentSlide] = useState<number>(1);
    const sliderRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        console.log(currentSlide)
        if (currentSlide > 1) {
            setCurrentScrollAmount(350);
        }
    }, [currentSlide])

    function handleClick(type: "left" | "right") {
        if (sliderRef.current) {
            if (type === "right") {
                if (currentSlide < team.length) {
                    setCurrentSlide((prev) => prev + 1);
                }
                sliderRef.current.scrollLeft += currentSlide > 1 ? 325 : 430
            } else {
                if (currentSlide > 1) {
                    setCurrentSlide((prev) => prev - 1);
                }
                sliderRef.current.scrollLeft -= currentSlide === 2 ? 430 : 325
            }
        }
    }

    return (
        <div id="team" className="container !pr-0 !mt-[125px] grid grid-cols-2 gap-x-[25px] gap-y-[85px]">
            <div>
                <div className="flex gap-[146px]">
                    <p className="uppercase text-black/[0.65] mt-[10px] ml-[3px] leading-[105%]">
                        KINDERTEAM
                    </p>
                    <h2 className="uppercase text-[35px] text-black leading-[140%] tracking-[-0.35px]">
                        Lucrurile cu adevărat mari și
                    </h2>
                </div>
                <h2 className="uppercase text-[35px] text-black leading-[140%] tracking-[-0.35px]">
                    frumoase pot fi făcute doar în echipă, unde
                </h2>
                <h2 className="uppercase text-[35px] text-blaqck leading-[140%] tracking-[-0.35px]">
                    fiecare membru contează.
                </h2>
            </div>

            <div className="flex justify-start items-end">
                <div className="flex gap-[25px] items-center">
                    <Image width={40} alt="" height={40} className="hover:scale-125 transition-all cursor-pointer"
                           src="/icons/ChevronRight.svg"
                           onClick={() => handleClick("left")}/>
                    <Image width={40} alt="" height={40} className="hover:scale-125 transition-all cursor-pointer"
                           src="/icons/ChevronLeft.svg"
                           onClick={() => handleClick("right")}/>
                </div>
            </div>

            <div className="ml-[250px] flex flex-col gap-[45px]">
                <p className="leading-[145%] text-[22px] w-[500px]">
                    În spatele Clinicii KinderMed se află o echipă prietenoasă și unită, iar
                    aportul fiecărui membru, ne ajută să menținem calitatea serviciilor la cel mai înalt nivel.
                </p>
                <div className="flex gap-[8px]">
                    <Button className="border-[1px] text-black border-[#3E404D]/[0.24] bg-transparent flex gap-[8px]"
                            onClick={() => router.push("https://www.instagram.com/kindermedmd/")}>
                        <Image src="/icons/Instagram.svg" width={17} alt="" height={17}/>
                        Instagram
                    </Button>
                    <Button
                        onClick={() => router.push("https://www.facebook.com/KinderMedMD")}
                        className="border-[1px] text-black border-[#3E404D]/[0.24] bg-transparent flex gap-[8px]">
                        <Image src="/icons/Facebook.svg" width={17} alt="" height={17}/>
                        Facebook
                    </Button>
                </div>
            </div>

            <div className="team-slider no-scrollbar w-full overflow-scroll flex gap-[25px]" ref={sliderRef}>
                {team.map((doctor, i) => {
                    return <div className="flex flex-col gap-[25px]" key={i}>
                        <div className={`${i === 0 ? "w-[405px] h-[540px]" : "w-[300px] h-[400px]"}`}>
                            <img alt="" className="w-full" src={doctor.img}/>
                        </div>
                        <div>
                            <h3 className="text-[20px] uppercase leading-[105%]">{doctor.name}</h3>
                            <p className="text-black/[0.5]">{doctor.specialty.slice(0, 1).toUpperCase() + doctor.specialty.slice(1)}</p>
                        </div>
                        <Link className="leading-[140%] underline text-darkGrey" href="/">Vezi orarul</Link>
                    </div>
                })}
            </div>
        </div>
    );
}

export default Team;