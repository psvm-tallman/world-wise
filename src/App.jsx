import { BrowserRouter, Route, Routes } from "react-router-dom"
import Product from "./pages/Product"
import Pricing from "./pages/Pricing";
import HomePage from "./pages/Homepage";
// import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

function App() {

  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<HomePage />} />
    <Route path="product" element={<Product />} />
    <Route path="pricing" element={<Pricing />} />
    <Route path="*" element={<PageNotFound />} />
    {/* <Route path="login" element={<Login />} /> */}
   </Routes>
   </BrowserRouter>
  )
}

export default App
