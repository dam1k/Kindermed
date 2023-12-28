import React from "react";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";
import Footer from "@/components/Footer";
import Package from "@/components/Package";

async function Packages() {
    const packages = await client.fetch(
        groq`*[_type == "pachet"] | order(_createdAt asc) {
        ...,
        prices[]->
        }`
    );

    return (
        <>
            <div className="!mt-[50px] !pt-[25px] border-t-[1px] min-[1400px]:!mt-[100px] container flex !mb-[100px]">
                <h1 className="text-[35px] leading-[49px] w-[250px] uppercase">Pachete</h1>
                <div className="grid grid-cols-2 gap-y-[125px] gap-x-[35p] flex-1">
                    {packages.map((pachet:any, i:number) => {
                        return <Package pachet={pachet} key={pachet._id} i={i}/>
                    })}
                </div>
            </div>
            <Footer/>
            </>
    );
}

export default Packages;

export const dynamic = 'force-dynamic'