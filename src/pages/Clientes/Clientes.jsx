import { useEffect, useState } from "react";
import DataTable from "react-data-table-component"
import Button from "../../components/Button";

const Clientes = () =>
{
    const [cliente, setCliente] = useState([]);

    const getCliente = async () => 
    {
        const response = await fetch("http://localhost:8067/api/clientes");
        const data = await response.json();
        setCliente(data);
    }

    useEffect(() => {
        getCliente();
     }, []);

     
    return (
        <div className="panel">
            <div className="panel-body">
                <div className="table-responsive">
                    <DataTable
                    data={cliente}

                    title = "Clientes"
                    columns={[
                        {
                            name: "Nombre Cliente",
                            selector: row => row.persona.nombre,
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

export default Clientes