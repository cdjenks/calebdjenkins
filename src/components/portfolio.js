import React from "react";
import ProjectCard from "./projectCard.js"
import ProjectData from "../data.json"
import "../styles/index.css";

function Portfolio() {

    return (
        <div>
            {ProjectData.map(project => {
                return <ProjectCard
                    name={project.name}
                    thumbnail={project.thumbnail}
                    link={project.link}
                />
            })
            }
        </div>
    )

}

export default Portfolio;