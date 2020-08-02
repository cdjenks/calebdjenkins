import React, { Component } from "react";
import "../styles/index.css";


class ProjectCard extends Component {

    // imageClick = () => {
    //     window.open(this.data)

    // }

    render() {
        const { name, thumbnail, link } = this.props;

        return (
            <div className="card project-card">
                <h2 className="card-header">{name}</h2>
                <a href={link} target="_blank"><img className="card-img card-body app-screenshot"
                    src={thumbnail} alt="App Image"></img></a>
                <p>click image to view app</p>
            </div>
        )
    }
}

export default ProjectCard;

