import { useState } from "react";

const NumberOfEvents = ({ currentNOE, setCurrentNOE }) => {
 
  const handleInputChanged = (event) => {
    const value = event.target.value;
    setCurrentNOE(value)
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
