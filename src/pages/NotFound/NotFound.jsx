import { useEffect } from "react"
import { NavLink } from "react-router-dom"
import "./css/errors.minfd53.css"

const NotFound = () => {

   useEffect(() => {
      document.body.classList.add(
         "page-error",
         "page-error-404",
         "layout-full"
      )

      return () => {
         document.body.classList.remove(
            "page-error",
            "page-error-404",
            "layout-full"
         )
      }
   }, [])

   return (
      <div className="page vertical-align text-center" data-animsition-in="fade-in" data-animsition-out="fade-out">
         <div className="page-content vertical-align-middle">
            <header>
               <h1 className="animation-slide-top">404</h1>
               <p>Page Not Found !</p>
            </header>
            <p className="error-advise">YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</p>
            <NavLink className="btn btn-primary btn-round" to="/">Ir al Inicio</NavLink>
         </div>
      </div>
   )
}

export default NotFound
