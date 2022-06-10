import { DataGrid } from '@mui/x-data-grid';
// import axios from 'axios';
import {useState} from 'react';

function FoodList({focusedDay}) {
  const [selected, setSelected] = useState([]);
  const columns = [
    { field: 'id', headerName: 'ID', width: 150},
    { field: 'firstName', headerName: 'First Name', width: 150}
  ];
  
  const rows = [
    { id: 1, firstName: 'Snow'},
    { id: 2, firstName: 'Lannister'},
    { id: 3, firstName: 'Lannister'},
    { id: 4, firstName: 'Stark'},
    { id: 5, firstName: 'Targaryen'},
    { id: 6, firstName: 'Melisandre'},
    { id: 7, firstName: 'Clifford'},
    { id: 8, firstName: 'Frances' },
    { id: 9, firstName: 'Roxie'},
  ];
    return (
        <div>
         <h1> {focusedDay} </h1>
         <h2> Foods Currently Logged </h2>
         <div style={{ height: 400, width: 600 }}>
          <div style={{ height: 400, width: 600 }}>
         <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          selectionModel={selected}
          onSelectionModelChange={(selection) => {
            if (selection.length > 1) {
              const selectionSet = new Set(selected);
              const result = selection.filter((s) => !selectionSet.has(s));
    
              setSelected(result);
            } else {
              setSelected(selection);
            }
          }}
          checkboxSelection
          
        />
        </div>
          </div>
         
          
        <p> Selected: {selected} </p>
        </div>
       
    );
  }


export default FoodList;