import { Outlet } from "react-router-dom"

const Content = () => {
   return (
      <div className="page">
         <div className="page-content">
            <Outlet />
         </div>
      </div>
   )
}

export default Content
