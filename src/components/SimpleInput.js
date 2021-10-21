
import React from 'react';
import useInput from '../hooks/useInput'

const SimpleInput = (props) => {
  const { enterValue: enteredName, 
    isValid: enterNameIsValid,
     hasError: inputNameHasError,
      valueChangeHandler: nameChangeHandler,
     inputBlurHandler: nameInputBlurHandler,
      reset: resetValue } = useInput(enterValue=>enterValue!==(''))

  const { enterValue: enteredEmail, 
    isValid: enterEmailIsValid,
     hasError: inputEmailHasError,
     inputBlurHandler: emailInputBlurHandler, 
     reset:resetEmail,
     valueChangeHandler: emailChangeHandler}=useInput(enterValue=>enterValue.includes('@'))

  
  let formIsValid = false;

  if (enterNameIsValid && enterEmailIsValid) {
    formIsValid = true;
  }


  

  const onSubmit = (event) => {
    event.preventDefault();
    if (!enterNameIsValid && !enterEmailIsValid) {

     
      return;
    }

    console.log(enteredName)
    
    resetValue();
   resetEmail();
    

  }

  const inputclasses = inputNameHasError ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={onSubmit}>
      <div className={inputclasses}>
        <label htmlFor='name'>Your Name</label>

        <input type='text' id='name' value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameInputBlurHandler} />
        {inputNameHasError && <p className="error-text"> please enter name</p>}

        <label htmlFor='name'>Email</label>
        <input type='text' id='email' value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler} />
        {inputEmailHasError&& <p className="error-text"> please enter valid email</p>}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
