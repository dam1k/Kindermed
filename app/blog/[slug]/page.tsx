import React from 'react';
import {groq} from "next-sanity";
import {client} from "@/sanity/lib/client";
import {PortableText} from "@portabletext/react"
import formatDate from "@/utils/helpers/formatDate";
import Image from "next/image"
async function Article({params}: {params: {slug:string}}) {
    const {slug} = params
    const article = await client.fetch(groq`*[_type == "post" && slug.current == '${slug}'][0]`);
    console.log(article.body);
    // const ptComponents = {
    //     types: {
    //         image: ({ value }) => {
    //             if (!value?.asset?._ref) {
    //                 return null
    //             }
    //             return (
    //                 <img
    //                     alt={value.alt || ' '}
    //                     loading="lazy"
    //                     src={urlFor(value).width(320).height(240).fit('max').auto('format')}
    //                 />
    //             )
    //         }
    //     }
    // }
    // title,
    //     "name": author->name,
    //     "categories": categories[]->title,
    //     "authorImage": author->image
    // console.log(router.query.slug);

    // useEffect(() => {
    //    async function fetchPosts() {
    //        const slug = params.slug;
    //        if(params.slug) {
    //            const post = await client.fetch(groq`*[_type == "post" && slug.current == '${slug}'][0]`);
    //            return post
    //        }
    //        console.log(params.slug)
    //    }
    //     console.log(fetchPosts().then((data) => console.log(data)))
    // }, [params.slug]);

    const myPortableTextComponents = {
        types: {
            image: ({value}:{value: {imageUrl:string}}) => <Image fill src={value.imageUrl} alt=""/>,
            callToAction: ({value, isInline}:{value:{url:string, text:string}, isInline:boolean}) =>
                isInline ? (
                    <a href={value.url}>{value.text}</a>
                ) : (
                    <div className="callToAction">{value.text}</div>
                ),
        },
        marks: {
            link: ({children, value}:any) => {
                const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
                return (
                    <a href={value.href} rel={rel}>
                        {children}
                    </a>
                )
            },
        },
    }

    return (
        <div className="mt-[100px] min-[1400px]:mt-[50px] mb-[100px] w-full min-[770px]:w-[750px] mx-auto">
            {/*{article.body.slice(0, 1).map((item: any, i: number) => {*/}
            {/*    return <p key={i} className="!text-[#3E404D]/[0.8] text-[14px] min-[650px]:text-[16px] leading-[21.7px] min-[650px]:leading-[24.8px]">*/}
            {/*        {item.children[0]?.text}*/}
            {/*        <br/>*/}
            {/*    </p>*/}
            {/*})}*/}
            <div className="relative mt-[15px] min-[650px]:mt-[20px] mb-[45px] min-[650px]:mb-[55px]">
                <p className="text-[#068FFF] absolute left-0 text-[16px] min-[650px]:text-[16px] top-[9px] leading-[16.8px]">
                    {formatDate(new Date(article?.publishedAt), ".")}
                </p>
                <h1 className="uppercase min-[650px]:text-[35px] leading-[22.4px] min-[650px]:leading-[49px] inline ml-[125px] min-[650px]:ml-[150px]">
                    {article.title}
                </h1>
            </div>
            <PortableText value={article.body} components={myPortableTextComponents}/>
        </div>
    );
}

export default Article;

export const dynamic = 'force-dynamic'