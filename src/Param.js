import { BrowserRouter,Routes,Route,useParams } from "react-router-dom";

function Product(){
    const {id} =useParams();
    return <h2>Product ID: {id}</h2>;
}

function Param(){
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/product/:id" element={<Product />} />
        </Routes>
        </BrowserRouter>
    );
}

export default Param;