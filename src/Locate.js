import { BrowserRouter,Routes,Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

function SearchResults(){
     const location=useLocation();
     const queryParams=new URLSearchParams(location.search);
     const searchTerm=queryParams.get("q");

     return <h2>Searching for: {searchTerm}</h2>;
}

function Locate(){
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/search" element ={<SearchResults/>}/>
          </Routes>
        
        </BrowserRouter>
    );
}

export default Locate;