/*
* Authored by Andrew Herold (heroldev)
* Copyright 2023
*/
import { IProject } from "../../types/Projects";
import { Projects2023 } from "./projectsData";

const getProjects = (): Map<number, IProject[]> => {
  const projectsMap = new Map<number, IProject[]>();

  projectsMap.set(2023, Projects2023)

  return projectsMap
}

export default getProjects
