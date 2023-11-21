import { Route, Routes, Link } from "react-router-dom";
import {
  About,
  AddProduct,
  Auth,
  Basket,
  Delivery,
  Home,
  Products,
  Profile,
  SingleProduct
} from './pages'
import Layout from "./components/Layout";
import Main from "./context/main";
import { useEffect, useState } from "react";
import { Favorites } from "./pages/Favorites";

import Api from "./Api";

function App() {

  const [news, setNews] = useState([]);
  const [newsLenta, setNewsLenta] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("user-token"));
  const [api, setApi] = useState(new Api(token));
  const [userId, setUserId] = useState(localStorage.getItem("user-id"));


  useEffect(() => {
    setApi(new Api(token))
  }, [token])

  useEffect(() => {
    setToken(localStorage.getItem("user-token"))
  }, [userId])


  const mainCtx = {
    news,
    newsLenta,
    api,
    userId,
    setUserId
  }

  return <Main.Provider value={mainCtx}>

    <Layout>

      <ul className="menu">
        <li><Link to='/'>Main</Link></li>
        <li><Link to='/products'>Catalog</Link>
          <ul>
            <li><Link to='/products/category/delicious'>Food</Link></li>
            <li><Link to='/products/category/toys'>Toys</Link></li>
            <li><Link to='/products/favorites'>Favorites</Link></li>
          </ul>
        </li>
        <li><Link to='/products/ball'>Ball</Link></li>
        <li><Link to='/products/add'>Add product</Link></li>
        <li><Link to='/basket'>Basket</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
        <li><Link to='/auth'>Authorisation</Link></li>
        <li><Link to='/delivery'>Delivery</Link></li>
        <li><Link to='/about'>About us</Link></li>
      </ul>
      <span>{process.env.REACT_APP_USER_NAME}</span>
    </Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/category/:name" element={<Products isCat={true} />} />
      <Route path="/products/favorites" element={<Favorites isFav={true} />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="/product/add" element={<AddProduct />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/delivery" element={<Delivery />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Main.Provider>
}

export default App;
