"use client";
import { client, getPosts } from "@/utils/sanity-utils";
import React, { useState, useEffect } from "react";

const useFetchPosts = () => {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleGetPosts = async () => {
      setLoading(true);
      const payload = await client.fetch(getPosts);

      setPosts(payload);
      setLoading(false);
      // console.log(payload);
    };

    handleGetPosts();
  }, []);

  return {
    posts,
    loading,
  };
};

export default useFetchPosts;

// is there a way of mapping over posts to return a list of posts slugs and export out of a function? I wsnt to use the returned slug list within a server component that doesn't have support for hooks
