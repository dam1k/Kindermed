import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Blog from "@/components/Blog";
import React from "react";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <img
          src="/Gradient.jpg"
          alt=""
          className="object-cover z-[-1] max-[1400px]:hidden h-screen absolute top-0 left-0 w-full saturate-0"
        />
        {/*<div className="absolute top-0 left-0 w-full max-[1400px]:hidden h-screen z-[1] bg-[#fff]/[0.90]" />*/}

        <div className="min-[1401px]:hidden h-[calc(100%+322px)] absolute top-0 left-0 w-full">
          <img
            src="/Hero.jpg"
            alt=""
            className="object-cover translate-y-[-100px] h-full w-full saturate-0"
          />
        </div>
        <div className="absolute top-0 left-0 w-full min-[1401px]:hidden h-[calc(100%+322px)] z-[1] bg-[#fff]/[0.90]" />

        <div className="relative z-[2]">
          <Hero />
          <Services />
          <Team />
          <Blog />
        </div>
      </main>
      <Footer />
    </>
  );
}
