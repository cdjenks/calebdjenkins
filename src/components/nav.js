import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/index.css";

function Nav() {

    const location = useLocation();
    return (
        <nav className="navbar">

            <div className="col-md-1"></div>

            <div className="col-md-7">
                <h1 className="navbar-heading h1-cj">Caleb Jenkins</h1>
            </div>

            <div className="collapse navbar-collapse col-md-4" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        Home
                    </Link>
                    <Link
                        to="/portfolio"
                        className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                    >
                        Portfolio
                    </Link>
                    <Link
                        to="/contact"
                        className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                    >
                        Contact
                    </Link>
                </div>
            </div>

        </nav>
    )
};

export default Nav;