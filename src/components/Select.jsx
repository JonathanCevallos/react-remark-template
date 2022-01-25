import Alert from "./Alert";

const Select = (props) => {
  var config = {
    value: "",
    name: "",
    onChange: undefined, // funcion
    options: [
      {
        value: "",
        label: "Seleccione una opción",
        disabled: true,
      }
    ],
  };

  config = { ...config, ...props.config };

  const buildOptions = () => {
    if (config.options.length > 0) {
      return config.options.map((option, index) => (
        <option
          key={index}
          value={option.value}
          disabled={option.disabled ? true : false}
        >
          {option.label}
        </option>
      ));
    } else {
      return (
        <Alert
          config={{
            message: "Faltan las opciones del componente Select",
          }}
        />
      );
    }
  };

  return (
    <select 
      className="form-control" 
      name={ config.name }
      onChange={ config.onChange }
      value={ config.value }>
      { buildOptions() }
    </select>
  );
};

export default Select;
