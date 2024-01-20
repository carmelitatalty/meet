import { useState } from "react";

const NumberOfEvents = ({ currentNOE, setCurrentNOE, setErrorAlert }) => {
 
  const handleInputChanged = (event) => {
    const value = event.target.value;
    
    let errorText;
    if (isNaN(value)) {
      errorText = "You entered a value that is not a number"
    } else if (value < 0) {
      errorText = "Number cannot be less than 0"
    } else if (value > 500) {
      errorText = "Number cannot be greater than 500"
    } else {
      errorText = ""
      setCurrentNOE(value)
    }
    setErrorAlert(errorText) 
  }
  return (
    <input
      type="text"
      imputmode="numeric"
      pattern="\d*"
      id="number-of-events"
      title="number-of-events"
      defaultValue={currentNOE}
      onChange={handleInputChanged}
    ></input>
  );
};
export default NumberOfEvents;
