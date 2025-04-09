
import {useState} from "react";


function Bike(){
    const[bike,setBike]=useState({
        brand:"Yamaha",
        model:"FZ",
        year:"2020",
        color:"black"
    })

    return(
        <>
          <h1>My {bike.brand}</h1>
        <p>
            It is a {bike.color} {bike.model} from {bike.year}.
        </p>
        </>
    )
}

export default Bike;