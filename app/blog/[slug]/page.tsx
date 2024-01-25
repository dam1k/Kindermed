import React from 'react';
import {groq} from "next-sanity";
import {client} from "@/sanity/lib/client";
import {PortableText} from "@portabletext/react"
import formatDate from "@/utils/helpers/formatDate";
import {urlForImage} from "@/sanity/lib/image";
import Footer from "@/components/Footer"
import Breadcrumb from "@/components/Breadcrumb";

async function Article({params}: {params: {slug:string}}) {
    const {slug} = params
    const article = await client.fetch(groq`*[_type == "post" && slug.current == '${slug}'][0] {
    ...,
    tags[]->
    }`);

    const myPortableTextComponents = {
        types: {
            image: ({value}:{value:any}) => <img alt="" style={{ width: '100%', height: 'auto', borderRadius: 14 }}  src={urlForImage(value)}/>,
            callToAction: ({value, isInline}:{value:{url:string, text:string}, isInline:boolean}) =>
                isInline ? (
                    <a href={value.url}>{value.text}</a>
                ) : (
                    <div className="callToAction">{value.text}</div>
                ),
        },
        block: {
            //@ts-ignore
            h3: ({children}) => <h3 className="!text-[18px] leading-[25.2px] min-[770px]:leading-[28px] uppercase text-black !font-[400]">{children}</h3>,
            //@ts-ignore
            h4: ({children}) => <h4 className="!text-[18px] leading-[25.2px] min-[770px]:leading-[28px] text-black !font-[400]">{children}</h4>,
            //@ts-ignore
            normal: ({children}) => <p className="text-[14px] leading-[21.7px] text-black/[0.8] min-[770px]:leading-[24.8px] min-[770px]:text-[16px] !font-[400]">{children}</p>,
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
        <div className="px-[10px] min-[770px]:!px-0 mt-[48px] min-[770px]:mt-[100px] min-[1400px]:mt-[50px] mb-[100px] w-full min-[770px]:w-[750px] mx-auto">
            {/*{article.body.slice(0, 1).map((item: any, i: number) => {*/}
            {/*    return <p key={i} className="!text-[#3E404D]/[0.8] text-[14px] min-[650px]:text-[16px] leading-[21.7px] min-[650px]:leading-[24.8px]">*/}
            {/*        {item.children[0]?.text}*/}
            {/*        <br/>*/}
            {/*    </p>*/}
            {/*})}*/}
            <div className="min-[650px]:hidden">
                <Breadcrumb/>
            </div>
            <div className="relative mt-[25px] min-[650px]:mt-[20px] mb-[45px] min-[650px]:mb-[55px]">
                <p className="text-[#068FFF] absolute left-0 text-[16px] min-[650px]:text-[16px] top-[9px] leading-[16.8px]">
                    {formatDate(new Date(article?.publishedAt), ".")}
                </p>
                <h1 className="uppercase min-[650px]:text-[35px] text-black leading-[22.4px] min-[650px]:leading-[49px] inline ml-[125px] min-[650px]:ml-[150px]">
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
            <div className="prose max-w-full">
                {/*@ts-ignore*/}
                <PortableText value={article.body} components={myPortableTextComponents}/>
            </div>
        </div>
    );
}

export default Article;
