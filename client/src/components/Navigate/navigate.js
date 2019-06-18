import React from "react";
import { Link,  } from "react-router-dom";
import "./style.css";
const NavBar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand brand-title" to="#">
                    Google Books Search
        </Link>
                {/* <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button> */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link heading-title" to="/search">
                                Search
              </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link heading-title" to="/saved">
                                Saved
              </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    );
};

export default NavBar;