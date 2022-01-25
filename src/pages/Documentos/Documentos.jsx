import { useEffect, useState } from "react";
import DataTable from "react-data-table-component"
import Button from "../../components/Button";

const Documentos = () =>
{
    const [documentos, setDocumento] = useState([]);

    const getDocumento = async () => 
    {
        const response = await fetch("http://localhost:8067/api/documentos");
        const data = await response.json();
        setDocumento(data);
    }

    useEffect(() => {
        getDocumento();
     }, []);

     
    return (
        <div className="panel">
            <div className="panel-body">
                <div className="table-responsive">
                    <DataTable
                    data={documentos}
                    title = "Documentos"
                    columns={[
                        {
                            name: "Url",
                            selector: row => row.url,
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

export default Documentos