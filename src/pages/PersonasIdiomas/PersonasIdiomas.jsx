import { useEffect, useState } from "react";
import DataTable from "react-data-table-component"
import Button from "../../components/Button";

const PersonasIdiomas = () =>
{
    const [personas_idiomas, setPersonasIdiomas] = useState([]);

    const getPersonasIdiomas = async () => 
    {
        const response = await fetch("http://localhost:8067/api/personasidiomas");
        const data = await response.json();
        setPersonasIdiomas(data);
    }

    useEffect(() => {
        getPersonasIdiomas();
     }, []);

     
    return (
        <div className="panel">
            <div className="panel-body">
                <div className="table-responsive">
                    <DataTable
                    data={personas_idiomas}
                    title = "Personas idiomas"
                    columns={[
                        {
                            name: "Idioma",
                            selector: row => row.idioma.nombre,
                        },
                        {
                            name: "Persona",
                            selector: row => row.persona.nombre,
                        },
                        {
                            name: "Nivel",
                            selector: row => row.nivel,
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

export default PersonasIdiomas