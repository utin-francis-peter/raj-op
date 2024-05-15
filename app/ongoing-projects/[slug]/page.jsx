import Layout from "@/components/layout/Layout";
import OngoingProjectBySlug from "@/components/pages/ongoingProject/OngoingProjectBySlug";
import { ongoingProjectsContents } from "@/data";

export const generateMetadata = async ({ params: { slug } }) => {
  console.log("SLUG in client:", slug, typeof slug);
  let project;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/ongoingProject`,
      {
        method: "POST",
        body: JSON.stringify({ slug }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    project = data?.project;
    // console.log("project in CLIENT:", data.project);
  } catch (error) {
    console.error(error.message);
  }

  return {
    title: project?.hero.title
      .split(" ")
      .map((item) => item[0].toUpperCase() + item.slice(1).toLowerCase())
      .join(" "),
    description: project?.details.overview,
    openGraph: [{ url: project?.hero.img }],
  };
};

const OngoingProject = ({ params }) => {
  // console.log(params);
  return (
    <Layout>
      <OngoingProjectBySlug slug={params?.slug} />
    </Layout>
  );
};

export default OngoingProject;
