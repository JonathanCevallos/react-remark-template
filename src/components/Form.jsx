import { useEffect, useState } from "react";
import Alert from "./Alert";
import Button from "./Button";
import Input from "./Input";

const Form = (props) => {
  
   var config = {
    onSubmit: undefined,
    inputs: [{}],
    buttons: [],
  };

  const [dataForm, setDataForm] = useState(props.dataForm);

  config = { ...config, ...props.config };

  config.inputs.map((input) => {
    input["value"] = dataForm[input.name];
  });

  const handleChange = (e) => {
    const dataFormUpdate = { ...dataForm, [e.target.name]: e.target.value };
    setDataForm(dataFormUpdate);
  };

  const buildButtons = () => {
    if (config.buttons.length > 0) {
      return config.buttons.map((button, index) => {
        return <Button key={index} config={button} dataForm={dataForm} />
      });
    }
  };
  
  const buildInputs = () => {
    if (config.inputs.length > 0) {
      return config.inputs.map((input, index) => {
        input["onChange"] = handleChange;
        return <Input key={index} config={input} />
      });
    } else {
       const configAlert = {
          type: "news",
          message: "Aun no ha configurado los inputs"
       }
       return (
         <Alert config={configAlert} />
       )
    }
  };

  const isOnSubmit = () => {
    if (config.onSubmit != undefined) {
      return (e) => {
        config.onSubmit(e, dataForm)
      }
    } else {
      return () => {}
    }
  }

  return (
    <form onSubmit={ isOnSubmit() }>
      <div className="row">
        { buildInputs() }
        <div className="col-md-12 float-left">{ buildButtons() }</div>
      </div>
    </form>
  );
};

export default Form;
