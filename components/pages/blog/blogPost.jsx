"use client";

import useFetchPost from "@/hooks/useFetchPost";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { formatDate } from "@/utils/format-date";
import { PortableText } from "@portabletext/react";
import { client } from "@/utils/sanity-utils";
import { useBlogContext } from "@/context/blog.context";
import Link from "next/link";

const BlogPost = ({ slug }) => {
  const { post, loading } = useFetchPost(slug);
  const {
    posts: { data: posts },
  } = useBlogContext();

  const [latestArticles, setLatestArticles] = useState();

  // console.log("latest articles:", latestArticles);
  useEffect(() => {
    const filteredPosts = posts?.filter((item) => item._id !== post?._id);
    setLatestArticles(filteredPosts.slice(0, 2));
  }, [posts, post]);

  // sanity image component
  const SanityImage = ({ asset }) => {
    const imageProps = asset ? useNextSanityImage(client, asset) : null;

    if (!imageProps) return null;

    return (
      <Image
        className="rounded-[10px]"
        {...imageProps}
        width={400}
        height={400}
        alt="random alt text"
      />
    );
  };

  // handling custom portableText contents
  const customPortableTextComponents = {
    types: {
      image: ({ value }) => {
        // return SanityImage component and spread value props
        return <SanityImage {...value} />;
      },
    },
  };

  return (
    <>
      {loading ? (
        <div
          className="grid-container animate-pulse md:flex justify-between gap-3 "
          style={{
            paddingTop: "50px",
            paddingBottom: "50px",
          }}
        >
          <section className="md:w-[70%] flex flex-col gap-10 ">
            <div className="h-[20px] w-[90%] bg-slate-300 rounded-[12px]"></div>
            <div className="h-[10px] w-[30%] rounded-[12px] bg-slate-300"></div>
            <div className="h-[200px] md:h-[600px] md:w-[600px] rounded-[12px]  bg-slate-300"></div>
          </section>

          <section className="md:w-[20%] min-h-[168px] flex flex-col gap-3 mt-8 md:mt-0">
            <div className="h-[10px] w-[60%] rounded-[6px] bg-slate-300"></div>

            <div className="shadow-md min-h-[168px] flex flex-col mb-5">
              <div className="rounded-t-[10px] h-[50%] bg-slate-300"></div>
              <div className="flex-1 bg-slate-200"></div>
            </div>

            <div className="shadow-md min-h-[168px] flex flex-col">
              <div className="rounded-t-[10px] h-[50%] bg-slate-300"></div>
              <div className="flex-1 bg-slate-200"></div>
            </div>
          </section>
        </div>
      ) : (
        <div
          className="md:flex gap-20 grid-container"
          style={{
            paddingTop: "80px",
            paddingBottom: "80px",
          }}
        >
          <section className="md:w-[75%] ">
            <h1 className="md:text-[60px] text-[30px] font-black mb-5">
              {post?.title}
            </h1>
            <time dateTime={formatDate(post?.publishedAt)}>
              {formatDate(post?.publishedAt)}
            </time>
            {post?.image && (
              <Image
                src={post?.image}
                alt={post?.title}
                width={600}
                height={600}
                className="rounded-[20px] my-5"
              />
            )}

            <div className="text-black text-justify max-w-none prose prose-headings:text-left prose-headings:text-[20px] md:prose-headings:text-[30px] prose-li:marker:text-black mt-3">
              <PortableText
                value={post?.body}
                components={customPortableTextComponents}
              />
            </div>
          </section>

          <article className=" md:w-[25%] mt-10 md:mt-0">
            <h1 className="text-[24px] font-bold mb-[20px] ">More Articles</h1>

            {latestArticles?.map((article) => (
              <Link href={`/blog/${article.slug}`} key={article?._id}>
                <div className="rounded-[5px] mb-8 overflow-x-hidden shadow-lg">
                  <div className="h-[168px] relative">
                    <Image
                      src={article.image}
                      alt="blog post picture"
                      objectFit="cover"
                      fill
                    />
                  </div>

                  <h4
                    className={`font-bold text-[18px] shadow-2xl text-[#444] hover:text-black cursor-pointer p-[20px]`}
                    style={{ lineHeight: 1.4 }}
                  >
                    {article.title}
                  </h4>
                </div>
              </Link>
            ))}
          </article>
        </div>
      )}
    </>
  );
};

export default BlogPost;
