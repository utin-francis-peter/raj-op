import Layout from "@/components/layout/Layout";
import BlogPost from "@/components/pages/blog/blogPost";
import { client, getPost } from "@/utils/sanity-utils";

export const generateMetadata = async ({ params: { slug } }) => {
  const post = await client.fetch(getPost(slug));

  return {
    title: post?.title,
    description: post?.body,
    openGraph: {
      images: [{ url: post?.image }],
    },
  };
};

const Page = ({ params }) => {
  const slug = params.slug;

  return (
    <Layout>
      <BlogPost slug={slug} />
    </Layout>
  );
};

export default Page;
