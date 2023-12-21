'use client'

import React from 'react';
import {useActiveArticles} from "@/hooks/useActiveArticles";

interface IScheduleFiltersProps {
    departments: any[];
}
function ScheduleFilters({departments}: IScheduleFiltersProps) {
    const {setActiveArticles, activeArticles} = useActiveArticles();
    function handleClick(newDepartment:string) {
        // let newActiveDepartments:string[];
        // if(activeDepartments.includes(newDepartment)) {
        //     newActiveDepartments = activeDepartments.filter((department:string) => department !== newDepartment)
        // } else {
        //     newActiveDepartments = [newDepartment, ...activeDepartments]
        // }
        // setActiveDepartments(newActiveDepartments);
    }

    function handleAllClick() {
        // setActiveDepartments([]);
    }

    return (
        <div className="flex gap-[10px] border-b-[1px] border-[#C9CACE]/[0.5] pb-[25px] pt-[10px] w-full no-scrollbar overflow-scroll">
            <button onClick={handleAllClick}
                    className={`${activeArticles.length === 0 ? "bg-blue text-white" : "bg-[#3E404D]/[0.05]"} ml-[10px] min-[1025px]:ml-[25px] transition-all leading-[16.8px] py-2 px-[14px] rounded-[50px]`}>
                Toate
            </button>
            {/*{departments.map((department:string, i:number) => {*/}
            {/*    return <button value={department} onClick={(e) => {*/}
            {/*        handleClick(department)*/}
            {/*    }} className={`${i === departments.length-1 ? "mr-[10px] min-[1025px]:mr-[25px]" : ""}*/}
            {/*    ${activeDepartments.includes(department) ? "bg-blue text-white" : "bg-[#3E404D]/[0.05]"} transition-all leading-[16.8px] py-2 px-[14px] rounded-[50px]`} key={department}>*/}
            {/*        {`${department.slice(0, 1).toUpperCase()}${department.slice(1)}`}*/}
            {/*    </button>*/}
            {/*})}*/}
        </div>
    );
}

export default ScheduleFilters;