import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Dashboard(){
    return(
        <div>
            <h2>
                Dashboard
            </h2>
            <Outlet/>
        </div>
    );
}

function Profile(){
    return <h3>Profile Page</h3>
}

function Settings(){
    return <h3>Settings Page</h3>
}

function Nested(){
      return (
        <BrowserRouter>
         <Routes>
            <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile/>}/>
            <Route path="settings" element={<Settings/>}/>
            </Route>
         </Routes>
        </BrowserRouter>
      )
}

export default Nested;