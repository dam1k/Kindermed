"use client";

import React from "react";
import formatDate from "@/utils/helpers/formatDate";
import { useRouter } from "next/navigation";
import { Button } from "./ui/Button";

const BlogSidebar = ({ posts }: { posts: any }) => {
  const router = useRouter();

  return (
    <div className="mr-[225px]">
      <div className="flex flex-col gap-[25px]">
        <p className="text-[22px] leading-[145%]">Ultimele articole:</p>
        {posts &&
          posts.map((post: any) => {
            return (
              <div className="flex gap-[25px]" key={post.id}>
                <img
                  className="object-cover rounded-[14px] w-[200px] h-[125px]"
                  src={post.image.url}
                  alt=""
                />
                <div className="">
                  <div className="flex mb-[8px] gap-[15px]">
                    {post.tags.map((tag: string) => {
                      return (
                        <span
                          key={tag}
                          className={`
                                ${
                                  tag === "important"
                                    ? "text-pink"
                                    : tag === "info"
                                    ? "text-yellow"
                                    : tag === "lifehacks"
                                    ? "text-purple"
                                    : ""
                                }
                                text-xs leading-[120%]
                                `}
                        >
                          {"#" + tag}
                        </span>
                      );
                    })}
                  </div>
                  <h3 className="uppercase text-[20px] leading-[135%] w-[460px] ellipsis">
                    {post.title.split(" ").slice(0, 4).join(" ")}
                    <br />
                    {post.title.split(" ").slice(4).join(" ")}
                  </h3>
                  <p className="mt-[35px] leading-[105%] text-lightGrey">
                    {formatDate(new Date(post?.publishedAt))}
                  </p>
                </div>
              </div>
            );
          })}
        {posts &&
          posts.map((post: any) => {
            return (
              <div className="flex gap-[25px]" key={post.id}>
                <img
                  className="object-cover rounded-[14px] w-[200px] h-[125px]"
                  src={post.image.url}
                  alt=""
                />
                <div className="">
                  <div className="flex mb-[8px] gap-[15px]">
                    {post.tags.map((tag: string) => {
                      return (
                        <span
                          key={tag}
                          className={`
                                ${
                                  tag === "important"
                                    ? "text-pink"
                                    : tag === "info"
                                    ? "text-yellow"
                                    : tag === "lifehacks"
                                    ? "text-purple"
                                    : ""
                                }
                                text-xs leading-[120%]
                                `}
                        >
                          {"#" + tag}
                        </span>
                      );
                    })}
                  </div>
                  <h3 className="uppercase text-[20px] leading-[135%] w-[460px] ellipsis">
                    {post.title.split(" ").slice(0, 4).join(" ")}
                    <br />
                    {post.title.split(" ").slice(4).join(" ")}
                  </h3>
                  <p className="mt-[35px] leading-[105%] text-lightGrey">
                    {formatDate(new Date(post?.publishedAt))}
                  </p>
                </div>
              </div>
            );
          })}
        {posts &&
          posts.map((post: any) => {
            return (
              <div className="flex gap-[25px]" key={post.id}>
                <img
                  className="object-cover rounded-[14px] w-[200px] h-[125px]"
                  src={post.image.url}
                  alt=""
                />
                <div className="">
                  <div className="flex mb-[8px] gap-[15px]">
                    {post.tags.map((tag: string) => {
                      return (
                        <span
                          key={tag}
                          className={`
                                ${
                                  tag === "important"
                                    ? "text-pink"
                                    : tag === "info"
                                    ? "text-yellow"
                                    : tag === "lifehacks"
                                    ? "text-purple"
                                    : ""
                                }
                                text-xs leading-[120%]
                                `}
                        >
                          {"#" + tag}
                        </span>
                      );
                    })}
                  </div>
                  <h3 className="uppercase text-[20px] leading-[135%] w-[460px] ellipsis">
                    {post.title.split(" ").slice(0, 4).join(" ")}
                    <br />
                    {post.title.split(" ").slice(4).join(" ")}
                  </h3>
                  <p className="mt-[35px] leading-[105%] text-lightGrey">
                    {formatDate(new Date(post?.publishedAt))}
                  </p>
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
