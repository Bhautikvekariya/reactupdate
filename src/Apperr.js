import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import SomeComponent from "./SomeComponent";

function Apperr(){
    return(
        <ErrorBoundary>
            <SomeComponent/>
        </ErrorBoundary>
    )
}
export default Apperr;