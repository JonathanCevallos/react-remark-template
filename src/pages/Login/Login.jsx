import { useEffect } from "react";
import FormLogin from "./components/FormLogin";
import "./css/login-v3.minfd53.css"

const Login = () => {

   useEffect(() => {
      document.body.classList.add(
         "page-login-v3",
         "layout-full"
      )
   })

   return (
      <div className="page vertical-align text-center" data-animsition-in="fade-in" data-animsition-out="fade-out">&gt;
         <div className="page-content vertical-align-middle">
            <div className="panel">
               <div className="panel-body">
                  <div className="brand">
                     <img className="brand-img" src="material/base/assets/images/logo-colored.png" alt="..." />
                     <h2 className="brand-text font-size-18">Remark</h2>
                  </div>
                  <FormLogin />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Login