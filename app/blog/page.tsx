import React from 'react';
import {client} from "@/sanity/lib/client";
import {groq} from "next-sanity";
import ArticlesFilters from "@/components/ArticlesFilters";

async function Blog() {
const posts = await client.fetch(groq`*[_type == "post"] {
  ...,
  tags[]->
  }`);

const tags = await client.fetch(groq`*[_type == "tag"]`);
console.log(tags);


// const tagsNames = posts.map((post:any) => post.tags)
    return (
        <div className="w-[750px] mx-auto">
            <div>
                <h3 className="container uppercase">Categorii</h3>
                <ArticlesFilters tags={tags}/>
            </div>
            <div className="container">
                Blog
            </div>
        </div>
    );
}

export default Blog;