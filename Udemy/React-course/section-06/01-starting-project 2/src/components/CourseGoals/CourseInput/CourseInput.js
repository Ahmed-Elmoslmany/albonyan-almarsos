import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {

  const formControl = styled.div`
    margin: 0.5rem 0;
  
  
  &label 
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => (props.invalid ? 'red' : 'black')}
  
 &input 
    display: block;
    width: 100%;
    border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  
  
  &input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
  
  

  
  
  ` 


  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true)
  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      setIsValid(false)
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <formControl invalid={!isValid}>
        <label style={{color: isValid ? 'black' : 'red'}}>Course Goal</label>
        <input style={{borderColor: isValid ? 'black' : 'red'}} type="text" onChange={goalInputChangeHandler} />
      </formControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
