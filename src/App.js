
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbaar from './components/Navbaar';
import Home from './components/Home';

function App() {
  return (
    <div>
     
      <Navbaar></Navbaar>
      <Home></Home>
    </div>
  );
}

export default App;
