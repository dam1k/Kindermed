"use client";

import React, {useEffect, useState} from "react";
import formatDate from "@/utils/helpers/formatDate";
import { useRouter } from "next/navigation";
import { Button } from "./ui/Button";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image"

const BlogSidebar = ({ posts }: { posts: any }) => {
    const router = useRouter();
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        setWidth(window.innerWidth);

        window.addEventListener("resize", () => setWidth(window.innerWidth));
        return () =>
            window.removeEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    // function handlePostClick() {
    //     router.push()
    // }

  return (
    <div className="min-[1601px]:mr-[225px]">
      <div className="flex flex-col gap-[15px] min-[1025px]:gap-[25px]">
        <p className="text-[16px] min-[1025px]:text-[22px] leading-[145%]">
          Ultimele articole:
        </p>

        {posts &&
          posts.slice(0,3).map((post: any) => {
            return (
              <div
                className="flex gap-[10px] min-[1025px]:gap-[25px] cursor-pointer "
                key={post._id}
                onClick={() => router.push(`/blog/${post.slug.current}`)}
              >
                <Image
                  className="object-cover rounded-[14px] max-[1024px]:h-[90px] max-[1024px]:w-[90px] min-[1025px]:w-[200px] min-[1025px]:h-[125px]"
                  src={urlForImage(post.mainImage)}
                  width={width > 1024 ? 90 : 200}
                  height={width > 1024 ? 90 : 125}
                  alt=""
                />
                <div className="">
                  <div className="max-[1024px]:hidden flex mb-[8px] gap-[15px]">
                    {post.tags.map((tag: any) => {
                      return (
                        <span
                          key={tag}
                          style={{
                            color: tag.color,
                          }}
                        >
                          {"#" + tag.title}
                        </span>
                      );
                    })}
                  </div>
                  <h3 className="uppercase text-[16px] min-[1025px]:text-[20px] leading-[135%] w-full two-lines-text ellipsis three-lines-text">
                    {post.title}
                    {/*<br />*/}
                    {/*{post.title.split(" ").slice(4).join(" ")}*/}
                    {/*{post.title}*/}
                  </h3>
                  <div className="flex max-[1024px]:mt-[4px] justify-between items-center ">
                    <div className="min-[1025px]:hidden flex mb-[8px] gap-[15px]">
                        {post.tags.map((tag: any) => {
                            return (
                                <span
                                    key={tag}
                                    style={{
                                        color: tag.color,
                                        fontSize: 12,
                                    }}
                                >
                          {"#" + tag.title}
                        </span>
                            );
                        })}
                    </div>
                    <p className="max-[1024px]:text-[12px] min-[1025px]:mt-[32px] leading-[105%] text-lightGrey">
                      {formatDate(new Date(post?.publishedAt), ".")}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <Button
        variant="lightGrey"
        size="full"
        className="!text-black !py-[12px] !mt-[50px] !px-[17px]"
        onClick={() => router.push("/blog")}
      >
        Mai multe
      </Button>
    </div>
  );
};

export default BlogSidebar;
