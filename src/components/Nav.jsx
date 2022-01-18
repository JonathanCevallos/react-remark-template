import { Link, NavLink, Outlet } from "react-router-dom"

const Nav = () => {
   return (
      <>
        <Link to="/dashboard">Dashboard</Link><br/>
        <Link to="/dashboard/products">Products</Link> <br/>
        <Outlet/>
      </>
   )
}

export default Nav
