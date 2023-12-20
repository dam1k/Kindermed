"use client";

import React, { useState, useEffect } from "react";
import { useActiveDepartments } from "@/hooks/useActiveDepartments";
import {urlForImage} from "@/sanity/lib/image";
import {AnimatePresence, motion} from "framer-motion";

const variants = {
    open: {
        opacity: 1,
        height: "auto",
        paddingTop: 25,
        paddingBottom: 25
    },
    collapsed: {
        opacity: 0,
        height: 0,
        paddingTop: 0,
        paddingBottom: 0
    },
}
function DepartmentSchedule({ department, i, departments }: { department: any, i:number, departments: any[] }) {
    const {activeDepartments} = useActiveDepartments()
  return (
      <AnimatePresence mode="wait" initial={false}>
          {(activeDepartments.includes(department.specialty) || activeDepartments.length === 0) ? <motion.div
              // variants={variants}
              // key={department.specialty}
              // initial="collapsed"
              // animate="open"
              // transition={{duration: 0.3}}
              // exit="collapsed"
              className={`max-[1315px]:flex-col mb-[6px] flex py-[25px] ${i !== departments.length - 1 ? "border-b-[1px] border-[#C9CACE]/[0.5]" : ""}`}>
              <div className="mb-[6px] max-[1024px]:pl-[10px] min-[1025px]:pl-[25px] shrink-0 w-full min-[500px]:w-[250px] pr-[10px] min-[500px]:justify-start justify-between flex gap-[10px]">
                <h2 className="text-[25px] leading-[35px] uppercase">
                  {department.specialty}
                </h2>
                  <h2 className="text-[25px] leading-[35px] text-[#3e404d]/[0.5]">{department.doctors.length}</h2>
              </div>
              <div className="flex gap-[25px] no-scrollbar overflow-x-scroll">
                    {department.doctors.map((doctor:any, i:number) => {
                        return <div className={`shrink-0 ${i === 0 ? "max-[1024px]:pl-[10px] max-[1315px]:pl-[25px]" : i === department.doctors.length-1 ? "pr-[10px]" : ""}`}
                                    key={doctor._id}>
                            <div className="w-[230px] h-[230px] mb-[17px]">
                                <img className="rounded-[15px] w-full h-full object-cover object-top" src={doctor.mainImage ? urlForImage(doctor.mainImage) : "/Doctor2.jpg"} alt=""/>
                            </div>
                           <div className="mb-[20px]">
                               <h3 className="uppercase text-[20px] leading-[105%]">{doctor.fullName}</h3>
                               <p className="text-[#3E404D]/[0.5] text-[14px] leading-[105%] mt-[5px]">{department.specialty}</p>
                           </div>
                            <div className="flex flex-col gap-[7px]">
                                {doctor.schedule.map((scheduleDate:any, i:number) => {
                                    return <div key={i} className="leading-[150%] text-[14px]">
                                        <p>{scheduleDate.day}</p>
                                        <p className="text-[#00AAF1]">{scheduleDate.hours}</p>
                                    </div>
                                })}
                            </div>
                        </div>
                    })}
                </div>
            </motion.div> : null}
      </AnimatePresence>
  );
}

export default DepartmentSchedule;
