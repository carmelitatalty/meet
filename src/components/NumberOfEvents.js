import { useState } from 'react';

const NumberOfEvents = () => {
  const [numberOfEvents, setNumberOfEvents] = useState(32);
  return (
    <input type='text' imputmode='numeric' pattern='\d*' id='number-of-events' value={numberOfEvents}>

    </input>
  )
}
export default NumberOfEvents