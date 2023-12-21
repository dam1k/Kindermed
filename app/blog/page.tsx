import React from 'react';
import {client} from "@/sanity/lib/client";
import {groq} from "next-sanity";

async function Blog() {
const posts = await client.fetch(groq`*[_type == "post"] {
  ...,
  tags[]->
  }`);

const tags = await client.fetch(groq`*[_type == "tag"]`);
// console.log(tags);


// const tagsNames = posts.map((post:any) => post.tags)
    return (
        <div>Blog</div>
    );
}

export default Blog;