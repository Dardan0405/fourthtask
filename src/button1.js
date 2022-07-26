import React, { useState } from "react";
import {BiUser} from  "react-icons/bi";
import Parking2 from "./button2";
import Parking3 from './button3';
import Parking4 from './buttons4';
import Parking5 from './button5';
import {IoIosArrowForward} from "react-icons/io"
import "./img.css";
function Parking1() {
    const [click,setclick] = useState(true);
    return(
        <div className="Parking">
            <button className="About Us" onClick={()=> setclick(!click)}><BiUser/>About Us <p className="paragraph">4 articles in this topics</p><div className="img"><IoIosArrowForward/></div></button>
            {click && <div className="description"><Parking2/> <Parking3/> <Parking4/> <Parking5/>  </div> }
        </div>
    )

}





export default Parking1