

function FoodList({focusedDay}) {

    return (
        <div>
         <h1> {focusedDay.format('MMMM Do YYYY')} </h1>
         <p> This is where the food list will be </p>
        </div>
       
    );
  }


export default FoodList;