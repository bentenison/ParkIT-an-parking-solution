import React, { useContext } from "react";
import { GlobalContext } from "../context/Globalstate";
import { useHistory } from "react-router";


export const Profile = () => {
  const { user } = useContext(GlobalContext);
  const history = useHistory()
  const HandleClick = ()=>{
      history.push("/")
  }
  return (
      <>
    <div className="container d-flex align-items-center justify-content-center mt-5">
      <button
        type="button"
        class="btn btn-primary btn-lg mt-5"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        See Your Profile
      </button>
      </div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                User Information
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <div class="container-fluid">
    <div class="row">
      <div class="col-md-4"><img class="w-100" src={require("../../img/avataaars.png")} alt=""/></div>
      <div class="col-md-7 ml-auto">
        <div class="card-body">
  <strong>UserName:</strong><h3>{user.displayName}</h3>
  <strong>Email:</strong><h3>{user.email}</h3>
         <button class="btn btn-primary float-right mt-5 px-5" data-dismiss="modal"onClick={HandleClick}>
        OK
         </button>
        </div>
      </div>
    </div>
  </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
