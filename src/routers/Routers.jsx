import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import routes from "./routes"

const Routers = () => {

   const buildRoutes = () => {
      return routes.map((route, index) => {
         let items;
         if (route.items) {
            items = route.items.map((item, index) => 
                  <Route key={index} path={route.path + item.path} element={item.component} />
               );   
         }
         return <Route key={index} path={route.path} element={route.component}>
            { items }
         </Route>
      })
   }

   return (
      <Router>
         <Routes>
            { buildRoutes() }
         </Routes>
      </Router>
   )
}

export default Routers
