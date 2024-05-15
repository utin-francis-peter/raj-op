"use client";

import { client, getPost, getPosts } from "@/utils/sanity-utils";

import { createContext, useContext, useState, useEffect } from "react";

const BlogContext = createContext();

export const useBlogContext = () => useContext(BlogContext);

// provider component
const BlogContextProvider = ({ children }) => {
  const [posts, setPosts] = useState({ loading: false, data: [] });
  const [post, setPost] = useState({ loading: false, data: [] });

  // console.log(posts.data[0]);

  const handleGetPosts = async () => {
    setPosts({ ...posts, loading: true });
    const payload = await client.fetch(getPosts);
    setPosts({ ...posts, loading: false, data: payload });
  };

  const handleGetPost = async (slug) => {
    setPost({ ...post, loading: true });
    const payload = await client.fetch(getPost(slug));
    setPost({ ...post, loading: false, data: payload });
  };

  useEffect(() => {
    handleGetPosts();
  }, []);

  return (
    <BlogContext.Provider value={{ post, posts, handleGetPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
