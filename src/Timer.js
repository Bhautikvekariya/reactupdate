import react from 'react';
import { useState, useEffect } from 'react';
import ReactDOm from 'react-dom/client';

function Timer(){
    const [count,setCount]=useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCount(count+1);
        },1000);
    },[]);
    return <h1>I've rendered {count} times!</h1>
}

export default Timer;