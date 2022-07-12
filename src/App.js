import './App.css';
import FoodList from './components/FoodList';
import moment from 'moment';
import {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { setRef } from '@mui/material';

function App() {

  const [focusedDay, setFocusedDay] = useState(moment().format('MMMM Do YYYY'));
  const [focusedMoment, setFocusedMoment] = useState(moment());
  const [foodNameToAdd, setFoodNameToAdd] = useState("");
  const [caloriesToAdd, setCaloriesToAdd] = useState("");
  const [refreshListToggle, setRefreshListToggle] = useState(false);
  const [firstName, setFirstName] = useState("Josh");
  const [lastName, setLastName] = useState("Sinanan");
  const [age, setAge] = useState(21);
  const [weight, setWeight] = useState(190);
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState(65);
  const [BMI, setBMI] = useState(28.5);
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
    {id : 'j', beans: 10, firstName: 'Break'}
  ]);
  const BASE_API_URL = "http://localhost:8080/foods/";
  const API_DAY = "day/";
  const API_INSERT = "insertFood/";
  const API_DELETE = "del/";

  useEffect(() => {
    console.log("The use effect is being called... Rows is now size " + rows.length);
    let year = focusedMoment.format("YYYY");
    let month = focusedMoment.format("MM");
    let day = focusedMoment.format("DD");
    let dateString = year + "/" + month + "/" + day;


  
    fetch(BASE_API_URL + API_DAY + dateString)
      .then(response => response.json())
      .then(json => setRows(json));

  }, [focusedDay, refreshListToggle]);

  async function addFoodHandler() {
    console.log("Add food handler has been called with " + foodNameToAdd + ": " + caloriesToAdd);
    if (foodNameToAdd !== "" && caloriesToAdd !== "" && Number.isNaN(Number.parseFloat(caloriesToAdd)) === false) {
      // TODO: make the post request and see what the return is
      const year = focusedMoment.format("YYYY");
      const month = focusedMoment.format("MM");
      const day = focusedMoment.format("DD");
      const newDateTime = year + "-" + month + "-" + day;
      const newFood = {
        "name": foodNameToAdd,
        "calories": caloriesToAdd,
        "dateTime": newDateTime
      }
      await fetch(BASE_API_URL + API_INSERT, {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(newFood)
        })
        .then(response => response.text())
        .then(text => console.log("text response is: " + text));
        setRefreshListToggle(!refreshListToggle);
       
    }
    else {
      alert("Must set the food name and calories added, calories must be a number!");
    }  

  }

  async function deleteFoodHandler(id) {
    const numberId = Number.parseInt(id);
    console.log("In delete handler, type of id is: " + typeof numberId + " and id is: " + numberId);
    //TODO: this method currently only checks if the item is not empty when called
    if (Number.isNaN(numberId)) {
      console.log("Error: You must first select a food item to delete.");
      alert("Must select a food from the list to delete!");
    }
    else {
      await fetch(BASE_API_URL + API_DELETE + id, {
        method: 'DELETE',
      })
        .then(res => res.text()) // or res.json()
        .then(res => console.log("Delete response is: " + res));
      console.log("Success!");
      setRefreshListToggle(!refreshListToggle);
    }
  }



  return (
    <div className="App">
      <Container maxWidth='md'>
      <Stack spacing={8} direction="row"> 
      <h1> Welcome to the Calorie Tracker </h1>
      <Button variant="contained"> Edit Your Info  </Button>
      </Stack>
      </Container>
      <h2 className='byMeh'> By Joshy </h2>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Container maxWidth='lg'>
        <Stack spacing={8} direction="row"> 
          <Button style={{maxWidth: '100px', maxHeight: '66px', minWidth: '100px', minHeight: '66px'}} variant="contained" onClick={() => {setFocusedMoment(focusedMoment.subtract(1, 'days')); setFocusedDay(focusedMoment.format('MMMM Do YYYY'));}}>Previous Day</Button>
          <FoodList focusedDay = {focusedDay} foodList = {rows} deleteFoodFn = {deleteFoodHandler}/>
          <Button style={{maxWidth: '100px', maxHeight: '66px', minWidth: '100px', minHeight: '66px'}} variant="contained" onClick={() => {setFocusedMoment(focusedMoment.add(1, 'days')); setFocusedDay(focusedMoment.format('MMMM Do YYYY')); console.log(rows);}}>Next Day</Button>
        </Stack>
        <br></br>
        <Stack spacing={5} direction="row">
        <TextField id="food-name" label="Food Name" variant="outlined" defaultValue={''} onChange={(e) => {
          setFoodNameToAdd(e.target.value);
        }} />
        <TextField id="calories" label="Calories" variant="outlined" defaultValue={''} onChange={(e) => {
          setCaloriesToAdd(e.target.value);
        }} />
        <Button variant="contained" onClick={addFoodHandler}> Add Food </Button>
         </Stack>
       
      </Container>
      
      

    </div>
  );
}

export default App;
