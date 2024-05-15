import { ongoingProjectsContents } from "@/data";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const { slug } = await request.json();

    const ongoingProject = ongoingProjectsContents?.find(
      (project) => project.slug === slug
    );

    console.log("slug in SERVER:", slug);

    console.log("ongoing project:", ongoingProject);

    return NextResponse.json(
      {
        message: "Successfully Retrieved Ongoing Project",
        project: ongoingProject,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error.message);

    return NextResponse.json(
      {
        message: "Failed to Retrieve Ongoing Project",
      },
      { status: 500 }
    );
  }
};
