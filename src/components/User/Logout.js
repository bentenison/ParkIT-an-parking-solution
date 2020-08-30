import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/Globalstate";
export const Logout = () => {
  const { logout } = useContext(GlobalContext);
  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div className="card w-100 mt-5 shadow-lg">
        <div class="card-body">
          <h3 className="text-center">Do yo really want to Logout??</h3>
        </div>
        <div class="card-footer">
          <Link to="/"><button class="btn btn-danger float-right px-5 ml-3" onClick={(e)=>logout(e)}>
            Yes
          </button></Link>
          <button class="btn btn-success float-right px-5 ml-3">
            <Link className="text-white" to="/">
              No
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
