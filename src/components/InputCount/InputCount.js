import { Link } from "react-router-dom";

import "./InputCount.css"

function InputCount() {
  return (
<div>
  <div className="containerInputCount w-75 m-auto  mt-5">
  <Link to= "/carrito">
    <button className="inputCount">
    FINALIZAR COMPRA
    </button>
  </Link>
  <Link to= "/tienda">
    <button className="inputCount">
    SEGUIR COMPRA
    </button>
  </Link>
  </div>
</div>
  )
}

export default InputCount
