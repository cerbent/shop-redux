import './App.scss';
import {useDispatch, useSelector} from "react-redux";
import Header from "./compenents/Header";
import {Route, Routes} from "react-router-dom";
import Products from "./compenents/products";
import Basket from "./compenents/page/Basket";
import Favorite from "./compenents/page/Favorite";
import ProductUse from "./compenents/productUse";

function App() {
  const dispatch = useDispatch()
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path={"/products/"} element={<Products/>}/>
            <Route path={"/basket"} element={<Basket/>}/>
            <Route path={"/favorite"} element={<Favorite/>}/>
            <Route path={"/product/:product-use"} element={<ProductUse/>}/>
            <Route path={"/"} element={<Products/>}/>
        </Routes>

    </div>
  );
}

export default App;
