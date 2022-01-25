import { useEffect, useState } from "react";
import DataTable from "react-data-table-component"
import Button from "../../components/Button";

const Facturas = () =>
{
    const [facturas, setFacturas] = useState([]);

    const getFacturas = async () => 
    {
        const response = await fetch("http://localhost:8067/api/facturas");
        const data = await response.json();
        setFacturas(data);
    }

    const ExpandedComponent = ({ data }) => {
        return (
           <ul className="list-group list-group-bordered">
              <li className="list-group-item">
                 Estado: { data.estado }
              </li>
           </ul>
        );
     }

    useEffect(() => {
        getFacturas();
     }, []);

     
    return (
        <div className="panel">
            <div className="panel-body">
                <div className="table-responsive">
                    <DataTable
                    data={facturas}
                    expandableRows
                    expandableRowsComponent={ExpandedComponent}
                    pagination
                    title = "Facturas"
                    columns={[
                        {
                            name: "Cliente",
                            selector: row => row.cliente.persona.nombre + " " + row.cliente.persona.apellido,
                        },
                        {
                            name: "Servicio adquirido",
                            selector: row => row.servicio.nombre,
                        },
                        {
                            name: "Fecha",
                            selector: row => row.fecha,
                        },
                        {
                            name: "Total",
                            selector: row => row.total,
                        },
                        {
                            name: "Acciones",
                            cell: () => {
                               return <><Button config={{
                                  icon: "edit",
                                  round: true,
                                  color: "default"
                               }} />
                               <Button config={{
                                  icon: "delete",
                                  round: true,
                                  color: "danger"
                               }} />
                               </>
                            }
                         }
                    ]}
                    pagination
                    />
                </div>
            </div>
        </div>
    )
}

export default Facturas