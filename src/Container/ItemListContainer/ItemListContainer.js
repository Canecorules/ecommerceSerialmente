import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList"
import {getFirestore, collection, getDocs,query,where} from "firebase/firestore"

import "./ItemListContainer.css";

function ItemListContainer() { 
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();

 
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
    .then((resp) =>setProducto(resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }))))
    .catch((err) => console.error(err))
    .finally(() => setLoading(false));
}}, [categoria]);


   return (
    <div>
      {loading ? (
        <div className="load"></div>
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