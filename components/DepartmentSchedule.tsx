'use client'

import React, {useState, useEffect} from 'react';
import {useActiveDepartments} from "@/hooks/useActiveDepartments";


function DepartmentSchedule({team, department}:{team: any[], department:string}) {
    const [departmentDoctors, setDepartmentDoctors] = useState<any[]>([]);

    useEffect(() => {
        const doctorsFromDepartment = team.filter((doctor:any) => doctor.department === department);
        console.log(doctorsFromDepartment);
        setDepartmentDoctors(doctorsFromDepartment);
    }, [department, team]);

    if(!departmentDoctors.length) {
        return null
    }

    return <div className="">
        {departmentDoctors.length}
        {department}
    </div>
}

export default DepartmentSchedule;