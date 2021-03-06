import { useEffect, useState } from "react";
import DataTable from "react-data-table-component"
import Button from "../../components/Button";

const Paises = () =>
{
    const [paises, setPaises] = useState([]);

    const getPaises = async () => 
    {
        const response = await fetch("http://localhost:8067/api/paises");
        const data = await response.json();
        setPaises(data);
    }

    useEffect(() => {
        getPaises();
     }, []);

     
    return (
        <div className="panel">
            <div className="panel-body">
                <div className="table-responsive">
                    <DataTable
                    data={paises}
                    title = "Paises"
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

export default Paises