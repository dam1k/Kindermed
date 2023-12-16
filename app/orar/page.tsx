'use client'

import React, {useState} from 'react';
import {team} from "@/utils/data"
import ScheduleFilters from "@/components/ScheduleFilters";
import {client} from "@/sanity/lib/client";
import {groq} from "next-sanity";

function Schedule() {
  //   const team = await client.fetch(groq`*[_type == "doctor"] {
  // ...,
  // schedule[]->
  // }`);
    const [activeDepartments, setActiveDepartments] = useState<string[]>([]);
    const departments = ["Toate", ...Array.from(new Set(team.map((doctor) => doctor.specialty)))]

    return (
        <>
            <div className="!mt-[50px] container">
                <h3 className="text-[16px] mb-[10px] uppercase">Funția</h3>
               <ScheduleFilters activeDepartments={activeDepartments}
                                setActiveDepartments={setActiveDepartments}
                                departments={departments}/>
            </div>
        </>
    );
}

export default Schedule;