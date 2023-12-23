import React from 'react';
import {client} from "@/sanity/lib/client";
import {groq} from "next-sanity";
import ArticlesFilters from "@/components/ArticlesFilters";
import {useActiveTags} from "@/hooks/useActiveTags";
import Articles from "@/components/Articles"
import Footer from "@/components/Footer"

async function Blog() {
    const posts = await client.fetch(groq`*[_type == "post"] {
      ...,
      tags[]->
      }`);

    const tags = await client.fetch(groq`*[_type == "tag"]`);


    return (
        <>
        <div className="mb-[100px] w-[770px] mx-auto">
            <div>
                <h3 className="uppercase">Categorii</h3>
                <ArticlesFilters tags={tags}/>
            </div>
            <div className="">
                <Articles articles={posts.slice(1)}/>
            </div>
        </div>
            <Footer/>
            </>
    );
}

export default Blog;