'use client'

import React, {useEffect} from 'react';
import {useActiveDepartments} from "@/hooks/useActiveDepartments";

interface IScheduleFiltersProps {
    departments: any[];
}
function ScheduleFilters({departments}: IScheduleFiltersProps) {
    const {setActiveDepartments, activeDepartments} = useActiveDepartments();
    useEffect(() => {
        console.log(activeDepartments);
    }, [activeDepartments]);
    // const [activeDepartments, setActiveDepartments] = useState<string[]>([]);
    function handleClick(newDepartment:string) {
        let newActiveDepartments:string[];
      if(activeDepartments.includes(newDepartment)) {
          newActiveDepartments = activeDepartments.filter((department:string) => department !== newDepartment)
      } else {
          newActiveDepartments = [newDepartment, ...activeDepartments]
      }
        setActiveDepartments(newActiveDepartments);
    }

    return (
        <div className="flex gap-[10px] border-b-[1px] border-[#C9CACE]/[0.5] pb-[25px] pt-[10px] w-full no-scrollbar overflow-scroll">
            {departments.map((department:string) => {
                return <button value={department} onClick={(e:React.MouseEvent<HTMLButtonElement>) => {
                    handleClick(department)
                }} className={`${activeDepartments.includes(department) ? "bg-blue text-white" : "bg-[#3E404D]/[0.05]"} leading-[16.8px] py-2 px-[14px] rounded-[50px]`} key={department}>
                    {`${department.slice(0, 1).toUpperCase()}${department.slice(1)}`}
                </button>
            })}
        </div>
    );
}

export default ScheduleFilters;