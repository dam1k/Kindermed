import React from "react";
import { GraphQLClient, gql } from "graphql-request";
import BlogSidebar from "./BlogSidebar";

const client = new GraphQLClient(
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clnzv3vau4jnn01t404al79um/master"
);

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
`;

async function Blog() {
  //@ts-ignore
  const { posts } = await client.request(QUERY);

  return (
    <div className="bg-lightGreyBg">
      <div
        id="blog"
        className="max-[1600px]:justify-center max-[1600px]:grid-cols-1 container max-[1024px]:px-[10px] !pb-[100px] min-[1025px]:!pb-[125px] max-[1024px]:!pt-[100px] min-[1025px]:!pt-[125px] grid grid-cols-2 gap-x-[25px] gap-y-[85px] max-[1024px]:!gap-y-[35px] "
      >
        <div>
          <div className="flex gap-[50px] min-[1025px]:gap-[100px] min-[1615px]:gap-[100px] min-[1815px]:gap-[205px]">
            <p className="uppercase text-black/[0.65] mt-[5px] min-[1025px]:mt-[10px] ml-[1px] min-[1025px]:ml-[3px] text-[12px] min-[1025px]:text-[16pxs] leading-[105%]">
              Blog
            </p>
            <h2 className="uppercase text-[20px] min-[1025px]:text-[35px] text-black leading-[140%] tracking-[-0.35px]">
              Informează-te despre{" "}
              <span className="max-[1024px]:hidden text-blue">
                cele mai noi
              </span>
            </h2>
          </div>
          <h2 className="uppercase text-[20px] min-[1025px]:text-[35px] text-black leading-[140%] tracking-[-0.35px]">
            noutăți și evenimente de la KinderMed
          </h2>
        </div>
        <div className="max-[1024px]:hidden" />

        <div className="max-[1024px]:mb-[30px] min-[1025px]:ml-[142px] min-[1815px]:ml-[250px] min-[1615px]:ml-[142px] leading-[145%] flex flex-col gap-[5px]">
          <span className="text-blue max-[1024px]:hidden">#citatulzilei</span>
          <h3 className="min-[1025px]:w-[500px] text-[14px] min-[1025px]:text-[22px] text-black italic">
            “Fii la curent cu cele mai recente noutăți din domeniul medical și
            cu evenimentele importante organizate de KinderMed.”
          </h3>
        </div>
        {posts && <BlogSidebar posts={posts} />}
      </div>
    </div>
  );
}

export default Blog;
