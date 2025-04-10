import React,{useState,useEffect} from "react";

function Greetinga(){
    const [name,setName]=useState("");
    useEffect(()=>{
        fetch('/api/user')
        .then((response)=>response.json())
        .then((data)=>setName(data.name));
    },[]);
    return <h1>Hello, {name}</h1>;
}

export default Greetinga;