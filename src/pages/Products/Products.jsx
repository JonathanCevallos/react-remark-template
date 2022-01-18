import { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';

const Products = () => {
   const [products, setProducts] = useState([]);
   
   const columns = [
      {
         name: "Nombre",
         selector: row => row.name,
         sortable: true,
      },
      {
         name: "Precio",
         selector: row => row.price,
         sortable: true,
      },
      {
         name: "Stock",
         selector: row => row.stock,
         sortable: true,
      },
      {
         name: "Acciones",
         cell: () => {
            return <>
               <button type="button" className="btn btn-sm btn-icon btn-default btn-round waves-effect waves-classic" data-toggle="tooltip" data-original-title="Edit">
                  <i className="icon md-edit" aria-hidden="true" />
               </button>
               <button type="button" className="btn btn-sm btn-icon btn-default btn-round waves-effect waves-classic" data-toggle="tooltip" data-original-title="Edit">
                  <i className="icon md-delete" aria-hidden="true" />
               </button>
            </>
         }
      }
   ];

   const paginationOptions = {
      rowsPerPageText: "Filas por página",
      rangeSeparatorText: "de",
      selectAllRowsItem: true,
      selectAllRowsItemText: "Todos"
   }

   useEffect(() => {
      getProducts();
   }, []);

   const ExpandedComponent = ({ data }) => {
      return <pre>{JSON.stringify(data, null, 2)}</pre>
   };

   const getProducts = async () => {
      try {
         const response = await fetch("http://localhost:8585/products");
         const data = await response.json();
         setProducts(data);
      } catch (error) {
         console.log(error.message);
      }
   };

   return (
      <div className="panel">
         
         <div className="panel-body">
            
            <div className="table-responsive">
               <DataTable
                  columns={columns}
                  data={products}
                  expandableRows
                  expandableRowsComponent={ExpandedComponent}
                  pagination
                  paginationComponentOptions={paginationOptions}
                  responsive
                  fixedHeader
                  fixedHeaderScrollHeight="600px"
                  title="Products"
                  actions={[
                     <button key="" id="addToTable" className="btn btn-md btn-primary waves-effect waves-classic" type="button">
                        <i className="icon md-plus" aria-hidden="true" /> Agregar
                     </button>
                  ]}
               />
            </div>
         </div>
      </div>
   );
};

export default Products;
