'use client'

import React from 'react';
import {useActiveTags} from "@/hooks/useActiveTags";

interface IScheduleFiltersProps {
    tags: any[];
}

function ArticlesFilters({tags}: IScheduleFiltersProps) {
    const {setActiveTags, activeTags} = useActiveTags();

    function handleClick(tag:any) {
        let newActiveTags:string[];
        if(activeTags.includes(tag._id)) {
            newActiveTags = activeTags.filter((item:string) => item !== tag._id);
        } else {
            newActiveTags = [tag._id, ...activeTags]
        }
        setActiveTags(newActiveTags);
    }

    function handleAllClick() {
        setActiveTags([]);
    }

    return (
        <div className="flex gap-[10px] pb-[50px] min-[770px]:pb-[45px] pt-[10px] w-full no-scrollbar overflow-scroll">
            <button onClick={handleAllClick}
                    className={`${activeTags.length === 0 ? "bg-blue text-white" : "bg-[#3E404D]/[0.05]"} shrink-0 ml-[10px] min-[770px]:!ml-0 transition-all leading-[16.8px] py-2 px-[14px] rounded-[50px]`}>
                Toate articolele
            </button>
            {tags.map((tag:any, i:number) => {
                return <button value={tag.title} onClick={(e) => {
                    handleClick(tag)
                }} className={`${i === tags.length-1 ? "mr-[10px] min-[770x]:mr-0" : ""}
                ${activeTags.includes(tag._id) ? "bg-blue text-white" : "bg-[#3E404D]/[0.05]"} shrink-0 transition-all leading-[16.8px] py-2 px-[14px] rounded-[50px]`} key={tag._id}>
                    {`#${tag.title}`}
                </button>
            })}
        </div>
    );
}

export default ArticlesFilters;