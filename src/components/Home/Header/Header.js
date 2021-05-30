import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  selectUserEmail,
  selectUserName,
  selectUserProfile,
} from "../../../Redux/userSlice";
import "./Header.css";

const Header = () => {
  const history = useHistory();
  const userName = useSelector(selectUserName);
  //   const userEmail = useSelector(selectUserEmail);
  const userProfile = useSelector(selectUserProfile);
  const userEmail = useSelector(selectUserEmail);
  // navbar transition
  const [show, setShow] = useState(false);
  const transitionNav = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNav);
    return window.addEventListener("scroll", transitionNav);
  }, []);
  const handleLogOut = () => {
    localStorage.clear();
    history.go(0);
  };
  return (

    // mahe vai
    // <Navbar bg="light" expand="lg">
    //   <Navbar.Brand href="#home">INTERVIEW KIT</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="ml-auto p-2">
    //       <Nav.Link href="#home">Home</Nav.Link>
    //       <Nav.Link href="#questions">Questions</Nav.Link>
    //       <Nav.Link href="#videos">Videos</Nav.Link>
    //       <Nav.Link href="#tips">Tips</Nav.Link>
    //       {/* <Nav.Link href="#link">About us</Nav.Link> */}
    //       <Nav.Link href="#teams">Our Teams</Nav.Link>
    //       <Link to="/login" className="btn btn-outline-success">
    //         Login
    //       </Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>

    //sojol
    <>
      <Navbar className={`Nav ${show && "nav-white"}`} expand="lg">
        <Navbar.Brand className="nav-brand mx-5" style={{ cursor: "pointer" }}>
          Interview_Kit
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-links ms-auto">
            <a
              href="#banner"
              className={`nav-link ${show && "nav-link-color"}`}
            >
              Home
            </a>
            <a
              href="#questions"
              className={`nav-link ${show && "nav-link-color"}`}
            >
              Questions
            </a>
            {/* <Link className={`nav-link ${show && 'nav-link-color'}`} to="services">Services</Link>  */}
            <a href="#teams" className={`nav-link ${show && "nav-link-color"}`}>
              Our Teams
            </a>
            <a href="#tips" className={`nav-link ${show && "nav-link-color"}`}>
              Tips
            </a>
            <a
              href="#videos"
              className={`nav-link ${show && "nav-link-color"}`}
            >
              Videos
            </a>
          </Nav>
          {/* user-profile */}
          <div className="user-profile">
            <small>{userName}</small>
            <img src={userProfile} alt={userName} />
          </div>
          <div className="nav-btn mx-2">
            {/* sign in */}
            {!userEmail && (
              <Link to="/Login">
                <Button className="signin-btn  mx-5">Sign In</Button>
              </Link>
            )}

            {/* sign out */}
            {userEmail && (
              <Button
                className="signup-btn"
                style={{ backgroundColor: "red" }}
                onClick={handleLogOut}
              >
                Sign Out
              </Button>
            )}
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
