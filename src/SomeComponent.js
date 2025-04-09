import React,{useState} from "react";

const SomeComponent =()=>{
const [throwError, setThrowError]=useState(false);

if(throwError){
    throw new Error("Oops! something broke in Somecomponent.");

}
return(
    <div>
        <h1>This is SomeComponent</h1>
        <button onClick={()=> setThrowError(true)}>
            Click to Throw Error 

        </button>
   
    </div>
);
};
export default  SomeComponent;