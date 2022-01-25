import { useEffect, useState } from "react";
import DataTable from "react-data-table-component"
import Button from "../../components/Button";

const Ocupaciones = () =>
{
    const [ocupaciones, setOcupacion] = useState([]);

    const getOcupacion = async () => 
    {
        const response = await fetch("http://localhost:8067/api/ocupaciones");
        const data = await response.json();
        setOcupacion(data);
    }

    useEffect(() => {
        getOcupacion();
     }, []);

     
    return (
        <div className="panel">
            <div className="panel-body">
                <div className="table-responsive">
                    <DataTable
                    data={ocupaciones}
                    title = "Ocupaciones"
                    columns={[
                        {
                            name: "Nombres Ocupaciones",
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

export default Ocupaciones