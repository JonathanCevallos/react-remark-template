import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import Personas from "../pages/Personas/Personas";
import Products from "../pages/Products/Products";
import Profesionales from "../pages/Profesionales/Profesionales";
import Remark from "../templates/remark/Remark";

const routes = [
   {
      path: "/",
      component: <h1>Página principal</h1>,
   },
   {
      path: "/dashboard",
      component: <Remark />,
      items: [
         {
            path: "/products",
            component: <Products />
         },
         {
            path: "/profesionales",
            component: <Profesionales />
         },
         {
            path: "/personas",
            component: <Personas />
         }
      ]
   },
   {
      path: "/login",
      component: <Login />
   },
   {
      path: "*",
      component: <NotFound />
   }
]

export default routes;