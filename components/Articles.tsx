import React from 'react';
import Article from "@/components/Article"

function Articles({articles}:{articles:any[]}) {
    return (
        <div className="px-[10px] min-[770px]:!px-0">
            {articles.map((article:any, index) => {
                return <Article key={article._id} article={article}/>
            })}
        </div>
    );
}

export default Articles;