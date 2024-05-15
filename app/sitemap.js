// import { getOngoingProjectsSlugs } from "@/utils/ongoing-projects-slug";
// import { getPostsSlugs } from "@/utils/posts-slug";

// export default async function sitemap() {
//   const defaultPages = [
//     {
//       url: `${process.env?.NEXT_PUBLIC_BASE_URL}`,
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 1,
//     },
//     {
//       url: `${process.env?.NEXT_PUBLIC_BASE_URL}/blog`,
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 1,
//     },
//     {
//       url: `${process.env?.NEXT_PUBLIC_BASE_URL}/ongoing-projects`,
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 1,
//     },
//     {
//       url: `${process.env?.NEXT_PUBLIC_BASE_URL}/completed-projects`,
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 0.9,
//     },
//     {
//       url: `${process.env?.NEXT_PUBLIC_BASE_URL}/about-us`,
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 1,
//     },
//     {
//       url: `${process.env?.NEXT_PUBLIC_BASE_URL}/contact`,
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 1,
//     },
//   ];

//   const ongoingProjectsSlugList = getOngoingProjectsSlugs();
//   const postsSlugList = await getPostsSlugs();

//   console.log("ongoingProjectsSlugList: ", ongoingProjectsSlugList);
//   console.log("postsSlugList: ", postsSlugList);

//   const sitemap = [
//     ...defaultPages,
//     ...ongoingProjectsSlugList.map((slug) => ({
//       url: `${process.env.NEXT_PUBLIC_BASE_URL}/ongoing-projects/${slug}`,
//       changeFrequency: "monthly",
//       priority: 0.9,
//     })),
//     ...postsSlugList.map((post) => ({
//       url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}`,
//       lastModified: post.publishedAt,
//       changeFrequency: "weekly",
//       priority: 1,
//     })),
//   ];

//   return sitemap;
// }
