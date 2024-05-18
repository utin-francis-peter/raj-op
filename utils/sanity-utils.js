import { groq } from "next-sanity";
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET,
  apiVersion: "2024-01-10",
  useCdn: false,
});

export const getPosts = groq`*[_type=="post"] | order(publishedAt desc){
    _id,
    publishedAt,
    "slug":slug.current,
    "image":image.asset->url,
    title,
    body,
  }`;

export const getSlugOfPosts = groq`*[_type=="post"] | order(publishedAt desc){
    publishedAt,
    "slug":slug.current,
  }`;

export const getPost = (
  slug
) => groq`*[_type == "post" && slug.current == "${slug}"][0]{
  _id,
    publishedAt,
    "image":image.asset->url,
    title,
    body,
  }`;

// | order(publishedAt desc): fetch and return from latest publications to older

// getPost based on document type and slug

// TODO: find out how to handle contents from lake on the frontend
