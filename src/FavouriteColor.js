import {useState} from 'react';
import React from 'react';
function FavouriteColor(){
    const[color,setColor]=useState("red");
    return (
       <>
         <h1>My Favourite Color is {color}!</h1>
            <button onClick={()=>setColor("blue")} >Blue</button>
        </>
    )
}
export default FavouriteColor;