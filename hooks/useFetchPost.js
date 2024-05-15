"use client";
import { client, getPost } from "@/utils/sanity-utils";
import React, { useEffect, useState } from "react";

const useFetchPost = (slug) => {
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleGetPost = async () => {
      setLoading(true);
      const payload = await client.fetch(getPost(slug));

      setPost(payload);
      setLoading(false);
    };

    handleGetPost();
  }, [slug]);

  return {
    post,
    loading,
  };
};

export default useFetchPost;
