import { client, getSlugOfPosts } from "./sanity-utils";

export const getPostsSlugs = async () => {
  const response = await client.fetch(getSlugOfPosts);
  return response;
};
