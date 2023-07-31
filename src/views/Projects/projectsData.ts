/*
* Authored by Andrew Herold (heroldev)
* Copyright 2023
*/

import { IProject } from "../../types/Projects";

export const Projects2023: IProject[] = [
  {
    name: "Personal Website",
    visitLink: "/",
    sourceLink: "https://github.com/heroldev/arcless",
    bullets: [
      "Created a simple personal portfolio to showcase my projects and experience, designed with the Arc web browser in mind.",
    ]
  },
  {
    name: "Falcon Audio Player",
    bullets: [
      "Currently building a cross-platform tracker music player using Golang and the BASS audio library.",
    ]
  },
  {
    name: "Robocode",
    bullets: [
      "Created a couple nanobots in Java for a work-related programming competition.",
      "Swordfish 1.1.1 was crowned the June 2023 champion."
    ]
  },
  {
    name: "MavPASS Scheduling System",
    bullets: [
      "Created for CS 391W: Computer Science Project 1 at Minnesota State Mankato.",
      "Worked with a team to convert a console application to a C# backend with a React/Redux frontend." 
    ]
  },
  {
    name: "Modstream",
    bullets: [
      "Improved upon a web visualizer for tracker music files by adding support for multiple songs.",
    ]
  },
  {
    name: "Climbing The Ladder",
    sourceLink: "https://github.com/lseper/cornhacks-2023",
    bullets: [
      "Submitted for Cornhacks 2023, a 24-hour hackathon at the University of Nebraska-Lincoln.",
      "Worked with a small team to build an endless combat game in Godot about a deer trying to defeat slimes.",
    ]
  }
]

export const Projects2022: IProject[] = [
  {
    name: "Ongaku/Musebert",
    sourceLink: "https://github.com/heroldev/ongaku/",
    bullets: [
      "Built a Node.js/Typescript application that forwards audio content from Youtube into a Discord voice channel.",
    ]
  },
  {
    name: "Emerald Remix",
    sourceLink: "https://github.com/heroldev/emerald-remix",
    bullets: [
      "Added custom features and bugfixes to the C/C++ source code decompilation of the Game Boy Advance game Pokémon Emerald.",
    ]
  },
  {
    name: "Meowbert",
    sourceLink: "https://github.com/heroldev/meowbert",
    bullets: [
      "Created a Node.js/Typescript application to encourage Discord conversations by asking users a new question every day.",
      "Uses SQLite to store relevant data and manage questions asked."
    ]
  },
  {
    name: "Foresight",
    visitLink: "https://foresight.heroldev.net",
    sourceLink: "https://github.com/heroldev/foresight-client",
    bullets: [
      "Designed a React app for use as a collection manager for the Pokémon Trading Card Game.",
    ]
  },
  {
    name: "Slipstream",
    visitLink: "https://slipstreamapp.net",
    sourceLink: "https://github.com/danielnoon/slipstream",
    bullets: [
      "Submitted for Cornhacks 2022, a 24-hour hackathon at the University of Nebraska-Lincoln.",
      "Collaborated with a small team to create a React web application used for managing Mario Kart tournaments.",
    ]
  }
]

export const Projects2021: IProject[] = [
  {
    name: "WeHedge",
    visitLink: "https://wehedge.app",
    sourceLink: "https://github.com/danielnoon/wehedge",
    bullets: [
      "Submitted for Cornhacks 2021, a 24-hour hackathon at the University of Nebraska-Lincoln.",
      "Collaborated with a team to create a minimum viable product in Ruby and Angular to showcase a unique idea.",
      "Won first prize in the Finance judging track, built around the concept of democratic financial portfilio management."
    ]
  }
]

export const Projects2018: IProject[] = [
  {
    name: "AGB-Buttontest",
    sourceLink: "https://github.com/heroldev/AGB-buttontest",
    bullets: [
      "A simple C program designed to natively test the buttons on a Game Boy Advance gaming console.",
      "Followed the example from a Game Boy Advance programming textbook."
    ]
  }
]
