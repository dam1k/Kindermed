'use client'

import {usePathname} from "next/navigation";
import React from 'react';
import Image from "next/image";
import Link from "next/link"

interface dynamicPath {
    name: string;
    href: string;
}

function Breadcrumb() {
    const path = usePathname();
    let stringPaths:string[] = path.split("/");

    let paths = stringPaths.map((path:string, i:number) => {
        if(!path.length) {
            return {
                name: "HOME",
                href: "/"
            }
        } else {
            return {
                name: path.split("-").join(" ").toUpperCase(),
                href: stringPaths.slice(0, i + 1).join('/')
            }
        }
    })

    return (
        <div className="flex w-[275px] gap-[8px]">
            {paths && paths.map((path:dynamicPath, i:number) => {
                return <div className={`shrink-0 flex gap-[8px]`} key={i}>
                    <Link href={path.href} className={`${i === paths.length - 1 ? "text-blue" : "text-[#3E404D]/[0.5]"} overflow-ellipsis`}>
                        {path.name.length > 16 ? path.name.slice(0, 16) + "..." : path.name}
                    </Link>
                    {i !== paths.length-1 && <Image alt="" width={7} height={15} src="/icons/SmChevronRight.svg"/>}
                </div>
            })}
        </div>
    );
}

export default Breadcrumb;