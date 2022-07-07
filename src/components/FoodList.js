import { DataGrid } from '@mui/x-data-grid';
import {useState} from 'react';
import Button from '@mui/material/Button';


function FoodList({focusedDay}) {
  async function handleDeleteFoodItem() {

    //TODO: this method currently only checks if the item is not empty when called
    if (item === '') {
      alert("Error: You must first select a food item to delete.")
  
    }
    else {
      alert("Ok!");
    }
    
  
  }
  function fList(id) {
    console.log("This has executed");
    console.log(id);
    const newArray = rows.filter(element => element.id === id);
    if (newArray.length === 0) {
      return "";
    }
    return newArray[0].firstName;
  }
  const [selected, setSelected] = useState([]);
  const [item, setItem] = useState('');
  const columns = [{field: 'beans', headerName: 'Food Name', width: 150}, {field: 'firstName', headerName: 'Calories', width: 150}];
  const [rows, setRows] = useState([
    {id: 'a', beans: 1, firstName: 'Snow'},
    {id: 'b', beans: 2, firstName: 'Lannister'},
    {id: 'c', beans: 3, firstName: 'Bannister'},
    {id: 'd', beans: 4, firstName: 'Stark'},
    {id: 'e', beans: 5, firstName: 'Targaryen'},
    {id: 'f', beans: 6, firstName: 'Melisandre'},
    {id: 'g', beans: 7, firstName: 'Clifford'},
    {id: 'h', beans: 8, firstName: 'Frances' },
    {id: 'i', beans: 9, firstName: 'Roxie'},
  ]);
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
        <Button style={{maxWidth: '250px', maxHeight: '33px', minWidth: '100px', minHeight: '33px'}} variant="contained" onClick={handleDeleteFoodItem} > Delete Selected Food Item </Button>  
        <p> Selected ID: {selected} </p>
        <p> Selected Item: {item} </p>

        </div>
       
    );
  }


export default FoodList;