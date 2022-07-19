import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './Components/Products';
import Login from './Components/Login';

function App() {
  return (
    <BrowserRouter>
    
    <Routes>
    
      <Route path="/" element={<Login />}></Route>
      
      <Route path="/product" element={<Products/>} ></Route>
      
      
        
    </Routes>
  </BrowserRouter>
);
}

export default App;
