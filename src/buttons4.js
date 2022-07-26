import React, { useState } from "react";


function Parking4(){
    const [click,setclick] = useState(false);
    return(
        <div className="Parking">
            <button className="About Us" onClick={() => setclick(!click)}>What do you do? </button>
            {click && <div className="description">Outdoors activities like rock climbing, hiking, cycling, etc.Reading, learning, documentaries, podcasts, etc.
            Crossword puzzles, chess, sudoku, or other puzzle games.Cooking.Travel.GardeningArt, music, crafts, writing, podcasting.Volunteer work.</div>}
            </div>
)
}
export default Parking4