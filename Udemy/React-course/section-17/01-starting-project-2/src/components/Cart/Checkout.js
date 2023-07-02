import { useRef, useState, useEffect } from 'react';
import classes from './Checkout.module.css';

const checkValidInput = value => value.trim() !== ''
const Checkout = (props) => {

  const [validData, setValidData] = useState({
    name: true,
    street: true,
    postal: true,
    city: true
  })
  const nameRef = useRef()
  const streetRef = useRef()
  const postalRef = useRef()
  const cityRef = useRef()

  
  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameRef.current.value
    const enteredStreet = streetRef.current.value
    const enteredPostal = postalRef.current.value
    const enteredCity = cityRef.current.value

    const validName = checkValidInput(enteredName)
    const validstreet = checkValidInput(enteredStreet)
    const validPostal = checkValidInput(enteredPostal)
    const validCity = checkValidInput(enteredCity)


    setValidData({
      name:  validName,
      street: validstreet,
      postal:  validPostal,
      city: validCity
    })
    if(!validName ||
      !validstreet ||
      !validCity || 
    !validPostal){
      return
      
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity
    })

  };


  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={`${classes.control} ${validData.name ? '' : classes.invalid}`}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameRef}/>
        {!validData.name && <p>Please Enter valid name</p>}
      </div>
      <div  className={`${classes.control} ${validData.street ? '' : classes.invalid}`}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetRef} />
        {!validData.street && <p>Please Enter valid street</p>}

      </div>
      <div  className={`${classes.control} ${validData.postal ? '' : classes.invalid}`}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalRef}/>
        {!validData.postal && <p>Please Enter valid postal</p>}

      </div>
      <div  className={`${classes.control} ${validData.city ? '' : classes.invalid}`}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityRef}/>
        {!validData.city && <p>Please Enter valid city</p>}

      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout