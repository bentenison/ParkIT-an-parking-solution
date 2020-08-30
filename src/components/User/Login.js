import React,{useState,useContext} from "react";
import { Link, Redirect} from "react-router-dom";
import { GlobalContext } from "../context/Globalstate";
export const Login = () => {
   const [email,Setemail]=useState("")
   const [password,Setpassword] = useState("")
   const {login,error,isLoggedIn} = useContext(GlobalContext)
   let alert =""
   if (error.length !== 0) {
     alert = (
       <div className="alert alert-danger" role="alert">
         {error.msg}
       </div>
     );
   } else {
     alert = "";
   }
 if (isLoggedIn){
   return <Redirect to="/"/>
 }
   const handleSubmit=(e)=>{
     e.preventDefault()
     const loginUser = {
       email,
       password
     }
     login(loginUser)
   }
  return (
    <div className="container mt-5 d-flex align-items-center justify-content-center ">
      <div
        className=" shadow bg-light w-75 rounded"
        style={{ boxShadow: "-1px 1px 43px 1px rgba(0,0,0,0.52)" }}
      >
        <h1 className="text-center h2 mt-3">Login to app</h1>
       {alert}
        <form className="form-group mt-n5 row p-5">
          <label className="col-12" htmlFor="email">
            Email
          </label>
          <i className="fa fa-envelope-square fa-2x col"></i>
          <input
            type="text"
            className="form-control col-11 "
            id="email"
            onChange={(e)=>Setemail(e.target.value)}
            placeholder="Enter Your Email..."
          />
          <label htmlFor="pwd" className="col-12">
            Password
          </label>
          <i className="fa fa-key fa-2x col"></i>
          <input
            type="password"
            className="form-control col-11 "
            id="pwd"
            onChange={(e)=>Setpassword(e.target.value)}
            placeholder="Your Password Here..."
          />
          <Link to="/"><button className="btn btn-outline-primary btn-lg mt-3 mx-auto px-4" onClick={handleSubmit}>
            Login
          </button></Link>
          <p className="col-12 pt-3 m-n3">
            Dont have an Account?{" "}
            <Link to="/register">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
