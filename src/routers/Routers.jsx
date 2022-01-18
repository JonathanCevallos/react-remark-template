import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "../pages/Login/Login"
import NotFound from "../pages/NotFound/NotFound"
import Products from "../pages/Products/Products"
import Remark from "../templates/remark/Remark"

const Routers = () => {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<h1>Página Principal</h1>}></Route>
            <Route path="/dashboard/*" element= { <Remark /> }>
               <Route path="products" element={ <p>Products</p> } />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </Router>
   )
}

export default Routers
