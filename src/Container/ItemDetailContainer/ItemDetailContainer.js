import { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import {getFirestore ,doc, getDoc} from "firebase/firestore"


// let libros = [
//   { id: "1", categoria: "Libros",nombre: "Letargo", stock: 25, precio: 55000, img:
//   'https://sebastiancamelo.com/wp-content/uploads/2021/03/Letargo-Sebastian-Camelo-300x300.jpeg' },
//   { id: "2", categoria: "Libros",nombre: "Carne",  precio: 55000, stock: 35, img:
//   'https://sebastiancamelo.com/wp-content/uploads/2020/10/Carne-Sebastian-Camelo-300x300.jpeg' },
//   { id: "3", categoria: "Historietas",nombre: "Descenso", precio: 40000, stock: 15, img:
//   'https://sebastiancamelo.com/wp-content/uploads/2020/05/WhatsApp-Image-2020-05-19-at-8.36.55-PM-2-300x300.jpeg' },
//   { id: "4", categoria: "Articulos",nombre: "Combo 3 Libros", precio: 80000, stock: 9, img:
//   'https://sebastiancamelo.com/wp-content/uploads/2020/12/Combo-1-Sebastian-Camelo-300x300.jpeg' },
  
// ]

function ItemDetailContainer() {
  // const [productoDelArray, setProductoDelArray] = useState({});
  const [producto, setProducto] = useState([]);


  const {detalleId} = useParams();



    useEffect(() => {
      const db= getFirestore()
   
      const dbQuery= doc(db,"products",detalleId)
   
      getDoc(dbQuery)
      .then(resp=>setProducto({id: resp.id, ...resp.data()}))
     
       
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])

 

  return (
    <div className="containerDetail">
        <ItemDetail
          product={producto}
        />
    </div>
  );
}

export default ItemDetailContainer;


















