import React, { useState } from "react";

function Parking5(){
    const [click,setclick] = useState(false);
    return(
        <div className="Parking">
            <button className="About Us" onClick={() => setclick(!click)}>When was the first Parkname founded</button>
            {click && <div className="description">Established in 1872 and located primarily in Wyoming, Yellowstone National Park was America's first national park.</div>}
            </div>
)
}
export default Parking5