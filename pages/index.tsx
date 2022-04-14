import type { NextPage } from "next";
import "../styles/Home.module.css";
import { Center } from "@mantine/core";
import Footer from "../components/footer";
import MhHeader from "../components/header";
import { ProjectsPage } from "./projects";
import { Projects } from "../components/projectStore";

const Home: NextPage = () => {
  return (
    <div>
      <title>Minhtet Htoon</title>
      <MhHeader />
      <div className="parallax" style={{ height: "100vh" }}>
        <Center style={{ width: "100%", height: "100vh" }}>
          <div style={{ color: "white" }}>
            <p style={{ color: "white", fontFamily: "Roboto", fontSize: 60 }}>
              Minhtet Htoon
            </p>
          </div>
        </Center>
      </div>
      <div style={{width: 'auto', margin:'auto'}}>
        <ProjectsPage categories={Projects.categories} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
