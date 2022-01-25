import { useEffect, useState } from "react";
import DataTable from "react-data-table-component"
import Button from "../../components/Button";

const Idiomas = () =>
{
    const [idiomas, setIdioma] = useState([]);

    const getIdiomas = async () => 
    {
        const response = await fetch("http://localhost:8067/api/idiomas");
        const data = await response.json();
        setIdioma(data);
    }

    useEffect(() => {
        getIdiomas();
     }, []);

     
    return (
        <div className="panel">
            <div className="panel-body">
                <div className="table-responsive">
                    <DataTable
                    data={idiomas}
                    title = "Idiomas"
                    columns={[
                        {
                            name: "Nombre",
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
                    pagination
                    />
                </div>
            </div>
        </div>
    )
}

export default Idiomas