import { useEffect, useState } from "react";
import DataTable from "react-data-table-component"
import Button from "../../components/Button";

const ServiciosPlanes = () =>
{
    const [servicios_planes, setServiciosPlanes] = useState([]);

    const getServiciosPlanes = async () => 
    {
        const response = await fetch("http://localhost:8067/api/serviciosplanes");
        const data = await response.json();
        setServiciosPlanes(data);
    }

    useEffect(() => {
        getServiciosPlanes();
     }, []);

     const ExpandedComponent = ({ data }) => {
        return (
           <ul className="list-group list-group-bordered">
              <li className="list-group-item">
                 Descripción: { data.descripcion }
              </li>
              <li className="list-group-item">
                 Días de entrega: { data.diasDeliviery }
              </li>
              <li className="list-group-item">
                 Precio: { data.precio }
              </li>
           </ul>
        );
     }
     
    return (
        <div className="panel">
            <div className="panel-body">
                <div className="table-responsive">
                    <DataTable
                    data={servicios_planes}
                    title = "Planes servicios"
                    columns={[
                        {
                            name: "Nombre del plan",
                            selector: row => row.plan.nombre,
                        },
                        {
                            name: "Servicio",
                            selector: row => row.servicio.nombre,
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
                    expandableRows
                    expandableRowsComponent={ExpandedComponent}
                    pagination
                    />
                </div>
            </div>
        </div>
    )
}

export default ServiciosPlanes