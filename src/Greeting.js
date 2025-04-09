import React from "react";
import ReactDOM from "react-dom/client";

function Greeting ({age,isLoggedIn}){
    return (
        <div>
     {age >=18 && isLoggedIn && <h1>Welcome Adult!</h1>}
     {age < 18 &&  <h1>You are underage</h1>}
      </div>
    );

}


export default Greeting;
