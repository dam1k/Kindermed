"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {urlForImage} from "@/sanity/lib/image"

function Team({team}:{team:any}) {
  const [width, setWidth] = useState<number>(0);
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const sliderRef = useRef<HTMLDivElement>(null);
  const mobileSliderRef = useRef<HTMLDivElement>(null);
  const router = useRouter();


  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () =>
        window.removeEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  function handleClick(type: "left" | "right") {
    if (sliderRef.current) {
      setScrolling(true);
      if (type === "right") {
        if (currentSlide < team.length) {
          setCurrentSlide((prev) => prev + 1);
        }
        if (width <= 1024) {
          sliderRef.current.scrollLeft += 175;
          setTimeout(() => {
            setScrolling(false);
          }, 300);
        } else if(width < 1250) {
          sliderRef.current.scrollLeft += currentSlide > 1 ? 286 : 376;
          setTimeout(() => {
            setScrolling(false);
          }, 300);
        } else {
          sliderRef.current.scrollLeft += currentSlide > 1 ? 325 : 430;
          setTimeout(() => {
            setScrolling(false);
          }, 300);
        }
      } else {
        if (currentSlide > 1) {
          setCurrentSlide((prev) => prev - 1);
        }
        if (width <= 1024) {
          sliderRef.current.scrollLeft -= 175;
          setTimeout(() => {
            setScrolling(false);
          }, 300);
        } else if(width < 1250) {
          sliderRef.current.scrollLeft -= currentSlide > 2 ? 286 : 376;
          setTimeout(() => {
            setScrolling(false);
          }, 300);
        }
        else {
          sliderRef.current.scrollLeft -= currentSlide === 2 ? 430 : 325;
          setTimeout(() => {
            setScrolling(false);
          }, 300);
        }
      }
    }
  }

  return (
    <div
      id="team"
      className="container !pr-0 max-[1024px]:!pb-[100px] max-[1024px]:!pt-[100px] min-[1025px]:!pb-[316px] max-[1024px]:px-[10px] min-[1025px]:!pr-0 bg-[#fff] !pt-[125px] grid grid-cols-1 min-[1025px]:grid-cols-2 gap-x-[25px] gap-[35px] min-[1025px]:gap-y-[85px]"
    >
      <div className="pr-[10px] relative">
        <p className="absolute top-0 left-0 text-[12px] min-[1025px]:text-[16px] uppercase text-black/[0.65] mt-[5px] min-[1025px]:mt-[10px] ml-[1px] min-[1025px]:ml-[3px] leading-[105%]">
          <span className="min-[1025px]:hidden">TEAM</span>
          <span className="max-[1024px]:hidden">KINDERMED TEAM</span>
        </p>
        <h2 className="inline ml-[100px] min-[1025px]:ml-[150px] min-[1250px]:ml-[250px] uppercase text-[20px] min-[1025px]:text-[26px] min-[1600px]:text-[35px] text-black leading-[140%] tracking-[-0.35px]">
          Lucrurile cu adevărat mari și frumoase pot fi făcute doar în echipă,
          unde fiecare membru contează.
        </h2>
      </div>

      <div className="max-[1024px]:hidden flex justify-start items-end">
        <div className="flex gap-[25px] items-center">
          <Image
            width={40}
            alt=""
            height={40}
            className="hover:scale-125 transition-all cursor-pointer"
            src="/icons/ChevronRight.svg"
            onClick={() => {
              if (!scrolling) handleClick("left");
            }}
          />
          <Image
            width={40}
            alt=""
            height={40}
            className="hover:scale-125 transition-all cursor-pointer"
            src="/icons/ChevronLeft.svg"
            onClick={() => {
              if (!scrolling) handleClick("right");
            }}
          />
        </div>
      </div>

      <p className="pr-[10px] max-[1024px]:pb-[30px] min-[1025px]:hidden leading-[145%] text-[14px] min-[1025px]:text-[22px] min-[1025px]:w-[500px]">
        În spatele Clinicii KinderMed se află o echipă prietenoasă și unită, iar
        aportul fiecărui membru, ne ajută să menținem calitatea serviciilor la
        cel mai înalt nivel.
      </p>

      <div className="flex gap-[8px] min-[1025px]:hidden">
        <Button
          className="border-[1px] text-black border-[#3E404D]/[0.24] bg-transparent flex gap-[8px]"
          onClick={() => router.push("https://www.instagram.com/kindermedmd/")}
        >
          <Image src="/icons/Instagram.svg" width={17} alt="" height={17} />
          Instagram
        </Button>
        <Button
          onClick={() => router.push("https://www.facebook.com/KinderMedMD")}
          className="border-[1px] text-black border-[#3E404D]/[0.24] bg-transparent flex gap-[8px]"
        >
          <Image src="/icons/Facebook.svg" width={17} alt="" height={17} />
          Facebook
        </Button>
      </div>

      <div className="max-[1024px]:hidden max-[1249px]:ml-[150px] ml-[250px] flex flex-col gap-[45px]">
        <p className="max-[1024px]:pb-[30px] leading-[145%] text-[14px] min-[1025px]:text-[18px] min-[1600px]:w-[500px]">
          În spatele Clinicii KinderMed se află o echipă prietenoasă și unită,
          iar aportul fiecărui membru, ne ajută să menținem calitatea
          serviciilor la cel mai înalt nivel.
        </p>
        <div className="flex gap-[8px]">
          <Button
            className="border-[1px] text-black border-[#3E404D]/[0.24] bg-transparent flex gap-[8px]"
            onClick={() =>
              router.push("https://www.instagram.com/kindermedmd/")
            }
          >
            <Image src="/icons/Instagram.svg" width={17} alt="" height={17} />
            Instagram
          </Button>
          <Button
            onClick={() => router.push("https://www.facebook.com/KinderMedMD")}
            className="border-[1px] text-black border-[#3E404D]/[0.24] bg-transparent flex gap-[8px]"
          >
            <Image src="/icons/Facebook.svg" width={17} alt="" height={17} />
            Facebook
          </Button>
        </div>
      </div>

      <div className="flex items-start max-[1024px]:mb-[30px] max-[1024px]:row-start-3 max-[1024px]:row-end-4">
        <div className="min-[1025px]:hidden shrink-0 flex w-[100px] justify-between">
          <div className="flex flex-shrink-0 gap-[15px] items-center">
            <Image
                width={24}
                height={24}
                alt=""
                className="hover:scale-125 transition-all cursor-pointer"
                src="/icons/ChevronRight.svg"
                onClick={() => {
                  if (!scrolling) handleClick("left");
                }}
            />
            <Image
                alt=""
                className="hover:scale-125 transition-all cursor-pointer"
                src="/icons/ChevronLeft.svg"
                width={40}
                height={40}
                onClick={() => {
                  if (!scrolling) handleClick("right");
                }}
            />
          </div>
        </div>
        <div
            className="team-slider no-scrollbar w-full overflow-scroll flex gap-[10px] min-[1025px]:gap-[25px]"
            ref={sliderRef}
        >
          {team.map((doctor:any, i:number) => {
            return (
                <div className={`flex flex-col gap-[12px] min-[1025px]:gap-[25px] ${i === team.length -1 ? "mr-[10px] min-[1025px]:mr-[25px]" : ""}`} key={i}>
                  <div
                      className={`rounded-[15px] overflow-hidden ${
                          i === 0
                              ? "w-[165px] h-[220px] min-[1025px]:w-[350px] min-[1025px]:h-[468px] min-[1250px]:w-[405px] min-[1250px]:h-[540px]"
                              : "w-[165px] h-[220px] min-[1025px]:w-[262px] min-[1025px]:h-[348px] min-[1250px]:w-[300px] min-[1250px]:h-[400px]"
                      }`}
                  >
                    <img alt="" className={`w-full h-full object-cover`} src={doctor.mainImage ? urlForImage(doctor.mainImage) : "/Doctor2.jpg"} />
                  </div>
                  <div>
                    <h3 className="text-[15px] min-[1025px]:text-[20px] leading-[140%] uppercase min-[1025px]:leading-[105%]">
                      {doctor.fullName}
                    </h3>
                    <p className="text-[14px] max-[1024px]:mt-[3px]min-[1025px]:text-[16px] leading-[135%] text-black/[0.5]">
                      {doctor.department[0].specialty.slice(0, 1).toUpperCase() +
                          doctor.department[0].specialty.slice(1)}
                    </p>
                  </div>
                  <Link
                      className="leading-[140%] max-[1024px]:hidden underline text-darkGrey"
                      href={`/orar#${doctor.department[0].name.toLowerCase()}`}
                  >
                    Vezi orarul
                  </Link>
                </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Team;
