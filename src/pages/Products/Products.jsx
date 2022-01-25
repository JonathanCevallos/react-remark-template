import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Modal from "../../components/Modal";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [typesProducts, setTypesProducts] = useState([
    {
      label: "Selecciona una opción",
      value: -1
    }
  ]);

  const columns = [
    {
      name: "Nombre",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Precio",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Stock",
      selector: (row) => row.stock,
      sortable: true,
    },
    {
      name: "Acciones",
      cell: () => {
        return (
          <>
            {/* <Modals form={formEdit} configButton={configButtonEdit} /> */}
            <button
              type="button"
              className="btn btn-sm btn-icon btn-default btn-round waves-effect waves-classic"
              data-toggle="tooltip"
              data-original-title="Edit"
            >
              <i className="icon md-delete" aria-hidden="true" />
            </button>
          </>
        );
      },
    },
  ];

  const paginationOptions = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };

  useEffect(() => {
    getProducts();
    getTypesProducts();
  }, []);

  const ExpandedComponent = ({ data }) => {
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
  };

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:8585/products");
      const data = await response.json();
      await setProducts(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getTypesProducts = async () => {
    try {
      const response = await fetch("http://localhost:8585/types-products");
      const data = await response.json();
      const options = data.map(type => {
        return { label: type.name, value: type.id }
      });
      setTypesProducts(options);
    } catch (error) {
      console.log(error.message);
    }
  }

  /* Función para enviar un formulario */
  const handleOnSubmitSave = async (e, dataForm) => {
    e.preventDefault();
    // validar formulario
    dataForm.typeProduct = { id: dataForm.typeProduct };
    if (dataForm.name != "" && dataForm.price != "" && dataForm.typeProduct != "") {
      try {
        const response = await fetch("http://localhost:8585/products", {
          method: "POST",
          body: JSON.stringify(dataForm),
          headers: {
            'Content-Type': 'application/json'
          },
        });
        const data = await response.json();
        if (data.id > 0) {
          console.log("Datos registrados...");
        } else {
          console.log("Hubo un error al registrar");
        }
      } catch (error) {
        console.log(error.message);
      }
      console.log(dataForm);
    } else {
      console.log("campos incompletos");
    }
  };

  const componentForm = (
    <Form
      config={{
        onSubmit: handleOnSubmitSave,
        inputs: [
          {
            name: "name",
            placeholder: "Nombre Producto",
            columns: "8",
          },
          {
            name: "price",
            placeholder: "Precio",
          },
          {
            name: "typeProduct",
            typeElement: "select",
            columns: "12",
            options: typesProducts,
          },
        ],
        buttons: [
          {
            title: "Guardar",
            type: "submit",
          },
        ],
      }}
      dataForm={{
        name: "",
        price: "",
        typeProduct: "4", // -1 para ninguno
      }}
    />
  );

  const configInputs = [
    {
      name: "name",
      columns: "8",
      placeholder: "Nombre del Producto"
    },
    {
      name: "price",
      placeholder: "Precio"
    },
    {
      typeElement: "select",
      columns: "12",
      name: "typeProduct",
      options: typesProducts
    },
    {
      typeElement: "radio",
      columns: "6",
      name: "sexo",
      options: [
        {
          label: "Masculino"
        },
        {
          label: "Femenino"
        }
      ]
    },
    {
      typeElement: "checkbox",
      columns: "12",
      options: [
        {
          label: "Javascript",
          name: ""
        },
        {
          label: "TypeScript"
        },
        {
          label: "Spring Boot"
        }
      ]
    }
  ]
  
  const configButtons = [
    {
      title: "Guardar",
      icon: "check",
      type: "submit"
    }
  ]

  const recibirDatos = (e, dataForm) => {
    e.preventDefault();
    console.log(dataForm);
    const response = fetch("", {
      method: "POST",
      body: JSON.stringify(dataForm),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    const data = response.json();
    console.log(data);
  }

  return (
    <div className="panel">
      <div className="panel-body">
        {/* { componentForm } */}

        {/* <Button config={{
          round: true,
          icon: "bike",
          modal: {
            target: "#modalRegister",
            toggle: "modal"
          }
        }} />

        <Modal config={{
          title: "Registrar Producto",
          id: "modalRegister",
          content: ""
        }} /> */}

          <Form config={{
            onSubmit: handleOnSubmitSave,
            inputs: configInputs,
            buttons: configButtons
          }} 
          
          dataForm={{
            name: "",
            price: "",
            typeProduct: ""
          }} />


        <div className="table-responsive">

          {/* <DataTable
            columns={columns}
            data={products}
            expandableRows
            expandableRowsComponent={ExpandedComponent}
            pagination
            paginationComponentOptions={paginationOptions}
            responsive
            fixedHeader
            fixedHeaderScrollHeight="600px"
            title="Products"
            actions={
              <Button
                config={{
                  icon: "plus",
                  title: "Agregar",
                  modal: {
                    target: "#modalForm",
                    toggle: "modal",
                  },
                }}
              />
            }
          /> */}

          {/* <Modal
            config={{
              id: "modalForm",
              title: "Products",
              content: "Content",
            }}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Products;
