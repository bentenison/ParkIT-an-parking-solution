import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GlobalContext } from "../context/Globalstate";
import {useHistory} from "react-router"
export const Booking = () => {
  const [date_from, setDate_from] = useState(new Date());
  const [date_to, setDate_to] = useState(new Date());
  const [type, setType] = useState("");
  const [Lotnumber, setLotnumber] = useState("");
  const [plate_no, setPlate_no] = useState("");
  const { book ,error} = useContext(GlobalContext);
  const history = useHistory()
  const handleClick = (e) => {
    e.preventDefault();
    const Newbooking = {
      type,
      Lotnumber,
      plate_no,
      date_from,
      date_to,
    };
    book(Newbooking);
    history.push("/")
  };
  return (
    <>
      <div className="container bg-dark text-light mt-5">
      {error.length!==0 ? <div
              class="alert alert-success text-center alert-dismissible fade show"
              role="alert"
            >
              <strong>{error.msg}</strong>
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>:""}
        <form>
          <div className="form-row">
          
            <div className="form-group col-md-6">
              <label for="inputState">Vehicle Type</label>
              <select
                id="inputState"
                className="form-control"
                onChange={(e) => setType(e.target.value)}
              >
                <option selected>Choose...</option>
                <option>CAR</option>
                <option>LORRY</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label for="inputState">LotNumber to Book</label>
              <select
                id="inputState"
                className="form-control"
                onChange={(e) => setLotnumber(e.target.value)}
              >
                <option selected>Choose...</option>
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
            </div>
          </div>
          <div className="form-group">
            <label for="plt">PlateNumber</label>
            <input
              type="text"
              className="form-control"
              id="plt"
              placeholder="MH16 U 3133"
              onChange={(e) => setPlate_no(e.target.value)}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputCity">Date from</label>
              <DatePicker
                className="form-control ml-2"
                selected={date_from}
                onChange={(date) => setDate_from(date)}
              />
            </div>

            <div className="form-group col-md-6 ">
              <label for="inputZip">Date to</label>
              <DatePicker
                className="form-control ml-2"
                selected={date_to}
                onChange={(date) => setDate_to(date)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary my-2 px-3"
            onClick={handleClick}
          >
            book
          </button>
        </form>
      </div>
    </>
  );
};
