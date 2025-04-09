import React, {useContext} from "react";
import { ThemeProvider } from "./ThemeContext";
import ThemeToggler from "./ThemeToggler"; 
import { useTheme } from "./useTheme";

function Cont() {
    return (
        <ThemeProvider>
            <MainContent/>
        </ThemeProvider>
    );
}

function MainContent(){
    const {theme} = useTheme();

    return(
        <div className={`App ${theme}`}>
            <h1>React Context API wih Custom Hook</h1>
            <ThemeToggler/>
        </div>
    );
}

export default Cont;
