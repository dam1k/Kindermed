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
    <div className="container">
      <div
        id="blog"
        className="container !pr-0 !mt-[358px] bg-[rgba(231, 233, 236, 0.50)] pt-[125px] grid grid-cols-2 gap-x-[25px] gap-y-[85px]"
      >
        <div>
          <div className="flex gap-[146px]">
            <p className="uppercase text-black/[0.65] mt-[10px] ml-[3px] leading-[105%]">
              Blog
            </p>
            <h2 className="uppercase text-[35px] text-black leading-[140%] tracking-[-0.35px]">
              Informează-te despre{" "}
              <span className="text-blue">cele mai noi</span>
            </h2>
          </div>
          <h2 className="uppercase text-[35px] text-black leading-[140%] tracking-[-0.35px]">
            noutăți și evenimente de la KinderMed
          </h2>
        </div>
        <div />

        <div className="ml-[250px] leading-[145%] flex flex-col gap-[5px]">
          <span className="text-blue">#citatulzilei</span>
          <h3 className="w-[500px] text-[22px] text-black italic">
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
