import React, { useContext } from "react";
import { GlobalContext } from "../context/Globalstate";
import { Lot } from "./Lot";

export const ParkingLots = () => {
  const { lots } = useContext(GlobalContext);
  const all = [
    {
      id: 0,
      Lotnumber: "PL-01",
      status: false,
    },
    {
      id: 1,
      Lotnumber: "PL-02",
      status: false,
    },
    {
      id: 2,
      Lotnumber: "PL-03",
      status: false,
    },
    {
      id: 3,
      Lotnumber: "PL-04",
      status: false,
    },
    {
      id: 4,
      Lotnumber: "PL-05",
      status: false,
    },
    {
      id: 5,
      Lotnumber: "PL-06",
      status: false,
    },
    {
      id: 6,
      Lotnumber: "PL-07",
      status: false,
    },
    {
      id: 7,
      Lotnumber: "PL-08",
      status: false,
    },
    {
      id: 8,
      Lotnumber: "PL-09",
      status: false,
    },
  ];
  let result = [];
  lots.map((lot) => {
    result = all.filter((one) => lot.Lotnumber !== one.Lotnumber && lot.status === one.status);
  });

  return (
    <>
      <div>
        <h1 className="text-white text-center">Parking Lots Status</h1>
        <div className="container">
          <div className="row mt-5">
            {lots.map((lot) => {
              return <Lot lot={lot} key={lot._id} />;
            })}
            {result.map((res) => {
              return <Lot lot={res} key={res.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
