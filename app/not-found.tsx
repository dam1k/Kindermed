'use client'

import React, {useEffect} from 'react';
import {Button} from "@/components/ui/Button"
import Image from "next/image"
import {useRouter} from "next/navigation"

function NotFound() {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        },  5000);
    }, [router]);
    return (
        <div className="w-full h-[calc(100vh-60px)] min-[1401px]:h-[calc(100vh-250px)] overflow-hidden flex items-center justify-center">
            <div className="w-[361px] translate-y-[-30px] min-[1401px]:translate-y-[-125px]">
                <div className="flex items-center gap-[35px]">
                    <h1 className="text-[55px] leading-[77px]">404</h1>
                    <div className="h-[41px] w-[1px] bg-[#3E404D]/[0.25]"/>
                    <Button className="flex items-center gap-[6px] bg-transparent border-[1px] tracking-[1%] border-[#141A20] text-[#141A20]"
                    onClick={() => router.push("/")}>
                        Pagina principala
                        <Image src="/icons/DoubleArrow.svg" width={17} height={17} alt=""/>
                    </Button>
                </div>
                <p className="mt-[15px] text-[#3E404D]/[0.5] text-[14px] text-center leading-[16.8px]">Această pagină nu există. Veți fi redirecționat(ă) către pagina principală în <span className="text-[#00AAF1]">5 secunde.</span></p>
            </div>
        </div>
    );
}

export default NotFound;