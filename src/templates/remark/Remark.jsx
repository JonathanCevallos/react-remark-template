import Content from "./Content"
import Footer from "./Footer"
import Header from "./Header"
import SidebarMenuLeft from "./SidebarMenuLeft"
import SidebarMenuLeftGrid from "./SidebarMenuLeftGrid"

const Remark = () => {
   return (
      <>
         <Header/>
         <SidebarMenuLeft />
         <SidebarMenuLeftGrid />
         <Content />
         {/* <Footer /> */}
      </>
   )
}

export default Remark
