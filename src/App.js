import './App.css';
import FoodList from './components/FoodList';
import moment from 'moment';
import {useState} from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

function App() {
  const [focusedDay, setFocusedDay] = useState(moment());
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
          <Button variant="outlined">Previous Day</Button>
          <FoodList focusedDay = {focusedDay}/>
          <Button variant="outlined">Next Day</Button>
        </Stack>
      </Container>
      

    </div>
  );
}

export default App;
