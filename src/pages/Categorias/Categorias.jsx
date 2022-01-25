import { useEffect, useState } from "react";
import DataTable from "react-data-table-component"
import Button from "../../components/Button";

const Categorias = () =>
{
    const [categorias, setCategoria] = useState([]);

    const getCategorias = async () => 
    {
        const response = await fetch("http://localhost:8067/api/categorias");
        const data = await response.json();
        setCategoria(data);
    }

    useEffect(() => {
        getCategorias();
     }, []);

     
    return (
        <div className="panel">
            <div className="panel-body">
                <div className="table-responsive">
                    <DataTable
                    data={categorias}
                    title = "Categorias"
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

export default Categorias