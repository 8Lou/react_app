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

function App() {

  const [news, setNews] = useState([]);
  const [newsLenta, setNewsLenta] = useState([]);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=beer&apiKey=${'7a456e5664f14920b9b3a8a09c9f3094'}`)
      .then(res => res.json())
      .then(data => {
        setNews(data.articles.filter(el => el.source.name === "Lifehacker.com"));
        // sessionStorage.setItem("abc - news", JSON.stringify(result));
        // setNews(result);
        console.log(data)
      })
    fetch(`https://newsapi.org/v2/everything?q=beer&sources=lenta&apiKey=${'7a456e5664f14920b9b3a8a09c9f3094'}`)
      .then(res => res.json())
      .then(data => {
        setNewsLenta(data.articles);
      })

  }, [])

  const mainCtx = {
    news,
    newsLenta
  }

  return <Main.Provider value={mainCtx}>

    <Layout>

      <ul className="menu">
        <li>          <Link to='/'>Main</Link>        </li>
        <li>          <Link to='/products'>Catalog</Link>
          <ul>
            <li>            <Link to='/products/category/delicious'>Food</Link>          </li>
            <li>              <Link to='/products/category/toys'>Toys</Link>            </li>
            <li>              <Link to='/products/favorites'>Favorites</Link>            </li>
          </ul>
        </li>
        <li>          <Link to='/products/ball'>Ball</Link>        </li>
        <li>          <Link to='/products/add'>Add product</Link>        </li>
        <li>          <Link to='/products/basket'>Basket</Link>        </li>
        <li>          <Link to='/products/profile'>Profile</Link>        </li>
        <li>          <Link to='/products/auth'>Authorisation</Link>        </li>
        <li>          <Link to='/products/delivery'>Delivery</Link>        </li>
        <li>          <Link to='/products/about'>About us</Link>        </li>
      </ul>
      <span>{process.env.REACT_APP_USER_NAME}</span>
    </Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/category/:name" element={<Products isCat={true} />} />
      <Route path="/products/favorites" element={<Products isFav={true} />} />
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
