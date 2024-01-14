import React from 'react';
import ScheduleFilters from "@/components/ScheduleFilters";
import {client} from "@/sanity/lib/client";
import {groq} from "next-sanity";
import DepartmentSchedule from "@/components/DepartmentSchedule";
import Footer from "../../components/Footer"

async function Schedule() {
    let departments = await client.fetch(groq`*[_type == "department"] | order(_createdAt asc) {
  ...,
  doctors[]-> {
  ...,
  schedule[]->
  }
  }`);

    departments = departments.filter((department:any) => {
        let showDepartment;
        department.doctors.forEach((doctor:any) => {
            if(!doctor.schedule) {
                showDepartment = false;
            } else {
                showDepartment = true;
            }
        })
        return showDepartment;
    })

    const departmentsNames = departments.map((department:any) => department.specialty);

    return (
        <>
            <div className="!mt-[50px] !mb-[100px] max-[1315px]:!pr-0">
                <div className="">
                    <h3 className="ml-[10px] min-[1025px]:ml-[25px] text-[16px] uppercase">Funcția</h3>
                    <ScheduleFilters departments={departmentsNames}/>
                </div>
                    {departments.map((department:any, i:number) => {
                        return <DepartmentSchedule key={department._id} i={i} departments={departments} department={department}/>
                    })}
            </div>
            <Footer/>
        </>
    );
}

export default Schedule;

export const dynamic = "force-dynamic"