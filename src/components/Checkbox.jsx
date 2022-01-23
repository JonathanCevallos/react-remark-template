const Checkbox = (props) => {
   var config = {
      id: "option1",
      value: "Opción 1",
      name: "option1",
      label: "Default"
   };

   config = { ...config, ...props.config };

   return (
      <div className="checkbox-custom checkbox-primary mr-4">
         <input
            type="checkbox"
            id={config.id}
            value={config.value}
            name={config.name}
         />
         <label htmlFor={config.id}>{ config.label }</label>
      </div>
   );
};

export default Checkbox;
