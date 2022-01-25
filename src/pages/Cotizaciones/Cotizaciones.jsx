import { useEffect, useState } from "react";
import DataTable from "react-data-table-component"
import Button from "../../components/Button";

const Cotizaciones = () =>
{
    const [cotizaciones, setCotizacion] = useState([]);

    const getCotizacion = async () => 
    {
        const response = await fetch("http://localhost:8067/api/cotizaciones");
        const data = await response.json();
        setCotizacion(data);
    }

    useEffect(() => {
        getCotizacion();
     }, []);

     
    return (
        <div className="panel">
            <div className="panel-body">
                <div className="table-responsive">
                    <DataTable
                    data={cotizaciones}
                    title = "Cotizaciones"
                    columns={[
                        {
                            name: "Nombre Cliente",
                            selector: row => row.cliente.persona.nombre,
                        },
                        {
                            name: "Nombre Profesional",
                            selector: row => row.profesional.persona.nombre,
                        },
                        {
                            name: "Descripcion",
                            selector: row => row.descripcion,
                        },
                        {
                            name: "Precio",
                            selector: row => row.precio,
                        },
                        {
                            name: "Dia",
                            selector: row => row.dia,
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

export default Cotizaciones