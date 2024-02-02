import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Blog from "@/components/Blog";
import React from "react";
import {client} from "@/sanity/lib/client";
import {groq} from "next-sanity";
import {useAppointmentModal} from "@/hooks/useAppointmentModal";
import Image from "next/image"

export default async function Home() {
  const team = await client.fetch(groq`*[_type == "doctor"] | order(_createdAt asc) {
  ...,
  schedule[]->,
  department[]->
  }`);

  return (
    <>
      <main>
          <img
            src="/Hero1.jpg"
            alt=""
            className="absolute top-0 left-0 w-screen h-screen object-cover object-top"
          />
          <Hero />
          <Services />
          <Team team={team}/>
          <Blog />
      </main>
    </>
  );
}

export const dynamic = "force-dynamic"