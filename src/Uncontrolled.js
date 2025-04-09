import React,{useRef} from "react";

function UncontrolledForm(){
    const inputRef=useRef();

    const handleSubmit=(event)=>{
        event.preventDefault();
        alert("Input value:"+inputRef.current.value);
    };
    return(
        <div>
            <h2>Uncontrolled Form</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputRef}
                placeholder="Enter text"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default UncontrolledForm;