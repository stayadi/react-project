import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './Components/Products';
import Login from './Components/Login';
import { useState } from 'react';
import MyCart from './Components/MyCart';
import Form from './Components/Form';
import OrderPlace from './Components/OrderPlace';
import NewProduc from './Components/NewProduc';
// import Navbar from './Components/Navbar';

function App() {

  const [cartItems, setCartItems] = useState([])
  const [total, setTotal] = useState(0)

  const onAdd = (data) => {
    const exist = cartItems.find((item) => item.id === data.id);
    setTotal(data.price + total)
    // console.log("total price:",total)
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === data.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...data, quantity: 1 }]);
      
    }
    
  };


  return (
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
    
      <Route path="/" element={<Login />}></Route>
      
      <Route path="/product" element={<Products onAdd={onAdd} cartItems ={cartItems}/>} ></Route>
      <Route path="/cart" element={<MyCart cartItems ={cartItems} total={total}/>} ></Route>
      <Route path="/placeOrder" element={<Form/>} ></Route>
      <Route path="/placed" element={<OrderPlace cartItems ={cartItems} total={total}/>} ></Route>
      <Route path="/addProduct" element={<NewProduc/>} ></Route>
      
      
        
    </Routes>
  </BrowserRouter>
);
}

export default App;
