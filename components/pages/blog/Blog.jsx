"use client";

import Card from "@/components/Card";
import { useBlogContext } from "@/context/blog.context";
import Layout from "@/components/layout/Layout";

const Blog = () => {
  const {
    handleGetPost,
    posts: { loading, data: posts },
  } = useBlogContext();

  return (
    <Layout>
      <div className="grid-container">
        <h1 className="font-black text-[38px] md:text-[60px] mt-10 md:mt-20">
          Blog
        </h1>

        {loading ? (
          <div class="animate-pulse md:flex justify-between py-10 mb-10 md:mb-20">
            <div className="shadow-md md:w-[351px] h-[351px] flex flex-col">
              <div className="rounded-t-[10px] h-[50%] bg-slate-300"></div>
              <div className="flex-1 bg-slate-200"></div>
            </div>
            <div className="shadow-md md:w-[351px] h-[351px]  my-8 md:my-0 flex flex-col">
              <div className="rounded-t-[10px] h-[50%] bg-slate-300"></div>
              <div className="flex-1 bg-slate-200"></div>
            </div>
            <div className="shadow-md md:w-[351px] h-[351px] flex flex-col">
              <div className="rounded-t-[10px] h-[50%] bg-slate-300"></div>
              <div className="flex-1 bg-slate-200"></div>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8  py-10">
            {posts?.map((post) => (
              <Card
                key={post?._id}
                image={post?.image}
                title={post?.title}
                slug={post?.slug}
                onClick={() => handleGetPost()}
                href={`/blog`}
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Blog;
