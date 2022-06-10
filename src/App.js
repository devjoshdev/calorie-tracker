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
  return (
    <div className="App">
      <h1> Welcome to the Calorie Tracker </h1>
      <h2> By Joshy </h2>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Container maxWidth='sm'>
        <Stack spacing={5} direction="row"> 
          <Button variant="outlined" onClick={() => {setFocusedMoment(focusedMoment.subtract(1, 'days')); setFocusedDay(focusedMoment.format('MMMM Do YYYY'));}}>Previous Day</Button>
          <FoodList focusedDay = {focusedDay}/>
          <Button variant="outlined" onClick={() => {setFocusedMoment(focusedMoment.add(1, 'days')); setFocusedDay(focusedMoment.format('MMMM Do YYYY'));}}>Next Day</Button>
        </Stack>
        <br></br>
        <br></br>
        <br></br>
        <TextField id="outlined-basic" label="Food Name" variant="outlined" onChange={(e) => {
          setFoodNameToAdd(e.target.value);
        }} />
        <p>{foodNameToAdd}</p>
       
      </Container>
      

    </div>
  );
}

export default App;
