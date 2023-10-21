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
    const [currentDate, setCurrentDate] = useState(new Date());

    function handleMinusStep() {
        setAddStep((s) => s - 1);
    }

    function handlePlusStep() {
        setAddStep((s) => s + 1);
    }

    function handleMinusStepCounting() {
        setCounting((s) => s - addStep);

        // Create a copy of the current date
        const newDate = new Date(currentDate);

        // Subtract the addStep days from the date
        newDate.setDate(newDate.getDate() - addStep);

        // Update the currentDate state with the new date
        setCurrentDate(newDate);
    };


    function handlePlusStepCounting() {
        setCounting((s) => s + addStep);
        const newDate = new Date(currentDate);
        newDate.setDate(newDate.getDate() + addStep);
        setCurrentDate(newDate);
    }

    return (
        <div className="container">
            <div className="box">
                <button onClick={handleMinusStep}>-</button>
                <p>Step: {addStep} </p>
                <button onClick={handlePlusStep}>+</button>
            </div>
            <div className="box">
                <button onClick={handleMinusStepCounting}>-</button>
                <p>Count: {counting} </p>
                <button onClick={handlePlusStepCounting}>+</button>
            </div>
            <span>
                {counting === 0 && <p>Today is {currentDate.toDateString()}</p>}
                {counting < 0 && <p>{Math.abs(counting)} days ago was {currentDate.toDateString()}</p>}
                {counting > 0 && <p>{counting} days from today will be {currentDate.toDateString()}</p>}
            </span>
        </div>
    );
}

export default App;
