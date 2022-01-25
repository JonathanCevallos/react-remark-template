import { useEffect, useState } from "react";
import DataTable from "react-data-table-component"
import Button from "../../components/Button";

const Preguntas = () =>
{
    const [preguntas, setPreguntas] = useState([]);

    const getPreguntas = async () => 
    {
        const response = await fetch("http://localhost:8067/api/preguntas");
        const data = await response.json();
        setPreguntas(data);
    }

    useEffect(() => {
        getPreguntas();
     }, []);

     
    return (
        <div className="panel">
            <div className="panel-body">
                <div className="table-responsive">
                    <DataTable
                    data={preguntas}
                    title = "Preguntas"
                    columns={[
                        {
                            name: "Descripción",
                            selector: row => row.descripcion,
                        },
                        {
                            name: "Pregunta",
                            selector: row => row.respuesta,
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

export default Preguntas