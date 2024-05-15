import Card from "@/components/Card";
import Layout from "@/components/layout/Layout";
import { ongoingProjectsCards } from "@/data";
import React from "react";

export const metadata = {
  title: "Ongoing Projects",
  description:
    "The list of all upcoming and ongoing projects by Raj Housing Development. Raj Ryle, Raj Harmony, Raj Durga, etc. are the ongoing projects in Mapusa city and Ponda city.",
};

const OngoingProjects = () => {
  return (
    <Layout>
      <div className="grid-container">
        <h1 className="font-black text-[38px] md:text-[60px] mt-10 md:mt-20">
          Ongoing Projects
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8  py-10">
          {ongoingProjectsCards?.map((project) => (
            <Card
              key={project?.id}
              hasFooter={true}
              image={project?.img}
              title={project?.title}
              desc={project.desc}
              slug={project.slug}
              location={project.footer.location}
              typology={project.footer.typology}
              href={`/ongoing-projects`}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default OngoingProjects;
