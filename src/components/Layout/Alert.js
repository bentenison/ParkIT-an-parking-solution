import React,{useContext} from "react";
import { GlobalContext } from "../context/Globalstate";

export const Alert = () => {
    const {booking} = useContext(GlobalContext)
  return (
    <div>
        {booking.length!==0 ?
      <div class="alert alert-success text-center alert-dismissible fade show" role="alert">
        <strong>Congrats!!</strong> You have successfully booked {booking.Lotnumber} from {booking.date_from} to {booking.date_to}
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>:""}
    </div>
  );
};
