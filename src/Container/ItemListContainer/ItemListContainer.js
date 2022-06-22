import ItemList from "../../components/ItemList/ItemList"
import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
// import getFirestoreApp from "../../Firebase/Config"
import {getFirestore, collection, getDocs,query,where} from "firebase/firestore"

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
function ItemListContainer() {
  // const [productos, setProductos] = useState([]);
  const [producto, setProducto] = useState({});

  const [loading, setLoading] = useState(true);

  const { categoria } = useParams();

  // const promesa = new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(libros);
  //   }, 2000);
  // });


  useEffect(() => {

    const db= getFirestore() 

    const queryCollection = collection (db, "products")

  if(!categoria){
   getDocs(queryCollection)
   .then(resp=>setProducto(resp.docs.map(prod=> ({id: prod.id, ...prod.data()}) ) ) )
   .catch((error)=>(error))
   .finally(()=>setLoading(false))


  }else{

   const queryCollectionFilter = query(queryCollection, where("categoria", '==', categoria));
   getDocs(queryCollectionFilter)
     .then((resp) =>
       setProducto(resp.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
     )
     .catch((err) => console.error(err))
     .finally(() => setLoading(false));
}}, [categoria]);


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
          <ItemList productosFetch={producto} />
        </>
      )}
    </div>
  );
}



export default ItemListContainer;