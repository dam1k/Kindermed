import React from 'react';
import {groq} from "next-sanity";
import {client} from "@/sanity/lib/client";
import {PortableText} from "@portabletext/react"
import formatDate from "@/utils/helpers/formatDate";
import {urlForImage} from "@/sanity/lib/image";
import Footer from "@/components/Footer"

async function Article({params}: {params: {slug:string}}) {
    const {slug} = params
    const article = await client.fetch(groq`*[_type == "post" && slug.current == '${slug}'][0] {
    ...,
    tags[]->
    }`);

    const myPortableTextComponents = {
        types: {
            image: ({value}:{value:any}) => <img alt="" style={{ width: '100%', height: 'auto' }}  src={urlForImage(value)}/>,
            callToAction: ({value, isInline}:{value:{url:string, text:string}, isInline:boolean}) =>
                isInline ? (
                    <a href={value.url}>{value.text}</a>
                ) : (
                    <div className="callToAction">{value.text}</div>
                ),
            h4: ({value}:{value: {text:string}}) => <h4 className="text-[18px]">{value.text}</h4>,
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
        <>
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
                <div className="mt-[15px] flex gap-[8px]">
                    {article.tags.map((tag:any) => {
                        return <div key={tag._id} className={`border-[1px] text-[12px] leading-[14.4px] py-[5px] px-[10px] rounded-[10px]`}
                        style={{
                            borderColor: tag.color,
                            color: tag.color
                        }}>
                            #{tag.title}
                        </div>
                    })}
                </div>
            </div>
            <div className="prose">
                <PortableText value={article.body} components={myPortableTextComponents}/>
            </div>
        </div>
            <Footer/>
        </>
    );
}

export default Article;

export const dynamic = 'force-dynamic'