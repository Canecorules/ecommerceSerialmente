import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import {getFirestore ,doc, getDoc} from "firebase/firestore"

import "./ItemDetailContainer.css";


function ItemDetailContainer() {

  const [producto, setProducto] = useState([]);
  const {detalleId} = useParams();


    useEffect(() => {
      const db= getFirestore()   
      const dbQuery= doc(db,"products",detalleId)   
      getDoc(dbQuery)
      .then(resp=>setProducto({id: resp.id, ...resp.data()}))      
     }, [detalleId])
 
  return (
    <div className="containerDetail">
        <ItemDetail product={producto}/>
    </div>
  );
}

export default ItemDetailContainer;



















