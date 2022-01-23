import { useEffect, useState } from "react";
import DataTable from "react-data-table-component"

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

     const ExpandedComponent = ({ data }) => {
        return data.nombre
     };
     
    return (
        <div className="panel">
            <div className="panel-body">
                <div className="table-responsive">
                    <DataTable
                    data={idiomas}
                    expandableRows
                    expandableRowsComponent={ExpandedComponent}
                    title = "Idiomas"
                    columns={[
                        {
                            name: "Nombre",
                            selector: row => row.nombre,
                        }
                    ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default Idiomas