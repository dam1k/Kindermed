"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { team } from "@/utils/data";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Team() {
  const [width, setWidth] = useState<number>(0);
  const [currentScrollAmount, setCurrentScrollAmount] = useState<number>(405);
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
    if (sliderRef.current && mobileSliderRef.current) {
      setScrolling(true);
      if (type === "right") {
        if (currentSlide < team.length) {
          setCurrentSlide((prev) => prev + 1);
        }
        if (width <= 1600) {
          mobileSliderRef.current.scrollLeft += 175;
          setTimeout(() => {
            setScrolling(false);
          }, 300);
        } else {
          console.log("sheesh")
          sliderRef.current.scrollLeft += currentSlide > 1 ? 325 : 430;
          setTimeout(() => {
            setScrolling(false);
          }, 300);
        }
      } else {
        if (currentSlide > 1) {
          setCurrentSlide((prev) => prev - 1);
        }
        if (width <= 1600) {
          mobileSliderRef.current.scrollLeft -= 175;
          setTimeout(() => {
            setScrolling(false);
          }, 300);
        } else {
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
      className="container !pr-0 max-[1600px]:!pb-[100px] max-[1600px]:!pt-[100px] min-[1601px]:!pb-[316px] max-[1600px]:px-[10px] min-[1601px]:!pr-0 bg-[#fff] !pt-[125px] grid grid-cols-1 min-[1601px]:grid-cols-2 gap-x-[25px] gap-[35px] min-[1601px]:gap-y-[85px]"
    >
        <div className="pr-[10px] relative">
          <p className="absolute top-0 left-0 text-[12px] min-[1601px]:text-[16px] uppercase text-black/[0.65] mt-[5px] min-[1601px]:mt-[10px] ml-[1px] min-[1025px]:ml-[3px] leading-[105%]">
            <span className="min-[1601px]:hidden">TEAM</span>
            <span className="max-[1600px]:hidden">KINDERTEAM</span>
          </p>
          <h2 className="inline ml-[100px] min-[1601px]:ml-[250px] uppercase text-[20px] min-[1601px]:text-[35px] text-black leading-[140%] tracking-[-0.35px]">
            Lucrurile cu adevărat
            mari și frumoase pot fi făcute doar în echipă, unde
            fiecare membru contează.
          </h2>
        </div>

      <div className="max-[1600px]:hidden flex justify-start items-end">
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

      <p className="pr-[10px] max-[1600px]:pb-[30px] min-[1601px]:hidden leading-[145%] text-[14px] min-[1601px]:text-[22px] min-[1601px]:w-[500px]">
        În spatele Clinicii KinderMed se află o echipă prietenoasă și unită, iar
        aportul fiecărui membru, ne ajută să menținem calitatea serviciilor la
        cel mai înalt nivel.
      </p>

      <div className="flex items-start min-[1601px]:hidden pb-[30px]">
        <div className="shrink-0 flex w-[100px] justify-between">
          <div className="flex flex-shrink-0 gap-[15px] items-center">
            <Image
              width={24}
              alt=""
              height={24}
              className="hover:scale-125 transition-all cursor-pointer"
              src="/icons/ChevronRight.svg"
              onClick={() => {
                if (!scrolling) handleClick("left");
              }}
            />
            <Image
              width={24}
              alt=""
              height={24}
              className="hover:scale-125 transition-all cursor-pointer"
              src="/icons/ChevronLeft.svg"
              onClick={() => {
                if (!scrolling) handleClick("right");
              }}
            />
          </div>
        </div>
        <div
          className="team-slider no-scrollbar w-full overflow-scroll flex gap-[10px]"
          ref={mobileSliderRef}
        >
          {team.map((doctor, i) => {
            return (
              <div className="flex flex-col gap-[25px]" key={i}>
                <div className="w-[165px]">
                  <img alt="" className="w-full" src={doctor.img} />
                </div>
                <div>
                  <h3 className="text-[15px] uppercase leading-[140%]">
                    {doctor.name}
                  </h3>
                  <p className="text-[14px] leading-[135%] text-black/[0.5]">
                    {doctor.specialty.slice(0, 1).toUpperCase() +
                      doctor.specialty.slice(1)}
                  </p>
                </div>
                {/*<Link*/}
                {/*  className="leading-[140%] underline text-darkGrey"*/}
                {/*  href="/"*/}
                {/*>*/}
                {/*  Vezi orarul*/}
                {/*</Link>*/}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex gap-[8px] min-[1601px]:hidden">
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

      <div className="max-[1600px]:hidden min-[1601px]:ml-[250px] flex flex-col gap-[45px]">
        <p className="max-[1600px]:pb-[30px] leading-[145%] text-[14px] min-[1601px]:text-[22px] min-[1601px]:w-[500px]">
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

      <div
        className="max-[1600px]:hidden team-slider no-scrollbar w-full overflow-scroll flex gap-[25px]"
        ref={sliderRef}
      >
        {team.map((doctor, i) => {
          return (
            <div className="flex flex-col gap-[25px]" key={i}>
              <div
                className={`${
                  i === 0 ? "w-[405px] h-[540px]" : "w-[300px] h-[400px]"
                }`}
              >
                <img alt="" className="w-full" src={doctor.img} />
              </div>
              <div>
                <h3 className="text-[20px] uppercase leading-[105%]">
                  {doctor.name}
                </h3>
                <p className="text-black/[0.5]">
                  {doctor.specialty.slice(0, 1).toUpperCase() +
                    doctor.specialty.slice(1)}
                </p>
              </div>
              <Link className="leading-[140%] underline text-darkGrey" href="/">
                Vezi orarul
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Team;
