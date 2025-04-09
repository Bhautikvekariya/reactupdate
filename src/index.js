import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import FavouriteColor from './FavouriteColor';
// import Car from './Car';
// import {useState} from 'react';
// import Bike from './Bike';
// import Greeting from './Greeting';  
// import Counter from './Counter';
// import logMessage from "./Example.js";
// import Timer from './Timer';
// import Counter1 from './Counter1.js';
// import TimerComponent from './TimerComponent.js';
// import GithubCards from './GithubCards.js';
// import Products from './Products.js';
// // import Weather from './Weather.js';
// import Layout from './pages/Layout.js';
// import Home from './pages/Home.js';
// import Blogs from './pages/Blogs.js';
// import Contact from './pages/Contact.js';
// import NoPage from './pages/NoPage.js';
// import Service from './pages/Service.js';
// import Param from './Product.js';
// import Apps from "./App.js";
// import Product from './Product.js';
// import Locate from './Locate.js';
// import Nested from './Nested.js';
// import ControlledFrom from './ControlledFrom.js';
// import UncontrolledForm from './Uncontrolled.js';
// import SubmitForm from './SubmitForm.js';
// import MultipleInutsForm from './MultipleInputsFrom.js';
// import ThemeContext from './ThemeContext.js';
// import Cont from './Cont.js';
// import ThemeToggler from './ThemeToggler.js';
// import ThemeToggle from './ThemeToggle';
// import ErrorBoundary from './ErrorBoundary';
import Apperr from './Apperr';
import Appmemo from './Appmemo';

// import { BrowserRouter,Routes,Route } from 'react-router-dom';

// import RedirectButton from './RedirectButton.js';
// import About from "./About.js";


// function Navig(){
//    return (
//       <BrowserRouter>
//          <Routes>
//           <Route path="/" element={<RedirectButton/>}/>
//           <Route path="/about" element={<About/>}/>
//          </Routes>
//       </BrowserRouter>
//    );
// }

// export default Navig;
// export default function Main(){
//   return(
//     <BrowserRouter>
//     <Routes>
      
//         <Route path="/" element={<Layout/>}/>
//         <Route path="/home" element={<Home/>}/>
//         <Route path="/blogs" element={<Blogs/>}/>
//         <Route path="/contact" element={<Contact/>}/>
//         <Route path="/service" element={<Service/>}/>
//         <Route path="*" element={<NoPage/>}/>

//     </Routes>
//     </BrowserRouter>
//   )
// }
// function greet(name){
//   return `Hello , ${name}!`;
// }


// function ToggleEvent(){
//         const [isStarted, setIsStarted]= useState(false);
//         return(
//           <>
         
//             <h1>{isStarted ? 'Started' : 'Stopped'}</h1>
//             <button onClick={()=>setIsStarted(!isStarted)}>
//               {isStarted ? "stop":"start"}
//             </button>
//           </>
//         )
// }

// const isLoggedIn=false;
// const greeting=<h1>{isLoggedIn ? "Welcome back!" : "Please log in"}</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
  {/* <FavouriteColor/>
  <Car/>
  <Bike/>
  <ToggleEvent/> */}
  {/* <App/> */}
  {/* <Greeting/>
  <Car color="red"/>
  <Car model="Mustang"/> */}
  {/* <Counter/>
  <App/>
  <logMessage/> */}
  {/* <Greeting age={20} isLoggedIn={true}/> */}
  {/* <Timer/> */}
  {/* <Counter1/> */}
  {/* <TimerComponent/> */}
  {/* <GithubCards/> */}
  {/* <Products/> */}
  {/* <Weather/> */}
  {/* <Main/> */}
  {/* <Param/> */}
  {/* <Product /> */}
  {/* <Navig/> */}
  {/* <Locate/> */}
  {/* <Nested/> */}
  {/* <ControlledFrom/> */}
  {/* <UncontrolledForm/> */}
  {/* <SubmitForm/> */}
  {/* <MultipleInutsForm/> */}
  {/* <ThemeContext/>  */}
  {/* <ThemeToggler/> */}
  {/* <ThemeToggle/> */}
  {/* <Cont /> */}

    
{/* <ErrorBoundary/> */}
{/* <Apperr/> */}
<Appmemo/>
 
</>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
