import { useEffect, useState } from "react";
import DataTable from "react-data-table-component"
import Button from "../../components/Button";

const SubCategorias = () =>
{
    const [subcategoria, setSubCategoria] = useState([]);

    const getSubCategoria = async () => 
    {
        const response = await fetch("http://localhost:8067/api/subcategorias");
        const data = await response.json();
        setSubCategoria(data);
    }

    useEffect(() => {
        getSubCategoria();
     }, []);

     
    return (
        <div className="panel">
            <div className="panel-body">
                <div className="table-responsive">
                    <DataTable
                    data={subcategoria}

                    title = "SubCategorias"
                    columns={[
                        {
                            name: "Nombre Categoria",
                            selector: row => row.categoria.nombre,
                        },
                        {
                            name: "Nombre SubCategoria",
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

export default SubCategorias