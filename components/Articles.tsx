import React from 'react';
import {urlForImage} from "@/sanity/lib/image";
import formatDate from "@/utils/helpers/formatDate";

function Articles({articles}:{articles:any[]}) {
    return (
        <div className="flex flex-col">
            {articles.map((article:any) => {
                // console.log(article)
                return <div key={article._id}>
                    <div className="relative w-[750px] h-[400px] rounded-[14px] overflow-hidden">
                        <img className="w-full h-full object-cover" src={urlForImage(article.mainImage)} alt=""/>
                        <div className="absolute z-[10] top-[25px] left-[25px] flex gap-[8px]">
                            {article.tags.map((tag:any) => {
                                return <span key={tag._id}
                                             style={{
                                                 backgroundColor: tag.color
                                             }}
                                             className="text-white py-[6px] px-[10px] text-[12px] leading-[14.4px] rounded-[10px]">#{tag.title}</span>
                            })}
                        </div>
                    </div>
                    <div className="relative mt-[20px] mb-[55px]">
                        <p className="text-[#068FFF] absolute left-0 top-[6px] leading-[16.8px]">
                            {formatDate(new Date(article?.publishedAt), ".")}
                        </p>
                        <h1 className="uppercase text-[25px] leading-[35px] inline ml-[150px]">
                            {article.title}
                        </h1>
                        <p className="mt-[15px]">
                            {/*{article.body.nmap}*/}
                        </p>
                    </div>
                </div>
            })}
        </div>
    );
}

export default Articles;