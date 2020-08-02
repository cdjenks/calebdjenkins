import React from "react";
import Headshot from "../images/headshot.JPG"
import "../styles/index.css";

function Home() {
    return (
        <div className="container about-container">

            <div className="row content-main">

                <div className="col-sm-1 col-lg-2"></div>


                <div className="card col-sm-10 col-lg-6">

                    <section className="card-body">

                        <h2 className="content-title">About Me<span><img src={Headshot} alt="Headshot" className="headshot"></img></span></h2>

                        <hr />

                        <p className="bio-text">I am a very inexperienced yet motivated web developer hoping to break into web development professionally. To this
                        point my work experience and education has been entirely focused in the hospitality and tourism fields, but I am excited
                        to be making a pivot into a new, more rewarding career. I look forward to translating my problem solving abilities into
                        the world of computer programming, and I thrive in collaborative settings. At the end of a day I want to have something I can
                        point to and say that I helped bring it into existence. Even when computer programming is not flashy, which seems to be usually,
                        I love the satisfaction that I get from coding.
                        </p>

                    </section>
                </div>

                <div className="col-sm-1 col-lg-4"></div>

            </div>

        </div>
    )
};

export default Home;