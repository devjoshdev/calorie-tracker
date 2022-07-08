import './App.css';
import FoodList from './components/FoodList';
import moment from 'moment';
import {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

function App() {

  const [focusedDay, setFocusedDay] = useState(moment().format('MMMM Do YYYY'));
  const [focusedMoment, setFocusedMoment] = useState(moment());
  const [foodNameToAdd, setFoodNameToAdd] = useState("");
  const [caloriesToAdd, setCaloriesToAdd] = useState("");
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

  useEffect(() => {

    console.log("Focused Day is now " + focusedDay);
    setRows(rows.slice(0, rows.length-1));
    console.log("Rows is now size " + rows.length + "\n" + rows);
    
  }, [focusedDay]);


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
          <FoodList focusedDay = {focusedDay} foodList = {rows}/>
          <Button style={{maxWidth: '100px', maxHeight: '66px', minWidth: '100px', minHeight: '66px'}} variant="contained" onClick={() => {setFocusedMoment(focusedMoment.add(1, 'days')); setFocusedDay(focusedMoment.format('MMMM Do YYYY')); console.log(rows);}}>Next Day</Button>
        </Stack>
        <br></br>
        <Stack spacing={5} direction="row">
        <TextField id="food-name" label="Food Name" variant="outlined" onChange={(e) => {
          setFoodNameToAdd(e.target.value);
        }} />
        <TextField id="calories" label="Calories" variant="outlined" onChange={(e) => {
          setCaloriesToAdd(e.target.value); console.log(caloriesToAdd); console.log(foodNameToAdd);
        }} />
        <Button variant="contained"> Add Food </Button>
         </Stack>
       
      </Container>
      
      

    </div>
  );
}

export default App;
