

import ItemList from "../../components/ItemList/ItemList"
import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link, useParams } from "react-router-dom";

let libros = [
  { id: "1", categoria: "Libros",nombre: "Letargo", stock: 25, precio: 55000, img:
  'https://sebastiancamelo.com/wp-content/uploads/2021/03/Letargo-Sebastian-Camelo-300x300.jpeg' },
  { id: "2", categoria: "Libros",nombre: "Carne",  precio: 55000, stock: 35, img:
  'https://sebastiancamelo.com/wp-content/uploads/2020/10/Carne-Sebastian-Camelo-300x300.jpeg' },
  { id: "3", categoria: "Historietas",nombre: "Descenso", precio: 40000, stock: 15, img:
  'https://sebastiancamelo.com/wp-content/uploads/2020/05/WhatsApp-Image-2020-05-19-at-8.36.55-PM-2-300x300.jpeg' },
  { id: "4", categoria: "Articulos",nombre: "Combo 3 Libros", precio: 80000, stock: 9, img:
  'https://sebastiancamelo.com/wp-content/uploads/2020/12/Combo-1-Sebastian-Camelo-300x300.jpeg' },
  
]
function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoria } = useParams();

  const promesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve(libros);
    }, 2000);
  });


   useEffect(() => {
     if (categoria) {
       promesa
         .then(setLoading(true))
         .then((respuesta) =>
           setProductos(respuesta.filter((item) => item.categoria === categoria))
         )
         .catch((err) => console.log(err))
         .finally(() => setLoading(false));
     } else {
       promesa
         .then(setLoading(true))
         .then((respuesta) => setProductos(respuesta))
         .catch((err) => console.log(err))
         .finally(() => setLoading(false));
     }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [categoria]);


   return (
    <div>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <>
          {categoria && (
            <Link className="buttonVolver" to="/tienda">
              <MdOutlineKeyboardArrowLeft />
              <span>VOLVER</span>
            </Link>
          )}
          <ItemList productosFetch={productos} />
        </>
      )}
    </div>
  );
}



export default ItemListContainer;