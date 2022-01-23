const Radio = (props) => {

   var config = {
      color: "primary",
      id: "", 
      name: "",
      label: "",
      value: "",
      checked: false
   }

   config = { ...config, ...props.config }

  return (
    <div className={`radio-custom mr-4 radio-${config.color}`}>
      <input
        type="radio"
        id={config.id}
        name={config.name}
        defaultChecked={config.checked}
      />
      <label htmlFor={config.id}>{config.label}</label>
    </div>
  );
};

export default Radio;
