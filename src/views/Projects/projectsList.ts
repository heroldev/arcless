/*
* Authored by Andrew Herold (heroldev)
* Copyright 2023
*/
import { IProject } from "../../types/Projects";
import { Projects2018, Projects2021, Projects2022, Projects2023 } from "./projectsData";

const getProjects = (): Map<number, IProject[]> => {
  const projectsMap = new Map<number, IProject[]>();

  projectsMap.set(2023, Projects2023)
  projectsMap.set(2022, Projects2022)
  projectsMap.set(2021, Projects2021)

  projectsMap.set(2018, Projects2018)

  return projectsMap
}

export default getProjects
