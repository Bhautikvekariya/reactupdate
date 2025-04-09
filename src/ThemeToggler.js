import React from "react";
import {useTheme} from "./useTheme";

function ThemeToggler() {
 const {theme, toggleTheme}= useTheme();
  return (
   
       <button onClick={toggleTheme}>
        Switch to {theme==="light" ? "Dark" :"Light"} Mode
       </button>
  );
}

export default ThemeToggler;
