import React,{useState,useMemo} from "react";
import App from "./App";

function ExpensiveComponent({count}){
    const expensiveCalculation =useMemo(()=>{
        console.log("Calculating...");

        return count *100;
    },[count]);
    return <h1>Calculated Vaule:{expensiveCalculation}</h1>;
}

function Appmemo(){
    const [count,setCount]=useState(0);
    return(
        <div>
            <button onClick={()=>setCount(count +1)}>Increment</button>
            <ExpensiveComponent count={count}/>
        </div>
    );
}

export default Appmemo;