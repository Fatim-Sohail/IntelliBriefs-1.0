import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <Head />
      <header>
        <div className="container paddingSmall">
          <nav>
            <ul
              className={navbar ? "navbar" : "flex"}
              onClick={() => setNavbar(false)}
            >
              <li>
                <Link to="/general" className="lii">
                  General
                </Link>
              </li>
              <li>
                <Link to="/business" className="lii">
                  Business
                </Link>
              </li>
              <li>
                <Link to="/health" className="lii">
                  Health
                </Link>
              </li>
              <li>
                <Link to="/science" className="lii">
                  Science
                </Link>
              </li>
              <li>
                <Link to="/technology" className="lii">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/sports" className="lii">
                  Sports
                </Link>
              </li>
              <li>
                <Link to="/culture" className="lii">
                  Culture
                </Link>
              </li>
            </ul>
            <button className="barIcon" onClick={() => setNavbar(!navbar)}>
              {navbar ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;