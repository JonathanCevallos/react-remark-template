import Header from "./Header"
import SidebarMenuLeft from "./SidebarMenuLeft"
import SidebarMenuLeftGrid from "./SidebarMenuLeftGrid"
import Content from "./Content"
import menu from "../../menu/menu"

const Remark = () => {
   return (
      <>
         <Header />
         <SidebarMenuLeft itemsMenu={menu} />
         <SidebarMenuLeftGrid />
         <Content />
      </>
   )
}

export default Remark
