import { useEffect, useState } from "react";
import DataTable from "react-data-table-component"
import Button from "../../components/Button";

const ImagenesServicios = () =>
{
    const [imagenesservicios, setImagenServicio] = useState([]);

    const getImagenServicio = async () => 
    {
        const response = await fetch("http://localhost:8067/api/imagenesservicios");
        const data = await response.json();
        setImagenServicio(data);
    }

    useEffect(() => {
        getImagenServicio();
     }, []);

     
    return (
        <div className="panel">
            <div className="panel-body">
                <div className="table-responsive">
                    <DataTable
                    data={imagenesservicios}
                    title = "ImagenesServicios"
                    columns={[

                        {
                            name: "Nombre servicio",
                            selector: row => row.servicio.nombre,
                        },
                        {
                            name: "Url Documento",
                            selector: row => row.imagen.url,
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

export default ImagenesServicios