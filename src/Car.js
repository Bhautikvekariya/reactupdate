import { useState } from "react";
import ReactDOM from "react-dom/client";
import React from "react";
// function Car(){
//     const[car,setCar]=useState({
//         brand:'Ford',
//         model:"Mustang",
//         year:"1964",
//         color:"red"
//     });

class Car extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <h2>i am a {this.props.model}Car!</h2>;
    }
}

//     return (
//         <>
//          <h1>My {car.brand}</h1>
//          <p>
//             It is a {car.color} {car.model} from {car.year}.
//          </p>
//         </>
//     )
// }
export default Car;