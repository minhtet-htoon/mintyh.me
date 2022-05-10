import { IProps } from "../pages/projects";
import {Browser, Bulb, DeviceGamepad} from "tabler-icons-react";

export const Projects: IProps = {
  categories: [
    {
      name: "Web and Javascript",
      icon: <Browser />,
      projects: [
        {
          name: "OAuth Bot",
          details: "A simple discord bot to verify users over OAuth",
          image: "",
          link: "https://github.com/minhtet-htoon/verifier",
          status: 1,
          stage: 2,
          technology:'Discord.js'
        },
        {
          name:'mintyh.me',
          details: 'Personal website and project portfolio.',
          image:'',
          link:'https://github.com/minhtet-htoon/mintyh.me',
          status: 1,
          stage: 4,
          technology:'NextJS'
        },
        {
          name:'Mint Music',
          details: "An experimental music player",
          image:'',
          link: 'https://github.com/minhtet-htoon/mint-music',
          status: 1,
          stage: 1,
          technology: 'Electron'
        }
      ]
    },
    {
      name: 'Games',
      icon: <DeviceGamepad/>,
      projects:[{
        name: 'Multiverse',
        details: '4-dimensional puzzle-shooter',
        image: '',
        link: '',
        status: 2,
        stage: 1,
        technology: 'Rust'
      }]
    },
  ]
};
