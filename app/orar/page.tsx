import React from 'react';
// import {team} from "@/utils/data"
import ScheduleFilters from "@/components/ScheduleFilters";
import {client} from "@/sanity/lib/client";
import {groq} from "next-sanity";
import DepartmentSchedule from "@/components/DepartmentSchedule";

async function Schedule() {
    const team = await client.fetch(groq`*[_type == "doctor"] {
  ...,
  schedule[]->
  }`);
    const departments:any[] = [...Array.from(new Set(team.map((doctor:any) => doctor.department)))]
    return (
        <>
            <div className="!mt-[50px] container">
                <h3 className="text-[16px] mb-[10px] uppercase">Funția</h3>
               <ScheduleFilters departments={departments}/>
                <div className="mt-[25px]">
                    {departments.map((department:string) => {
                        return <DepartmentSchedule key={department} team={team} department={department}/>
                    })}
                </div>
            </div>
        </>
    );
}

export default Schedule;