'use client'

import React, { useState, useEffect } from "react";
import {urlForImage} from "@/sanity/lib/image";
import formatDate from "@/utils/helpers/formatDate";
import {useActiveTags} from "@/hooks/useActiveTags";
import {useRouter} from "next/navigation";

function Article({article}:{article:any}) {
    const [showArticle, setShowArticle] = useState<boolean>(true);
    const {activeTags} = useActiveTags();
    const router = useRouter();

    function handleArticleClick() {
        // console.log(article.slug.current);
        router.push(`/blog/${article.slug.current}`);
    }

    useEffect(() => {
        const ids = article.tags.map((tag:any) => tag._id);
        ids.forEach((id:string) => {
            if(activeTags.includes(id)) {
                setShowArticle(true)
            } else {
                setShowArticle(false);
            }
        })
    }, [article, activeTags]);


    return (
        <>
        {(showArticle || activeTags.length === 0) &&
            <div className="cursor-pointer" onClick={handleArticleClick}>
                <div className="relative w-full h-[215px] min-[770px]:w-[750px] min-[650px]:h-[400px] rounded-[14px] overflow-hidden">
                    <img
                        className="w-full h-full object-cover"
                        src={urlForImage(article.mainImage)}
                        alt=""
                    />
                    <div className="absolute z-[10] top-[16px] left-[12px] min-[650px]:top-[25px] min-[650px]:left-[25px] flex gap-[8px]">
                        {article.tags.map((tag: any, i: number) => {
                            return (
                                <span
                                    key={i}
                                    style={{
                                        backgroundColor: tag.color,
                                    }}
                                    className="text-white py-[6px] px-[10px] text-[12px] leading-[14.4px] rounded-[10px]"
                                >
                                      #{tag.title}
                                    </span>
                            );
                        })}
                    </div>
                </div>
                <div className="relative mt-[15px] min-[650px]:mt-[20px] mb-[45px] min-[650px]:mb-[55px]">
                    <p className="text-[#068FFF] absolute left-0 text-[14px] min-[650px]:text-[16px] top-[6px] leading-[16.8px]">
                        {formatDate(new Date(article?.publishedAt), ".")}
                    </p>
                    <h1 className="uppercase min-[650px]:text-[25px] leading-[22.4px] min-[650px]:leading-[35px] inline ml-[125px] min-[650px]:ml-[150px]">
                        {article.title}
                    </h1>
                    <div className="mt-[15px]">
                        {article.body.slice(0, 1).map((item: any, i: number) => {
                            return <p key={i} className="!text-[#3E404D]/[0.8] text-[14px] min-[650px]:text-[16px] leading-[21.7px] min-[650px]:leading-[24.8px]">
                                {item.children[0]?.text}
                                <br/>
                            </p>
                        })}
                    </div>
                </div>
            </div>}
            </>
    );
}

export default Article;