import React from 'react';
import {client} from "@/sanity/lib/client";
import {groq} from "next-sanity";
import ArticlesFilters from "@/components/ArticlesFilters";
import Articles from "@/components/Articles"
import Footer from "@/components/Footer"
import Breadcrumb from "@/components/Breadcrumb";

async function Blog() {
    const posts = await client.fetch(groq`*[_type == "post"] {
      ...,
      tags[]->
      }`);

    const tags = await client.fetch(groq`*[_type == "tag"]`);

    return (
        <>
        <div className="mt-[50px] mb-[100px] w-full min-[770px]:w-[750px] mx-auto">
            {/*<div className="max-[]"*/}
            {/*<Breadcrumb/>*/}
            <div>
                <h3 className="uppercase ml-[10px] min-[770px]:!ml-0">Categorii</h3>
                <ArticlesFilters tags={tags}/>
            </div>
            <div className="min-h-screen">
                <Articles articles={posts}/>
            </div>
        </div>
            <Footer/>
            </>
    );
}

export default Blog;
export const dynamic = 'force-dynamic'
