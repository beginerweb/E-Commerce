
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { Switch, Route, Routes} from 'react-router-dom';
import Product from './Components/Product';
import Products from './Components/Products';
function App() {
  return (
    <>
    <Navbar /> 
    {/* <Home /> */}
      <Routes>
      <Route path = "/" element = {<Home />}  />
    <Route path = "/products" element = {<Product />}/>
    <Route path = "/products/:id" element = {<Products />}/>
    </Routes>
    
    </>
  );
}

export default App;
