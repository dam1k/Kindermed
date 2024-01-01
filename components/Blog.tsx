import React from "react";
import {client} from "@/sanity/lib/client";
import {groq} from "next-sanity"
import BlogSidebar from "./BlogSidebar";


async function Blog() {
  const posts = await client.fetch(groq`*[_type == "post"] {
  ...,
  tags[]->
  }`);

  return (
      <>
        <div className="bg-lightGreyBg">
          <div
            id="blog"
            className="grid-cols-1 max-[1600px]:justify-center container max-[1024px]:px-[10px] !pb-[100px] min-[1025px]:!pb-[125px] max-[1024px]:!pt-[100px] min-[1025px]:!pt-[125px] grid min-[1601px]:grid-cols-2 gap-x-[25px] gap-y-[85px] max-[1024px]:!gap-y-[35px] "
          >
              <div className="relative">
                <p className="absolute top-0 left-0 uppercase text-black/[0.65] mt-[5px] min-[1025px]:mt-[10px] ml-[1px] min-[1025px]:ml-[3px] min-[1025px]:text-[16px] text-[12px] min-[1025px]:text-[16pxs] leading-[105%]">
                  Blog
                </p>
                <h2 className="ml-[100px] min-[1025px]:ml-[225px] min-[1815px]:ml-[250px] inline uppercase text-[20px] min-[1025px]:text-[35px] text-black leading-[140%] tracking-[-0.35px]">
                  Informează-te despre noutăți și evenimente de la KinderMed
                </h2>
              </div>
            <div className="max-[1601px]:hidden" />

            <div className="min-[1601px]:mb-[30px] min-[1025px]:ml-[225px] min-[1815px]:ml-[250px]   leading-[145%] flex flex-col gap-[5px]">
              <span className="text-blue max-[1024px]:hidden">#citatulzilei</span>
              <h3 className="min-[1025px]:w-[500px] text-[14px] min-[1025px]:text-[22px] text-black italic">
                “Fii la curent cu cele mai recente noutăți din domeniul medical și
                cu evenimentele importante organizate de KinderMed.”
              </h3>
            </div>
            {posts.length && <BlogSidebar posts={posts.slice(1)} />}
          </div>
        </div>
        </>
  );
}

export default Blog;
export const dynamic = 'force-dynamic'
