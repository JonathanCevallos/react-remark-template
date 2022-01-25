import { useEffect, useState } from "react";
import DataTable from "react-data-table-component"
import Button from "../../components/Button";

const Servicios = () =>
{
    const [servicios, setServicios] = useState([]);

    const getServicios = async () => 
    {
        const response = await fetch("http://localhost:8067/api/servicios");
        const data = await response.json();
        setServicios(data);
    }

    useEffect(() => {
        getServicios();
     }, []);

     const ExpandedComponent = ({ data }) => {
        return (
           <ul className="list-group list-group-bordered">
               <li className="list-group-item">
                 Descripción: { data.descripcion }
              </li>
              <li className="list-group-item">
                 SubCategoría: { data.subCategoria.nombre }
              </li>
              <li className="list-group-item">
                 Profesional: { data.profesional.persona.nombre + " " + data.profesional.persona.apellido}
              </li>
              <li className="list-group-item">
                 Política de uso: { data.politicaUso.descripcion }
              </li>
              <li className="list-group-item">
                 Estado: { data.estado }
              </li>
              
           </ul>
        );
     }

    return (
        <div className="panel">
            <div className="panel-body">
                <div className="table-responsive">
                    <DataTable
                    data={servicios}
                    title = "Servicios"
                    columns={[
                        {
                            name: "Nombre del servicio",
                            selector: row => row.nombre,
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

export default Servicios