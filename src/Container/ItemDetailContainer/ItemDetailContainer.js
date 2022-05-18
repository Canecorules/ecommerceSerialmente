import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";


let libros = [
  { id: 1, categoria: "Libro",nombre: "Letargo", stock: 25, precio: "$55.000", img:
  'https://sebastiancamelo.com/wp-content/uploads/2021/03/Letargo-Sebastian-Camelo-300x300.jpeg' },
  { id: 2, categoria: "Libro",nombre: "Carne",  precio: "$55.000", stock: 35, img:
  'https://sebastiancamelo.com/wp-content/uploads/2020/10/Carne-Sebastian-Camelo-300x300.jpeg' },
  { id: 3, categoria: "Libro",nombre: "Descenso", precio: "$40.000", stock: 15, img:
  'https://sebastiancamelo.com/wp-content/uploads/2020/05/WhatsApp-Image-2020-05-19-at-8.36.55-PM-2-300x300.jpeg' },
  { id: 4, categoria: "Libro",nombre: "Combo 3 Libros", precio: "$80.000", stock: 9, img:
  'https://sebastiancamelo.com/wp-content/uploads/2020/12/Combo-1-Sebastian-Camelo-300x300.jpeg' },
  
]

function ItemDetailContainer() {

  const [productoDelArray, setProductoDelArray] = useState({});
  
  const promesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve(libros);
    }, 2000);
  });
  
  useEffect(() => {
    promesa
      .then((respuesta) => {
        setProductoDelArray(respuesta.find((item)=> 
  item.id === 2));
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
   
    return (
      <div>
         <Link className="buttonVolver" to="/tienda" >        
          <span>VOLVER</span>
        </Link>
        <ItemDetail nombre={productoDelArray.nombre} id={
  productoDelArray.id
  } precio={productoDelArray.precio} descripcion={productoDelArray.descripcion} img={productoDelArray.img} stockDis={productoDelArray.stock} />
      </div>
    );
  }
  
  export default ItemDetailContainer; 