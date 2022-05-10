
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/NavBar';
import "./App.css"


const saludo = "Hola Cuate, soy el componente contenedor"

function App() {

  return (
    <div className = "App">
      <NavBar/>  
      <ItemListContainer greeting = {saludo}/>       
      </div>
  );
}

export default App;