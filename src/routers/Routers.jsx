import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Categorias from "../pages/Categorias/Categorias"
import Clientes from "../pages/Clientes/Clientes"
import Cotizaciones from "../pages/Cotizaciones/Cotizaciones"
import Documentos from "../pages/Documentos/Documentos"
import DocumentosServicios from "../pages/DocumentosServicios/DocumentosServicios"
import Idiomas from "../pages/Idiomas/Idiomas"
import Imagenes from "../pages/Imagenes/Imagenes"
import ImagenesServicios from "../pages/ImagenesServicios/ImagenesServicios"
import Login from "../pages/Login/Login"
import NotFound from "../pages/NotFound/NotFound"
import Ocupaciones from "../pages/Ocupaciones/Ocupaciones"
import Personas from "../pages/Personas/Personas"
import Products from "../pages/Products/Products"
import Profesionales from "../pages/Profesionales/Profesionales"
import SubCategorias from "../pages/SubCategoria/SubCategoria"
import Remark from "../templates/remark/Remark"

const Routers = () => {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<h1>Página Principal</h1>}></Route>
            <Route path="/dashboard/*" element={<Remark />} >
               <Route path="products" element={<Products />} />
               <Route path="profesionales" element={<Profesionales />} />
               <Route path="personas" element={ <Personas /> } />
               <Route path="idiomas" element={<Idiomas />} />
               <Route path="categorias" element={<Categorias />} />
               <Route path="subcategorias" element={<SubCategorias />} />
               <Route path="clientes" element={<Clientes />} />
               <Route path="documentos" element={<Documentos />} />
               <Route path="documentosservicios" element={<DocumentosServicios />} />
               <Route path="cotizaciones" element={<Cotizaciones />} />
               <Route path="imagenes" element={<Imagenes/>} />
               <Route path="imagenesservicios" element={<ImagenesServicios />} />
               <Route path="ocupaciones" element={<Ocupaciones />} />

            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </Router>
   )
}

export default Routers
