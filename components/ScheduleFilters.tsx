import React from 'react';

interface IScheduleFiltersProps {
    activeDepartments: string[];
    setActiveDepartments:React.Dispatch<React.SetStateAction<string[]>>;
    departments: string[];
}
function ScheduleFilters({departments, setActiveDepartments, activeDepartments}: IScheduleFiltersProps) {
    function handleClick(department:string) {
      if(activeDepartments.includes(department)) {
          setActiveDepartments((prev) => prev.filter((item) => item !== department));
      } else {
          setActiveDepartments((prev:any) => [...prev, department]);
      }
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
            <div className="">

            </div>
        </div>
    );
}

export default ScheduleFilters;