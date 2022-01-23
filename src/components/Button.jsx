
const Button = (props) => {
   
   var config = {
      modal: {
         target: "",
         toggle: "" // modal
      },
      color: "primary",
      type: "button",
      size: "md", // sm, md, lg
      round: false,
      icon: "",
      title: "",
      onclick: undefined
   }

   config = { ...config, ...props.config }

   const buildClassNames = () => {
      return `btn btn-${config.color} btn-${config.size}
         ${ config.round ? "btn-round btn-icon" : "" } waves-effect waves-classic`
   }

   const buildIcon = () => {
      return <i className={"icon md-" + config.icon } aria-hidden="true"></i>
   }

   const isOnClick = () => {
      if (config.onClick != undefined) {
         return () => {
            config.onClick(props.dataForm)
         }
      } else {
         return () => {}
      }
   }

   return (
      <button
         type={ config.type }
         className={ buildClassNames() }
         data-target={ config.modal.target } 
         data-toggle={ config.modal.toggle } 
         onClick={ isOnClick() }
      >
         { config.icon != "" ? buildIcon() : "" } { config.title }
      </button>
   );
};

export default Button;
