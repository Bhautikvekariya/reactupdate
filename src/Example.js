import React from 'react';
import ReactDOM from 'react-dom/client';
function logMessage(message){
    console.log(message);
    return message;
}

let result=logMessage("Hello, world!");
console.log(result);

export default logMessage;