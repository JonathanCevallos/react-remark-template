import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Button from "../../components/Button";

const Personas = () => {

   const [personas, setPersonas] = useState([]);

   useEffect(() => {
      getPersonas();
   }, []);

   const getPersonas = async () => {
      const response = await fetch("http://localhost:8067/api/personas");
      const data = await response.json();
      setPersonas(data);
   }

   const ExpandedComponent = ({ data }) => {
      return (
         <ul className="list-group list-group-bordered">
            <li className="list-group-item">
               Dirección: { data.direccion }
            </li>
            <li className="list-group-item">
               Telefono: { data.telefono }
            </li>
            <li className="list-group-item">
               Email: { data.email }
            </li>
            <li className="list-group-item">
               Pais: { data.pais.nombre }
            </li>
         </ul>
      );
   }

  return (
      <div className="panel">
         <div className="panel-body">
            <div className="table-responsive">
               <DataTable
                  title="Personas"
                  columns={[
                     {
                        name: "Nombre",
                        selector: (row) => row.nombre
                     },
                     {
                        name: "Apellido",
                        selector: (row) => row.apellido
                     },
                     {
                        name: "Username",
                        selector: (row) => row.username
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
                  data={personas}
                  expandableRows
                  expandableRowsComponent={ExpandedComponent}
                  pagination
               />
            </div>
         </div>
      </div>
   );
};

export default Personas;
