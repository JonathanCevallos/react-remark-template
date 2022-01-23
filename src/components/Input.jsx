import Alert from "./Alert";
import Checkbox from "./Checkbox";
import InputNormal from "./InputNormal";
import Radio from "./Radio";
import Select from "./Select";

const Input = (props) => {

  var config = {
    columns: "4", // div
    type: "text",
    name: "",
    value: "",
    onChange: undefined,
    placeholder: "",
    round: false, // class
    disabled: false, // atributo
    size: "normal", // small, normal, big
    icon: "",
    typeElement: "normal", // normal, select, textarea, radio, checkbox 
    options: [
      {}
    ] // radio buttons
  };

  config = { ...config, ...props.config };

  const getIcon = () => {
    if (config.icon != "") {
      return (
        <span className="input-group-addon">
          <span className={`icon md-${config.icon}`} aria-hidden="true" />
        </span>
      )
    }
  }

  const buildInput = () => {
    let element;
    switch (config.typeElement) {
      case "normal":
        element = <InputNormal config={config} />
        break;
      case "select":
        element = <Select config={config} />
        break;
      case "textarea":
        element = <textarea className="form-control" name={config.name} /> /* falta value */
        break;
      case "radio":
        if (config.options.length > 0) {
          element = config.options.map((option, index) => {
            let { name } = config
            return <Radio key={index} config={{ ...option, name }} />
          });
        } else {
          element = <Alert config={{
            message: "Faltan las opciones"
          }} />
        }
        break;
      case "checkbox":
        element = config.options.map((option, index) => 
          <Checkbox key={index} config={option} />
        );
        break;
    }
    return element;
  }

  return (
    <div className={`col-xl-${config.columns} form-group`}>
      <div className="input-group input-group-icon">
        { getIcon() }
        { buildInput() }
      </div>
    </div>
  );
};

export default Input;
