import React from 'react'

export const Lot = ({lot}) => {
    return (
        <>
            <div className="col-md-4 mt-3">
            <div className="card">
                {lot.status ?
              <div className="card-body text-center text-danger">
            <h1>BOOKED</h1>
                <h3>{lot.Lotnumber}</h3>
            </div>:
              <div className="card-body text-center text-success">
            <h1>VACANT</h1>
            <h3>{lot.Lotnumber}</h3>
              </div>}
           </div>
           </div>
            
        </>
    )
}