import { useEffect, useState } from "react";
import DataTable from "react-data-table-component"
import Button from "../../components/Button";

const DocumentosServicios = () =>
{
    const [documentosservicios, setDocumentoServicio] = useState([]);

    const getDocumentoServicio = async () => 
    {
        const response = await fetch("http://localhost:8067/api/documentosservicios");
        const data = await response.json();
        setDocumentoServicio(data);
    }

    useEffect(() => {
        getDocumentoServicio();
     }, []);

     
    return (
        <div className="panel">
            <div className="panel-body">
                <div className="table-responsive">
                    <DataTable
                    data={documentosservicios}
                    title = "DocumentosServicios"
                    columns={[

                        {
                            name: "Nombre servicio",
                            selector: row => row.servicio.nombre,
                        },
                        {
                            name: "Url Documento",
                            selector: row => row.documento.url,
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

export default DocumentosServicios