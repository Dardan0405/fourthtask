import React, { useState } from "react";

function Parking2(){

const [click,setclick] = useState(false);
    return(
        <div className="Parking">
            <button className="About Us" onClick={() => setclick(!click)}>How does the Parkname seperate itself from other domain praking companies?</button>
            {click && <div className="description">Your doamins are a valuable online property as in any invetment,you want the 
            mos efficient way,easy to make sure your property is going to profitable.Do you own more than 1.000doamins? As a professional
            domainer  you will find everything you need  through Parkname to generate maximum profits from your domain protofolio</div>}
        </div>
    )
}
export default Parking2