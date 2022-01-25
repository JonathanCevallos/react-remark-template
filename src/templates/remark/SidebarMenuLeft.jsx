import { Link, NavLink } from "react-router-dom"
import Categorias from "../../pages/Categorias/Categorias"

const SidebarMenuLeft = () => {
   return (
      <div className="site-menubar site-menubar-light">
         <div className="site-menubar-body">
            <div>
               <div>
                  <ul className="site-menu" data-plugin="menu">
                     <li className="site-menu-category">General</li>
                     <li className="site-menu-item">
                        <Link to="/dashboard">
                           <i className="site-menu-icon md-view-dashboard" aria-hidden="true" />
                           <span className="site-menu-title">Dashboard</span>
                        </Link>
                     </li>
                     <li className="site-menu-item">
                        <Link to="/dashboard/products">
                           <i className="site-menu-icon md-view-dashboard" aria-hidden="true" />
                           <span className="site-menu-title">Products</span>
                        </Link>
                     </li>
                     <li className="site-menu-item">
                        <Link to="/dashboard/profesionales">
                           <i className="site-menu-icon md-view-dashboard" aria-hidden="true" />
                           <span className="site-menu-title">Profesionales</span>
                        </Link>
                     </li>
                     <li className="site-menu-item">
                        <Link to="/dashboard/personas">
                           <i className="site-menu-icon md-view-dashboard" aria-hidden="true" />
                           <span className="site-menu-title">Personas</span>
                        </Link>
                     </li>
                     <li className="site-menu-item">
                        <Link to="/dashboard/categorias">
                           <i className="site-menu-icon md-view-dashboard" aria-hidden="true" />
                           <span className="site-menu-title">Categorias</span>
                        </Link>
                     </li>
                    
                     <li className="site-menu-item"> 
                        <Link to="/dashboard/subcategorias">
                           <i className="site-menu-icon md-view-dashboard" aria-hidden="true" />
                           <span className="site-menu-title">SubCategorias</span>
                        </Link>
                     </li>

                     <li className="site-menu-item">
                        <Link to="/dashboard/clientes">
                           <i className="site-menu-icon md-view-dashboard" aria-hidden="true" />
                           <span className="site-menu-title">Clientes</span>
                        </Link>
                     </li>

                     <li className="site-menu-item">
                        <Link to="/dashboard/idiomas">
                           <i className="site-menu-icon md-view-dashboard" aria-hidden="true" />
                           <span className="site-menu-title">Idiomas</span>
                        </Link>
                     </li>

                     <li className="site-menu-item">
                        <Link to="/dashboard/documentos">
                           <i className="site-menu-icon md-view-dashboard" aria-hidden="true" />
                           <span className="site-menu-title">Documentos</span>
                        </Link>
                     </li>

                     <li className="site-menu-item">
                        <Link to="/dashboard/documentosservicios">
                           <i className="site-menu-icon md-view-dashboard" aria-hidden="true" />
                           <span className="site-menu-title">DocumentosServicios</span>
                        </Link>
                     </li>

                     <li className="site-menu-item">
                        <Link to="/dashboard/imagenes">
                           <i className="site-menu-icon md-view-dashboard" aria-hidden="true" />
                           <span className="site-menu-title">Imagenes</span>
                        </Link>
                     </li>


                     <li className="site-menu-item">
                        <Link to="/dashboard/cotizaciones">
                           <i className="site-menu-icon md-view-dashboard" aria-hidden="true" />
                           <span className="site-menu-title">Cotizaciones</span>
                        </Link>
                     </li>

                     <li className="site-menu-item">
                        <Link to="/dashboard/ocupaciones">
                           <i className="site-menu-icon md-view-dashboard" aria-hidden="true" />
                           <span className="site-menu-title">Ocupaciones</span>
                        </Link>
                     </li>

                     <li className="site-menu-item">
                        <Link to="/dashboard/imagenesservicios">
                           <i className="site-menu-icon md-view-dashboard" aria-hidden="true" />
                           <span className="site-menu-title">ImagenesServicios</span>
                        </Link>
                     </li>

                     <li className="site-menu-item has-sub">
                        <a href="#">
                           <i className="site-menu-icon md-google-pages" aria-hidden="true" />
                           <span className="site-menu-title">Pages</span>
                           <span className="site-menu-arrow" />
                        </a>
                        <ul className="site-menu-sub">
                           <li className="site-menu-item has-sub">
                              <a href="#">
                                 <span className="site-menu-title">Errors</span>
                                 <span className="site-menu-arrow" />
                              </a>
                              <ul className="site-menu-sub">
                                 <li className="site-menu-item">
                                    <a href="error-400.html">
                                       <span className="site-menu-title">400</span>
                                    </a>
                                 </li>
                                 <li className="site-menu-item">
                                    <a href="error-403.html">
                                       <span className="site-menu-title">403</span>
                                    </a>
                                 </li>
                                 <li className="site-menu-item">
                                    <a href="error-404.html">
                                       <span className="site-menu-title">404</span>
                                    </a>
                                 </li>
                                 <li className="site-menu-item">
                                    <a href="error-500.html">
                                       <span className="site-menu-title">500</span>
                                    </a>
                                 </li>
                                 <li className="site-menu-item">
                                    <a href="error-503.html">
                                       <span className="site-menu-title">503</span>
                                    </a>
                                 </li>
                                 
                              </ul>
                           </li>
                        </ul>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="site-menubar-footer">
            <a href="#" className="fold-show" data-placement="top" data-toggle="tooltip" data-original-title="Settings">
               <span className="icon md-settings" aria-hidden="true" />
            </a>
            <a href="#" data-placement="top" data-toggle="tooltip" data-original-title="Lock">
               <span className="icon md-eye-off" aria-hidden="true" />
            </a>
            <a href="#" data-placement="top" data-toggle="tooltip" data-original-title="Logout">
               <span className="icon md-power" aria-hidden="true" />
            </a>
         </div>
      </div>

   )
}

export default SidebarMenuLeft
