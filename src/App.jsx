
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/NavBar';
import "./App.css"

function App() {
  return (
    <div>
      <NavBar/>     
      <div className='containerGeneralContador'>|
        <ItemListContainer/>     
      </div>
    </div>
  );
}

export default App;