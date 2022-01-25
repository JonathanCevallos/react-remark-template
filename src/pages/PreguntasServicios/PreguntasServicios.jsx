import { useEffect, useState } from "react";
import DataTable from "react-data-table-component"
import Button from "../../components/Button";

const PreguntasServicios = () =>
{
    const [preguntas_servicios, setPreguntasServicios] = useState([]);

    const getPreguntasServicios = async () => 
    {
        const response = await fetch("http://localhost:8067/api/preguntasservicios");
        const data = await response.json();
        setPreguntasServicios(data);
    }

    useEffect(() => {
        getPreguntasServicios();
     }, []);

     
    return (
        <div className="panel">
            <div className="panel-body">
                <div className="table-responsive">
                    <DataTable
                    data={preguntas_servicios}
                    title = "Preguntas servicios"
                    columns={[
                        {
                            name: "Servicio",
                            selector: row => row.servicio.nombre,
                        },
                        {
                            name: "Pregunta",
                            selector: row => row.pregunta.descripcion,
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

export default PreguntasServicios