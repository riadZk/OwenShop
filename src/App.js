import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Shop } from "./pages/shop/shop"
import { Contact } from "./pages/contact"
import { Cart } from "./pages/cart/cart"
import { ShopContextProvider } from "./context/shop-context"
import Products from "./components/Product"
import Signup from "./components/Signup"
// import { Product } from "./pages/shop/product"
import Page from "./components/Page"
import Dashboard from './dashboard/App'
import Protected from "./components/Protected"
//  import home from "./pa/Home"
import Login from "./components/Login"
import Reports from "./dashboard/page/Reports"
import Pr from "./dashboard/page/Products"
import Archives from "./dashboard/page/ArchiveP"
import Editer from "./dashboard/page/Editer"
import Message from "./dashboard/page/Message"
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products />} />
            <Route path="/home" element={<Shop />} />
            <Route path="/menu" element={<Signup />} />
            <Route pathe="/page" element={<Page />} />
            {/* <Route path="/Ajouter" element={<Ajouter />} /> */}
            <Route path="/dashboard" element={<Protected Component={Dashboard} />} />
            <Route path="/login" element={<Login />} />
            <Route path='/reports' element={<Protected Component={Reports} />} />
            <Route path='/productsA' element={<Protected Component={Pr}/>} />
            <Route path='/archives' element={<Protected Component={Archives} />} />
            <Route path='/messages' element={<Protected Component={Message} />} />
            <Route path="productsA/user/:id/edit" element={<Protected Component={Editer} />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  )
}
export default App
