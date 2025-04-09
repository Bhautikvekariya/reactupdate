// import logo from './logo.svg';
// import './App.css';


// function App(){
//    const isLoggedIn=true;

//    return (
//        <div>
//           {isLoggedIn ? <Dashboard/> : <Login/>}
//         </div>
//    )
// }
// function Dashboard(){
//   return <h2>Welcome to your Dashboard!</h2>;
// }

// function Login(){
//   return <h2>Please log in to continue.</h2>;
// }
// export default App;

import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

function Home(){
    return <h2>Home Page</h2>;
}

function About(){
    return <h2>About Page</h2>;
}

function Contactus(){
    return <h2>Contact us Page</h2>
}

function Service(){
    return <h2>Service Page</h2>
}


function Navigation(){
    return(
        <nav>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contactus">Contactus</Link></li>
            </ul>
        </nav>
    );
}

    function NotFound(){
        return <h2>404 - Page Not Found</h2>;
    }


function App(){
    return(
        <BrowserRouter>
        <Routes>
            
            <Route path="/" element={<Navigation/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contactus" element={<Contactus/>}/>
            <Route path="*" element={<NotFound/>}/>
            
            {/* <Route path="/contactus" element={<Contactus/>}/>
            <Route path="/service" element={<Service/>}/> */}
        </Routes>
        </BrowserRouter>
    )
}



export default App;