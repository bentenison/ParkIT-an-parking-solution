import React, { useContext,useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/Globalstate";

export const Nav = () => {
  const{isLoggedIn,checkLoggedin,getUser,getLots}=useContext(GlobalContext)

  useEffect(()=>{
   checkLoggedin();
   getUser();
   getLots()
  },[isLoggedIn])
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <span className="navbar-brand"><img src={require("../../img/Logo ParkIT.svg")} /></span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {isLoggedIn ? (
            <ul className="navbar-nav mx-auto ">
              <li className="nav-item">
                <Link to="/logout" className="nav-link text-danger">
                  Logout
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link text-primary">
                  Profile
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav mx-auto ">
              <li className="nav-item float-right">
                <Link to="/register" className="nav-link text-success">
                  Register
                </Link>
              </li>
              <li className="nav-item float-right">
                <Link to="/login" className="nav-link text-primary">
                  Login
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};
