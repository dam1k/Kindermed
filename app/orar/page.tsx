import React from 'react';
import ScheduleFilters from "@/components/ScheduleFilters";
import {client} from "@/sanity/lib/client";
import {groq} from "next-sanity";
import DepartmentSchedule from "@/components/DepartmentSchedule";
import Footer from "../../components/Footer"

async function Schedule() {
    const departments = await client.fetch(groq`*[_type == "department"] | order(_createdAt asc) {
  ...,
  doctors[]-> {
  ...,
  schedule[]->
  }
  }`);

    const departmentsNames = departments.map((department:any) => department.specialty);

    return (
        <>
            <div className="!mt-[50px] mb-[100px] container">
                <h3 className="text-[16px] mb-[10px] uppercase">Funcția</h3>
               <ScheduleFilters departments={departmentsNames}/>
                    {departments.map((department:any) => {
                        return <DepartmentSchedule key={department._id} department={department}/>
                    })}
            </div>
            <Footer/>
        </>
    );
}

export default Schedule;