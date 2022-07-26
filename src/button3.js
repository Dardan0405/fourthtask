import React, { useState } from "react";

function Parking3(){
    const [click,setclick] = useState(false);
    return(
        <div className="Parking">
            <button className="About Us" onClick={() => setclick(!click)}>Is Parkname Parking actually free?</button>
            {click && <div className="description">The City is continuing one-hour free parking on Hay Street in East Perth and West Perth, 
            and Royal Street in East Perth. To enjoy one-hour free parking in 1P bays in the free parking areas, 
            obtain a 1-hour no fee payable ticket from the ticket machine and clearly display on the dash of your vehicle.</div>}
</div>
)
}
export default Parking3