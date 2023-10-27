import { Route, Routes } from "react-router";


function App() {
  return <>
  <Routes>
    <Route path="/" element={<>123</>}/>
    <Route path="/products" element={<>123</>}/>
    <Route path="/products/category/:name" element={<>123</>}/>
    <Route path="/products/favorites" element={<>123</>}/>
    <Route path="/product/:id" element={<>123</>}/>
    <Route path="/product/add" element={<>123</>}/>
    <Route path="/basket" element={<>123</>}/>
    <Route path="/profile" element={<>123</>}/>
    <Route path="/auth" element={<>123</>}/>
    <Route path="/delivery" element={<>123</>}/>
    <Route path="/about" element={<>123</>}/>
  </Routes>
  </>;
}

export default App;
