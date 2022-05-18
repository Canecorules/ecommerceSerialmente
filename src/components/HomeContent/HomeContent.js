import { Link } from "react-router-dom";
import "./HomeContent.css";


function HomeContent() {
  return (
    <div className="containerGaleria">          
      <Link to= "/tienda" className="buttonHome"> TIENDA SERIALMENTE</Link>
    </div>
  );
}

export default HomeContent;