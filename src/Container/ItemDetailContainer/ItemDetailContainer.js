import { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";


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

function ItemDetailContainer() {
  const [productoDelArray, setProductoDelArray] = useState({});

  const { detalleId } = useParams();

  const promesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve(libros);
    }, 2000);
  });

  useEffect(() => {
    promesa
      .then((respuesta) => {
        setProductoDelArray(respuesta.find((item) => item.id === detalleId));
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="containerDetail">
        <ItemDetail
          product={productoDelArray}
        />
    </div>
  );
}

export default ItemDetailContainer;


















