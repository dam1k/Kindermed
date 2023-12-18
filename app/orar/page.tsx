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
            <div className="!mt-[50px] mb-[100px] max-[1315px]:!pr-0">
                <div className="">
                    <h3 className="container max-[1300px]:pr-[0] max-[1024px]:pl-[10px] text-[16px] mb-[10px] uppercase">Funcția</h3>
                    <ScheduleFilters departments={departmentsNames}/>
                </div>
                    {departments.map((department:any) => {
                        return <DepartmentSchedule key={department._id} department={department}/>
                    })}
            </div>
            <Footer/>
        </>
    );
}

export default Schedule;