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
import Nav from "./components/Nav";
import menu from './assets/data/menu.json'

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
      <Nav />
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
