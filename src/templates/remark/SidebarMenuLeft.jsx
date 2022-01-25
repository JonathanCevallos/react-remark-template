import { Link } from "react-router-dom";

const SidebarMenuLeft = (props) => {

   var itemsMenu = [
      {
         url: "/",
         icon: "view-dashboard",
         title: "Name Option"
      }
   ]

   itemsMenu = props.itemsMenu;

   const buildItemMenu = () => {
      var element = itemsMenu.map((item, index) => 
         <li className="site-menu-item" key={index}>
            <Link to={ item.url }>
            <i
               className={`site-menu-icon md-${ item.icon }`}
               aria-hidden="true"
            />
            <span className="site-menu-title">{ item.title }</span>
            </Link>
         </li>
      );
      return element;
   }

  return (
    <div className="site-menubar site-menubar-light">
      <div className="site-menubar-body">
        <div>
          <div>
            <ul className="site-menu" data-plugin="menu">
              <li className="site-menu-category">General</li>
              { buildItemMenu() }
            </ul>
          </div>
        </div>
      </div>
      <div className="site-menubar-footer">
        <a
          href="#"
          className="fold-show"
          data-placement="top"
          data-toggle="tooltip"
          data-original-title="Settings"
        >
          <span className="icon md-settings" aria-hidden="true" />
        </a>
        <a
          href="#"
          data-placement="top"
          data-toggle="tooltip"
          data-original-title="Lock"
        >
          <span className="icon md-eye-off" aria-hidden="true" />
        </a>
        <a
          href="#"
          data-placement="top"
          data-toggle="tooltip"
          data-original-title="Logout"
        >
          <span className="icon md-power" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
};

export default SidebarMenuLeft;
