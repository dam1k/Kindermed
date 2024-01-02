import React from "react";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";
import Footer from "@/components/Footer";
import Package from "@/components/Package";

async function Packages() {
    const packages = await client.fetch(
        groq`*[_type == "pachet"] | order(_createdAt asc)`
    );

    return (
        <>
            <div className="!mt-[50px] min-[1400px]:!mt-[100px] container max-[1025px]:px-[10px] !mb-[100px]">
                {/*<div className="bg-black/[0.5] w-full h-[1px]"/>*/}
                <div className="min-[1400px]:flex min-[1400px]:!pt-[25px] min-[1400px]:border-t-[1px] border-[rgba(201, 202, 206, 0.50)]">
                    <h1 className="text-[16px] pb-[12px] min-[1400px]:pt-0 border-b-[1px] min-[1400px]:border-b-0 min-[1025px]:text-[35px] leading-[105%] min-[1025px]:leading-[49px] w-full min-[1400px]:w-[250px] uppercase">Pachete</h1>
                    <div className="grid grid-cols-1 min-[1400px]:grid-cols-2 gap-y-[125px] gap-x-[35p] flex-1">
                        {packages.map((pachet:any, i:number) => {
                            return <Package pachet={pachet} key={pachet._id} i={i}/>
                        })}
                    </div>
                </div>
            </div>
            <Footer/>
            </>
    );
}

export default Packages;

export const dynamic = 'force-dynamic'