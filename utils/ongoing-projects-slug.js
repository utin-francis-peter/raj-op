import { ongoingProjectsContents } from "@/data";

export const getOngoingProjectsSlugs = () =>
  ongoingProjectsContents.map((ongoingProject) => ongoingProject.slug);
