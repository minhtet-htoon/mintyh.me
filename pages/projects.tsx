import {Tabs} from "@mantine/core";
import ProjectCard, {IProject} from "../components/card";
import React from "react";
import MhHeader from "../components/header";
import {categories} from './projects.json';
import Footer from "../components/footer";

interface IProps {
    categories:
        {
            name:string;
            projects: IProject[]
        }[]
}
export default function projects() {
    console.log(categories)
    return (
        <div>
            <MhHeader/>
            <div className='container w-1/2' style={{margin:'auto'}}>
                <ProjectsPage categories={categories}/>
            </div>
            <Footer/>
        </div>
    )
}
export function ProjectsPage(props: IProps) {
    const items = props.categories.map((cat) => {
        const projects = cat.projects.map((project) => (
            // eslint-disable-next-line react/jsx-key
            <ProjectCard name={project.name} details={project.details} image={project.image} link={project.link} status={project.status}/>
        ))
        return(
        // eslint-disable-next-line react/jsx-key
        <Tabs.Tab label={cat.name} >
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