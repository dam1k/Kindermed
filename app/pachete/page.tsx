import React from "react";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";

async function Packages() {
    const packagesIcons = [
        // {
        //     src: "/Women.svg",
        //     sizes: [50, 82],
        // },
        // {
        //     src: "/Gynecology.svg",
        //     sizes: [116, 79],
        // },
        {
            src: "/Stetoscop.svg",
            sizes: [80, 82],
        },
        {
            src: "/Pulse.svg",
            sizes: [175, 90],
        },
        {
            src: "/Stetoscop.svg",
            sizes: [80, 82],
        },
        {
            src: "/Pulse.svg",
            sizes: [175, 90],
        },
    ];

    const packages = await client.fetch(
        groq`*[_type == "pachet"] | order(_createdAt asc)`
    );

    // packages.forEach((pachet:any) =>  {
    //     console.log(pachet.name);
    // })

    return (
        <div className="!mt-[50px] min-[1400px]:!mt-[100px] container flex">
            <h1 className="text-[35px] leading-[49px] w-[250px] uppercase">Pachete</h1>
            <div className="grid grid-cols-2 gap-[35p] flex-1">
                {packages.map((pachet:any, i:number) => {
                    return <div key={pachet._id}>
                        <Image src={packagesIcons[i].src}
                               width={packagesIcons[i].sizes[0]}
                               height={packagesIcons[i].sizes[1]}
                               alt="" />
                        <h1 className="mt-[25px]">{pachet.name}</h1>
                    </div>
                })}
            </div>
        </div>
    );
}

export default Packages;
