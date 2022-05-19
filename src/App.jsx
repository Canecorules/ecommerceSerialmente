
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./Container/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from "./Container/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import HomeContent from "./components/HomeContent/HomeContent";



function App() {

  return (
    <BrowserRouter>
      <div>

        <NavBar />

        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/tienda" element={<ItemListContainer />} />
          <Route path="/tienda/:categoria" element={<ItemListContainer />} /> 
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Cart />} />

          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      
    </BrowserRouter>
  );
}

export default App;