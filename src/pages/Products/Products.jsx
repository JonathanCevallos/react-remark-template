import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Form from "../../components/Form";

const Products = () => {
  const [products, setProducts] = useState([]);

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
  }, []);

  const ExpandedComponent = ({ data }) => {
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
  };

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:8585/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  /* Función para enviar un formulario */
  const handleOnSubmitSave = (e, dataForm) => {
    e.preventDefault();
    console.log("enviando...", dataForm);
  };

  const configForm = {
    inputs: [
      {
        columns: "8",
        placeholder: "Nombre del producto",
        name: "name",
        value: "",
      },
      {
        columns: "4",
        placeholder: "Precio",
        name: "price",
      },
      {
        typeElement: "select",
        columns: "12",
        options: [
          { label: "Seleccione una opción", disabled: true, value: "-1" },
          { label: "Café" },
          { label: "Ice Café" },
          { label: "Torta" },
        ],
      },
      {
        columns: "12",
        typeElement: "textarea",
      },
      {
        typeElement: "radio",
        columns: "6",
        name: "groupSeleted",
        options: [
          {
            label: "Opción 1",
            value: "1",
            id: "1",
          },
          {
            label: "Opción 2",
            value: "2",
            id: "2",
            checked: true,
          },
        ],
      },
      {
        typeElement: "checkbox",
        columns: "6",
        options: [
          {
            id: "option1",
            value: "option1",
            name: "option1",
            label: "Opción 1",
          },
          {
            id: "option2",
            value: "Opción 2",
            name: "option2",
            label: "Opción 2",
          },
        ],
      },
    ],
    buttons: [
      {
        type: "submit",
        title: "Guardar",
        icon: "check",
      },
    ],
  };

  return (
    <div className="panel">
      <div className="panel-body">

        {/* <Form
          config={{
            onSubmit: handleOnSubmitSave,
            inputs: [
              {
                name: "name",
                placeholder: "Nombre Producto",
                columns: "8"
              },
              {
                name: "price",
                placeholder: "Precio",
              },
              {
                name: "typeProduct",
                typeElement: "select",
                columns: "12",
                options: [
                  {
                    label: "Café",
                    value: "cafe"
                  },
                  {
                    label: "Ice Café",
                    value: "ice-cafe"
                  }
                ]
              }
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
            typeProduct: ""
          }}
        /> */}

        <div className="table-responsive">
          <DataTable
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
            options={"Agregar"}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
