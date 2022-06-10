import './App.css';
import FoodList from './components/FoodList';
import moment from 'moment';
import {useState} from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

function App() {

  const [focusedDay, setFocusedDay] = useState(moment().format('MMMM Do YYYY'));
  const [focusedMoment, setFocusedMoment] = useState(moment());
  const [foodNameToAdd, setFoodNameToAdd] = useState("");
  const [caloriesToAdd, setCaloriesToAdd] = useState(-1);
  return (
    <div className="App">
      <h1> Welcome to the Calorie Tracker </h1>
      <h2> By Joshy </h2>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Container maxWidth='lg'>
        <Stack spacing={8} direction="row"> 
          <Button style={{maxWidth: '100px', maxHeight: '66px', minWidth: '100px', minHeight: '66px'}} variant="contained" onClick={() => {setFocusedMoment(focusedMoment.subtract(1, 'days')); setFocusedDay(focusedMoment.format('MMMM Do YYYY')); console.log('e')}}>Previous Day</Button>
          <FoodList focusedDay = {focusedDay}/>
          <Button style={{maxWidth: '100px', maxHeight: '66px', minWidth: '100px', minHeight: '66px'}} variant="contained" onClick={() => {setFocusedMoment(focusedMoment.add(1, 'days')); setFocusedDay(focusedMoment.format('MMMM Do YYYY'));}}>Next Day</Button>
        </Stack>
        <br></br>
        <br></br>
        <br></br>
        <Stack spacing={5} direction="row">
        <TextField id="food-name" label="Food Name" variant="outlined" onChange={(e) => {
          setFoodNameToAdd(e.target.value);
        }} />
        <TextField id="calories" label="Calories" variant="outlined" onChange={(e) => {
          setCaloriesToAdd(e.target.value); console.log(caloriesToAdd);
        }} />
        <Button variant="outlined"> Add Food </Button>
         </Stack>
        <p>{foodNameToAdd}</p>
        <p>{caloriesToAdd}</p>
       
      </Container>
      

    </div>
  );
}

export default App;
