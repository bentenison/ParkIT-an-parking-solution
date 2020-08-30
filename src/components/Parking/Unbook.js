import React,{useContext} from "react";
import { GlobalContext } from "../context/Globalstate";
import { useState } from "react";

export const Unbook = () => {
    const {unbooked,unbook} = useContext(GlobalContext)
    const [Lotnumber,setLotnumber] = useState("")
    const handleClick=(e)=>{
        e.preventDefault()
        unbook(Lotnumber)
    }
  return (
    <div class="container mt-5">
      <div class="card mt-5">
        <div class="card-body">
          <h3 class="text-center">Do you really want to unbook a slot??</h3>
          {unbooked.length!==0 ? <div
              class="alert alert-success text-center alert-dismissible fade show"
              role="alert"
            >
              <strong>You have Successfully Unbooked Your Parking Lot {unbooked.Lotnumber}</strong>
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>:""}
          <div class="form-group">
            <label for="exampleFormControlSelect1"><strong> Select Your Lot to unbook</strong></label>
            <select class="form-control" id="exampleFormControlSelect1" onChange={(e)=>setLotnumber(e.target.value)}>
            <option defaultValue>Choose...</option>
                <option>PL-01</option>
                <option>PL-02</option>
                <option>PL-03</option>
                <option>PL-04</option>
                <option>PL-05</option>
                <option>PL-06</option>
                <option>PL-07</option>
                <option>PL-08</option>
                <option>PL-09</option>
            </select>
            <button class="btn btn-primary mt-2 px-5 float-right" onClick={handleClick}>Unbook</button>
          </div>
        </div>
      </div>
    </div>
  );
};
