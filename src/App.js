// import { useState,creatContext } from "react";
// import Header from "./components/Header";
//import Footer from './components/Footer';
// import userContext from "./components/userContext";
import {BrowserRouter , Routes, Route} from 'react-router-dom';
//import Header from './components/Header';
import Login from './componants/Login';
import Products from './componants/Products';
import Register from './componants/Register';
import Home from './componants/Home';
import Hooks from './componants/Hooks';
import Todos from './componants/Todos';

function App(){
  
  return(
  
   <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route path='/header' element={<Header/>}/> */}
      <Route path='/login' element={<Login/>}/>
      <Route path='/register'  element={<Register/>}/>
      <Route path='/products'  element={<Products/>}/>
      <Route path='/hooks' element={<Hooks/>}/>
      <Route path='/todos' element={<Todos/>}/>
    </Routes>
    </BrowserRouter>
   </div>
    );
}
export default App;