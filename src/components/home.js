import React from "react";
import Headshot from "../images/headshot.JPG"
import "../styles/index.css";

function Home() {
    return (
        <div className="container">

            <div className="row content-main">

                <div className="col-sm-1 col-lg-2"></div>


                <div className="card col-sm-10 col-lg-6">

                    <section className="card-body">

                        <h2 className="content-title">About Me<span><img src={Headshot} alt="Headshot" className="headshot"></img></span></h2>

                        <hr />

                        <p className="bio-text">I am a newly minted but very motivated web developer looking to break into web development professionally. To this
                        point my work experience and education has been focused in the hospitality and tourism field, but I am excited
                        to be making a dive into a new, more rewarding career. I earned a Bachelor's degree in Parks, Recreation, and Tourism Management
                        from NC State University in 2017, but I have now taken my education in an entirely different direction since enrolling in UNC's Coding Bootcamp.
                        The course proved to be every bit as difficult as advertised but also invaluable as a jumping off point into the world of web development.
                        At the end of a day I want to have something to point to and say "I helped bring that into existence," and even when computer
                        programming is not flashy, which seems to be usually, I love the satisfaction that I get from coding.
                        </p>

                    </section>
                </div>

                <div className="col-sm-1 col-lg-4"></div>

            </div>

        </div>
    )
};

export default Home;