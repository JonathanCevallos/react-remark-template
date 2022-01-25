import { useEffect, useState } from "react";
import DataTable from "react-data-table-component"
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const Imagenes = () =>
{
    const [imagenes, setImagen] = useState([]);

    const getImagen = async () => 
    {
        const response = await fetch("http://localhost:8067/api/imagenes");
        const data = await response.json();
        setImagen(data);
    }

    useEffect(() => {
        getImagen();
     }, []);

     
    return (
        <div className="panel">
            <div className="panel-body">
                <div className="table-responsive">
                    <DataTable
                    data={imagenes}
                    title = "Imagenes"
                    columns={[
                        {
                            name: "Url",
                            selector: row =>  row.url,
                            
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

export default Imagenes