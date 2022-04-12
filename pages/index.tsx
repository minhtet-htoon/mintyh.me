import type {NextPage} from 'next'
import {Box, Photo, DeviceDesktop} from "tabler-icons-react";
import "../styles/Home.module.css"
import {Center, SimpleGrid, Tabs} from "@mantine/core";
import {EStatus} from "../components/card";
import ProjectCard from "../components/card";
import Footer from "../components/footer";
import MhHeader from "../components/header";



const Home: NextPage = () => {
  return (
      <div>
          <title>Minhtet Htoon</title>
        <MhHeader/>
        <div className="parallax" style={{height:"100vh"}}>
          <Center style={{width:"100%", height:"100vh"}}>
            <div style={{color:"white"}}>
              <p style={{color:"white", fontFamily:"Roboto", fontSize:60}}>
                Minhtet Htoon
              </p>
            </div>
          </Center>
        </div>
        <Footer/>
      </div>
  )
}

export  default Home
