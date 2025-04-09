import react from 'react';
import{ useState, useEffect} from 'react';

function Counter1(){
    const[count,setCount]=useState(0);
    const [Calculation,setCalculation]=useState(0);  
    useEffect(()=>{
    setCalculation(()=>count*2);
    },[count]);

return (
    <>
    <p>Count : {count}</p>
    <button onClick={()=>setCount((c)=>c+1)}>+</button>
    <p>Calculation: {Calculation}</p>
    </>
);
}

export default Counter1;