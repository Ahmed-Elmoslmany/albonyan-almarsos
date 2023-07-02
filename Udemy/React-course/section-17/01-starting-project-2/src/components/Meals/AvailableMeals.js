import { useEffect, useState } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

// const DUMMY_MEALS = [
//   {
//     id: 'm1',
//     name: 'Sushi',
//     description: 'Finest fish and veggies',
//     price: 22.99,
//   },
//   {
//     id: 'm2',
//     name: 'Schnitzel',
//     description: 'A german specialty!',
//     price: 16.5,
//   },
//   {
//     id: 'm3',
//     name: 'Barbecue Burger',
//     description: 'American, raw, meaty',
//     price: 12.99,
//   },
//   {
//     id: 'm4',
//     name: 'Green Bowl',
//     description: 'Healthy...and green...',
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {

  const [meals, setMeals] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const [httpError, setHttpError] = useState()


  useEffect(()  => {
  const fetchMeals = async ()  => { 
  const response = await fetch('https://react-http-cb807-default-rtdb.firebaseio.com/meals.json');
  
  if(!response.ok){
    throw new Error("SomethingError")
  }

  const data = await response.json();



  const mealsFetched = []
  for(const key in data){
    mealsFetched.push({
      id: key,
      name: data[key].name,
      description: data[key].description,
      price: data[key].price,
    })
  }
  setMeals(mealsFetched)
}

  
    fetchMeals().catch(error => {
      setHttpError(error.message)
      setisLoading(false)
    })

  
 
  
  setisLoading(false)
} , [meals])
  
  if(isLoading){
    return <p className={classes['meal-loading']}>Loading...</p>
  }

  if(httpError){
    return <div className={classes['meal-error']}>
      <p>Something Wrong</p>
    </div>

  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
