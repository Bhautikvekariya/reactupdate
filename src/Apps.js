
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Product";

function Apps(){
    return(
        <BrowserRouter>
           <Routes>
            <Route path="/product/:id" element={<Product/>} />
           </Routes>
        </BrowserRouter>
    )
}

export default Apps;