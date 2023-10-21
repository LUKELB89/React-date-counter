import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [addStep, setAddStep] = useState(0);
  const [counting, setCounting] = useState(0);
  const [inputValue, setInputValue] = useState(0)
  const [currentDate, setCurrentDate] = useState(new Date());


  const handleSlideStep = (event) => {
    const newValue = event.target.value;
    setAddStep(Number(newValue));
  };

  const handleInputValue = (num) => {
    const givenValue = num.target.value;
    setInputValue(Number(givenValue))
  }

  function handleMinusStepCounting() {

    setCounting((s) => inputValue > 0 ? s - inputValue : s - addStep);

    // Create a copy of the current date
    const newDate = new Date(currentDate);

    // Subtract the addStep days from the date
    newDate.setDate(inputValue > 0 ? newDate.getDate() - inputValue : newDate.getDate() - addStep);

    // Update the currentDate state with the new date
    setCurrentDate(newDate);
  };

  function handlePlusStepCounting() {

    setCounting((s) => inputValue > 0 ? s + inputValue : s + addStep);
    const newDate = new Date(currentDate);
    newDate.setDate(inputValue > 0 ? newDate.getDate() + inputValue : newDate.getDate() + addStep);
    setCurrentDate(newDate);
  }

  function resetValue() {
    setAddStep(0);
    setCounting(0);
    setCurrentDate(new Date());
    setInputValue(0)
  }


  return (
    <div className="container">
      <div className="box">
        <input type="range" min="0" max="10" value={addStep} onChange={handleSlideStep} />{addStep}
      </div>
      <div className="box">
        <button onClick={handleMinusStepCounting}>-</button>
        <input value={inputValue} onChange={handleInputValue} />
        <button onClick={handlePlusStepCounting}>+</button>
      </div>
      <span>
        {counting === 0 && <p>Today is {currentDate.toDateString()}</p>}
        {counting < 0 && <p>{Math.abs(counting)} days ago was {currentDate.toDateString()}</p>}
        {counting > 0 && <p>{counting} days from today will be {currentDate.toDateString()}</p>}
      </span>
      {counting !== 0 ? (
        <button onClick={resetValue}>Reset</button>
      ) : ""}
    </div>
  );
}

export default App;
