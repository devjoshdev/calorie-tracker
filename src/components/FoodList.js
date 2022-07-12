import { DataGrid } from '@mui/x-data-grid';
import {useState} from 'react';
import Button from '@mui/material/Button';


function FoodList({focusedDay, foodList, deleteFoodFn}) {

  function fList(id) {
    console.log("Selection in the list is being toggled, selected id is " + id);
    const newArray = foodList.filter(element => element.id === id);
    if (newArray.length === 0) {
      return "";
    }
    return newArray[0].name;
  }
  const [selected, setSelected] = useState([]);
  const [item, setItem] = useState('');
  const columns = [{field: 'name', headerName: 'Food Name', width: 150}, {field: 'calories', headerName: 'Calories', width: 150}];

    return (
        <div>
         <h1> {focusedDay} </h1>
         <h2> Foods Currently Logged </h2>
         <div style={{ height: 400, width: 600 }}>
          <div style={{ height: 400, width: 600 }}>
         <DataGrid
          rows={foodList}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          selectionModel={selected}
          onSelectionModelChange={(selection) => {
            if (selection.length > 1) {
              const selectionSet = new Set(selected);
              const result = selection.filter((s) => !selectionSet.has(s));
    
              setSelected(result);
              setItem(fList(result[0]))
            } else {
              setSelected(selection);
              setItem(fList(selection[0]))
            }
            
          }}
          checkboxSelection
          
        />
        </div>
          </div>
        <br></br> 
        <Button style={{maxWidth: '250px', maxHeight: '33px', minWidth: '100px', minHeight: '33px'}} variant="contained" onClick={() => {
          deleteFoodFn(selected);
          }} > Delete Selected Food Item </Button>  
        <p> Selected ID: {selected} </p>
        <p> Selected Item: {item} </p>

        </div>
       
    );
  }


export default FoodList;