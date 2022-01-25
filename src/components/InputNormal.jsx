const InputNormal = (props) => {
  const config = props.config;

  const getSize = () => {
    let result = "";
    switch (config.size) {
      case "small":
        result = "form-control-sm";
        break;
      case "normal":
        result = "form-control-normal";
        break;
      case "big":
        result = "form-control-lg";
        break;
    }
    return result;
  };

  return (
    <input
      type={ config.type }
      className={`form-control 
        ${ config.round ? "round" : "" } 
        ${ getSize()} 
        ${ config.isInvalid ? "is-invalid":"" }`
      }
      name={config.name}
      value={config.value}
      onChange={config.onChange}
      placeholder={config.placeholder}
      autoComplete="off"
      disabled={config.disabled ? true : false}
    />
  );
};

export default InputNormal;
