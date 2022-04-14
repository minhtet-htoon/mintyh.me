import { Tabs } from "@mantine/core";
import ProjectCard, { IProject } from "../components/card";
import React, { ReactNode } from "react";
import { Projects } from "../components/projectStore";
import MhHeader from "../components/header";
import Footer from "../components/footer";

export interface IProps {
  categories: {
    name: string;
    icon: ReactNode;
    projects: IProject[];
  }[];
}
export default function projects() {
  console.log(Projects.categories);
  return (
    <div>
      <MhHeader />
      <div className="container" style={{ width: "60%", margin: "auto" }}>
        <ProjectsPage categories={Projects.categories} />
      </div>
      <Footer />
    </div>
  );
}
export function ProjectsPage(props: IProps) {
  const items = props.categories.map((cat) => {
    const projects = cat.projects.map((project) => (
      // eslint-disable-next-line react/jsx-key
      <ProjectCard
        name={project.name}
        details={project.details}
        image={project.image}
        link={project.link}
        status={project.status}
        stage={project.stage}
        technology={project.technology}
      />
    ));
    return (
      // eslint-disable-next-line react/jsx-key
      <Tabs.Tab label={cat.name} icon={cat.icon}>
        <div className="grid grid-cols-5">{projects}</div>
      </Tabs.Tab>
    );
  });
  return <Tabs>{items}</Tabs>;
}
