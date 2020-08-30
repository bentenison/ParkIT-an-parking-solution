import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/Globalstate";

export const Register = () => {
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [passwordCheck, SetpasswordCheck] = useState("");
  const [displayName, SetdisplayName] = useState("");
  const { register, error } = useContext(GlobalContext);
  let alert =""
  if (error.length !== 0) {
    alert = (
      <div className="alert alert-danger" role="alert">
        A simple danger alert—check it out!
      </div>
    );
  } else {
    alert = "";
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      email,
      password,
      passwordCheck,
      displayName,
    };
    console.log(newUser);
    register(newUser);
  };
  return (
    <div className="container mt-5 d-flex align-items-center justify-content-center ">
      <div
        className=" shadow w-75 bg-light rounded"
        style={{ boxShadow: "-1px 1px 43px 1px rgba(0,0,0,0.52)" }}
      >
        <h1 className="text-center h2 mt-2">Register</h1>
        {alert}
        <form className="form-group mt-n5 row p-5">
          <label className="col-12" for="name">
            Username
          </label>
          <i className="fa fa-user fa-2x col"></i>
          <input
            type="text"
            className="form-control col-11 "
            id="name"
            onChange={(e) => SetdisplayName(e.target.value)}
            placeholder="Your Display Name..."
          />
          <label className="col-12" htmlFor="email">
            Email
          </label>
          <i className="fa fa-envelope-square fa-2x col"></i>
          <input
            type="text"
            className="form-control col-md-11 "
            id="email"
            onChange={(e) => Setemail(e.target.value)}
            placeholder="Enter Your Email..."
          />
          <label htmlFor="pwd" className="col-md-12">
            Password
          </label>
          <i className="fa fa-key fa-2x col"></i>
          <input
            type="text"
            className="form-control col-11 "
            id="pwd"
            onChange={(e) => Setpassword(e.target.value)}
            placeholder="Your Password Here..."
          />
          <label htmlFor="pwd1" className="col-md-12">
            Confirm Password
          </label>
          <i className="fa fa-key fa-2x col"></i>
          <input
            type="text"
            className="form-control col-11 "
            id="pwd1"
            onChange={(e) => SetpasswordCheck(e.target.value)}
            placeholder="Confirm Your Password..."
          />
          <button
            className="btn btn-outline-primary btn-lg mt-3 mx-auto "
            onClick={handleSubmit}
          >
            Register
          </button>
          <p className="col-12 m-n3">
            Already have an Account? <Link to="/login"> Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
