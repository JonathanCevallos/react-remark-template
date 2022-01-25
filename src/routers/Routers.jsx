import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Facturas from "../pages/Facturas/Facturas"
import Idiomas from "../pages/Idiomas/Idiomas"
import Login from "../pages/Login/Login"
import NotFound from "../pages/NotFound/NotFound"
import Paises from "../pages/Paises/Paises"
import Personas from "../pages/Personas/Personas"
import PersonasIdiomas from "../pages/PersonasIdiomas/PersonasIdiomas"
import Preguntas from "../pages/Preguntas/Preguntas"
import PreguntasServicios from "../pages/PreguntasServicios/PreguntasServicios"
import Products from "../pages/Products/Products"
import Profesionales from "../pages/Profesionales/Profesionales"
import Servicios from "../pages/Servicios/Servicios"
import ServiciosPlanes from "../pages/ServiciosPlanes/ServiciosPlanes"
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
               <Route path="paises" element={<Paises />} />
               <Route path="facturas" element={<Facturas />} />
               <Route path="personasidiomas" element={<PersonasIdiomas />} />
               <Route path="preguntas" element={<Preguntas />} />
               <Route path="preguntasservicios" element={<PreguntasServicios />} />
               <Route path="servicios" element={<Servicios />} />
               <Route path="serviciosplanes" element={<ServiciosPlanes />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </Router>
   )
}

export default Routers
