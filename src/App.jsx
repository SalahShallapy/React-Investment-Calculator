import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/Inputs/UserInput";
import Result from "./components/Result";

function App() {
  // STATE MANAGING
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1600,
    expectedReturn: 8,
    duration: 2,
  });

  // CHECKING CONDITION FOR A VALID DURATION INPUT
  const resultIsValid = userInput.duration >= 1 && userInput.duration < 100;

  // HANDLING INPUT CHANGE AND UPDATING STATE
  const handleChange = function (event) {
    const { name, value } = event.target;
    setUserInput((prevInput) => ({
      ...prevInput,
      [name]: Number(value),
    }));
  };

  return (
    <>
      <Header />
      <UserInput setChange={handleChange} value={userInput} />
      {resultIsValid ? (
        <Result value={userInput} />
      ) : (
        <p className="invalid-duration">
          Invalid Duration, please enter a valid one
        </p>
      )}
    </>
  );
}

export default App;
