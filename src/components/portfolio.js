<<<<<<< HEAD
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

=======
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

>>>>>>> dd918ca40d8fc980685dae4920e015290088602d
export default Portfolio;