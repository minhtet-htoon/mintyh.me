import {Card, Tabs} from "@mantine/core";
import {Box, DeviceDesktop, Icon, Photo} from "tabler-icons-react";
import ProjectCard, {IProject} from "../components/card";
import React, {ReactNode} from "react";

interface IProps {
    categories:
        {
            name:string;
            icon:ReactNode;
            projects: IProject[]
        }[]
}
export function projectsPage(props: IProps) {
    const items = props.categories.map((cat) => {
        const projects = cat.projects.map((project) => (
            // eslint-disable-next-line react/jsx-key
            <ProjectCard name={project.name} details={project.details} image={project.image} link={project.link} status={project.status}/>
        ))
        return(
        // eslint-disable-next-line react/jsx-key
        <Tabs.Tab label={cat.name} icon={cat.icon} >
            <div className='grid grid-cols-5'>
                {projects}
            </div>
        </Tabs.Tab>
    )});
    return(
        <Tabs>
            {items}
        </Tabs>
    )
}