import React from 'react';
import {GraphQLClient, gql} from "graphql-request";
import formatDate from "@/utils/helpers/formatDate"
import {Button} from "@/components/ui/Button"

const client = new GraphQLClient("https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clnzv3vau4jnn01t404al79um/master");

const QUERY = gql`
query Posts {
  posts {
    createdAt
    excerpt
    id
    publishedAt
    slug
    title
    tags
    updatedAt
    image {
      url
    }
  }
  postsConnection {
    edges {
      node {
        image {
          url
        }
        author {
          name
          id
        }
      }
    }
  }
}
`

async function Blog() {
    //@ts-ignore
    const {posts} = await client.request(QUERY);

    console.log(posts)

    return (
        <div className="container">
            <div id="blog"
                 className="container !pr-0 !mt-[358px] bg-[rgba(231, 233, 236, 0.50)] pt-[125px] grid grid-cols-2 gap-x-[25px] gap-y-[85px]">
                <div>
                    <div className="flex gap-[146px]">
                        <p className="uppercase text-black/[0.65] mt-[10px] ml-[3px] leading-[105%]">
                            Blog
                        </p>
                        <h2 className="uppercase text-[35px] text-black leading-[140%] tracking-[-0.35px]">
                            Informează-te despre <span className="text-blue">cele mai noi</span>
                        </h2>
                    </div>
                    <h2 className="uppercase text-[35px] text-black leading-[140%] tracking-[-0.35px]">
                        noutăți și evenimente de la KinderMed
                    </h2>
                </div>
                <div/>

                <div className="ml-[250px] leading-[145%] flex flex-col gap-[5px]">
                    <span className="text-blue">#citatulzilei</span>
                    <h3 className="w-[500px] text-[22px] text-black italic">
                        “Fii la curent cu cele mai recente noutăți din domeniul medical și cu
                        evenimentele importante organizate de KinderMed.”
                    </h3>
                </div>

                <div className="mr-[225px]">
                    <div className="flex flex-col gap-[25px]">
                        <p className="text-[22px] leading-[145%]">Ultimele articole:</p>
                        {posts && posts.map((post: any) => {
                            return <div className="flex gap-[25px]" key={post.id}>
                                <img className="object-cover rounded-[14px] w-[200px] h-[125px]" src={post.image.url}
                                     alt=""/>
                                <div className="">
                                    <div className="flex mb-[8px] gap-[15px]">
                                        {post.tags.map((tag: string) => {
                                            return <span key={tag} className={`
                                        ${tag === "important" ? "text-pink" : tag === "info" ? "text-yellow" : tag === "lifehacks" ? "text-purple" : ""}
                                        text-xs leading-[120%]
                                        `}>
                                            {"#" + tag}
                                        </span>
                                        })}
                                    </div>
                                    <h3 className="uppercase text-[20px] leading-[135%] w-[460px] overflow-hidden whitespace-nowrap overflow-ellipsis">
                                        {post.title}
                                    </h3>
                                    <p className="mt-[35px] leading-[105%] text-lightGrey">{formatDate(new Date(post?.publishedAt))}</p>
                                </div>
                            </div>
                        })}
                    </div>
                    <Button variant="lightGrey" size="full" className="!text-black !py-[12px] !mt-[50px] !px-[17px]">
                        Mai multe
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Blog;