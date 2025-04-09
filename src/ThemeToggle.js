import React,{useReducer} from "react";

const themeReducer=(state,action)=>{
    switch (action.type){
        case "TOGGLE_THEME":
        return {theme: state.theme==="light" ? "dark" : "light"};
        default:
            return state;
    }
};

const ThemeToggle=()=>{
     const [state,dispatch]= useReducer(themeReducer,{theme:"light"});

     return(
        <div style={{background: state.theme==="light"?"#fff" :"#333",color: state.theme==="light" ? "#000":"#fff",padding:"20px",textAlign:"center"}}>
            <h1>Current Theme: {state.theme}</h1>
            <button onClick={()=>dispatch({type: "TOGGLE_THEME"})}>
                Toggle Theme
            </button>
        </div>
     );
};

export default ThemeToggle;
