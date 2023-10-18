import React from 'react'
function Defaultlayout(props)
{
   return(
      <div>
         <div className="header bs1">
            <div className="d-flex justify-content-between">
               <h1>CAR RENTAL</h1>
               <button>User</button>
            </div>
         </div>
         <div className="content">
        {props.children}
         </div>
      </div>
   )
}
export default Defaultlayout