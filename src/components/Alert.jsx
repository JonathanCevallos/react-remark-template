const Alert = (props) => {

   var config = {
      type: "info", // news, info, success, danger, warning
      message: ""
   }

   var icon;

   config = { ...config, ...props.config }

   const configAlert = () => {
      switch (config.type) {
         case "news": 
            config.type = "primary";
            icon = "notifications";
            break;
         case "info":
            icon = "info-outline";
            break;
         case "success":
            icon = "check";
            break;
         case "danger":
            icon = "close";
            break;
         case "warning":
            icon = "alert-circle-o"
            break;
      }
   }

   configAlert();

   return (
      <div className="col-md-12">
         <div className={`alert dark alert-icon alert-${config.type}`} role="alert">
            <i className={`icon md-${icon}`} aria-hidden="true" /> { config.message }
         </div>
      </div>
   )
}

export default Alert
