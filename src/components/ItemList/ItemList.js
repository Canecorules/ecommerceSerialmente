import Item from "../Item/Item";
import "./ItemList.css";
import { useEffect, useState } from "react";


let libros = [
    { id: 1, nombre: "Letargo", stock: 5, precio: "$55.000", img:
    'https://sebastiancamelo.com/wp-content/uploads/2021/03/Letargo-Sebastian-Camelo-300x300.jpeg' },
    { id: 2, nombre: "Carne",  precio: "$55.000", stock: 5, img:
    'https://sebastiancamelo.com/wp-content/uploads/2020/10/Carne-Sebastian-Camelo-300x300.jpeg' },
    { id: 3, nombre: "Descenso", precio: "$40.000", stock: 5, img:
    'https://sebastiancamelo.com/wp-content/uploads/2020/05/WhatsApp-Image-2020-05-19-at-8.36.55-PM-2-300x300.jpeg' },
    { id: 4, nombre: "Combo 3 Libros", precio: "$80.000", stock: 5, img:
    'https://sebastiancamelo.com/wp-content/uploads/2020/12/Combo-1-Sebastian-Camelo-300x300.jpeg' },
    
]


function ItemList() {

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const promesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });

  useEffect(() => {
    promesa
    .then (respuesta => setProductos(respuesta))
    .finally(() => setLoading(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className="contenedorTodasLasCards">
      {loading ? (
        <h2 className="line-wobble">"</h2>
      ) : (
        libros.map((item)=>{
            return (
                <div key={item.id}>
                  <Item
                    nombre={item.nombre}
                    img={item.img}
                    precio={item.precio}
                  />
                </div>
            )
        })
      )}
    </div>
  );
}

export default ItemList;