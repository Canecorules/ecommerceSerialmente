import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./Container/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Container/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./Context/CartContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {

  return (    
    <CartContextProvider>
      <BrowserRouter>
        <div>
          <NavBar />         
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/tienda/:categoria" element={<ItemListContainer />} />
              <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
              <Route path="/carrito" element={<Cart />} />
              <Route path="/*" element={<Navigate to="/" replace />} />
            </Routes>          
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
